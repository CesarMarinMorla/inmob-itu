const { test, expect } = require('@playwright/test');

const FRONTEND_URL = 'http://localhost:5173';

const mockPersonas = [
  {
    id: 1,
    primerNombre: 'Ana',
    primerApellido: 'Martinez',
    tipoDocumento: 'DNI',
    numDocumento: '22222222',
    fechaNacimiento: '1985-01-01',
    telefonos: [{ numero: '2614111111', tipo: 'celular' }],
    mails: [{ email: 'ana@crpropiedades.com', tipo: 'personal', esPrincipal: true }],
    direcciones: [],
  },
  {
    id: 2,
    primerNombre: 'Carlos',
    primerApellido: 'Gomez',
    tipoDocumento: 'DNI',
    numDocumento: '11111111',
    fechaNacimiento: '1990-06-15',
    telefonos: [{ numero: '2614222222', tipo: 'celular' }],
    mails: [{ email: 'carlos@crpropiedades.com', tipo: 'personal', esPrincipal: true }],
    direcciones: [],
  },
];

const mockEmpresas = [
  {
    id: 3,
    razonSocial: 'Constructora SA',
    cuit: '30-22222222-9',
    fechaConstitucion: '2005-01-01',
    telefonos: [],
    mails: [{ email: 'info@constructora.com', tipo: 'laboral', esPrincipal: true }],
    direcciones: [],
  },
];

const mockIndices = {
  ipc: { fecha: '2024-05', valor: 8.8 },
  icl: { fecha: '2024-05', valor: 235.1 },
  fechaActualizacion: '2024-05-01',
  errorApi: false,
};

test('DEMO: flujo completo CR Propiedades — Login → Propietarios → Búsqueda → Eliminación', async ({ page }) => {
  await page.route('**/api/v1/personas-fisicas**', r =>
    r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mockPersonas) })
  );
  await page.route('**/api/v1/personas-juridicas**', r =>
    r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mockEmpresas) })
  );
  await page.route('**/api/v1/indices**', r =>
    r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mockIndices) })
  );

  await page.goto(`${FRONTEND_URL}/login`);
  await expect(page.getByRole('button', { name: /ingresar con auth0/i })).toBeVisible({ timeout: 5000 });
  await page.waitForTimeout(1500);

  await page.goto(`${FRONTEND_URL}/propietarios`);
  await expect(page.getByRole('heading', { name: /propietarios/i })).toBeVisible({ timeout: 5000 });
  await expect(page.getByText(/Ana\s*Martinez/i)).toBeVisible({ timeout: 6000 });
  await page.waitForTimeout(2000);

  const searchInput = page.getByRole('textbox', { name: /buscar propietarios/i });
  await searchInput.click();
  await page.waitForTimeout(500);
  await searchInput.type('Constructora', { delay: 80 });
  await page.waitForTimeout(1200);
  await expect(page.getByText('Constructora SA')).toBeVisible();
  await expect(page.getByText(/Ana\s*Martinez/i)).not.toBeVisible();

  await searchInput.clear();
  await page.waitForTimeout(1000);
  await expect(page.getByText(/Ana\s*Martinez/i)).toBeVisible();

  await page.getByRole('button', { name: /eliminar ana martinez/i }).click();
  await expect(page.getByRole('dialog')).toBeVisible({ timeout: 3000 });
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: /cancelar/i }).click();
  await page.waitForTimeout(1500);

  await expect(page.getByText(/Ana\s*Martinez/i)).toBeVisible();
});
