import { test, expect } from '@playwright/test';

// Tests específicos para la integración con la API externa de Argly (índices IPC e ICL).
// El flujo es: IndicesWidget → fetchWithToken('/indices') → GET http://localhost:8080/api/v1/indices
// El backend de Spring Boot es el que llama a Argly; aquí interceptamos la respuesta del backend.

test.describe('CP-07/08: Pruebas de Integración - API de Índices Económicos (Argly)', () => {

  test('CP-07: Consumo correcto de la API de índices (IPC e ICL)', async ({ page }) => {
    // Mockeamos el endpoint del backend que devuelve los índices consolidados.
    // Este mock simula una respuesta exitosa de Argly procesada por el backend.
    await page.route('**/api/v1/indices', async route => {
      const mockResponse = {
        ipc: { fecha: '2025-04-01', valor: 3.7 },
        icl: { fecha: '2025-04-01', valor: 4.21 },
        fechaActualizacion: '2025-05-18T12:00:00',
        errorApi: false,  // Argly respondió correctamente
      };
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockResponse),
      });
    });

    await page.goto('/');
    await expect(page.getByRole('banner')).toBeVisible({ timeout: 15000 });

    // El widget de índices debe estar visible en el dashboard (HomePage)
    // Esperamos el h2 "Índices Económicos Actuales"
    await expect(page.locator('h2').filter({ hasText: /Índices Económicos Actuales/i }))
      .toBeVisible({ timeout: 10000 });

    // Verificamos que se muestren los valores mockeados de IPC e ICL
    await expect(page.getByText('IPC', { exact: true })).toBeVisible();
    await expect(page.getByText('ICL', { exact: true })).toBeVisible();
    await expect(page.getByText('3.7')).toBeVisible();
    await expect(page.getByText('4.21')).toBeVisible();

    // Verificamos que el chip de actualización sea "success" (verde), NO "warning"
    // El Chip de MUI no tiene role, pero podemos verificar que NO aparece el mensaje de error
    await expect(page.getByText(/No se pudo conectar con el proveedor/i)).not.toBeVisible();
    await expect(page.locator('text=Atención')).not.toBeVisible();
  });

  test('CP-08: Comportamiento ante fallo de la API externa de Argly', async ({ page }) => {
    // Simulamos que Argly no responde y el backend devuelve los últimos valores
    // guardados, con errorApi: true para que el frontend muestre el warning.
    await page.route('**/api/v1/indices', async route => {
      const mockResponse = {
        ipc: { fecha: '2025-03-01', valor: 3.2 },  // Valores del mes anterior (cache)
        icl: { fecha: '2025-03-01', valor: 3.98 },
        fechaActualizacion: '2025-03-15T08:00:00',
        errorApi: true,  // Argly no respondió
      };
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockResponse),
      });
    });

    await page.goto('/');
    await expect(page.getByRole('banner')).toBeVisible({ timeout: 15000 });

    // El widget debe seguir mostrándose (usando datos del cache)
    await expect(page.locator('h2').filter({ hasText: /Índices Económicos Actuales/i }))
      .toBeVisible({ timeout: 10000 });

    // Verificar que el frontend muestra el Alert de warning por el fallo de Argly
    await expect(
      page.getByText(/No se pudo conectar con el proveedor de índices \(Argly\)/i)
    ).toBeVisible({ timeout: 5000 });

    // Los valores del cache (mes anterior) siguen visibles para no dejar al usuario sin información
    await expect(page.getByText('3.2')).toBeVisible();
    await expect(page.getByText('3.98')).toBeVisible();
  });

  test('CP-09: Comportamiento ante ausencia total de respuesta (backend caído)', async ({ page }) => {
    // Simulamos que el backend mismo no responde (503 o timeout)
    await page.route('**/api/v1/indices', async route => {
      await route.fulfill({
        status: 503,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Service Unavailable' }),
      });
    });

    await page.goto('/');
    await expect(page.getByRole('banner')).toBeVisible({ timeout: 15000 });

    // Cuando el backend devuelve un error HTTP, getIndicesConsolidados retorna null
    // y el hook useIndices setea el error en el estado.
    // El IndicesWidget renderiza un MUI Alert de severity="error"
    await expect(
      page.getByText(/No se pudieron obtener los índices económicos/i)
    ).toBeVisible({ timeout: 10000 });

    // Verificar que la app NO crashea: el resto de la página sigue funcionando
    await expect(page.getByRole('banner')).toBeVisible();  // Navbar presente
    await expect(page.getByText(/Hola, bienvenido/i)).toBeVisible();  // Contenido del dashboard
  });

});
