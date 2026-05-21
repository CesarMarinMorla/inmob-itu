export interface ArglyIndiceDTO {
  fecha: string;
  valor: number;
}

export interface IndicesConsolidadosDTO {
  ipc: ArglyIndiceDTO;
  icl: ArglyIndiceDTO;
  fechaActualizacion: string;
  errorApi: boolean;
}

export interface IndiceDTO {
  id?: number;
  fecha: string;
  valor: number;
  tipo: string;
}

const API_INDICES_URL = 'http://localhost:8080/api/v1/indices';

export const getIndicesConsolidados = async (): Promise<IndicesConsolidadosDTO | null> => {
  try {
    const response = await fetch(API_INDICES_URL);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error al obtener índices consolidados:', error);
    return null;
  }
};

export const getIndices = async (): Promise<IndiceDTO[]> => {
  const response = await fetch(`${API_INDICES_URL}/lista`);
  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }
  return await response.json();
};

export const getUltimosIndices = async (): Promise<IndiceDTO> => {
  const response = await fetch(`${API_INDICES_URL}/ultimo`);
  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }
  return await response.json();
};
