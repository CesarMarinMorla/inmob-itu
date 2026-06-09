import { test, expect } from '@playwright/test';

// Estas pruebas dependen del setup project que guarda la sesión en playwright/.auth/user.json
// Playwright inyecta ese estado automáticamente en cada test de este archivo.

test.describe('Pruebas Funcionales Autenticadas - Inmobiliaria CRM', () => {

  test('CP-01: Verificación de sesión exitosa', async ({ page }) => {
    await page.goto('/');

    // El Navbar con título "ORGANIZACIÓN CR" debe ser visible (usuario logueado)
    await expect(page.getByRole('banner')).toBeVisible({ timeout: 15000 });
    await expect(page.getByRole('banner')).toContainText('ORGANIZACIÓN CR');

    // El ícono de perfil de usuario también debe estar presente
    await expect(page.getByRole('button', { name: /perfil de usuario/i })).toBeVisible();
  });

  test('CP-04: Validaciones de formularios (Nuevo Propietario sin datos)', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('banner')).toBeVisible({ timeout: 15000 });

    await page.goto('/propietarios/nuevo');
    await expect(page.locator('h1')).toContainText('Nuevo Propietario', { timeout: 10000 });

    // El formulario usa validación HTML5 nativa (atributo `required`).
    // Al hacer submit vacío, el browser bloquea el envío y marca el campo.
    // Verificamos que el input "Primer nombre" tiene el atributo required y está vacío.
    const primerNombreInput = page.getByLabel('Primer nombre');
    await expect(primerNombreInput).toBeVisible();
    await expect(primerNombreInput).toHaveValue('');

    // Comprobamos que el campo tiene el atributo `required` (validación nativa HTML5)
    const isRequired = await primerNombreInput.getAttribute('aria-required');
    expect(isRequired).toBe('true');

    // Intentamos hacer submit; el browser bloqueará el envío
    await page.getByRole('button', { name: /Guardar Propietario/i }).click();

    // Tras el click, la URL no debe haber cambiado (el form fue bloqueado por HTML5)
    await expect(page).toHaveURL(/.*\/propietarios\/nuevo/, { timeout: 3000 });
  });

  test('CP-05: Consumo real de la API (Listado de Propietarios)', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('banner')).toBeVisible({ timeout: 15000 });

    // Navegamos a propietarios y verificamos que la lista cargue
    await page.goto('/propietarios');

    // El h1 debe mostrar "Propietarios"
    await expect(page.locator('h1')).toContainText('Propietarios', { timeout: 10000 });

    // El botón de agregar debe existir (confirma que la página cargó correctamente)
    await expect(page.getByRole('button', { name: /Nuevo Propietario/i })).toBeVisible();

    // La lista puede estar vacía o tener datos reales. Ambos casos son válidos.
    // Verificamos que el área de contenido está presente (no hay crash).
    const content = page.locator('text=No hay propietarios registrados')
      .or(page.locator('[class*="MuiCard"]')).first();
    await expect(content).toBeVisible({ timeout: 10000 });
  });

  test('CP-06: Comportamiento esperado ante errores de la API (Error 500)', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('banner')).toBeVisible({ timeout: 15000 });

    // Simulamos que el backend falla con 500 para inquilinos
    await page.route('**/api/v1/personas-fisicas/rol/inquilino', async route => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Error interno simulado por Playwright' })
      });
    });
    await page.route('**/api/v1/personas-juridicas/rol/inquilino', async route => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Error interno simulado por Playwright' })
      });
    });

    await page.goto('/inquilinos');

    // La página debe cargar sin crashear (UI resiliente)
    await expect(page.locator('h1')).toContainText('Inquilinos', { timeout: 10000 });

    // El botón de agregar sigue disponible
    await expect(page.getByRole('button', { name: /Nuevo Inquilino/i })).toBeVisible();
  });

});
