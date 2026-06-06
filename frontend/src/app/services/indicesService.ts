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

type FetchFn = (endpoint: string, options?: RequestInit) => Promise<Response>;

export const getIndicesConsolidados = async (fetchWithToken: FetchFn): Promise<IndicesConsolidadosDTO | null> => {
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

export const getIndices = async (fetchWithToken: FetchFn): Promise<IndiceDTO[]> => {
  const response = await fetchWithToken('/indices/lista');
  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }
  return await response.json();
};

export const getUltimosIndices = async (fetchWithToken: FetchFn): Promise<IndiceDTO> => {
  const response = await fetchWithToken('/indices/ultimo');
  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }
  return await response.json();
};
