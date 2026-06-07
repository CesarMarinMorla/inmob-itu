import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Container, Typography, Paper } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

export default function LoginPage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Elementos decorativos de fondo */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "50%",
          height: "50%",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.05)",
          filter: "blur(80px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          right: "-10%",
          width: "60%",
          height: "60%",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.08)",
          filter: "blur(100px)",
        }}
      />

      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        <Paper
          elevation={24}
          sx={{
            p: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 4,
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              backgroundColor: "#1976d2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 3,
              boxShadow: "0 4px 20px rgba(25, 118, 210, 0.4)",
            }}
          >
            <BusinessCenterIcon sx={{ fontSize: 40, color: "white" }} />
          </Box>

          <Typography
            component="h1"
            variant="h4"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
            textAlign="center"
          >
            CRM Inmobiliario
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            sx={{ mb: 4 }}
          >
            Iniciá sesión para acceder al panel de gestión de propiedades, dueños e inquilinos.
          </Typography>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            startIcon={<LockOutlinedIcon />}
            onClick={() => loginWithRedirect({
              authorizationParams: {
                audience: import.meta.env.VITE_AUTH0_AUDIENCE,
              }
            })}
            sx={{
              py: 1.5,
              fontSize: "1.1rem",
              textTransform: "none",
              borderRadius: 2,
              fontWeight: 600,
              boxShadow: "0 4px 14px 0 rgba(25, 118, 210, 0.39)",
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(25, 118, 210, 0.5)",
              },
            }}
          >
            Ingresar con Auth0
          </Button>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mt: 4, display: "block", textAlign: "center" }}
          >
            Acceso restringido solo para administradores.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
