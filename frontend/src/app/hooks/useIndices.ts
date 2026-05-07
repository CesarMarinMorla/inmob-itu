// Hook custom para consumir el endpoint /api/v1/indices.
// Se evita meter React Query / SWR para mantener consistencia con el resto del
// proyecto, que usa fetch + useState + useEffect directamente.

import { useCallback, useEffect, useState } from 'react';
import { getIndices, type Indice } from '../services/indicesService';

interface UseIndicesResult {
  data: Indice[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useIndices = (): UseIndicesResult => {
  const [data, setData] = useState<Indice[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getIndices();
      if (result.length === 0) {
        // El service traga el error y devuelve []: lo interpretamos como caida del backend.
        setError('No se pudieron obtener los indices economicos');
      }
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};
