
## Convenciones de commits

| Tipo | Descripción |
|------|-------------|
| `feat` | Funcionalidad |
| `fix` | Corrección |
| `chore` | Mantenimiento / tareas internas |
| `docs` | Documentación |
| `refactor` | Refactorización |
| `test` | Pruebas |
| `build` | Build / tooling |
| `ci` | Integración continua |

---

1.  Comienza tu trabajo siempre desde main
```
git checkout main
git pull
```

2. Crea una feature branch

```
git checkout -b feat/login
```

3. Trabajo y commit normalmente 

```
git add .
git commit -m "feat(auth): agregar login con JWT"
```

4. Push para mi branch

```
git push origin feat/login
```

5. Github UI - Página web de GitHub

- Compare & pull request
- Base: Main
- Compare: feat/login
- Add
	- Title: mismo estilo que en commits
	- Description: qué hiciste y por qué 
- Create pull request

6. Los cambios posteriores al PR request se guardan automáticamente con commits

```
git commit -m "fix(auth): corregir validación"
git push
```

7. Merge
- Una vez aprobado por un miembro cualquiera del equipo click en **Merge pull request** 
- Fin!
