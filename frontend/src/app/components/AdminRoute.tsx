import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function AdminRoute() {
  const { user, isAuthenticated, isLoading } = useAuth0();

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

  // Verificar si está autenticado
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Leer roles del namespace personalizado
  const roles = user?.['https://tu-app.com/roles'] || [];
  const isAdmin = Array.isArray(roles) && roles.includes("ADMIN");

  if (!isAdmin) {
    // Si está autenticado pero no es admin, redirigimos también a "/login"
    // o se podría redirigir a una página de "Acceso Denegado".
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
