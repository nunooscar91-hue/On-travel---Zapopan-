# ON TRAVEL - PWA Zapopan (Versión Prototipo)

## Descripción
ON TRAVEL es una aplicación web progresiva (PWA) de turismo inteligente para Zapopan, Jalisco. **Esta es una versión de prototipo** adaptada para demostración y descarga gratuita, con funcionalidades de pago y reserva deshabilitadas.

## Características Principales (Prototipo)

### 🌟 Funcionalidades Disponibles
- **PWA Completa**: Instalable en dispositivos móviles y de escritorio
- **Funcionamiento Offline**: Caché inteligente para uso sin conexión
- **Escáner de Objetos**: Reconocimiento de imágenes del Estadio Akron (simulado)
- **Recomendaciones Personalizadas**: Basadas en gustos del usuario
- **Acceso a Cámara**: Integración nativa con la cámara del dispositivo

### ❌ Funcionalidades Deshabilitadas (Prototipo)
- **Pagos en Línea**: Funcionalidad no disponible en esta versión
- **Sistema de Reservas**: Funcionalidad no disponible en esta versión
- **Cupones de Descuento**: Ocultos en esta versión
- **Información de Precios**: Mostrada como "no disponible en prototipo"

### 🎯 Gustos Turísticos Disponibles
1. Fútbol (Estadio Akron)
2. Go Karts (Kartódromo Zapopan)
3. Cafeterías Vintage (Café de la Parroquia)
4. Restaurantes Antiguos (La Casa de los Abuelos)
5. Heladerías (Nevería Roxy)
6. Gotcha (Gotcha Extreme Zapopan)
7. Museos (Museo de Arte de Zapopan)
8. Pueblos Mágicos (Tequila)
9. Parques Temáticos (Selva Mágica)
10. Arquitectura Colonial (Basílica de Zapopan)
11. Mercados Artesanales (Mercado de Artesanías Zapopan)
12. Centros Comerciales (Andares Centro Comercial)
13. Vida Nocturna (Zona Rosa Zapopan)
14. Gastronomía Local (Mercado San Juan de Dios)
15. Arte y Cultura (Casa de la Cultura Zapopan)
16. Naturaleza (Bosque de la Primavera)

### 🆕 Nuevos Gustos Añadidos
17. Balnearios (Balneario Agua Caliente)
18. Miradores (Mirador Dr. Atl)
19. Haciendas Históricas (Hacienda Labor de Rivera)
20. Templos Antiguos (Templo de San Pedro Apostol)
21. Centros Ecológicos (Zoológico Guadalajara)
22. Talleres Artesanales (Taller de Cerámica Tonalá)
23. Rutas Gastronómicas (Ruta del Tequila y Mariachi)
24. Deportes Extremos (Canopy Barranca del Río Santiago)
25. Festivales Culturales (Festival Cultural de Mayo)
26. Spas y Wellness (Spa Termal Tlajomulco)

## Estructura del Proyecto

```
on_travel_pwa/
├── index.html              # Página principal
├── app.js                  # Lógica de la aplicación
├── manifest.json           # Configuración PWA
├── service-worker.js       # Service Worker para caché
├── offline.html           # Página offline
├── estadio-akron.png      # Imagen del Estadio Akron
├── icons/                 # Iconos de la PWA
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-192x192.png
│   ├── icon-384x384.png
│   └── icon-512x512.png
└── screenshots/           # Screenshots para la PWA
    ├── screenshot1.png
    └── screenshot2.png
```

## Instalación y Uso

### Requisitos
- Navegador web moderno con soporte para PWA
- Conexión a internet (para la primera carga)
- Permisos de cámara (para el escáner de objetos)

### Instalación
1. Abrir la aplicación en un navegador web
2. Hacer clic en el botón "📱 Instalar App" que aparece automáticamente
3. Confirmar la instalación cuando el navegador lo solicite
4. La aplicación aparecerá en la pantalla de inicio del dispositivo

### Uso
1. **Registro**: Completar el formulario inicial con email, edad y sexo
2. **Aceptar Términos**: Marcar la casilla para acceder a la cámara
3. **Seleccionar Gustos**: Elegir intereses turísticos personales
4. **Ver Recomendaciones**: Explorar lugares sugeridos
5. **Escanear Objetos**: Usar la cámara para reconocer el Estadio Akron
6. **Explorar Detalles**: Ver información completa de cada lugar

## Funcionalidades Técnicas

### PWA Features
- **Manifest**: Configuración completa para instalación
- **Service Worker**: Caché estratégico para funcionamiento offline
- **Responsive Design**: Adaptable a móviles y escritorio
- **Touch Support**: Optimizado para dispositivos táctiles

### Cámara y Reconocimiento
- **MediaDevices API**: Acceso nativo a la cámara
- **Reconocimiento de Imágenes**: Base de datos del Estadio Akron
- **Permisos**: Solicitud automática de permisos de cámara

### Datos y Almacenamiento
- **LocalStorage**: Persistencia de preferencias del usuario
- **Cache API**: Almacenamiento offline de recursos
- **IndexedDB**: Para datos más complejos (futuras versiones)

## Compatibilidad

### Navegadores Soportados
- Chrome 67+
- Firefox 63+
- Safari 11.1+
- Edge 79+

### Dispositivos
- iOS 11.3+
- Android 5.0+
- Windows 10+
- macOS 10.13+

## Desarrollo

### Tecnologías Utilizadas
- HTML5
- CSS3 (con Flexbox y Grid)
- JavaScript ES6+
- PWA APIs (Service Worker, Manifest, Cache)
- MediaDevices API
- Geolocation API

### Arquitectura
- **Frontend**: Vanilla JavaScript con arquitectura modular
- **Estilos**: CSS puro con variables y animaciones
- **PWA**: Service Worker con estrategia Cache First
- **Datos**: JSON estático con posibilidad de API futura

## Próximas Mejoras

### Funcionalidades Planificadas
- [ ] Integración con mapas reales (Google Maps/OpenStreetMap)
- [ ] Sistema de reservas en línea
- [ ] Pagos integrados
- [ ] Notificaciones push personalizadas
- [ ] Modo offline completo
- [ ] Sincronización en la nube
- [ ] Realidad aumentada para el escáner
- [ ] Integración con redes sociales
- [ ] Sistema de reseñas y calificaciones
- [ ] Múltiples idiomas

### Optimizaciones Técnicas
- [ ] Lazy loading de imágenes
- [ ] Compresión de recursos
- [ ] CDN para assets estáticos
- [ ] Progressive enhancement
- [ ] Análisis de rendimiento
- [ ] Tests automatizados

## Licencia
**Versión Prototipo** - Este proyecto está disponible para descarga gratuita y uso de demostración. Las funcionalidades comerciales están deshabilitadas en esta versión.

## Contacto
Para soporte técnico o consultas sobre la aplicación, contactar al desarrollador.

---

**Versión**: 1.0.0-prototipo  
**Última actualización**: Agosto 2025  
**Tipo**: Prototipo gratuito para demostración  
**Desarrollado para**: Zapopan, Jalisco, México

