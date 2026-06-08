# Modo Mock / Desarrollo

El proyecto soporta un modo de desarrollo que evita la dependencia de Auth0, permitiendo probar el frontend sin una sesión real y el backend sin validar tokens JWT.

## Frontend (Vite + React)

### Requisito

Haber instalado las dependencias:

```bash
cd frontend && npm install
```

### Uso

```bash
cd frontend
VITE_MOCK_AUTH=true npm run dev
```

Esto inicia Vite en `http://localhost:5173/` con Auth0 mockeado. No pide login, entra directo.

### Cómo funciona

- `vite.config.ts` (línea ~16): cuando `VITE_MOCK_AUTH=true`, redirige el paquete `@auth0/auth0-react` a un mock local.
- `src/app/auth0-mock.ts`: exporta `Auth0Provider` y `useAuth0` con valores fijos (`isAuthenticated: true`, `nivelAcceso: ADMIN`, etc.).
- El mismo archivo intercepta `fetch()` a `http://localhost:8080/api/v1/me` y responde con un `UsuarioDTO` válido. El resto de las llamadas a la API pasan al backend real.

### Archivos involucrados

| Archivo | Rol |
|---|---|
| `vite.config.ts` | Alias condicional del paquete |
| `src/app/auth0-mock.ts` | Mock de Auth0 + mock del endpoint `/me` |

---

## Backend (Spring Boot)

### Requisito

Tener MySQL corriendo con la base de datos configurada (ver `application.yaml`).

### Uso

```bash
cd backend
./mvnw spring-boot:run -Dspring-boot.run.profiles=dev
```

O con Maven wrapper y variable de entorno:

```bash
SPRING_PROFILES_ACTIVE=dev ./mvnw spring-boot:run
```

Esto inicia el backend en `http://localhost:8080/` con seguridad desactivada. Todos los endpoints responden sin necesidad de token JWT.

### Cómo funciona

- `SecurityConfig.java` expone dos beans: `filterChain` (perfiles que no sean `dev`) y `devFilterChain` (perfil `dev`). El segundo permite todas las requests sin autenticación.
- `DevAuthFilter.java` (solo activo con perfil `dev`) inyecta un `JwtAuthenticationToken` mockeado en el `SecurityContext` de cada request, con `sub=auth0|dev`. Esto es necesario porque los controladores usan `@AuthenticationPrincipal Jwt jwt`.

### Archivos involucrados

| Archivo | Rol |
|---|---|
| `src/main/resources/application-dev.yaml` | Configuración del perfil `dev` |
| `src/main/java/.../config/SecurityConfig.java` | Bean `devFilterChain` que desactiva auth |
| `src/main/java/.../config/DevAuthFilter.java` | Inyecta JWT mock en cada request |

---

## Uso combinado (frontend + backend en modo mock)

Terminal 1 — Backend:

```bash
cd backend
./mvnw spring-boot:run -Dspring-boot.run.profiles=dev
```

Terminal 2 — Frontend:

```bash
cd frontend
VITE_MOCK_AUTH=true npm run dev
```

Abrir `http://localhost:5173/`. El frontend usa el mock de Auth0 para evitar el login, y el backend acepta requests sin token válido.
