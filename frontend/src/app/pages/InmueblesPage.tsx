import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Card,
  CardContent,
  CardActions,
  Chip,
  Grid,
} from '@mui/material';
import { Search, Add, Home } from '@mui/icons-material';
import { getInmuebles, type Inmueble } from '../data/mockData';

export default function InmueblesPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const inmuebles = getInmuebles();

  const filteredInmuebles = inmuebles.filter((inm) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      inm.direccion.toLowerCase().includes(searchLower) ||
      inm.localidad.toLowerCase().includes(searchLower) ||
      inm.tipo.toLowerCase().includes(searchLower)
    );
  });

  const getEstadoColor = (estado: string): 'success' | 'warning' | 'default' => {
    switch (estado) {
      case 'Disponible':
        return 'success';
      case 'Reservado':
        return 'warning';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3, color: 'text.primary' }}>
        Inmuebles
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          placeholder="Buscar inmuebles..."
          variant="outlined"
          size="medium"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ flexGrow: 1, maxWidth: 400, bgcolor: 'background.paper' }}
          inputProps={{
            'aria-label': 'Buscar inmuebles',
          }}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={() => navigate('/inmuebles/nuevo')}
          sx={{ height: 56 }}
        >
          Nuevo Inmueble
        </Button>
      </Box>

      {filteredInmuebles.length === 0 ? (
        <Card>
          <CardContent>
            <Typography variant="body1" color="text.secondary" align="center" sx={{ py: 4 }}>
              {searchTerm ? 'No se encontraron inmuebles' : 'No hay inmuebles registrados'}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Grid container spacing={3}>
          {filteredInmuebles.map((inm) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={inm.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <Box
                  sx={{
                    height: 180,
                    bgcolor: 'action.hover',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Home sx={{ fontSize: 80, color: 'text.secondary' }} />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={inm.estado}
                      size="small"
                      color={getEstadoColor(inm.estado)}
                      sx={{ mb: 1 }}
                    />
                    <Chip
                      label={inm.tipo}
                      size="small"
                      variant="outlined"
                      sx={{ ml: 1 }}
                    />
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {inm.direccion}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {inm.localidad}, {inm.provincia}
                  </Typography>
                  {inm.descripcion && (
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      {inm.descripcion}
                    </Typography>
                  )}
                  <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                    $ {inm.precio.toLocaleString('es-AR')} ARS
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="outlined" fullWidth>
                    Ver Detalles
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}