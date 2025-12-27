# SOAPIEfacil

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-blue" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Gemini-AI-orange" alt="Powered by Gemini" />
</div>

## 📋 Descripción

**SOAPIEfacil** es una aplicación web potenciada por inteligencia artificial diseñada para profesionales de la salud. Su objetivo principal es simplificar la documentación clínica convirtiendo transcripciones de consultas (o voz) en notas **SOAPIE** (Subjetivo, Objetivo, Análisis, Plan, Intervención, Evaluación) estructuradas y profesionales al instante.

Con una interfaz moderna y optimizada, SOAPIEfacil permite a los enfermeros y médicos concentrarse en el paciente en lugar del papeleo.

## 🚀 Características Principales

- **Generación de Notas con IA**: Utiliza el modelo `gemini-3-pro-preview` de Google para analizar transcripciones y generar notas clínicas precisas.
- **Estructura SOAPIE**: Garantiza que todas las notas sigan el estándar clínico (Subjetivo, Objetivo, Análisis, Plan, Intervención, Evaluación).
- **Interfaz Moderna**: Construida con Next.js 16 y Tailwind CSS 4 para una experiencia de usuario fluida y receptiva.
- **Seguridad**: Diseño orientado al cumplimiento de estándares de privacidad (HIPAA compliant concept).

## 🛠️ Tecnologías

Este proyecto utiliza las últimas tecnologías de desarrollo web e IA:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Inteligencia Artificial**: [Google GenAI SDK](https://github.com/google/google-auth-library-nodejs) (Gemini Models)
- **Base de Datos**: [Prisma](https://www.prisma.io/) (ORM)

## 📦 Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto localmente:

### Prerrequisitos

- Node.js 18+ instalado.
- Una clave de API de Google Gemini.

### Pasos

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/soapiefacil-frontend.git
   cd soapiefacil-frontend
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   Crea un archivo `.env.local` en la raíz del proyecto y agrega tu clave de API de Gemini:

   ```env
   API_KEY=tu_clave_de_api_aqui
   ```

   > **Nota**: Asegúrate de que la variable se llame `API_KEY` para que el servicio de IA funcione correctamente.

4. **Ejecutar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

5. **Acceder a la aplicación**:
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📂 Estructura del Proyecto

```
soapiefacil-frontend/
├── app/                  # Rutas y páginas de Next.js (App Router)
├── components/           # Componentes reutilizables de React
├── context/              # Contextos de React para manejo de estado global
├── geminiService.ts      # Servicio de integración con Google Gemini AI
├── types.ts              # Definiciones de tipos TypeScript (SoapieNote, UserProfile)
├── constants.ts          # Datos mock y constantes de la aplicación
└── ...archivos de configuración
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir lo que te gustaría cambiar.

## 📄 Licencia

[MIT](https://choosealicense.com/licenses/mit/)
