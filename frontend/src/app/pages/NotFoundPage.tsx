import { useNavigate } from 'react-router';
import { Box, Typography, Button } from '@mui/material';
import { Home } from '@mui/icons-material';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100%',
        textAlign: 'center',
        gap: 3,
      }}
    >
      <Typography variant="h1" component="h1" sx={{ fontSize: '6rem', fontWeight: 700, color: 'primary.main' }}>
        404
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        Página no encontrada
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Lo sentimos, la página que estás buscando no existe.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Home />}
        onClick={() => navigate('/')}
        size="large"
      >
        Volver al Inicio
      </Button>
    </Box>
  );
}
