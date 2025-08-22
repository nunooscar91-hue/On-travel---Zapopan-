// Variables globales
let gustosSeleccionados = [];
let gustosPersonalizados = '';
let lugarSeleccionado = null;
let stream = null;
let isScanning = false;

// Datos de lugares turísticos de Zapopan
const lugaresZapopan = {
  'Fútbol': {
    nombre: 'Estadio Akron',
    distancia: '3.2 km',
    descripcion: 'Estadio de fútbol moderno, hogar de las Chivas del Guadalajara',
    precios: 'Boletos desde $150 MXN (general) hasta $2,500 MXN (palcos VIP). Tours del estadio: $80 MXN adultos, $50 MXN niños.',
    horarios: 'Eventos según calendario deportivo. Tours: Martes a Domingo 10:00-17:00',
    direccion: 'Av. López Mateos Sur 1950, Zapopan'
  },
  'Go Karts': {
    nombre: 'Kartódromo Zapopan',
    distancia: '2.8 km',
    descripcion: 'Pista de go-karts profesional con circuitos emocionantes',
    precios: 'Información de precios no disponible en esta versión de prototipo',
    horarios: 'Lunes a Domingo 10:00 - 22:00',
    direccion: 'Av. Patria 1891, Zapopan'
  },
  'Cafeterías Vintage': {
    nombre: 'Café de la Parroquia',
    distancia: '1.5 km',
    descripcion: 'Cafetería vintage en el centro histórico con ambiente colonial',
    precios: 'Información de precios no disponible en esta versión de prototipo',
    horarios: 'Lunes a Domingo 7:00 - 22:00',
    direccion: 'Plaza de las Américas, Centro Histórico'
  },
  'Restaurantes Antiguos': {
    nombre: 'La Casa de los Abuelos',
    distancia: '1.2 km',
    descripcion: 'Restaurante tradicional mexicano en casona del siglo XIX',
    precios: 'Información de precios no disponible en esta versión de prototipo',
    horarios: 'Martes a Domingo 13:00 - 23:00',
    direccion: 'Calle Hidalgo 45, Centro Histórico'
  },
  'Heladerías': {
    nombre: 'Nevería Roxy',
    distancia: '0.8 km',
    descripcion: 'Heladería artesanal con sabores tradicionales mexicanos',
    precios: 'Información de precios no disponible en esta versión de prototipo',
    horarios: 'Lunes a Domingo 12:00 - 22:00',
    direccion: 'Av. Hidalgo 234, Zapopan'
  },
  'Gotcha': {
    nombre: 'Gotcha Extreme Zapopan',
    distancia: '4.1 km',
    descripcion: 'Campo de gotcha con escenarios temáticos y equipo profesional',
    precios: 'Información de precios no disponible en esta versión de prototipo',
    horarios: 'Sábados y Domingos 9:00 - 18:00',
    direccion: 'Bosque de la Primavera, Zapopan'
  },
  'Museos': {
    nombre: 'Museo de Arte de Zapopan',
    distancia: '1.0 km',
    descripcion: 'Museo de arte contemporáneo con exposiciones rotativas',
    precios: 'Información de precios no disponible en esta versión de prototipo',
    horarios: 'Martes a Domingo 10:00 - 18:00',
    direccion: 'Av. Hidalgo 152, Centro Histórico'
  },
  'Pueblos Mágicos': {
    nombre: 'Tequila (desde Zapopan)',
    distancia: '65 km',
    descripcion: 'Pueblo Mágico famoso por la producción de tequila',
    precios: 'Información de precios no disponible en esta versión de prototipo',
    horarios: 'Tours diarios 9:00 - 17:00',
    direccion: 'Tequila, Jalisco'
  },
  'Parques Temáticos': {
    nombre: 'Selva Mágica',
    distancia: '8.5 km',
    descripcion: 'Parque de diversiones con juegos mecánicos y zoológico',
    precios: "Información de precios no disponible en esta versión de prototipo",
    horarios: 'Miércoles a Domingo 11:00 - 19:00',
    direccion: 'Periférico Norte 5560, Guadalajara'
  },
  'Arquitectura Colonial': {
    nombre: 'Basílica de Zapopan',
    distancia: '0.5 km',
    descripcion: 'Basílica colonial del siglo XVII, santuario de la Virgen de Zapopan',
    precios: "Información de precios no disponible en esta versión de prototipo",
    horarios: 'Lunes a Domingo 6:00 - 21:00',
    direccion: 'Plaza de las Américas, Centro Histórico'
  },
  'Mercados Artesanales': {
    nombre: 'Mercado de Artesanías Zapopan',
    distancia: '1.8 km',
    descripcion: 'Mercado con artesanías locales y productos tradicionales',
    precios: "Información de precios no disponible en esta versión de prototipo",
    horarios: 'Lunes a Domingo 9:00 - 20:00',
    direccion: 'Av. Laureles 150, Zapopan'
  },
  'Centros Comerciales': {
    nombre: 'Andares Centro Comercial',
    distancia: '5.2 km',
    descripcion: 'Centro comercial de lujo con tiendas internacionales',
    precios: "Información de precios no disponible en esta versión de prototipo",
    horarios: 'Lunes a Domingo 10:00 - 22:00',
    direccion: 'Blvd. Puerta de Hierro 4965, Zapopan'
  },
  'Vida Nocturna': {
    nombre: 'Zona Rosa Zapopan',
    distancia: '2.3 km',
    descripcion: 'Distrito de entretenimiento nocturno con bares y discotecas',
    precios: "Información de precios no disponible en esta versión de prototipo",
    horarios: 'Jueves a Sábado 20:00 - 03:00',
    direccion: 'Av. Patria, Zapopan'
  },
  'Gastronomía Local': {
    nombre: 'Mercado San Juan de Dios',
    distancia: '6.8 km',
    descripcion: 'Mercado tradicional con comida típica jalisciense',
    precios: "Información de precios no disponible en esta versión de prototipo",
    horarios: 'Lunes a Domingo 8:00 - 18:00',
    direccion: 'Calzada Independencia Sur, Guadalajara'
  },
  'Arte y Cultura': {
    nombre: 'Casa de la Cultura Zapopan',
    distancia: '1.1 km',
    descripcion: 'Centro cultural con talleres, exposiciones y eventos artísticos',
    precios: "Información de precios no disponible en esta versión de prototipo",
    horarios: 'Lunes a Viernes 9:00 - 20:00',
    direccion: 'Av. Hidalgo 370, Centro Histórico'
  },
  'Naturaleza': {
    nombre: 'Bosque de la Primavera',
    distancia: '12 km',
    descripcion: 'Área natural protegida con aguas termales y senderos',
    precios: 'Entrada: $30 MXN. Estacionamiento Río Caliente: $50 MXN adicionales.',
    horarios: 'Lunes a Domingo 7:00 - 17:00',
    direccion: 'Carretera a Nogales, Zapopan'
  },
  'Balnearios': {
    nombre: 'Balneario Río Caliente',
    distancia: '15 km',
    descripcion: 'Balneario con aguas termales naturales en el Bosque de la Primavera',
    precios: 'Entrada: $80 MXN adultos, $50 MXN niños. Cabañas desde $1,200 MXN.',
    horarios: 'Lunes a Domingo 8:00 - 18:00',
    direccion: 'Bosque de la Primavera, Zapopan'
  },
  'Miradores': {
    nombre: 'Mirador Dr. Atl',
    distancia: '8 km',
    descripcion: 'Mirador con vista panorámica de Guadalajara y el valle',
    precios: 'Entrada gratuita. Estacionamiento: $20 MXN.',
    horarios: 'Lunes a Domingo 6:00 - 20:00',
    direccion: 'Av. Dr. Atl, Zapopan'
  },
  'Haciendas Históricas': {
    nombre: 'Ex Hacienda de Santa Lucía',
    distancia: '6 km',
    descripcion: 'Hacienda histórica del siglo XVIII convertida en centro cultural',
    precios: 'Visitas guiadas: $100 MXN adultos, $50 MXN estudiantes.',
    horarios: 'Martes a Domingo 10:00 - 17:00',
    direccion: 'Av. Santa Lucía 1847, Zapopan'
  },
  'Templos Antiguos': {
    nombre: 'Templo de San Pedro Apóstol',
    distancia: '2.1 km',
    descripcion: 'Templo colonial del siglo XVI con arquitectura franciscana',
    precios: 'Entrada gratuita. Donaciones voluntarias.',
    horarios: 'Lunes a Domingo 7:00 - 20:00',
    direccion: 'Plaza San Pedro, Zapopan'
  },
  'Centros Ecológicos': {
    nombre: 'Bosque El Centinela',
    distancia: '18 km',
    descripcion: 'Centro ecológico con senderos interpretativos y fauna local',
    precios: 'Entrada: $25 MXN. Actividades guiadas: $150 MXN por grupo.',
    horarios: 'Sábados y Domingos 8:00 - 16:00',
    direccion: 'Carretera Zapopan-Tesistán, Zapopan'
  },
  'Talleres Artesanales': {
    nombre: 'Taller de Cerámica Tonalá',
    distancia: '14 km',
    descripcion: 'Talleres tradicionales de cerámica y barro bruñido',
    precios: 'Visitas: $80 MXN. Talleres prácticos: $250 MXN por persona.',
    horarios: 'Lunes a Viernes 9:00 - 17:00',
    direccion: 'Av. Tonalá 456, Tonalá'
  },
  'Rutas Gastronómicas': {
    nombre: 'Ruta del Tequila y Mezcal',
    distancia: '25 km',
    descripcion: 'Tour gastronómico por destilerías y restaurantes tradicionales',
    precios: 'Tour completo: $850 MXN por persona. Incluye transporte y degustaciones.',
    horarios: 'Tours: Sábados y Domingos 10:00 - 18:00',
    direccion: 'Salida desde Plaza de las Américas'
  },
  'Deportes Extremos': {
    nombre: 'Parque Aventura Barrancas',
    distancia: '22 km',
    descripcion: 'Parque de aventura con tirolesas, rappel y senderismo extremo',
    precios: 'Paquete básico: $450 MXN. Paquete completo: $750 MXN.',
    horarios: 'Sábados y Domingos 9:00 - 17:00',
    direccion: 'Barranca del Río Santiago, Zapopan'
  },
  'Festivales Culturales': {
    nombre: 'Casa de la Cultura Zapopan',
    distancia: '1.8 km',
    descripcion: 'Centro cultural con exposiciones, talleres y eventos artísticos',
    precios: 'Entrada gratuita. Talleres desde $200 MXN por sesión.',
    horarios: 'Lunes a Viernes 9:00 - 20:00, Sábados 9:00 - 15:00',
    direccion: 'Av. Hidalgo 326, Centro Histórico'
  },
  'Spas y Wellness': {
    nombre: 'Spa Termal La Primavera',
    distancia: '16 km',
    descripcion: 'Spa con tratamientos termales y terapias naturales',
    precios: 'Día de spa: $1,200 MXN. Masajes desde $450 MXN.',
    horarios: 'Martes a Domingo 9:00 - 19:00',
    direccion: 'Bosque de la Primavera, Zapopan'
  },
  'Balnearios2': {
    nombre: 'Balneario Agua Caliente',
    distancia: '18.3 km',
    descripcion: 'Aguas termales naturales con propiedades relajantes',
    precios: 'Entrada: $120 MXN adultos, $80 MXN niños. Cabañas desde $800 MXN.',
    horarios: 'Lunes a Domingo 8:00 - 20:00',
    direccion: 'Villa Corona, Jalisco'
  },
  'Miradores': {
    nombre: 'Mirador Dr. Atl',
    distancia: '3.7 km',
    descripcion: 'Mirador panorámico con vista espectacular de Guadalajara',
    precios: "Información de precios no disponible en esta versión de prototipo",
    horarios: 'Lunes a Domingo 24 horas',
    direccion: 'Av. Dr. Atl, Zapopan'
  },
  'Haciendas Históricas': {
    nombre: 'Hacienda Labor de Rivera',
    distancia: '8.9 km',
    descripcion: 'Hacienda histórica del siglo XVIII con tours guiados',
    precios: "Información de precios no disponible en esta versión de prototipo",
    horarios: 'Sábados y Domingos 10:00 - 16:00',
    direccion: 'Tlajomulco de Zúñiga, Jalisco'
  },
  'Templos Antiguos': {
    nombre: 'Templo de San Pedro Apostol',
    distancia: '2.1 km',
    descripcion: 'Templo colonial con arquitectura barroca del siglo XVIII',
    precios: "Información de precios no disponible en esta versión de prototipo",
    horarios: 'Lunes a Domingo 7:00 - 20:00',
    direccion: 'Av. San Pedro, Zapopan'
  },
  'Centros Ecológicos': {
    nombre: 'Zoológico Guadalajara',
    distancia: '7.2 km',
    descripcion: 'Zoológico con especies nativas e internacionales',
   precios: "Información de precios no disponible en esta versión de prototipo",
    horarios: 'Martes a Domingo 10:00 - 17:00',
    direccion: 'Paseo del Zoológico 600, Guadalajara'
  },
  'Talleres Artesanales': {
    nombre: 'Taller de Cerámica Tonalá',
    distancia: '15.4 km',
    descripcion: 'Talleres tradicionales de cerámica y alfarería',
    precios: "Información de precios no disponible en esta versión de prototipo",
    horarios: 'Lunes a Viernes 9:00 - 17:00',
    direccion: 'Tonalá, Jalisco'
  },
  'Rutas Gastronómicas': {
    nombre: 'Ruta del Tequila y Mariachi',
    distancia: '45.8 km',
    descripcion: 'Tour gastronómico por destilerías y restaurantes típicos',
    precios: "Información de precios no disponible en esta versión de prototipo",
    horarios: 'Sábados y Domingos 10:00 - 18:00',
    direccion: 'Amatitán - Tequila, Jalisco'
  },
  'Deportes Extremos': {
    nombre: 'Canopy Barranca del Río Santiago',
    distancia: '22.1 km',
    descripcion: 'Tirolesas y deportes extremos en la barranca',
    precios: "Información de precios no disponible en esta versión de prototipo",
    horarios: 'Sábados y Domingos 9:00 - 17:00',
    direccion: 'Barranca del Río Santiago, Zapopan'
  },
  'Festivales Culturales': {
    nombre: 'Festival Cultural de Mayo',
    distancia: '6.5 km',
    descripcion: 'Festival anual con eventos culturales y artísticos',
    precios: "Información de precios no disponible en esta versión de prototipo",
    horarios: 'Mayo - horarios variables',
    direccion: 'Varios venues en Guadalajara'
  },
  'Spas y Wellness': {
    nombre: 'Spa Termal Tlajomulco',
    distancia: '19.7 km',
    descripcion: 'Spa con tratamientos termales y relajación',
    precios: "Información de precios no disponible en esta versión de prototipo",
    horarios: 'Lunes a Domingo 9:00 - 21:00',
    direccion: 'Tlajomulco de Zúñiga, Jalisco'
  }
};

// Base de datos de reconocimiento de imágenes del Estadio Akron
const estadioAkronDB = {
  keywords: ['estadio', 'akron', 'chivas', 'futbol', 'soccer', 'guadalajara', 'zapopan'],
  description: 'Estadio Akron - Casa de las Chivas del Guadalajara',
  info: {
    nombre: 'Estadio Akron',
    capacidad: '49,850 espectadores',
    inauguracion: '30 de julio de 2010',
    equipo: 'Club de Fútbol Guadalajara (Chivas)',
    arquitecto: 'Populous',
    caracteristicas: [
      'Techo retráctil',
      'Césped natural',
      'Pantallas LED gigantes',
      'Palcos VIP',
      'Restaurantes y tiendas'
    ],
    eventos: 'Partidos de fútbol, conciertos, eventos especiales',
    ubicacion: 'Av. López Mateos Sur 1950, Ciudad del Sol, Zapopan',
    transporte: 'Línea 3 del Tren Ligero - Estación Estadio Akron'
  }
};

// Registro del Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registrado exitosamente:', registration.scope);
      })
      .catch(error => {
        console.log('Error al registrar Service Worker:', error);
      });
  });
}

// Solicitar permisos de notificación
if ('Notification' in window && navigator.serviceWorker) {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      console.log('Permisos de notificación concedidos');
    }
  });
}

// Funciones de navegación
function irAGustos() {
  const email = document.getElementById('email').value;
  const edad = document.getElementById('edad').value;
  const sexo = document.getElementById('sexo').value;
  const terminos = document.getElementById('terminos').checked;

  if (!email || !edad || !sexo || !terminos) {
    alert('Por favor complete todos los campos y acepte los términos y condiciones para acceder a la cámara.');
    return;
  }

  // Solicitar permisos de cámara al aceptar términos y condiciones
  solicitarPermisosCamara();

  document.getElementById('pantallaInicio').classList.add('hidden');
  document.getElementById('pantallaGustos').classList.remove('hidden');
}

function volverInicio() {
  document.getElementById('pantallaGustos').classList.add('hidden');
  document.getElementById('pantallaInicio').classList.remove('hidden');
}

function irARecomendaciones() {
  gustosPersonalizados = document.getElementById('gustosPersonalizados').value;
  
  if (gustosSeleccionados.length === 0) {
    alert('Por favor seleccione al menos un gusto personal.');
    return;
  }

  generarRecomendaciones();
  document.getElementById('pantallaGustos').classList.add('hidden');
  document.getElementById('pantallaRecomendaciones').classList.remove('hidden');
}

function volverGustos() {
  document.getElementById('pantallaRecomendaciones').classList.add('hidden');
  document.getElementById('pantallaGustos').classList.remove('hidden');
}

function volverRecomendaciones() {
  document.getElementById('pantallaDetalles').classList.add('hidden');
  document.getElementById('pantallaRecomendaciones').classList.remove('hidden');
}

function volverDetalles() {
  document.getElementById('pantallaMapa').classList.add('hidden');
  document.getElementById('pantallaDetalles').classList.remove('hidden');
}

// Función para solicitar permisos de cámara
async function solicitarPermisosCamara() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ 
      video: { 
        facingMode: 'environment',
        width: { ideal: 1280 },
        height: { ideal: 720 }
      } 
    });
    
    // Detener el stream inmediatamente, solo queríamos verificar permisos
    stream.getTracks().forEach(track => track.stop());
    
    console.log('Permisos de cámara concedidos');
    
    // Mostrar notificación de éxito
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('ON TRAVEL', {
        body: 'Cámara habilitada. Ya puedes escanear objetos turísticos.',
        icon: '/icons/icon-192x192.png'
      });
    }
    
  } catch (error) {
    console.error('Error al solicitar permisos de cámara:', error);
    alert('Para usar todas las funciones de la app, necesitamos acceso a tu cámara. Por favor, permite el acceso cuando se solicite.');
  }
}

// Función para alternar selección de intereses
function toggleInteres(element) {
  const interes = element.textContent;
  
  if (element.classList.contains('selected')) {
    element.classList.remove('selected');
    gustosSeleccionados = gustosSeleccionados.filter(g => g !== interes);
  } else {
    element.classList.add('selected');
    gustosSeleccionados.push(interes);
  }
}

// Función para generar recomendaciones
function generarRecomendaciones() {
  const container = document.getElementById('recomendacionesContainer');
  container.innerHTML = '';

  gustosSeleccionados.forEach(gusto => {
    if (lugaresZapopan[gusto]) {
      const lugar = lugaresZapopan[gusto];
      const card = document.createElement('div');
      card.className = 'recommendation-card';
      card.onclick = () => mostrarDetalles(gusto);
      
      card.innerHTML = `
        <div class="recommendation-title">${lugar.nombre}</div>
        <div class="recommendation-distance">📍 ${lugar.distancia}</div>
        <div class="recommendation-description">${lugar.descripcion}</div>
      `;
      
      container.appendChild(card);
    }
  });

  // Si no hay recomendaciones, mostrar mensaje
  if (container.children.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #666;">No se encontraron recomendaciones para tus gustos seleccionados.</p>';
  }
}

// Función para mostrar detalles del lugar
function mostrarDetalles(gusto) {
  lugarSeleccionado = lugaresZapopan[gusto];
  
  document.getElementById('detallesTitulo').textContent = lugarSeleccionado.nombre;
  document.getElementById('detallesPrecios').textContent = lugarSeleccionado.precios;
  document.getElementById('detallesHorarios').textContent = lugarSeleccionado.horarios;
  
  document.getElementById('pantallaRecomendaciones').classList.add('hidden');
  document.getElementById('pantallaDetalles').classList.remove('hidden');
}

// Función para ver mapa
function verMapa() {
  if (lugarSeleccionado) {
    document.getElementById('direccionLugar').textContent = lugarSeleccionado.direccion;
    document.getElementById('distanciaLugar').textContent = lugarSeleccionado.distancia;
  }
  
  document.getElementById('pantallaDetalles').classList.add('hidden');
  document.getElementById('pantallaMapa').classList.remove('hidden');
}

// Función para procesar pago
function procesarPago() {
  const lugar = lugarSeleccionado;
  if (!lugar) {
    alert('Error: No se ha seleccionado un lugar');
    return;
  }

  // Simulación de procesamiento de pago
  const btn = event.target;
  const originalText = btn.textContent;
  
  btn.innerHTML = '<span class="loading-spinner"></span> Procesando...';
  btn.disabled = true;

  setTimeout(() => {
    // Simulación de pago exitoso
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
      <h4>¡Pago Exitoso!</h4>
      <p>Tu pago para <strong>${lugar.nombre}</strong> ha sido procesado correctamente.</p>
      <p><strong>Referencia:</strong> ON${Date.now()}</p>
      <p><strong>Monto:</strong> $${Math.floor(Math.random() * 500) + 100} MXN</p>
    `;
    
    btn.parentNode.insertBefore(successDiv, btn);
    btn.textContent = '✓ Pago Completado';
    btn.style.background = '#28a745';
    
    // Guardar en localStorage para historial
    const historial = JSON.parse(localStorage.getItem('historialPagos') || '[]');
    historial.push({
      lugar: lugar.nombre,
      fecha: new Date().toISOString(),
      referencia: `ON${Date.now()}`,
      monto: Math.floor(Math.random() * 500) + 100
    });
    localStorage.setItem('historialPagos', JSON.stringify(historial));
    
  }, 2000);
}

// Función para realizar reserva
function realizarReserva() {
  const lugar = lugarSeleccionado;
  const fecha = document.getElementById('fechaReserva').value;
  const hora = document.getElementById('horaReserva').value;
  
  if (!lugar) {
    alert('Error: No se ha seleccionado un lugar');
    return;
  }
  
  if (!fecha || !hora) {
    alert('Por favor, selecciona fecha y hora para tu reserva');
    return;
  }

  // Simulación de procesamiento de reserva
  const btn = event.target;
  const originalText = btn.textContent;
  
  btn.innerHTML = '<span class="loading-spinner"></span> Reservando...';
  btn.disabled = true;

  setTimeout(() => {
    // Simulación de reserva exitosa
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
      <h4>¡Reserva Confirmada!</h4>
      <p>Tu reserva para <strong>${lugar.nombre}</strong> ha sido confirmada.</p>
      <p><strong>Fecha:</strong> ${new Date(fecha).toLocaleDateString('es-MX')}</p>
      <p><strong>Hora:</strong> ${hora}</p>
      <p><strong>Código de reserva:</strong> RES${Date.now()}</p>
    `;
    
    btn.parentNode.insertBefore(successDiv, btn);
    btn.textContent = '✓ Reserva Confirmada';
    btn.style.background = '#28a745';
    
    // Guardar en localStorage para historial
    const historial = JSON.parse(localStorage.getItem('historialReservas') || '[]');
    historial.push({
      lugar: lugar.nombre,
      fecha: fecha,
      hora: hora,
      codigo: `RES${Date.now()}`,
      fechaCreacion: new Date().toISOString()
    });
    localStorage.setItem('historialReservas', JSON.stringify(historial));
    
  }, 2000);
}

// Función para iniciar navegación
function iniciarNavegacion() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        alert(`Iniciando navegación desde tu ubicación (${lat.toFixed(4)}, ${lng.toFixed(4)}) hacia ${lugarSeleccionado.nombre}`);
      },
      error => {
        alert('No se pudo obtener tu ubicación. Verifica los permisos de geolocalización.');
      }
    );
  } else {
    alert('Tu dispositivo no soporta geolocalización.');
  }
}

// Funciones del escáner
function abrirEscaner() {
  document.querySelectorAll('.container').forEach(container => {
    if (!container.classList.contains('hidden')) {
      container.classList.add('hidden');
    }
  });
  
  document.getElementById('pantallaEscaner').classList.remove('hidden');
  document.getElementById('resultadoEscaneo').classList.add('hidden');
}

function cerrarEscaner() {
  // Detener la cámara si está activa
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    stream = null;
  }
  
  document.getElementById('pantallaEscaner').classList.add('hidden');
  document.getElementById('pantallaInicio').classList.remove('hidden');
  
  // Resetear el botón de escaneo
  document.getElementById('escaneoTexto').textContent = 'Iniciar Escaneo';
  document.getElementById('escaneoSpinner').classList.add('hidden');
  isScanning = false;
}

// Función para simular escaneo con reconocimiento de imágenes
async function simularEscaneo() {
  if (isScanning) return;
  
  isScanning = true;
  document.getElementById('escaneoTexto').textContent = 'Escaneando...';
  document.getElementById('escaneoSpinner').classList.remove('hidden');
  
  try {
    // Intentar acceder a la cámara real
    stream = await navigator.mediaDevices.getUserMedia({ 
      video: { 
        facingMode: 'environment',
        width: { ideal: 1280 },
        height: { ideal: 720 }
      } 
    });
    
    // Crear elemento de video para mostrar la cámara
    const videoElement = document.createElement('video');
    videoElement.srcObject = stream;
    videoElement.autoplay = true;
    videoElement.style.width = '100%';
    videoElement.style.maxWidth = '300px';
    videoElement.style.borderRadius = '15px';
    
    // Reemplazar el placeholder con el video
    const placeholder = document.querySelector('.form-container div[style*="border: 3px dashed"]');
    if (placeholder) {
      placeholder.innerHTML = '';
      placeholder.appendChild(videoElement);
      placeholder.style.border = 'none';
      placeholder.style.background = 'transparent';
    }
    
    // Simular procesamiento de imagen después de 3 segundos
    setTimeout(() => {
      procesarImagenEscaneada();
    }, 3000);
    
  } catch (error) {
    console.error('Error al acceder a la cámara:', error);
    
    // Si no se puede acceder a la cámara, simular el escaneo
    setTimeout(() => {
      procesarImagenEscaneada();
    }, 2000);
  }
}

// Función para procesar imagen escaneada
function procesarImagenEscaneada() {
  // Detener la cámara
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    stream = null;
  }
  
  // Base de datos expandida de lugares reconocibles
  const lugaresReconocibles = [
    {
      nombre: 'Estadio Akron',
      probabilidad: 0.15,
      categoria: 'Fútbol',
      emoji: '🏟️',
      info: {
        nombre: 'Estadio Akron',
        capacidad: '49,850 espectadores',
        equipo: 'Club Deportivo Guadalajara (Chivas)',
        inauguracion: '30 de julio de 2010',
        ubicacion: 'Av. López Mateos Sur 1950, Zapopan',
        caracteristicas: [
          'Techo retráctil',
          'Césped natural',
          'Pantallas LED de alta definición',
          'Palcos VIP y suites ejecutivas'
        ],
        transporte: 'Línea 3 del Tren Ligero, estación Estadio Akron'
      }
    },
    {
      nombre: 'Basílica de Zapopan',
      probabilidad: 0.15,
      categoria: 'Arquitectura Colonial',
      emoji: '⛪',
      info: {
        nombre: 'Basílica de Nuestra Señora de Zapopan',
        construccion: 'Siglo XVII',
        estilo: 'Barroco mexicano',
        ubicacion: 'Plaza de las Américas, Centro Histórico',
        caracteristicas: [
          'Santuario de la Virgen de Zapopan',
          'Arquitectura colonial',
          'Museo religioso',
          'Peregrinaciones anuales'
        ],
        horarios: 'Lunes a Domingo 6:00 - 21:00'
      }
    },
    {
      nombre: 'Bosque de la Primavera',
      probabilidad: 0.12,
      categoria: 'Naturaleza',
      emoji: '🌲',
      info: {
        nombre: 'Área de Protección de Flora y Fauna La Primavera',
        extension: '30,500 hectáreas',
        ubicacion: 'Carretera a Nogales, Zapopan',
        caracteristicas: [
          'Aguas termales naturales',
          'Senderos interpretativos',
          'Flora y fauna endémica',
          'Actividades ecoturísticas'
        ],
        entrada: '$30 MXN'
      }
    },
    {
      nombre: 'Andares Centro Comercial',
      probabilidad: 0.10,
      categoria: 'Centros Comerciales',
      emoji: '🏬',
      info: {
        nombre: 'Andares Centro Comercial',
        apertura: '2008',
        ubicacion: 'Blvd. Puerta de Hierro 4965, Zapopan',
        caracteristicas: [
          'Más de 300 tiendas',
          'Restaurantes gourmet',
          'Cines premium',
          'Área de entretenimiento'
        ],
        horarios: 'Lunes a Domingo 10:00 - 22:00'
      }
    },
    {
      nombre: 'Mirador Dr. Atl',
      probabilidad: 0.10,
      categoria: 'Miradores',
      emoji: '🏔️',
      info: {
        nombre: 'Parque Mirador Dr. Atl',
        ubicacion: 'Av. Dr. Atl, Zapopan',
        caracteristicas: [
          'Vista panorámica de Guadalajara',
          'Área de picnic',
          'Senderos para caminar',
          'Zona de ejercicio'
        ],
        entrada: 'Gratuita'
      }
    },
    {
      nombre: 'Parque Metropolitano',
      probabilidad: 0.08,
      categoria: 'Parques Temáticos',
      emoji: '🎡',
      info: {
        nombre: 'Parque Metropolitano de Guadalajara',
        ubicacion: 'Av. Acueducto 4000, Zapopan',
        caracteristicas: [
          'Lago artificial',
          'Juegos infantiles',
          'Pista para correr',
          'Área de eventos'
        ],
        entrada: 'Gratuita'
      }
    },
    {
      nombre: 'Museo de Arte de Zapopan',
      probabilidad: 0.08,
      categoria: 'Museos',
      emoji: '🎨',
      info: {
        nombre: 'Museo de Arte de Zapopan',
        ubicacion: 'Av. Hidalgo 152, Centro Histórico',
        caracteristicas: [
          'Arte contemporáneo',
          'Exposiciones temporales',
          'Talleres artísticos',
          'Biblioteca especializada'
        ],
        horarios: 'Martes a Domingo 10:00 - 18:00'
      }
    },
    {
      nombre: 'Arcos de Zapopan',
      probabilidad: 0.07,
      categoria: 'Arquitectura Colonial',
      emoji: '🏛️',
      info: {
        nombre: 'Arcos de Ingreso a Zapopan',
        construccion: 'Siglo XX',
        ubicacion: 'Av. Hidalgo, entrada al Centro Histórico',
        caracteristicas: [
          'Símbolo de la ciudad',
          'Arquitectura neocolonial',
          'Punto de referencia',
          'Iluminación nocturna'
        ],
        acceso: 'Libre las 24 horas'
      }
    },
    {
      nombre: 'Casa de la Cultura',
      probabilidad: 0.06,
      categoria: 'Festivales Culturales',
      emoji: '🎭',
      info: {
        nombre: 'Casa de la Cultura Zapopan',
        ubicacion: 'Av. Hidalgo 326, Centro Histórico',
        caracteristicas: [
          'Talleres artísticos',
          'Exposiciones culturales',
          'Teatro y música',
          'Biblioteca pública'
        ],
        horarios: 'Lunes a Viernes 9:00 - 20:00'
      }
    },
    {
      nombre: 'Templo de San Pedro',
      probabilidad: 0.05,
      categoria: 'Templos Antiguos',
      emoji: '⛪',
      info: {
        nombre: 'Templo de San Pedro Apóstol',
        construccion: 'Siglo XVI',
        ubicacion: 'Plaza San Pedro, Zapopan',
        caracteristicas: [
          'Arquitectura franciscana',
          'Arte sacro colonial',
          'Retablos barrocos',
          'Patrimonio histórico'
        ],
        horarios: 'Lunes a Domingo 7:00 - 20:00'
      }
    },
    {
      nombre: 'Balneario Río Caliente',
      probabilidad: 0.04,
      categoria: 'Balnearios',
      emoji: '♨️',
      info: {
        nombre: 'Balneario Río Caliente',
        ubicacion: 'Bosque de la Primavera, Zapopan',
        caracteristicas: [
          'Aguas termales medicinales',
          'Pozas naturales',
          'Cabañas rústicas',
          'Senderismo'
        ],
        precios: 'Entrada: $80 MXN adultos'
      }
    }
  ];
  
  // Seleccionar lugar aleatoriamente basado en probabilidades
  const random = Math.random();
  let acumulado = 0;
  let lugarDetectado = null;
  
  for (const lugar of lugaresReconocibles) {
    acumulado += lugar.probabilidad;
    if (random <= acumulado) {
      lugarDetectado = lugar;
      break;
    }
  }
  
  document.getElementById('escaneoTexto').textContent = 'Iniciar Escaneo';
  document.getElementById('escaneoSpinner').classList.add('hidden');
  isScanning = false;
  
  const resultadoDiv = document.getElementById('resultadoEscaneo');
  
  if (lugarDetectado) {
    // Mostrar información del lugar detectado
    resultadoDiv.innerHTML = `
      <div class="scanner-title">${lugarDetectado.emoji} ¡${lugarDetectado.nombre} Detectado!</div>
      <div class="scanner-info">
        <p><strong>Nombre:</strong> ${lugarDetectado.info.nombre}</p>
        ${lugarDetectado.info.capacidad ? `<p><strong>Capacidad:</strong> ${lugarDetectado.info.capacidad}</p>` : ''}
        ${lugarDetectado.info.construccion ? `<p><strong>Construcción:</strong> ${lugarDetectado.info.construccion}</p>` : ''}
        ${lugarDetectado.info.extension ? `<p><strong>Extensión:</strong> ${lugarDetectado.info.extension}</p>` : ''}
        <p><strong>Ubicación:</strong> ${lugarDetectado.info.ubicacion}</p>
        <p><strong>Características especiales:</strong></p>
        <ul>
          ${lugarDetectado.info.caracteristicas.map(c => `<li>${c}</li>`).join('')}
        </ul>
        ${lugarDetectado.info.horarios ? `<p><strong>Horarios:</strong> ${lugarDetectado.info.horarios}</p>` : ''}
        ${lugarDetectado.info.entrada ? `<p><strong>Entrada:</strong> ${lugarDetectado.info.entrada}</p>` : ''}
        ${lugarDetectado.info.precios ? `<p><strong>Precios:</strong> ${lugarDetectado.info.precios}</p>` : ''}
        <br>
        <button class="btn-primary" onclick="verDetallesLugar('${lugarDetectado.categoria}')" style="margin-top: 15px;">
          Ver más detalles y reservar
        </button>
        <button class="btn-secondary" onclick="entrenarEscaner()" style="margin-top: 10px; width: 100%;">
          🎯 Entrenar Escáner
        </button>
      </div>
    `;
  } else {
    // Objeto no reconocido
    resultadoDiv.innerHTML = `
      <div class="scanner-title">🔍 Objeto Escaneado</div>
      <div class="scanner-info">
        <p>No se pudo identificar este objeto en nuestra base de datos de atractivos turísticos de Zapopan.</p>
        <p>Lugares que puedes escanear:</p>
        <ul>
          <li>🏟️ Estadio Akron</li>
          <li>⛪ Basílica de Zapopan</li>
          <li>🌲 Bosque de la Primavera</li>
          <li>🏬 Andares Centro Comercial</li>
          <li>🏔️ Mirador Dr. Atl</li>
          <li>🎡 Parque Metropolitano</li>
          <li>🎨 Museo de Arte</li>
          <li>🏛️ Arcos de Zapopan</li>
          <li>🎭 Casa de la Cultura</li>
          <li>⛪ Templo de San Pedro</li>
          <li>♨️ Balneario Río Caliente</li>
        </ul>
        <button class="btn-primary" onclick="simularEscaneo()" style="margin-top: 15px;">
          Intentar de nuevo
        </button>
        <button class="btn-secondary" onclick="entrenarEscaner()" style="margin-top: 10px; width: 100%;">
          🎯 Entrenar Escáner
        </button>
      </div>
    `;
  }
  
  resultadoDiv.classList.remove('hidden');
  
  // Restaurar el placeholder de la cámara
  const placeholder = document.querySelector('.form-container div[style*="background: transparent"]') || 
                     document.querySelector('.form-container div');
  if (placeholder) {
    placeholder.innerHTML = '<span style="font-size: 48px;">📷</span>';
    placeholder.style.border = '3px dashed #00c896';
    placeholder.style.background = 'rgba(255,255,255,0.1)';
  }
}

// Función para ver detalles del lugar desde el escáner
function verDetallesLugar(categoria) {
  mostrarDetalles(categoria);
  cerrarEscaner();
}

// Función para entrenar el escáner
function entrenarEscaner() {
  const resultadoDiv = document.getElementById('resultadoEscaneo');
  
  resultadoDiv.innerHTML = `
    <div class="scanner-title">🎯 Entrenamiento del Escáner</div>
    <div class="scanner-info">
      <p><strong>¡Mejora la precisión del reconocimiento!</strong></p>
      <p>El escáner aprende de cada uso. Mientras más lo uses, mejor será el reconocimiento.</p>
      
      <div style="background: rgba(0,200,150,0.1); padding: 15px; border-radius: 10px; margin: 15px 0;">
        <h4>📊 Estadísticas de Entrenamiento:</h4>
        <p>• Escaneos realizados: ${localStorage.getItem('escaneos_realizados') || 0}</p>
        <p>• Lugares reconocidos: ${localStorage.getItem('lugares_reconocidos') || 0}</p>
        <p>• Precisión actual: ${Math.min(85 + parseInt(localStorage.getItem('escaneos_realizados') || 0) * 2, 98)}%</p>
      </div>
      
      <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; margin: 15px 0;">
        <h4>💡 Consejos para mejorar el reconocimiento:</h4>
        <ul style="text-align: left; margin-top: 10px;">
          <li>Mantén la cámara estable</li>
          <li>Asegúrate de tener buena iluminación</li>
          <li>Enfoca elementos distintivos del lugar</li>
          <li>Evita objetos que obstruyan la vista</li>
          <li>Escanea desde diferentes ángulos</li>
        </ul>
      </div>
      
      <button class="btn-primary" onclick="iniciarEntrenamientoAvanzado()" style="margin-top: 15px;">
        🚀 Entrenamiento Avanzado
      </button>
      <button class="btn-secondary" onclick="simularEscaneo()" style="margin-top: 10px; width: 100%;">
        📷 Continuar Escaneando
      </button>
    </div>
  `;
  
  // Incrementar contador de entrenamientos
  const entrenamientos = parseInt(localStorage.getItem('entrenamientos_realizados') || 0) + 1;
  localStorage.setItem('entrenamientos_realizados', entrenamientos);
}

// Función para entrenamiento avanzado
function iniciarEntrenamientoAvanzado() {
  const resultadoDiv = document.getElementById('resultadoEscaneo');
  
  resultadoDiv.innerHTML = `
    <div class="scanner-title">🚀 Entrenamiento Avanzado</div>
    <div class="scanner-info">
      <p><strong>Modo de entrenamiento activado</strong></p>
      <p>El sistema está aprendiendo patrones visuales de los lugares turísticos de Zapopan...</p>
      
      <div style="background: linear-gradient(45deg, #00c896, #1e3c72); padding: 20px; border-radius: 15px; margin: 20px 0; color: white;">
        <div class="loading-spinner" style="margin: 0 auto 15px; display: block;"></div>
        <p style="text-align: center; font-weight: bold;">Procesando datos de entrenamiento...</p>
        <div id="progreso-entrenamiento" style="background: rgba(255,255,255,0.2); height: 8px; border-radius: 4px; margin-top: 15px;">
          <div style="background: white; height: 100%; width: 0%; border-radius: 4px; transition: width 3s ease;"></div>
        </div>
      </div>
      
      <div id="resultado-entrenamiento" style="display: none;">
        <div class="success-message">
          <h4>✅ ¡Entrenamiento Completado!</h4>
          <p>El escáner ha mejorado su capacidad de reconocimiento.</p>
          <p><strong>Nuevas mejoras:</strong></p>
          <ul style="text-align: left; margin-top: 10px;">
            <li>+5% de precisión en reconocimiento</li>
            <li>Mejor detección en condiciones de poca luz</li>
            <li>Reconocimiento más rápido</li>
            <li>Nuevos puntos de referencia añadidos</li>
          </ul>
        </div>
        
        <button class="btn-primary" onclick="simularEscaneo()" style="margin-top: 15px; width: 100%;">
          🎯 Probar Escáner Mejorado
        </button>
      </div>
    </div>
  `;
  
  // Simular progreso de entrenamiento
  setTimeout(() => {
    const barra = document.querySelector('#progreso-entrenamiento div');
    if (barra) {
      barra.style.width = '100%';
    }
  }, 500);
  
  // Mostrar resultado después de 3 segundos
  setTimeout(() => {
    document.getElementById('resultado-entrenamiento').style.display = 'block';
    
    // Actualizar estadísticas
    const precision = Math.min(85 + parseInt(localStorage.getItem('escaneos_realizados') || 0) * 2 + 5, 98);
    localStorage.setItem('precision_escaner', precision);
  }, 3500);
}

// Función para instalar la PWA
function instalarPWA() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuario aceptó la instalación');
      } else {
        console.log('Usuario rechazó la instalación');
      }
      deferredPrompt = null;
    });
  } else {
    // Mostrar instrucciones manuales de instalación
    alert('Para instalar la app:\n\n• En Chrome: Menú → Instalar ON TRAVEL\n• En Safari: Compartir → Añadir a pantalla de inicio\n• En Firefox: Menú → Instalar');
  }
}

// Event listener para el evento beforeinstallprompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  console.log('PWA instalable detectada');
  e.preventDefault();
  deferredPrompt = e;
  
  // Mostrar botón de instalación personalizado
  const installButton = document.createElement('button');
  installButton.textContent = '📱 Instalar App';
  installButton.className = 'btn-secondary';
  installButton.style.position = 'fixed';
  installButton.style.top = '60px';
  installButton.style.right = '20px';
  installButton.style.zIndex = '1001';
  
  installButton.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`Resultado de instalación: ${outcome}`);
      deferredPrompt = null;
      installButton.remove();
    }
  });
  
  document.body.appendChild(installButton);
});

// Event listener para cuando la PWA se instala
window.addEventListener('appinstalled', (evt) => {
  console.log('PWA instalada exitosamente');
  
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification('ON TRAVEL instalado', {
      body: '¡La app se instaló correctamente en tu dispositivo!',
      icon: '/icons/icon-192x192.png'
    });
  }
});

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
  console.log('ON TRAVEL PWA cargada');
  
  // Verificar si la app se está ejecutando como PWA instalada
  if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('Ejecutándose como PWA instalada');
  }
  
  // Configurar fecha mínima para reservas (hoy)
  const fechaInput = document.getElementById('fechaReserva');
  if (fechaInput) {
    const today = new Date().toISOString().split('T')[0];
    fechaInput.min = today;
  }
});

