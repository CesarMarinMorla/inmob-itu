import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('Authenticate with Auth0', async ({ page }) => {
  const email = process.env.VITE_TEST_USER_EMAIL;
  const password = process.env.VITE_TEST_USER_PASSWORD;

  if (!email || !password) {
    console.warn("⚠️ No se encontraron credenciales en .env. Saltando setup de autenticación real.");
    return;
  }

  // Aumentamos el timeout del setup a 60s dado que Auth0 puede ser lento
  setup.setTimeout(60000);

  // 1. Navegar a nuestra app local y clickear el login
  await page.goto('/login');
  await expect(page.locator('h1')).toContainText('CRM Inmobiliario');
  
  const loginButton = page.getByRole('button', { name: /ingresar con auth0/i });
  await loginButton.click();

  // 2. Playwright nos lleva al dominio de Auth0.
  // Auth0 puede redirigir directo si ya hay sesión activa.
  // Esperamos cualquiera de las dos opciones.
  await page.waitForURL(url =>
    url.hostname.includes('auth0.com') || url.hostname === 'localhost',
    { timeout: 15000 }
  );

  // Si Auth0 ya tenía sesión y nos redirigió directamente a la app, perfecto.
  if (page.url().includes('localhost:5173')) {
    console.log('✓ Auth0 redirigió con sesión existente directamente a la app.');
  } else {
    // 3. Completar el formulario nativo de Auth0 Universal Login
    await page.getByLabel(/Email address|Dirección de email/i).fill(email);
    await page.locator('input[name="password"]').fill(password);
    await page.locator('button[type="submit"]').first().click();

    // 4. Esperar la redirección de vuelta a nuestra app
    await page.waitForURL(url => url.hostname === 'localhost', { timeout: 20000 });
  }

  // 5. Verificar que realmente estamos logueados
  await expect(page.getByRole('banner')).toBeVisible({ timeout: 10000 });
  
  // 6. Guardar el estado (cookies, local storage, tokens, etc.)
  await page.context().storageState({ path: authFile });
});
