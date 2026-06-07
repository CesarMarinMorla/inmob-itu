type FetchFn = (endpoint: string, options?: RequestInit) => Promise<Response>;

// ── ENUMS ─────────────────────────────────────────────────────────────────────
export type EstadoPropiedad = 'disponible' | 'alquilado' | 'reservado' | 'fuera_de_servicio';
export type Amenity = 'PILETA' | 'GYM' | 'SUM' | 'PARRILLA' | 'SEGURIDAD_24H';
export type Disposicion = 'FRENTE' | 'CONTRAFRENTE' | 'LATERAL' | 'INTERNO';
export type Perimetro = 'ALAMBRADO' | 'CERCADO' | 'SIN_CIERRE';

// ── DTOs ──────────────────────────────────────────────────────────────────────
export interface DireccionPropiedadDTO {
  id?: number;
  calleRuta: string;
  alturaKm?: string;
  localidad: string;
  provincia: string;
  codigoPostal?: string;
}

export interface PropiedadDTO {
  id?: number;
  codigoRef: string;
  codigoCatastral?: string;
  estado: EstadoPropiedad;
  superficieTotal?: number;
  superficieCubierta?: number;
  direccion?: DireccionPropiedadDTO;
  dueniosIds?: number[];
}

export interface UnidadHabitacionalDTO extends PropiedadDTO {
  ambientesNum?: number;
  dormitoriosNum?: number;
  baniosNum?: number;
  mascotas?: boolean;
  aptoProfesional?: boolean;
  anioConstruccion?: number;
}

export interface CasaDTO extends UnidadHabitacionalDTO {
  plantasNum?: number;
  jardin?: boolean;
  cochera?: boolean;
  barrioCerrado?: boolean;
}

export interface DepartamentoDTO extends UnidadHabitacionalDTO {
  piso?: string;
  letraNumero?: string;
  expensasMonto?: number;
  disposicion?: Disposicion;
  amenities?: Amenity[];
}

export interface TerrenoDTO extends PropiedadDTO {
  aplicaRendimiento?: boolean;
  superficieProduccion?: number;
  perimetro?: Perimetro;
}

export type TipoProp = 'casa' | 'departamento' | 'terreno';

export interface PropiedadConTipo extends PropiedadDTO {
  tipoProp: TipoProp;
}

// ── CASAS ─────────────────────────────────────────────────────────────────────
export const getCasas = (fetchWithToken: FetchFn): Promise<CasaDTO[]> =>
  fetchWithToken('/casas').then(r => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.json().then(res => Array.isArray(res) ? res : (res?.data || []));
  });

export const getCasaById = (fetchWithToken: FetchFn, id: number): Promise<CasaDTO> =>
  fetchWithToken(`/casas/${id}`).then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); });

export const createCasa = (fetchWithToken: FetchFn, dto: CasaDTO): Promise<CasaDTO> =>
  fetchWithToken('/casas', { method: 'POST', body: JSON.stringify(dto) })
    .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); });

export const updateCasa = (fetchWithToken: FetchFn, id: number, dto: CasaDTO): Promise<CasaDTO> =>
  fetchWithToken(`/casas/${id}`, { method: 'PUT', body: JSON.stringify(dto) })
    .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); });

export const deleteCasa = (fetchWithToken: FetchFn, id: number): Promise<void> =>
  fetchWithToken(`/casas/${id}`, { method: 'DELETE' })
    .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); });

// ── DEPARTAMENTOS ─────────────────────────────────────────────────────────────
export const getDepartamentos = (fetchWithToken: FetchFn): Promise<DepartamentoDTO[]> =>
  fetchWithToken('/departamentos').then(r => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.json().then(res => Array.isArray(res) ? res : (res?.data || []));
  });

export const getDepartamentoById = (fetchWithToken: FetchFn, id: number): Promise<DepartamentoDTO> =>
  fetchWithToken(`/departamentos/${id}`).then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); });

export const createDepartamento = (fetchWithToken: FetchFn, dto: DepartamentoDTO): Promise<DepartamentoDTO> =>
  fetchWithToken('/departamentos', { method: 'POST', body: JSON.stringify(dto) })
    .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); });

export const updateDepartamento = (fetchWithToken: FetchFn, id: number, dto: DepartamentoDTO): Promise<DepartamentoDTO> =>
  fetchWithToken(`/departamentos/${id}`, { method: 'PUT', body: JSON.stringify(dto) })
    .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); });

export const deleteDepartamento = (fetchWithToken: FetchFn, id: number): Promise<void> =>
  fetchWithToken(`/departamentos/${id}`, { method: 'DELETE' })
    .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); });

// ── TERRENOS ──────────────────────────────────────────────────────────────────
export const getTerrenos = (fetchWithToken: FetchFn): Promise<TerrenoDTO[]> =>
  fetchWithToken('/terrenos').then(r => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.json().then(res => Array.isArray(res) ? res : (res?.data || []));
  });

export const getTerrenoById = (fetchWithToken: FetchFn, id: number): Promise<TerrenoDTO> =>
  fetchWithToken(`/terrenos/${id}`).then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); });

export const createTerreno = (fetchWithToken: FetchFn, dto: TerrenoDTO): Promise<TerrenoDTO> =>
  fetchWithToken('/terrenos', { method: 'POST', body: JSON.stringify(dto) })
    .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); });

export const updateTerreno = (fetchWithToken: FetchFn, id: number, dto: TerrenoDTO): Promise<TerrenoDTO> =>
  fetchWithToken(`/terrenos/${id}`, { method: 'PUT', body: JSON.stringify(dto) })
    .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); });

export const deleteTerreno = (fetchWithToken: FetchFn, id: number): Promise<void> =>
  fetchWithToken(`/terrenos/${id}`, { method: 'DELETE' })
    .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); });

// ── UNIFICADO ─────────────────────────────────────────────────────────────────
export const getAllPropiedades = async (fetchWithToken: FetchFn): Promise<PropiedadConTipo[]> => {
  const [casas, departamentos, terrenos] = await Promise.all([
    getCasas(fetchWithToken),
    getDepartamentos(fetchWithToken),
    getTerrenos(fetchWithToken),
  ]);
  return [
    ...casas.map(c => ({ ...c, tipoProp: 'casa' as TipoProp })),
    ...departamentos.map(d => ({ ...d, tipoProp: 'departamento' as TipoProp })),
    ...terrenos.map(t => ({ ...t, tipoProp: 'terreno' as TipoProp })),
  ];
};
