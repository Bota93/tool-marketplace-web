# Tool Marketplace – Frontend

Frontend del proyecto **Tool Marketplace**, un SaaS API-first orientado a la distribución y gestión de módulos/herramientas técnicas.

Este repositorio contiene **únicamente el frontend**.  
El backend (Laravel 11, API v1, Sanctum) vive en un repositorio separado.

---

## 🎯 Objetivo

Construir un **Frontend MVP** que consuma una API REST versionada y sirva como base para un futuro marketplace de módulos.

El foco inicial es:
- Consumo de API
- Arquitectura limpia y escalable
- Separación clara frontend / backend

---

## 🧱 Stack tecnológico

- **Framework**: React (TypeScript, SWC)
- **Bundler**: Vite
- **Lenguaje**: TypeScript
- **Gestor de paquetes**: pnpm
- **Estilos**: Tailwind CSS v4
- **Entorno de desarrollo**: WSL (Ubuntu)

---

## 🔌 Backend relacionado

Este frontend consume una API con las siguientes características:

- Laravel 11
- API-first
- Versionada en `/api/v1`
- Autenticación con Sanctum (Bearer token)
- Endpoints públicos y privados
- Panel de administración oculto (404)

> ⚠️ El backend **no está incluido** en este repositorio.

---

## ⚙️ Requisitos

- Node.js ≥ 18
- pnpm ≥ 8
- Backend disponible en local o remoto

---