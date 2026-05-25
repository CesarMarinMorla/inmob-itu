import { useState, useEffect } from 'react';
import { useAuthClient } from '../services/authClient';
import { getIndicesConsolidados, IndicesConsolidadosDTO } from '../services/indicesService';

export const useIndices = () => {
  const [data, setData] = useState<IndicesConsolidadosDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { fetchWithToken } = useAuthClient();

  useEffect(() => {
    const fetchIndices = async () => {
      setLoading(true);
      setError(null);
      
      const result = await getIndicesConsolidados(fetchWithToken);
      
      if (result) {
        setData(result);
      } else {
        setError('No se pudieron obtener los índices económicos en este momento.');
      }
      
      setLoading(false);
    };

    fetchIndices();
  }, [fetchWithToken]);

  return { data, loading, error };
};
