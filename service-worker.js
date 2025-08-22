const CACHE_NAME = 'on-travel-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/styles.css',
  '/app.js'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker: Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Archivos en caché');
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.log('Service Worker: Error al cachear', err))
  );
});

// Activación del Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker: Activando...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Eliminando caché antigua', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptar peticiones de red
self.addEventListener('fetch', event => {
  // Solo cachear peticiones GET
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si está en caché, devolver la respuesta cacheada
        if (response) {
          return response;
        }

        // Si no está en caché, hacer petición a la red
        return fetch(event.request)
          .then(response => {
            // Verificar si la respuesta es válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clonar la respuesta
            const responseToCache = response.clone();

            // Agregar al caché
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Si falla la red, mostrar página offline si existe
            if (event.request.destination === 'document') {
              return caches.match('/offline.html');
            }
          });
      })
  );
});

// Manejo de notificaciones push
self.addEventListener('push', event => {
  console.log('Service Worker: Push recibido');
  
  const options = {
    body: event.data ? event.data.text() : 'Nueva recomendación disponible',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Ver recomendación',
        icon: '/icons/icon-192x192.png'
      },
      {
        action: 'close',
        title: 'Cerrar',
        icon: '/icons/icon-192x192.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('ON TRAVEL', options)
  );
});

// Manejo de clics en notificaciones
self.addEventListener('notificationclick', event => {
  console.log('Service Worker: Notificación clickeada');
  
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Sincronización en segundo plano
self.addEventListener('sync', event => {
  console.log('Service Worker: Sincronización en segundo plano');
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Aquí se pueden sincronizar datos cuando se recupere la conexión
      console.log('Sincronizando datos...')
    );
  }
});

