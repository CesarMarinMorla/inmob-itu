import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Box,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  MenuItem,
  Grid,
  Snackbar,
  Alert,
  Breadcrumbs,
  Link,
  Autocomplete,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { createInmueble, getPropietarios, type Propietario } from '../data/mockData';

export default function NuevoInmueblePage() {
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success',
  });

  const [direccion, setDireccion] = useState('');
  const [provincia, setProvincia] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [tipo, setTipo] = useState<'Casa' | 'Departamento' | 'Local' | 'Terreno' | 'Oficina'>('Casa');
  const [estado, setEstado] = useState<'Disponible' | 'Alquilado' | 'Reservado'>('Disponible');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [propietarioSeleccionado, setPropietarioSeleccionado] = useState<Propietario | null>(null);

  const provinciasArgentinas = [
    'Buenos Aires', 'CABA', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba',
    'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja',
    'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan',
    'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero',
    'Tierra del Fuego', 'Tucumán',
  ];

  const propietarios = getPropietarios();

  const getNombrePropietario = (propietario: Propietario): string => {
    if (propietario.tipo === 'persona') {
      return `${propietario.primerNombre || ''} ${propietario.primerApellido || ''}`.trim();
    }
    return propietario.razonSocial || '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!direccion || !provincia || !localidad || !precio) {
      setSnackbar({ open: true, message: 'Por favor complete todos los campos obligatorios', severity: 'error' });
      return;
    }

    createInmueble({
      direccion,
      provincia,
      localidad,
      codigoPostal,
      tipo,
      estado,
      precio: parseFloat(precio),
      propietarioId: propietarioSeleccionado?.id,
      descripcion,
    });

    setSnackbar({ open: true, message: 'Inmueble creado exitosamente', severity: 'success' });
    setTimeout(() => navigate('/inmuebles'), 1500);
  };

  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Link
          component="button"
          variant="body1"
          onClick={() => navigate('/inmuebles')}
          underline="hover"
          color="inherit"
          sx={{ cursor: 'pointer' }}
        >
          Inmuebles
        </Link>
        <Typography color="text.primary">Nuevo inmueble</Typography>
      </Breadcrumbs>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate('/inmuebles')}
          variant="outlined"
          aria-label="Volver a lista de inmuebles"
        >
          Volver
        </Button>
        <Typography variant="h4" component="h1">
          Nuevo Inmueble
        </Typography>
      </Box>

      <Card sx={{ maxWidth: 800 }}>
        <CardContent sx={{ p: 4 }}>
          <form onSubmit={handleSubmit}>
            <Typography variant="subtitle1" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
              Propietario
            </Typography>
            <Autocomplete
              options={propietarios}
              getOptionLabel={(option) => getNombrePropietario(option)}
              value={propietarioSeleccionado}
              onChange={(_, newValue) => setPropietarioSeleccionado(newValue)}
              renderInput={(params) => (
                <TextField {...params} label="Seleccionar propietario (opcional)" />
              )}
              renderOption={(props, option) => (
                <li {...props} key={option.id}>
                  <Box>
                    <Typography variant="body1">{getNombrePropietario(option)}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {option.email}
                    </Typography>
                  </Box>
                </li>
              )}
              sx={{ mb: 3 }}
            />

            <Typography variant="subtitle1" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
              Dirección
            </Typography>
            <TextField
              fullWidth
              label="Calle y número"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              required
              sx={{ mb: 2 }}
              inputProps={{ 'aria-required': 'true' }}
            />
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  select
                  fullWidth
                  label="Provincia"
                  value={provincia}
                  onChange={(e) => setProvincia(e.target.value)}
                  required
                >
                  {provinciasArgentinas.map((prov) => (
                    <MenuItem key={prov} value={prov}>
                      {prov}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Localidad"
                  value={localidad}
                  onChange={(e) => setLocalidad(e.target.value)}
                  required
                  inputProps={{ 'aria-required': 'true' }}
                />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              label="Código Postal"
              value={codigoPostal}
              onChange={(e) => setCodigoPostal(e.target.value)}
              sx={{ mb: 3 }}
            />

            <Typography variant="subtitle1" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
              Información del Inmueble
            </Typography>
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  select
                  fullWidth
                  label="Tipo"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value as any)}
                  required
                >
                  <MenuItem value="Casa">Casa</MenuItem>
                  <MenuItem value="Departamento">Departamento</MenuItem>
                  <MenuItem value="Local">Local</MenuItem>
                  <MenuItem value="Terreno">Terreno</MenuItem>
                  <MenuItem value="Oficina">Oficina</MenuItem>
                </TextField>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  select
                  fullWidth
                  label="Estado"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value as any)}
                  required
                >
                  <MenuItem value="Disponible">Disponible</MenuItem>
                  <MenuItem value="Alquilado">Alquilado</MenuItem>
                  <MenuItem value="Reservado">Reservado</MenuItem>
                </TextField>
              </Grid>
            </Grid>
            <TextField
              fullWidth
              label="Precio (ARS)"
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              required
              sx={{ mb: 2 }}
              inputProps={{ 'aria-required': 'true', min: 0 }}
            />
            <TextField
              fullWidth
              label="Descripción"
              multiline
              rows={4}
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              sx={{ mb: 4 }}
            />

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
              <Button variant="outlined" onClick={() => navigate('/inmuebles')} size="large">
                Cancelar
              </Button>
              <Button type="submit" variant="contained" color="primary" size="large">
                Guardar Inmueble
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}