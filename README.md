# inmob2

Repositorio nuevo desde cero para proyecto inmobiliaria

## Branching

Cada desarrollador crea y gestiona sus propias ramas según la tarea asignada.

## Convenciones de commits

- feat: funcionalidad
- fix: corrección
- chore: mantenimiento / tareas internas
- docs: documentación
- refactor: refactorización
- test: pruebas
- build: build / tooling
- ci: integración continua

### Ejemplos de commits 

- feat(auth): agregar login con JWT
- fix(ui): corregir desborde del navbar
- chore(db): actualizar migración inicial

### Pull Requests

- Todo cambio debe realizarse en una rama (nunca directamente en `main`)
- No se realizan pushes directos a `main` (regla del equipo)
- Los cambios se integran exclusivamente mediante Pull Request
- Todo PR requiere al menos **1 aprobación de un miembro del equipo distinto al autor**
- Consultar `docs/CONTRIBUTING.md` para el flujo detallado
- Importante: estas reglas son convenciones del equipo. GitHub no las hace cumplir automáticamente, pero **se espera que todos las respeten**