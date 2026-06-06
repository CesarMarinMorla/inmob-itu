type FetchFn = (endpoint: string, options?: RequestInit) => Promise<Response>;

export type EstadoContrato = 'BORRADOR' | 'VIGENTE' | 'FINALIZADO' | 'EN_MORA';
export type IndiceAjuste = 'ICL' | 'IPC';
export type TipoMoneda = 'ARS' | 'USD';

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

export const getContratos = (fetchWithToken: FetchFn): Promise<ContratoDTO[]> =>
  fetchWithToken('/contratos').then(r => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.json().then(res => Array.isArray(res) ? res : (res?.data || []));
  });

export const getContratoById = (fetchWithToken: FetchFn, id: number): Promise<ContratoDTO> =>
  fetchWithToken(`/contratos/${id}`).then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); });

export const createContrato = (fetchWithToken: FetchFn, dto: ContratoDTO): Promise<ContratoDTO> =>
  fetchWithToken('/contratos', { method: 'POST', body: JSON.stringify(dto) })
    .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); });

export const updateContrato = (fetchWithToken: FetchFn, id: number, dto: ContratoDTO): Promise<ContratoDTO> =>
  fetchWithToken(`/contratos/${id}`, { method: 'PUT', body: JSON.stringify(dto) })
    .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); });

export const deleteContrato = (fetchWithToken: FetchFn, id: number): Promise<void> =>
  fetchWithToken(`/contratos/${id}`, { method: 'DELETE' })
    .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); });
