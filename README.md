# BoostCare 💚

Plataforma web SaaS de salud que ayuda a los médicos a gestionar su agenda, monitorear la adherencia a medicación de sus pacientes y emitir recetas digitales — reduciendo su carga mental y mejorando la calidad de la atención.

🌐 **App en vivo:** [boostcare.netlify.app](https://boostcare.netlify.app)

Diseñada de principio a fin en Figma y desarrollada en React + Tailwind por [Zoe Mejía](https://www.linkedin.com/in/zoe-m-99a9b382).

---

## ✨ Qué hace

- **Agenda clara** — dónde, cuándo y con qué paciente es cada consulta
- **Adherencia en tiempo real** — el médico ve qué tan bien sigue cada paciente su tratamiento
- **Resumen inteligente** — prioriza automáticamente al paciente que más lo necesita
- **Recetas digitales** — sin letra ilegible: paciente, cuidador y farmacia ven lo mismo
- **Multi-rol** — experiencias diferenciadas para médico y cuidador
- **Accesibilidad** — 98/100 en Lighthouse (contraste AA, navegación por teclado, símbolo + color)

## 🛠️ Stack

- **React** + **Vite**
- **Tailwind CSS** (design tokens traducidos 1:1 desde Figma)
- **React Router** (navegación SPA)
- **Netlify** (deploy con continuous deployment)

## 🎨 Del diseño al código

El proyecto nace de un design system en Figma con arquitectura de tokens (primitives → semantic). Esos tokens se trasladan 1:1 a variables CSS y al `tailwind.config`, de modo que cada decisión de diseño tiene una única fuente de verdad. Los datos viven separados de la UI (capa `data/`), simulando el contrato de una API real — listo para conectar a un backend sin reescribir componentes.

## 🚀 Correr en local

```bash
npm install
npm run dev
```

## 📋 Estado

En desarrollo activo. Fase actual: validación con usuarios reales e iteración. Roadmap: IA generativa vía función serverless, modo oscuro, internacionalización ES/EN.

---

BoostCare es una extensión de **Boost**, una app de apoyo para personas con deterioro cognitivo y sus cuidadores. Nació de una pregunta: si cuidamos al paciente y al cuidador, ¿quién ayuda al médico a cuidar mejor?