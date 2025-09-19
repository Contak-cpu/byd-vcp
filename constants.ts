import { CarModel } from './types';

export const NAV_LINKS = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Beneficios', href: '#benefits' },
  { name: 'Modelos', href: '#models' },
  { name: 'Testimonios', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contacto', href: '#contact' },
];

export const MODEL_LINKS = [
  { name: 'BYD Dolphin', href: '#byd-dolphin', id: 'byd-dolphin' },
  { name: 'BYD Yuan Pro', href: '#byd-yuan-pro', id: 'byd-yuan-pro' },
  { name: 'BYD Seal', href: '#byd-seal', id: 'byd-seal' },
];

export const CAR_MODELS: CarModel[] = [
  {
    id: 'byd-dolphin',
    name: 'BYD Dolphin',
    category: 'Hatchback Eléctrico',
    segment: 'Compacto',
    autonomy: '405 km (NEDC)',
    battery: '44.9 kWh Blade Battery',
    charge: '30-80% en 30 min (DC)',
    motor: '70 kW (94 hp)',
    dimensions: '4125 / 1770 / 1570 mm',
    interior: 'Pantalla rotativa de 12.8", techo panorámico',
    connectivity: 'BYD DiLink, Apple CarPlay, Android Auto',
    safety: '6 Airbags, Frenado Autónomo de Emergencia',
    assistant: 'Control de crucero adaptativo',
    colors: ['Rosa', 'Gris', 'Blanco'],
    description: 'El BYD Dolphin es el hatchback eléctrico que redefine la movilidad urbana con su diseño ágil, interior espacioso y tecnología de vanguardia.',
    price: 'Desde USD $35,000',
    imageUrl: './images/byd-mini-dolphin-model.png',
  },
  {
    id: 'byd-yuan-pro',
    name: 'BYD Yuan Pro',
    category: 'SUV Eléctrico',
    segment: 'Sub-compacto',
    autonomy: '401 km (NEDC)',
    battery: '50.1 kWh Blade Battery',
    charge: '30-80% en 35 min (DC)',
    motor: '100 kW (134 hp)',
    dimensions: '4375 / 1785 / 1680 mm',
    interior: 'Interior premium, gran espacio de carga',
    connectivity: 'Sistema DiLink 3.0 con pantalla de 10.1"',
    safety: 'Control de Estabilidad (ESP), 4 Airbags',
    assistant: 'Cámara 360°, sensores de estacionamiento',
    colors: ['Rojo', 'Azul', 'Blanco'],
    description: 'El Yuan Pro es un SUV versátil y eficiente, perfecto para la familia moderna que busca aventura y sostenibilidad sin compromisos.',
    price: 'Desde USD $42,000',
    imageUrl: './images/byd-yuanpro-model.png',
  },
  {
    id: 'byd-seal',
    name: 'BYD Seal',
    category: 'Sedán Deportivo Eléctrico',
    segment: 'Mediano',
    autonomy: 'Hasta 700 km (CLTC)',
    battery: '82.5 kWh Blade Battery',
    charge: '30-80% en 25 min (DC)',
    motor: 'Versiones de 230 kW (RWD) y 390 kW (AWD)',
    dimensions: '4800 / 1875 / 1460 mm',
    interior: 'Diseño Ocean-X, Head-up Display',
    connectivity: 'Pantalla rotativa de 15.6", 5G',
    safety: 'Estructura Cell-to-Body, 9 Airbags',
    assistant: 'Sistema de Piloto Inteligente DiPilot',
    recognition: 'Finalista "Auto del Año 2025"',
    colors: ['Azul Océano', 'Gris Espacial', 'Negro Cosmos'],
    description: 'El BYD Seal combina un rendimiento estimulante con un diseño aerodinámico y lujo tecnológico, estableciendo un nuevo estándar para los sedanes eléctricos.',
    price: 'Desde USD $55,000',
    imageUrl: './images/byd-song-model.png',
  },
];

export const BENEFITS_SLIDER_IMAGES = [
  {
    src: './images/byd-lider-mundial-1.png',
    alt: 'BYD Líder Mundial - Innovación tecnológica',
    title: 'Innovación Tecnológica de Vanguardia',
    description: 'BYD lidera la revolución de la movilidad eléctrica con tecnología de punta y soluciones innovadoras.',
  },
  {
    src: './images/byd-lider-mundial-2.png',
    alt: 'BYD Líder Mundial - Sostenibilidad',
    title: 'Compromiso con la Sostenibilidad',
    description: 'Nuestro compromiso con el medio ambiente nos posiciona como líderes en movilidad sostenible.',
  },
  {
    src: './images/byd-lider-mundial-3.png',
    alt: 'BYD Líder Mundial - Calidad y Seguridad',
    title: 'Calidad y Seguridad Superiores',
    description: 'Estándares de calidad y seguridad que superan las expectativas del mercado mundial.',
  },
  {
    src: './images/byd-lider-mundial-4.png',
    alt: 'BYD Líder Mundial - Presencia Global',
    title: 'Presencia Global Consolidada',
    description: 'BYD está presente en más de 70 países, siendo reconocido como líder mundial en electromovilidad.',
  },
];

export const VISUAL_DIVIDER_IMAGES = [
  { src: './images/byd-mini-dolphin-1.png', alt: 'BYD Dolphin Mini vista lateral' },
  { src: './images/byd-mini-dolphin-2.png', alt: 'BYD Dolphin Mini interior con airbags' },
  { src: './images/byd-mini-dolphin-3.png', alt: 'BYD Dolphin Mini vista técnica' },
];

export const YUAN_PRO_SLIDER_IMAGES = [
  { src: './images/byd-yuan-pro-1.png', alt: 'BYD Yuan Pro - Imagen principal' },
  { src: './images/byd-yuan-pro-2.png', alt: 'BYD Yuan Pro vista trasera' },
  { src: './images/byd-yuan-pro-3.png', alt: 'BYD Yuan Pro modelo completo' },
];

export const TESTIMONIALS = [
  {
    text: 'Mi BYD ha superado todas mis expectativas. La autonomía es increíble y el confort de marcha es de otro nivel. No vuelvo a un auto a combustión.',
    author: 'Ana S., Propietaria de un Atto 3 en Europa',
  },
  {
    text: 'Como periodista automotriz, he probado muchos eléctricos. La tecnología y la calidad de construcción de BYD están a la par de las marcas premium.',
    author: 'Javier M., Crítico Automotriz',
  },
  {
    text: 'La transición a eléctrico con mi empresa fue la mejor decisión. Los costos operativos de nuestra flota de BYD son bajísimos y la fiabilidad es total.',
    author: 'Carlos G., Gerente de Flota',
  },
];

export const FAQS = [
  {
    q: '¿Cuándo abre el concesionario en Villa Carlos Paz?',
    a: 'La gran apertura está programada para el 30 de noviembre de 2025. ¡Te esperamos para celebrar juntos la llegada de la electromovilidad a las sierras!',
  },
  {
    q: '¿Qué beneficios obtengo al pre-registrarme?',
    a: 'Al realizar la prereserva de USD $500, asegurás tu lugar en la lista de prioridades para la entrega, además de acceder a beneficios exclusivos de lanzamiento que anunciaremos próximamente.',
  },
  {
    q: '¿Los vehículos BYD tendrán servicio técnico oficial en Carlos Paz?',
    a: '¡Absolutamente! Nuestro concesionario contará con un centro de servicio técnico oficial, con personal capacitado por BYD y repuestos originales para garantizar el mejor mantenimiento para tu vehículo.',
  },
  {
    q: '¿Qué tipo de garantía tienen los autos BYD?',
    a: 'BYD ofrece una de las mejores garantías del mercado. Generalmente, es de 6 años o 150.000 km para el vehículo y 8 años o 160.000 km para la batería. Los detalles específicos para Argentina serán confirmados en la apertura.',
  },
  {
    q: '¿Se podrán realizar test drives?',
    a: 'Sí, a partir de la apertura oficial, tendremos unidades de todos los modelos disponibles para que puedas agendar tu prueba de manejo y experimentar la increíble sensación de conducir un BYD.',
  },
];