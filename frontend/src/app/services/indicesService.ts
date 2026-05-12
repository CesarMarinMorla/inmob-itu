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
