import { useCallback } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1';

export const useAuthClient = () => {
  const { getAccessTokenSilently, loginWithRedirect } = useAuth0();

  const fetchWithToken = useCallback(async (endpoint: string, options: RequestInit = {}) => {
    try {
      const token = await getAccessTokenSilently();
      
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...options.headers,
      };

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers,
      });

      return response;
    } catch (error) {
      console.error('Error getting token or fetching:', error);
      loginWithRedirect();
      throw error;
    }
  }, [getAccessTokenSilently, loginWithRedirect]);

  return { fetchWithToken };
};
