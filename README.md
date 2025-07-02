# 🚀 Presentación Transformación Digital - AFA Creations

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> Presentación web interactiva del plan estratégico de transformación digital para AFA Creations - Una propuesta integral para la digitalización de pymes locales.

## 📋 Descripción del Proyecto

**AFA Creations** es una agencia digital especializada en ofrecer servicios 360º a pequeñas y medianas empresas que buscan digitalizarse. Esta presentación interactiva muestra el plan estratégico completo de transformación digital, incluyendo análisis de mercado, objetivos SMART, metodologías ágiles y un roadmap de implementación para el período 2025-2026.

### 🎯 Objetivo del Proyecto
Presentar de manera profesional e interactiva el plan de transformación digital de AFA Creations, demonstrando capacidades técnicas y estratégicas para la captación de clientes B2B en el sector de pymes barcelonesas.

## ✨ Características Técnicas

- 🎨 **Tailwind CSS** - Framework de utilidades CSS para diseño moderno
- 📱 **Completamente responsivo** - Adaptable a todos los dispositivos (mobile-first)
- ⌨️ **Navegación por teclado** - Controles completos y accesibles
- 🎯 **Iframes optimizados** - Carga eficiente de diapositivas individuales
- 🖱️ **Controles táctiles** - Soporte nativo para dispositivos móviles
- 🔍 **Zoom dinámico** - Ajuste automático de escala en presentacion-optimizada.html
- 🎪 **Pantalla completa** - Experiencia inmersiva para presentaciones
- ⚡ **Carga asíncrona** - Precarga inteligente de contenido
- 🎭 **Transiciones fluidas** - Animaciones CSS3 optimizadas
- 🎨 **Tema corporativo** - Paleta de colores AFA Creations (azul #0052CC, amarillo #FFD100)

## 🛠️ Instalación y Uso

### 📦 Requisitos Previos
- Navegador web moderno (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Servidor web local (opcional, para desarrollo)

### 🚀 Instalación Rápida

1. **Clonar el repositorio**
   ```bash
       git clone https://github.com/fernandezAlex/transformacion-digital.git
   cd transformacion-digital
   ```

2. **Abrir directamente en navegador**
   ```bash
   # Opción 1: Doble clic en cualquier archivo HTML principal
   open index.html
   
   # Opción 2: Con servidor local (recomendado)
   python3 -m http.server 8000
   # Luego visitar: http://localhost:8000
   ```

### 🎮 Modos de Presentación

#### 📄 `index.html` - Modo Principal
- Navegación completa con todas las funcionalidades
- Auto-entrada en pantalla completa
- Controles ocultos automáticamente
- **Recomendado para presentaciones en vivo**

#### 📑 `index-simple.html` - Modo Índice
- Vista con índice navegable y contenido de diapositivas
- Perfecto para navegación exploratoria
- **Ideal para revisiones de contenido**

#### 🔍 `presentacion-optimizada.html` - Modo Zoom
- Controles avanzados de zoom (+/-/reset)
- Escala automática optimizada
- **Excelente para pantallas de diferentes tamaños**

## 📁 Estructura del Proyecto

```
transformacion-digital/
├── 📂 diapositivas-proyecto/           # Diapositivas individuales
│   ├── 🏠 1-portada-transformación-digital.html
│   ├── 📋 2-indice.html
│   ├── 🏢 3-presentacion-marca.html
│   ├── 📊 4.html                      # Business Model Canvas
│   ├── 🎯 5.html                      # Objetivos SMART 2025-2026
│   ├── 🌍 6.html                      # Análisis PESTEL
│   ├── 📈 7.html                      # Análisis de Competencia
│   ├── 👤 8.html                      # Buyer Persona
│   ├── 🛤️ 9.html                      # Customer Journey
│   ├── ⚡ 10.html                     # Análisis SWOT & VUCA
│   ├── 📈 11.html                     # Macro-Tendencias
│   ├── 🏗️ 12.html                     # Marco de Transformación Digital
│   ├── 🔄 13.html                     # Metodología Ágil
│   ├── 📝 14.html                     # Plan de Implementación
│   ├── 📊 15.html                     # Métricas y KPIs
│   └── 📂 img/                        # Recursos gráficos
│       ├── AFAlogo-v1-insta.png       # Logo AFA versión Instagram
│       ├── alex-avatar.png            # Avatar profesional
│       ├── background-1.jpg           # Fondo principal
│       ├── logo-afacreations.png      # Logo corporativo
│       ├── web-developer-bg.jpg       # Fondo desarrollador
│       └── web-developer-sm.jpg       # Fondo desarrollador (small)
├── 🎬 index.html                      # Presentación principal
├── 📖 index-simple.html               # Versión con índice navegable
├── 🔍 presentacion-optimizada.html    # Versión con zoom avanzado
├── 📋 README.md                       # Este archivo
├── ⚙️ eslint.config.js                # Configuración ESLint
└── 🚫 .gitignore                      # Archivos ignorados por Git
```

## 🎮 Controles de Navegación

### ⌨️ Teclado
| Tecla | Acción |
|-------|--------|
| `→` o `Espacio` | Siguiente diapositiva |
| `←` | Diapositiva anterior |
| `Home` | Primera diapositiva |
| `End` | Última diapositiva |
| `F` | Pantalla completa |
| `Escape` | Salir de pantalla completa |
| `1-9` | Ir directamente a diapositiva |

### 🖱️ Interfaz
- **🏠 Botón Home**: Ir al índice (diapositiva 2)
- **◀️ ▶️ Botones**: Navegación anterior/siguiente
- **📊 Contador**: Diapositiva actual (ej: 5/15)

### 📱 Controles Táctiles
- **Swipe ←**: Siguiente diapositiva
- **Swipe →**: Diapositiva anterior

## 📊 Contenido de las Diapositivas

| # | Título | Contenido | Frameworks/Herramientas |
|---|--------|-----------|------------------------|
| 1 | **Portada** | Transformación Digital AFA Creations | Branding, CSS Grid |
| 2 | **Índice** | Navegación interactiva del plan | JavaScript, Enlaces dinámicos |
| 3 | **Marca** | Propósito, visión, misión y valores | Cards responsive, Flexbox |
| 4 | **Business Canvas** | Modelo de negocio estructurado | Canvas layout, SVG |
| 5 | **Objetivos SMART** | Metas específicas 2025-2026 | Progress bars, Métricas |
| 6 | **Análisis PESTEL** | Factores macro del entorno | Tablas, Iconografía |
| 7 | **Competencia** | Benchmark y posicionamiento | Gráficos comparativos |
| 8 | **Buyer Persona** | Perfil cliente y mapa empatía | Avatars, UX mapping |
| 9 | **Customer Journey** | Puntos de contacto del cliente | Timeline, Emociones |
| 10 | **SWOT & VUCA** | Análisis interno y entorno | Matrices, DAFO |
| 11 | **Macro-Tendencias** | Conexión estratégica | Trends, Futuro |
| 12 | **Framework Digital** | Marco de implementación | Metodologías, Procesos |
| 13 | **Metodología Ágil** | Sprint Planning y Scrum | Kanban, Agile |
| 14 | **Plan Implementación** | Recursos y costes | Gantt, Presupuestos |
| 15 | **Métricas y KPIs** | Indicadores de seguimiento | Dashboards, Analytics |

## 🛠️ Stack Tecnológico

### Frontend
- **HTML5** - Estructura semántica con elementos accesibles
- **CSS3** - Estilos avanzados, animaciones y transiciones
- **JavaScript ES6+** - Interactividad, navegación y gestión de estado
- **Tailwind CSS 2.2.19** - Framework de utilidades CSS
- **Font Awesome 6.4.0** - Iconografía profesional
- **Google Fonts** - Tipografía Poppins (300-700)

### Herramientas
- **ESLint** - Linting de código JavaScript
- **Git** - Control de versiones
- **GitHub** - Hosting del repositorio
- **GitHub Pages** - Hosting estático (opcional)

## 🚀 Desarrollo

### 🔧 Comandos Útiles

```bash
# Servidor de desarrollo local
python3 -m http.server 8000

# Verificar enlaces rotos
npx broken-link-checker http://localhost:8000

# Linting de código
npx eslint **/*.js

# Optimizar imágenes (si tienes imagemin)
npx imagemin diapositivas-proyecto/img/* --out-dir=diapositivas-proyecto/img/
```

### 📈 Métricas de Performance

- **Lighthouse Score**: 95+ en todas las categorías
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

## 🎯 Funcionalidades Destacadas

### 🔄 Sistema de Navegación Inteligente
- **Precarga automática** de la siguiente diapositiva
- **Gestión de memoria** eficiente con iframes
- **Estado persistente** durante la navegación
- **Historial de navegación** compatible

### 🎨 Experiencia de Usuario
- **Auto-ocultación** de controles en pantalla completa
- **Responsive design** mobile-first
- **Carga progresiva** de recursos
- **Fallbacks** para navegadores antiguos

### ♿ Accesibilidad
- **Navegación por teclado** completa
- **ARIA labels** en elementos interactivos
- **Alto contraste** en textos importantes
- **Tamaños de fuente** escalables

## 🌐 Demo Live

🔗 **[Ver Demo Live](https://fernandezalex.github.io/transformacion-digital/)**

> Presentación en vivo disponible 24/7 - Compatible con todos los dispositivos

## 🤝 Contribución

¿Quieres contribuir al proyecto? ¡Genial!

1. **Fork** el repositorio
2. **Crea** una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **Abre** un Pull Request

### 📝 Convenciones
- **Commits**: Usar [Conventional Commits](https://www.conventionalcommits.org/)
- **Código**: Seguir las reglas de ESLint configuradas
- **CSS**: Utilizar clases de Tailwind siempre que sea posible

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Alex Fernández Arroyo**  
*Consultor en Transformación Digital*

- 🌐 [AFA Creations](https://afacreations.com)
- 📧 alex@afacreations.com
- 💼 [LinkedIn](https://linkedin.com/in/alexfernandezarroyo)
- 🐙 [GitHub](https://github.com/alexfernandezarroyo)

## 🙏 Agradecimientos

- **Tailwind CSS** - Por el fantástico framework de CSS
- **Font Awesome** - Por los iconos profesionales
- **Google Fonts** - Por la tipografía Poppins
- **GitHub** - Por el hosting gratuito del código

## 📈 Roadmap

### 🎯 Próximas Versiones

#### v2.0.0 - Q2 2025
- [ ] 🎥 Modo presentador con notas
- [ ] 📱 PWA (Progressive Web App)
- [ ] 🌐 Internacionalización (i18n)
- [ ] 📊 Analytics integrado

#### v2.1.0 - Q3 2025
- [ ] 🎨 Editor de contenido visual
- [ ] 📤 Exportación a PDF
- [ ] 🔗 Compartir diapositivas individuales
- [ ] 💬 Sistema de comentarios

#### v3.0.0 - Q4 2025
- [ ] 🤖 Integración con IA para contenido dinámico
- [ ] 📹 Grabación de presentaciones
- [ ] 🎮 Gamificación de presentaciones
- [ ] ☁️ Sincronización en la nube

---

<div align="center">

**[⬆️ Volver al inicio](#-presentación-transformación-digital---afa-creations)**

*Desarrollado con ❤️ por AFA Creations - Transformación Digital 2025*

[![GitHub stars](https://img.shields.io/github/stars/fernandezAlex/transformacion-digital?style=social)](https://github.com/fernandezAlex/transformacion-digital)
[![GitHub forks](https://img.shields.io/github/forks/fernandezAlex/transformacion-digital?style=social)](https://github.com/fernandezAlex/transformacion-digital/fork)

</div>
