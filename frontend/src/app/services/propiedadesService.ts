const BASE_URL = 'http://localhost:8080/api/v1';

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

// ── Helper ────────────────────────────────────────────────────────────────────
async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) throw new Error(`Error HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}

// ── CASAS ─────────────────────────────────────────────────────────────────────
export const getCasas = (): Promise<CasaDTO[]> =>
  fetch(`${BASE_URL}/casas`).then(handleResponse);

export const getCasaById = (id: number): Promise<CasaDTO> =>
  fetch(`${BASE_URL}/casas/${id}`).then(handleResponse);

export const createCasa = (dto: CasaDTO): Promise<CasaDTO> =>
  fetch(`${BASE_URL}/casas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dto),
  }).then(handleResponse);

export const updateCasa = (id: number, dto: CasaDTO): Promise<CasaDTO> =>
  fetch(`${BASE_URL}/casas/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dto),
  }).then(handleResponse);

export const deleteCasa = (id: number): Promise<void> =>
  fetch(`${BASE_URL}/casas/${id}`, { method: 'DELETE' }).then((res) => {
    if (!res.ok) throw new Error(`Error HTTP ${res.status}`);
  });

// ── DEPARTAMENTOS ─────────────────────────────────────────────────────────────
export const getDepartamentos = (): Promise<DepartamentoDTO[]> =>
  fetch(`${BASE_URL}/departamentos`).then(handleResponse);

export const getDepartamentoById = (id: number): Promise<DepartamentoDTO> =>
  fetch(`${BASE_URL}/departamentos/${id}`).then(handleResponse);

export const createDepartamento = (dto: DepartamentoDTO): Promise<DepartamentoDTO> =>
  fetch(`${BASE_URL}/departamentos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dto),
  }).then(handleResponse);

export const updateDepartamento = (id: number, dto: DepartamentoDTO): Promise<DepartamentoDTO> =>
  fetch(`${BASE_URL}/departamentos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dto),
  }).then(handleResponse);

export const deleteDepartamento = (id: number): Promise<void> =>
  fetch(`${BASE_URL}/departamentos/${id}`, { method: 'DELETE' }).then((res) => {
    if (!res.ok) throw new Error(`Error HTTP ${res.status}`);
  });

// ── TERRENOS ──────────────────────────────────────────────────────────────────
export const getTerrenos = (): Promise<TerrenoDTO[]> =>
  fetch(`${BASE_URL}/terrenos`).then(handleResponse);

export const getTerrenoById = (id: number): Promise<TerrenoDTO> =>
  fetch(`${BASE_URL}/terrenos/${id}`).then(handleResponse);

export const createTerreno = (dto: TerrenoDTO): Promise<TerrenoDTO> =>
  fetch(`${BASE_URL}/terrenos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dto),
  }).then(handleResponse);

export const updateTerreno = (id: number, dto: TerrenoDTO): Promise<TerrenoDTO> =>
  fetch(`${BASE_URL}/terrenos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dto),
  }).then(handleResponse);

export const deleteTerreno = (id: number): Promise<void> =>
  fetch(`${BASE_URL}/terrenos/${id}`, { method: 'DELETE' }).then((res) => {
    if (!res.ok) throw new Error(`Error HTTP ${res.status}`);
  });

// ── UNIFICADO ─────────────────────────────────────────────────────────────────
export const getAllPropiedades = async (): Promise<PropiedadConTipo[]> => {
  const [casas, departamentos, terrenos] = await Promise.all([
    getCasas(),
    getDepartamentos(),
    getTerrenos(),
  ]);
  return [
    ...casas.map((c) => ({ ...c, tipoProp: 'casa' as TipoProp })),
    ...departamentos.map((d) => ({ ...d, tipoProp: 'departamento' as TipoProp })),
    ...terrenos.map((t) => ({ ...t, tipoProp: 'terreno' as TipoProp })),
  ];
};
