import { test, expect, request } from '@playwright/test';

test.describe('Pruebas de Autenticación Fallida (Sin Sesión)', () => {

  test('CP-02: Inicio de sesión fallido por credenciales incorrectas', async ({ page }) => {
    // Este test usa el proyecto 'unauthenticated' (sin storageState).
    // Para que Auth0 no use su propia cookie de sesión del tenant,
    // limpiamos el contexto de cookies del dominio de auth0.
    await page.context().clearCookies();

    await page.goto('/login');
    const loginButton = page.getByRole('button', { name: /ingresar con auth0/i });
    await loginButton.click();

    // Esperar a estar en el dominio de Auth0
    await page.waitForURL(/.*\.auth0\.com.*/, { timeout: 15000 });

    // Ingresar credenciales inválidas
    await page.getByLabel(/Email address|Dirección de email/i).fill('fake-email-invalido@test.com');
    await page.locator('input[name="password"]').fill('wrong-password-123');
    await page.locator('button[type="submit"][name="action"][value="default"]').click();

    // Auth0 mostrará un error y permaneceremos en su dominio
    const errorMessage = page
      .locator('text=Wrong email or password')
      .or(page.locator('text=Email o contraseña incorrectos'));
    await expect(errorMessage).toBeVisible({ timeout: 10000 });

    // Confirmar que NO fuimos redirigidos a la app
    expect(page.url()).toMatch(/.*\.auth0\.com.*/);
  });

  test('CP-03: Validar protección de rutas (AdminRoute) sin iniciar sesión', async ({ page }) => {
    // Limpiamos cookies para asegurar que no haya sesión de Auth0
    await page.context().clearCookies();

    // Intentar navegar directo a una ruta protegida
    await page.goto('/propietarios/nuevo');

    // AdminRoute detecta que no está autenticado y redirige al login de nuestra app
    await expect(page).toHaveURL(/.*\/login/, { timeout: 10000 });

    // Verificar que vemos la pantalla de login de la app
    await expect(page.locator('h1')).toContainText('CRM Inmobiliario');
    await expect(page.getByRole('button', { name: /ingresar con auth0/i })).toBeVisible();
  });

});
