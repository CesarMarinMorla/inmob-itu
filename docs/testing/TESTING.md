# Plan de Pruebas — inmob2 Frontend (feat-testing)

**Metodología:** técnicas de diseño de casos de prueba del Dr. Méndez-Garabetti  
**Framework:** Vitest + Testing Library  
**Rama:** `feat-testing`  
**Fecha:** Mayo 2026

---

## Tabla de casos de prueba

| ID | Técnica | Componente / Servicio | Objetivo | Precondiciones | Pasos de ejecución | Datos de entrada | Resultado esperado | Resultado obtenido |
|---|---|---|---|---|---|---|---|---|
| TC-001 | Partición de equivalencia | `LoginPage` | Verificar que el botón de login se renderiza cuando el usuario no está autenticado | Auth0 mock: `isAuthenticated=false`, `isLoading=false` | 1. Renderizar `<LoginPage />` 2. Buscar botón con texto "Ingresar con Auth0" | `isAuthenticated: false` | Botón visible en el DOM | ✅ PASS |
| TC-002 | Diseño basado en estados | `LoginPage` | Verificar que un click invoca `loginWithRedirect` exactamente una vez | Auth0 mock configurado, botón visible | 1. Renderizar componente 2. Click en botón de login 3. Verificar llamadas al mock | Un click | `loginWithRedirect` llamado 1 vez | ✅ PASS |
| TC-003 | Comportamiento emergente | `LoginPage` | Documentar comportamiento ante doble click (sin debounce) | Auth0 mock configurado | 1. Renderizar 2. Dos clicks consecutivos 3. Verificar conteo | Dos clicks rápidos | `loginWithRedirect` llamado 2 veces | ✅ PASS |
| TC-004 | Partición de equivalencia | `LoginPage` | Verificar que el texto descriptivo del sistema está presente | Componente renderizable | 1. Renderizar `<LoginPage />` 2. Buscar texto con regex `/panel de gesti/i` | — | Texto encontrado en el DOM | ✅ PASS |
| TC-005 | Valor límite | `indicesService` | Consumo correcto de la API con respuesta exitosa | `fetch` mockeado con respuesta `ok: true` | 1. Mock de fetch retorna array de índices 2. Llamar `getIndices()` 3. Comparar resultado | Array con 2 objetos `{id, fecha, valor, tipo}` | Array con los 2 objetos exactos | ✅ PASS |
| TC-006 | Partición de equivalencia | `indicesService` | Verificar que un array vacío es una respuesta válida | `fetch` mockeado con `ok: true, json: []` | 1. Mock retorna `[]` 2. Llamar `getIndices()` | Array vacío `[]` | `result` igual a `[]` | ✅ PASS |
| TC-007 | Manejo de errores de API | `indicesService` | Comportamiento ante error HTTP 500 del servidor | `fetch` mockeado con `ok: false, status: 500` | 1. Mock retorna respuesta con `ok: false` 2. Llamar `getIndices()` 3. Esperar rechazo | `ok: false, status: 500` | Promesa rechazada con error | ✅ PASS |
| TC-008 | Manejo de errores de API | `indicesService` | Comportamiento ante ausencia de respuesta (red caída) | `fetch` mockeado para lanzar `Network Error` | 1. Mock rechaza con `new Error('Network Error')` 2. Llamar `getIndices()` | Error de red | Promesa rechazada con `'Network Error'` | ✅ PASS |
| TC-009 | Valor límite | `indicesService` | Verificar que `getUltimosIndices` retorna el último registro | `fetch` mockeado con objeto único | 1. Mock retorna un objeto índice 2. Llamar `getUltimosIndices()` | Un objeto `{id:5, fecha:'2024-05', valor:235.1, tipo:'ICL'}` | Objeto exacto devuelto | ✅ PASS |
| TC-010 | Diseño basado en estados | `indicesService` | Comportamiento de `getUltimosIndices` ante 404 | `fetch` mockeado con `ok: false, status: 404` | 1. Mock retorna `ok: false` 2. Llamar `getUltimosIndices()` | `ok: false, status: 404` | Promesa rechazada con error | ✅ PASS |

---

## Evidencia de ejecución

Ejecutar con:

```bash
cd frontend
npm run test
```

Resultado esperado al correr `npm run test`:
