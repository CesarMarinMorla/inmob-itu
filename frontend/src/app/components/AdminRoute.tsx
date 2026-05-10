import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useCurrentUser } from "../hooks/useCurrentUser";

export default function AdminRoute() {
  const { isAuthenticated, isLoading: isAuth0Loading } = useAuth0();
  const { usuario, isLoading: isUserLoading } = useCurrentUser();

  const isLoading = isAuth0Loading || isUserLoading;

  if (isLoading) {
    return (
      <Box 
        display="flex" 
        flexDirection="column"
        justifyContent="center" 
        alignItems="center" 
        minHeight="100vh"
        bgcolor="#f5f5f5"
      >
        <CircularProgress size={60} thickness={4} />
        <Typography variant="h6" color="textSecondary" sx={{ mt: 2 }}>
          Verificando sesión...
        </Typography>
      </Box>
    );
  }

  // Verificar si está autenticado en Auth0
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Verificar el rol obtenido del backend
  const isAdmin = usuario?.nivelAcceso === "ADMIN";

  if (!isAdmin) {
    // Pantalla de Acceso Denegado
    return (
      <Box 
        display="flex" 
        flexDirection="column"
        justifyContent="center" 
        alignItems="center" 
        minHeight="100vh"
        bgcolor="#f5f5f5"
        p={3}
      >
        <Typography variant="h4" color="error" gutterBottom fontWeight="bold">
          Acceso Denegado
        </Typography>
        <Typography variant="body1" color="textSecondary" textAlign="center">
          No tenés permisos de administrador para acceder a esta sección.
        </Typography>
      </Box>
    );
  }

  return <Outlet />;
}
