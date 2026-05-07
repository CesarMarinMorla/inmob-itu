import { Box, Card, CardContent, Typography, CircularProgress, Alert, Chip, Divider } from '@mui/material';
import { useIndices } from '../hooks/useIndices';

export default function IndicesWidget() {
  const { data, loading, error } = useIndices();

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <CircularProgress size={30} />
      </Box>
    );
  }

  if (error && !data) {
    return (
      <Box sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (!data) return null;

  const formatDate = (dateString: string) => {
    try {
      if (dateString === 'No disponible') return dateString;
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('es-AR', {
        day: '2-digit', month: '2-digit', year: 'numeric'
      }).format(date);
    } catch (e) {
      return dateString;
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 900, mx: 'auto', mb: 4 }}>
      {data.errorApi && (
        <Alert severity="warning" sx={{ mb: 2 }}>
          Atención: No se pudo conectar con el proveedor de índices (Argly). Mostrando los últimos valores guardados.
        </Alert>
      )}
      
      <Card sx={{ 
        boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.08)',
        borderRadius: 2,
        background: 'linear-gradient(to right bottom, #ffffff, #fcfcfc)'
      }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" component="h2" sx={{ fontWeight: 600, color: 'text.primary' }}>
              Índices Económicos Actuales
            </Typography>
            <Chip 
              label={`Últ. actualización: ${formatDate(data.fechaActualizacion)}`} 
              size="small" 
              color={data.errorApi ? "warning" : "success"}
              variant="outlined" 
            />
          </Box>
          
          <Divider sx={{ mb: 3 }} />

          <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'space-around' }}>
            
            {/* IPC Section */}
            <Box sx={{ textAlign: 'center', minWidth: 150 }}>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>
                IPC
              </Typography>
              <Typography variant="h4" component="p" sx={{ fontWeight: 700, color: 'primary.main' }}>
                {data.ipc.valor}
              </Typography>
              <Typography variant="caption" color="text.secondary" display="block">
                Ref: {formatDate(data.ipc.fecha)}
              </Typography>
            </Box>

            {/* Divider for larger screens */}
            <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />

            {/* ICL Section */}
            <Box sx={{ textAlign: 'center', minWidth: 150 }}>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>
                ICL
              </Typography>
              <Typography variant="h4" component="p" sx={{ fontWeight: 700, color: 'secondary.main' }}>
                {data.icl.valor}
              </Typography>
              <Typography variant="caption" color="text.secondary" display="block">
                Ref: {formatDate(data.icl.fecha)}
              </Typography>
            </Box>
            
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
