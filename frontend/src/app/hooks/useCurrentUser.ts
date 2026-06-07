import { useState, useEffect } from 'react';
import { useAuthClient } from '../services/authClient';
import { useAuth0 } from '@auth0/auth0-react';

export interface UsuarioDTO {
  id: number;
  sub: string;
  nivelAcceso: string;
  personaId: number | null;
}

export const useCurrentUser = () => {
  const [usuario, setUsuario] = useState<UsuarioDTO | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  
  const { fetchWithToken } = useAuthClient();
  const { isAuthenticated, isLoading: isAuth0Loading } = useAuth0();

  useEffect(() => {
    let isMounted = true;

    const fetchUser = async () => {
      if (!isAuthenticated) {
        if (isMounted) setIsLoading(false);
        return;
      }

      try {
        if (isMounted) setIsLoading(true);
        
        // 1. POST to register the user if it's the first time
        await fetchWithToken('/me', { method: 'POST' });
        
        // 2. GET to fetch profile with nivelAcceso
        const response = await fetchWithToken('/me', { method: 'GET' });
        
        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }

        const data: UsuarioDTO = await response.json();
        if (isMounted) {
          setUsuario(data);
          setIsError(false);
        }
      } catch (error) {
        console.error('Error fetching current user:', error);
        if (isMounted) {
          setIsError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    if (!isAuth0Loading) {
      fetchUser();
    }

    return () => {
      isMounted = false;
    };
  }, [isAuthenticated, isAuth0Loading, fetchWithToken]);

  return { 
    usuario, 
    isLoading: isLoading || isAuth0Loading, 
    isError 
  };
};
