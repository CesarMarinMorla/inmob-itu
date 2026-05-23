const BASE_URL = 'http://localhost:8080/api/v1';

// ── ENUMS ─────────────────────────────────────────────────────────────────────
export type EstadoContrato = 'BORRADOR' | 'VIGENTE' | 'FINALIZADO' | 'EN_MORA';
export type IndiceAjuste = 'ICL' | 'IPC';
export type TipoMoneda = 'ARS' | 'USD';

// ── DTO ───────────────────────────────────────────────────────────────────────
export interface ContratoDTO {
  id?: number;
  contratoNumero: string;
  fechaFirma: string;
  fechaInicio: string;
  fechaFinal: string;
  contratoEstado: EstadoContrato;
  montoBase: number;
  tipoMoneda: TipoMoneda;
  aplicaProdCarne?: boolean;
  cantidadCarne?: number;
  diaVencimientoPago?: number;
  porcentajeComision?: number;
  montoDeposito?: number;
  monedaDeposito?: TipoMoneda;
  observacionesGarantia?: string;
  indiceAjuste?: IndiceAjuste;
  frecuenciaAjuste?: number;
  mesProximoAjuste?: string;
  propiedadAlquiladaId: number;
  propietariosIds: number[];
  inquilinosIds: number[];
  garantesIds?: number[];
}

// ── Helper ────────────────────────────────────────────────────────────────────
async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) throw new Error(`Error HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}

// ── CRUD ──────────────────────────────────────────────────────────────────────
export const getContratos = (): Promise<ContratoDTO[]> =>
  fetch(`${BASE_URL}/contratos`).then(handleResponse);

export const getContratoById = (id: number): Promise<ContratoDTO> =>
  fetch(`${BASE_URL}/contratos/${id}`).then(handleResponse);

export const createContrato = (dto: ContratoDTO): Promise<ContratoDTO> =>
  fetch(`${BASE_URL}/contratos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dto),
  }).then(handleResponse);

export const updateContrato = (id: number, dto: ContratoDTO): Promise<ContratoDTO> =>
  fetch(`${BASE_URL}/contratos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dto),
  }).then(handleResponse);

export const deleteContrato = (id: number): Promise<void> =>
  fetch(`${BASE_URL}/contratos/${id}`, { method: 'DELETE' }).then((res) => {
    if (!res.ok) throw new Error(`Error HTTP ${res.status}`);
  });
