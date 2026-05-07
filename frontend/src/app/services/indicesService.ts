// Servicio HTTP para los indices economicos (IPC, ICL).
// Sigue el mismo patron que personasService.ts: fetch nativo, try/catch,
// logueo en consola y retorno seguro (array vacio en caso de error)
// para que la UI nunca rompa por una falla de red o del backend.

export type TipoIndice = 'IPC' | 'ICL';

export type OrigenIndice = 'LIVE' | 'CACHE' | 'FALLBACK';

export interface Indice {
  tipo: TipoIndice;
  /** Puede ser null si Argly nunca respondio y no hay snapshot en BD. */
  valor: number | null;
  /** Fecha del valor del indice (ISO yyyy-MM-dd). Puede ser null. */
  fecha: string | null;
  /** Momento en el que el backend obtuvo o persistio el valor (ISO LocalDateTime). */
  ultimaActualizacion: string;
  origen: OrigenIndice;
}

const API_BASE_URL = 'http://localhost:8080/api/v1';
const API_INDICES_URL = `${API_BASE_URL}/indices`;

export const getIndices = async (): Promise<Indice[]> => {
  try {
    const response = await fetch(API_INDICES_URL);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error al obtener indices economicos:', error);
    return [];
  }
};

export const getIndicePorTipo = async (tipo: TipoIndice): Promise<Indice | null> => {
  try {
    const response = await fetch(`${API_INDICES_URL}/${tipo}`);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error al obtener indice ${tipo}:`, error);
    return null;
  }
};
