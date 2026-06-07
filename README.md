# inmob — Sistema de Gestión Inmobiliaria

> Proyecto académico desarrollado en el marco de la materia **Metodología y Testing**  
> Tecnicatura en Desarrollo de Software — [Instituto Tecnológico Universitario](https://itu.uncuyo.edu.ar), Universidad Nacional de Cuyo

Aplicación web para la gestión de propietarios, inquilinos e inmuebles. Arquitectura fullstack con backend en Spring Boot y frontend en React.

---

## Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| Frontend | React 19, TypeScript, Vite, Tailwind CSS v4 |
| UI | MUI v7, Radix UI, shadcn/ui |
| Routing | React Router v7 |
| Formularios | React Hook Form |
| Autenticación | Auth0 |
| Backend | Spring Boot 3.5, Java 21 |
| Seguridad | Spring Security + OAuth2 Resource Server (JWT) |
| Persistencia | Spring Data JPA + MySQL |
| Documentación API | SpringDoc OpenAPI (Swagger UI) |
| Testing (FE) | Vitest + Testing Library, Playwright (e2e) |
| Testing (BE) | Spring Boot Test + H2 (in-memory) |

---

## Estructura del proyecto

```
inmob/
├── frontend/          # Aplicación React
│   └── src/app/
│       ├── pages/     # Vistas principales
│       ├── components/# Navbar, Sidebar, Layout, AdminRoute, UI
│       ├── hooks/     # useCurrentUser, useIndices
│       ├── services/  # Llamadas a la API (personas, índices, auth)
│       └── data/      # Mock data
├── backend/           # API REST Spring Boot
│   └── src/main/java/com/inmob2/backend/
│       ├── controller/# Endpoints REST (personas, inmuebles, contratos, índices, auth)
│       ├── service/   # Lógica de negocio
│       ├── model/     # Entidades, DTOs, enums
│       ├── repository/# Repositorios JPA
│       └── config/    # SecurityConfig, CorsConfig
└── docs/              # Documentación del proyecto
```

---

## Funcionalidades

- **Autenticación** — login/logout con Auth0, protección de rutas por rol (ADMIN)
- **Propietarios** — listado, alta, edición (personas físicas y jurídicas)
- **Inquilinos** — listado, alta, edición
- **Inmuebles** — listado, alta (casas, departamentos, terrenos)
- **Contratos** — listado, alta, edición
- **Roles** — asignación de roles a personas (propietario, inquilino, garante, empleado, administrador)
- **Índices económicos** — consulta de IPC e ICL actualizados desde API externa, con widget en el dashboard

---

## Requisitos previos

- Node.js 20+
- Java 21
- MySQL 8+ con base de datos `inmob_db`
- Cuenta y aplicación configurada en [Auth0](https://auth0.com)

---

## Configuración y ejecución

### Backend

Configurar la conexión a la base de datos y Auth0 en `backend/src/main/resources/application.yaml`:

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/inmob_db
    username: root
    password: <tu_password>
  security:
    oauth2:
      resourceserver:
        jwt:
          issuer-uri: https://<tu-dominio>.auth0.com/
          audiences: <tu-audience>
```

```bash
cd backend
./mvnw spring-boot:run
```

La API queda disponible en `http://localhost:8080`.  
Swagger UI: `http://localhost:8080/swagger-ui.html`

### Frontend

Crear un archivo `.env` en `frontend/` con las variables de Auth0:

```env
VITE_AUTH0_DOMAIN=<tu-dominio>.auth0.com
VITE_AUTH0_CLIENT_ID=<tu-client-id>
VITE_AUTH0_AUDIENCE=<tu-audience>
```

```bash
cd frontend
npm install
npm run dev
```

La app queda disponible en `http://localhost:5173`.

---

## Scripts disponibles (frontend)

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm test` | Ejecutar tests unitarios con Vitest |
| `npx playwright test` | Tests end-to-end con Playwright |

---

## Flujo de trabajo Git

- Nunca se hace push directo a `main`
- Cada tarea se desarrolla en una rama propia
- Los cambios se integran únicamente mediante Pull Request con al menos 1 aprobación

Ver [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) para el flujo detallado.
