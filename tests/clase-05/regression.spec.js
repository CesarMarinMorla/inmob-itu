const { test, expect } = require('@playwright/test');

const FRONTEND_URL = 'http://localhost:5173';
const API_FISICAS   = '**/api/v1/personas-fisicas**';
const API_JURIDICAS = '**/api/v1/personas-juridicas**';
const API_INDICES   = '**/api/v1/indices**';

const mockFisicas = [
  {
    id: 1,
    primerNombre: 'Ana',
    primerApellido: 'Martinez',
    tipoDocumento: 'DNI',
    numDocumento: '22222222',
    fechaNacimiento: '1985-01-01',
    telefonos: [{ numero: '2614111111', tipo: 'celular' }],
    mails: [{ email: 'ana@test.com', tipo: 'personal', esPrincipal: true }],
    direcciones: [],
  },
  {
    id: 2,
    primerNombre: 'Carlos',
    primerApellido: 'Gomez',
    tipoDocumento: 'DNI',
    numDocumento: '11111111',
    fechaNacimiento: '1990-06-15',
    telefonos: [],
    mails: [{ email: 'carlos@test.com', tipo: 'personal', esPrincipal: true }],
    direcciones: [],
  },
];

const mockJuridicas = [
  {
    id: 3,
    razonSocial: 'Constructora SA',
    cuit: '30-22222222-9',
    fechaConstitucion: '2005-01-01',
    telefonos: [],
    mails: [{ email: 'constructora@test.com', tipo: 'laboral', esPrincipal: true }],
    direcciones: [],
  },
];

const mockIndices = {
  ipc: { fecha: '2024-05', valor: 8.8 },
  icl: { fecha: '2024-05', valor: 235.1 },
  fechaActualizacion: '2024-05-01',
  errorApi: false,
};

test('RG-001: LoginPage renderiza botón de autenticación Auth0', async ({ page }) => {
  await page.goto(`${FRONTEND_URL}/login`);
  await expect(page.getByRole('button', { name: /ingresar con auth0/i })).toBeVisible({ timeout: 5000 });
  await expect(page.getByText(/panel de gesti/i)).toBeVisible();
});

test('RG-002: PropietariosPage carga y muestra datos correctamente', async ({ page }) => {
  await page.route(API_FISICAS,   r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mockFisicas) }));
  await page.route(API_JURIDICAS, r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mockJuridicas) }));
  await page.route(API_INDICES,   r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mockIndices) }));
  await page.goto(`${FRONTEND_URL}/propietarios`);
  await expect(page.getByRole('heading', { name: /propietarios/i })).toBeVisible();
  await expect(page.getByText(/Ana\s*Martinez/i)).toBeVisible({ timeout: 6000 });
  await expect(page.getByText(/DNI 22222222/i)).toBeVisible();
  await expect(page.getByText('ana@test.com')).toBeVisible();
  await expect(page.getByText('Constructora SA')).toBeVisible();
  await expect(page.getByText(/CUIT 30-22222222-9/i)).toBeVisible();
});

test('RG-003: InquilinosPage carga y muestra datos correctamente', async ({ page }) => {
  await page.route(API_FISICAS,   r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mockFisicas) }));
  await page.route(API_JURIDICAS, r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mockJuridicas) }));
  await page.route(API_INDICES,   r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mockIndices) }));
  await page.goto(`${FRONTEND_URL}/inquilinos`);
  await expect(page.getByRole('heading', { name: /inquilinos/i })).toBeVisible();
  await expect(page.getByText(/Carlos\s*Gomez/i)).toBeVisible({ timeout: 6000 });
  await expect(page.getByText(/DNI 11111111/i)).toBeVisible();
  await expect(page.getByText('carlos@test.com')).toBeVisible();
});

test('RG-004: filtro de búsqueda en PropietariosPage funciona correctamente', async ({ page }) => {
  await page.route(API_FISICAS,   r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mockFisicas) }));
  await page.route(API_JURIDICAS, r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mockJuridicas) }));
  await page.route(API_INDICES,   r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mockIndices) }));
  await page.goto(`${FRONTEND_URL}/propietarios`);
  await expect(page.getByText(/Ana\s*Martinez/i)).toBeVisible({ timeout: 6000 });
  const search = page.getByRole('textbox', { name: /buscar propietarios/i });
  await search.fill('Constructora');
  await expect(page.getByText('Constructora SA')).toBeVisible();
  await expect(page.getByText(/Ana\s*Martinez/i)).not.toBeVisible();
});

test('RG-005: filtro de búsqueda en InquilinosPage funciona correctamente', async ({ page }) => {
  await page.route(API_FISICAS,   r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mockFisicas) }));
  await page.route(API_JURIDICAS, r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mockJuridicas) }));
  await page.route(API_INDICES,   r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mockIndices) }));
  await page.goto(`${FRONTEND_URL}/inquilinos`);
  await expect(page.getByText(/Carlos\s*Gomez/i)).toBeVisible({ timeout: 6000 });
  const search = page.getByRole('textbox', { name: /buscar inquilinos/i });
  await search.fill('Carlos');
  await expect(page.getByText(/Carlos\s*Gomez/i)).toBeVisible();
  await expect(page.getByText('Constructora SA')).not.toBeVisible();
});

test('RG-006: diálogo de eliminación abre y puede cancelarse', async ({ page }) => {
  await page.route(API_FISICAS,   r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify([mockFisicas[0]]) }));
  await page.route(API_JURIDICAS, r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify([]) }));
  await page.route(API_INDICES,   r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mockIndices) }));
  await page.goto(`${FRONTEND_URL}/propietarios`);
  await expect(page.getByText(/Ana\s*Martinez/i)).toBeVisible({ timeout: 6000 });
  await page.getByRole('button', { name: /eliminar ana martinez/i }).click();
  await expect(page.getByRole('dialog')).toBeVisible({ timeout: 3000 });
  await page.getByRole('button', { name: /cancelar/i }).click();
  await expect(page.getByText(/Ana\s*Martinez/i)).toBeVisible();
});

test('RG-007: páginas muestran estado vacío sin errores', async ({ page }) => {
  await page.route(API_FISICAS,   r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify([]) }));
  await page.route(API_JURIDICAS, r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify([]) }));
  await page.route(API_INDICES,   r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mockIndices) }));
  await page.goto(`${FRONTEND_URL}/propietarios`);
  await expect(page.getByRole('heading', { name: /propietarios/i })).toBeVisible();
  await expect(page.locator('text=/Something went wrong/i')).toHaveCount(0);
});

test('RG-008: app no crashea ante error 500 en endpoint de personas', async ({ page }) => {
  await page.route(API_FISICAS,   r => r.fulfill({ status: 500, contentType: 'application/json', body: JSON.stringify({ message: 'Server Error' }) }));
  await page.route(API_JURIDICAS, r => r.fulfill({ status: 500, contentType: 'application/json', body: JSON.stringify({ message: 'Server Error' }) }));
  await page.route(API_INDICES,   r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mockIndices) }));
  await page.goto(`${FRONTEND_URL}/propietarios`);
  const appViva = page.locator('nav, header, [role="navigation"], h1');
  await expect(appViva.first()).toBeVisible({ timeout: 5000 });
  await expect(page.locator('text=/Something went wrong/i')).toHaveCount(0);
});
