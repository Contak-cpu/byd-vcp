# BYD Concesionario Villa Carlos Paz

Sitio web oficial del concesionario BYD en Villa Carlos Paz, Córdoba, Argentina.

## 🚗 Sobre el Proyecto

Este es el sitio web del concesionario BYD ubicado en Av. San Martín 490, Villa Carlos Paz. Presenta los modelos BYD Dolphin Mini y Yuan Pro, con información sobre beneficios, pre-registro y contacto.

## ✨ Características

- **Diseño Responsivo**: Optimizado para desktop, tablet y móvil
- **Sliders Interactivos**: Navegación manual y automática
- **Formulario de Pre-registro**: Para reservar vehículos
- **Mapa Integrado**: Ubicación del concesionario en Google Maps
- **Animaciones Suaves**: Transiciones y efectos visuales
- **Tema Oscuro/Claro**: Soporte para ambos modos

## 🛠️ Tecnologías

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Herramienta de construcción
- **Tailwind CSS** - Framework de estilos
- **React Hooks** - Gestión de estado

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/byd-vcp.git

# Navegar al directorio
cd byd-vcp

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Vista previa de producción
npm run preview

# Linting
npm run lint
```

## 📁 Estructura del Proyecto

```
byd-concesionario-villa-carlos-paz/
├── components/          # Componentes React
│   ├── Benefits.tsx     # Sección de beneficios
│   ├── Contact.tsx      # Información de contacto
│   ├── Hero.tsx         # Sección principal
│   ├── ImageSlider.tsx  # Slider de imágenes
│   └── ...
├── public/              # Archivos estáticos
│   └── images/          # Imágenes del proyecto
├── hooks/               # Hooks personalizados
├── types.ts             # Definiciones de tipos
├── constants.ts         # Constantes del proyecto
└── App.tsx              # Componente principal
```

## 🌐 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio de GitHub a Vercel
2. El despliegue se realizará automáticamente
3. URL: `https://byd-vcp.vercel.app`

### Otros Proveedores
- **Netlify**: Compatible con Vite
- **GitHub Pages**: Requiere configuración adicional
- **AWS S3 + CloudFront**: Para hosting estático

## 📱 Secciones del Sitio

1. **Hero** - Presentación principal
2. **BYD Dolphin Mini** - Slider del modelo
3. **BYD Yuan Pro** - Slider del modelo  
4. **Beneficios** - ¿Por qué BYD es líder mundial?
5. **Pre-registro** - Formulario de reserva
6. **Modelos** - Catálogo de vehículos
7. **Contacto** - Información y ubicación

## 🎨 Personalización

### Colores
Los colores principales están definidos en `tailwind.config.js`:
- Primary: Azul BYD
- Secondary: Verde BYD
- Accent: Naranja

### Imágenes
Todas las imágenes están en `public/images/` y se referencian desde `constants.ts`.

## 📞 Contacto

- **Dirección**: Av. San Martín 490, X5152 Villa Carlos Paz, Córdoba
- **WhatsApp**: +54 9 351 123 4567
- **Email**: info@byd-carlospaz.com.ar
- **Horarios**: Lun-Vie 9:00-18:00 | Sáb 9:00-13:00

## 📄 Licencia

Este proyecto es propiedad de BYD Concesionario Villa Carlos Paz.

---

Desarrollado con ❤️ para BYD Villa Carlos Paz