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
