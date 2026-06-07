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

export const getIndicesConsolidados = async (fetchWithToken: (endpoint: string, options?: RequestInit) => Promise<Response>): Promise<IndicesConsolidadosDTO | null> => {
  try {
    const response = await fetchWithToken('/indices');
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error al obtener índices consolidados:', error);
    return null;
  }
};

export interface IndiceHistorico {
  id: number;
  fecha: string;
  valor: number;
  tipo: string;
}

export const getIndices = async (): Promise<IndiceHistorico[]> => {
  const response = await fetch('/api/v1/indices/historico');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const getUltimosIndices = async (): Promise<IndiceHistorico> => {
  const response = await fetch('/api/v1/indices/latest');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};
