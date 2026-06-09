import { test, expect } from '@playwright/test';

test.describe('Video Demo E2E Flow', () => {
  // Evitamos usar el estado de sesión persistido global para poder filmar el Login
  test.use({ storageState: { cookies: [], origins: [] } });

  test('Video recording flow: Login -> Propietarios -> Busqueda -> Clear -> Dialog -> Cancel', async ({ page }) => {
    test.setTimeout(90000);
    const email = process.env.VITE_TEST_USER_EMAIL || 'juan@gmail.com';
    const password = process.env.VITE_TEST_USER_PASSWORD || 'Admin153!';

    // --- 1. LOGIN ---
    console.log('Navegando a la página de login...');
    await page.goto('/login');
    await page.waitForTimeout(2000); // Pausa legible en video

    await expect(page.locator('h1')).toContainText('CRM Inmobiliario');
    const loginButton = page.getByRole('button', { name: /ingresar con auth0/i });
    
    console.log('Haciendo clic en ingresar con Auth0...');
    await loginButton.click();
    await page.waitForTimeout(2000); // Pausa legible en video

    // Esperar redirección al dominio de Auth0 o localhost
    await page.waitForURL(url => url.hostname.includes('auth0.com') || url.hostname === 'localhost', { timeout: 15000 });
    await page.waitForTimeout(2000); // Pausa legible en video

    if (!page.url().includes('localhost:5173')) {
      console.log('Completando el formulario de Auth0...');
      await page.getByLabel(/Email address|Dirección de email/i).fill(email);
      await page.waitForTimeout(1000);
      await page.locator('input[name="password"]').fill(password);
      await page.waitForTimeout(1000);
      await page.locator('button[type="submit"]').first().click();
    }

    // Esperar redirección de vuelta a la app
    await page.waitForURL(url => url.hostname === 'localhost', { timeout: 20000 });
    await page.waitForTimeout(2000);

    // Verificar que estamos en la app (el banner de Organización CR)
    await expect(page.getByRole('banner')).toBeVisible({ timeout: 15000 });
    await expect(page.getByRole('banner')).toContainText('ORGANIZACIÓN CR');
    await page.waitForTimeout(2000);

    // --- 2. PROPIETARIOS ---
    console.log('Navegando al listado de propietarios...');
    await page.goto('/propietarios');
    await page.waitForTimeout(2000);

    await expect(page.locator('h1')).toContainText('Propietarios', { timeout: 10000 });
    await page.waitForTimeout(2000);

    // --- 3. BÚSQUEDA ---
    console.log('Buscando un propietario...');
    const searchInput = page.getByRole('textbox', { name: /buscar propietarios/i });
    await expect(searchInput).toBeVisible();
    await searchInput.fill('Ana');
    await page.waitForTimeout(3000); // Pausa para observar el filtro en video

    // --- 4. CLEAR ---
    console.log('Limpiando la búsqueda...');
    await searchInput.fill('');
    await page.waitForTimeout(2000); // Pausa para observar la recarga de toda la lista

    // --- 5. DIÁLOGO (Confirmar Eliminación) ---
    console.log('Abriendo diálogo de confirmación de eliminación...');
    const deleteButton = page.getByRole('button', { name: /eliminar/i }).first();
    await expect(deleteButton).toBeVisible();
    await deleteButton.click();
    await page.waitForTimeout(2000);

    const dialog = page.getByRole('dialog', { name: /confirmar eliminación/i });
    await expect(dialog).toBeVisible();
    await page.waitForTimeout(3000); // Pausa para leer el cartel de confirmación

    // --- 6. CANCELAR ---
    console.log('Cancelando la eliminación...');
    const cancelButton = dialog.getByRole('button', { name: /cancelar/i });
    await expect(cancelButton).toBeVisible();
    await cancelButton.click();
    await page.waitForTimeout(2000);

    // Verificar que el diálogo se cerró
    await expect(dialog).not.toBeVisible();
    await page.waitForTimeout(2000);
    console.log('¡Flujo demo completado con éxito!');
  });
});
