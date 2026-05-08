# Guía de Integración Auth0 para Backend

Esta guía detalla los requisitos técnicos y configuraciones necesarias en el dashboard de Auth0 y en el entorno de backend para soportar el sistema de autenticación implementado en el frontend de la aplicación inmobiliaria.

---

## 1. Configuración en el Dashboard de Auth0

Para que el frontend pueda solicitar tokens válidos para nuestra API, es necesario configurar lo siguiente en el dashboard de Auth0:

### 1.1. API (Resource Server)
- **Identifier (Audience)**: Debe ser `https://api.inmobiliaria.com` (o el valor que definan para producción). El frontend solicita este audience en la configuración del `Auth0Provider`.
- **Signing Algorithm**: Asegúrense de utilizar `RS256` (recomendado y por defecto en Auth0).
- **RBAC Settings**: 
  - Habilitar `Enable RBAC`
  - Habilitar `Add Permissions in the Access Token` (si van a validar permisos granulares además de roles).

### 1.2. Inyección de Roles en el Token (Actions)
Auth0 por defecto no incluye los roles del usuario en el token JWT. Para que el frontend (y el backend) puedan leer el rol del usuario (por ejemplo, `ADMIN`), deben crear un **Action** en el flujo de `Login` (Post Login) con el siguiente código:

```javascript
exports.onExecutePostLogin = async (event, api) => {
  const namespace = 'https://tu-app.com/roles';
  
  if (event.authorization) {
    // Agrega los roles al ID Token (usado por el frontend)
    api.idToken.setCustomClaim(namespace, event.authorization.roles);
    
    // Agrega los roles al Access Token (enviado al backend)
    api.accessToken.setCustomClaim(namespace, event.authorization.roles);
  }
};
```
*Nota: Reemplacen `https://tu-app.com/roles` por un namespace real si lo desean, pero deben informarlo al frontend para actualizar la constante en el código.*

---

## 2. Estructura del JWT (Access Token)

El backend recibirá en cada petición protegida un Access Token (JWT) en el header `Authorization`.

### Formato esperado del header
```http
Authorization: Bearer eyJhbGciOiJSUzI...
```

### Claims clave en el payload del JWT
Al decodificar el token, el payload contendrá la siguiente información relevante:
- `iss`: La URL de nuestro tenant de Auth0 (ej. `https://nuestro-tenant.auth0.com/`).
- `aud`: Debe contener nuestro Identifier (`https://api.inmobiliaria.com`).
- `sub`: El identificador único del usuario en Auth0 (ej. `auth0|123456789`).
- `https://tu-app.com/roles`: Un arreglo de strings con los roles asignados, ej. `["ADMIN"]`.

Ejemplo de Payload:
```json
{
  "iss": "https://nuestro-tenant.us.auth0.com/",
  "sub": "auth0|64abc123def456",
  "aud": [
    "https://api.inmobiliaria.com",
    "https://nuestro-tenant.us.auth0.com/userinfo"
  ],
  "iat": 1690000000,
  "exp": 1690086400,
  "azp": "cliente_id_del_frontend",
  "scope": "openid profile email",
  "https://tu-app.com/roles": [
    "ADMIN"
  ]
}
```

---

## 3. Recomendaciones de Validación en el Backend

El backend **debe** validar criptográficamente el JWT recibido en cada petición. 

1. **Librería JWT**: Utilicen una librería estándar para Java/Spring Boot (ej. `spring-boot-starter-oauth2-resource-server` si usan Spring).
2. **Validación de Firma (JWKS)**: El backend debe descargar y cachear las claves públicas (JWKS) desde `https://nuestro-tenant.auth0.com/.well-known/jwks.json` para verificar que el token fue firmado por Auth0.
3. **Validación de Claims**:
   - Verificar que no esté expirado (`exp`).
   - Verificar que el `issuer` (`iss`) coincida con nuestro tenant.
   - Verificar que el `audience` (`aud`) contenga `https://api.inmobiliaria.com`.
4. **Validación de Autorización (Roles)**:
   - Extraer el arreglo del claim `https://tu-app.com/roles`.
   - Verificar que el usuario posea el rol necesario (ej. `ADMIN`) antes de ejecutar acciones críticas o retornar datos sensibles.

Con esta configuración, la aplicación mantendrá un esquema de seguridad robusto, delegando la identidad en Auth0 y protegiendo de forma independiente y coordinada tanto el frontend como el backend.
