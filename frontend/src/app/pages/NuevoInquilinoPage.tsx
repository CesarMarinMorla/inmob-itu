import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Box,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  ToggleButtonGroup,
  ToggleButton,
  MenuItem,
  Grid,
  Snackbar,
  Alert,
  Breadcrumbs,
  Link,
} from '@mui/material';
import { Business, Person, ArrowBack } from '@mui/icons-material';
import { createInquilino } from '../data/mockData';

export default function NuevoInquilinoPage() {
  const navigate = useNavigate();
  const [tipo, setTipo] = useState<'persona' | 'empresa'>('persona');
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success',
  });

  const [primerNombre, setPrimerNombre] = useState('');
  const [segundoNombre, setSegundoNombre] = useState('');
  const [primerApellido, setPrimerApellido] = useState('');
  const [segundoApellido, setSegundoApellido] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState<'DNI' | 'CUIT' | 'CUIL' | 'Pasaporte'>('DNI');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [razonSocial, setRazonSocial] = useState('');
  const [cuit, setCuit] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [provincia, setProvincia] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');

  const provinciasArgentinas = [
    'Buenos Aires', 'CABA', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba',
    'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja',
    'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan',
    'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero',
    'Tierra del Fuego', 'Tucumán',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !telefono || !direccion || !provincia || !localidad) {
      setSnackbar({ open: true, message: 'Por favor complete todos los campos obligatorios', severity: 'error' });
      return;
    }

    if (tipo === 'persona' && (!primerNombre || !primerApellido || !numeroDocumento)) {
      setSnackbar({ open: true, message: 'Por favor complete nombre, apellido y documento', severity: 'error' });
      return;
    }

    if (tipo === 'empresa' && (!razonSocial || !cuit)) {
      setSnackbar({ open: true, message: 'Por favor complete razón social y CUIT', severity: 'error' });
      return;
    }

    createInquilino({
      tipo,
      primerNombre: tipo === 'persona' ? primerNombre : undefined,
      segundoNombre: tipo === 'persona' ? segundoNombre : undefined,
      primerApellido: tipo === 'persona' ? primerApellido : undefined,
      segundoApellido: tipo === 'persona' ? segundoApellido : undefined,
      tipoDocumento: tipo === 'persona' ? tipoDocumento : undefined,
      numeroDocumento: tipo === 'persona' ? numeroDocumento : undefined,
      fechaNacimiento: tipo === 'persona' ? fechaNacimiento : undefined,
      razonSocial: tipo === 'empresa' ? razonSocial : undefined,
      cuit: tipo === 'empresa' ? cuit : undefined,
      email,
      telefono,
      direccion,
      provincia,
      localidad,
      codigoPostal,
      inmuebles: [],
      propietarios: [],
    });

    setSnackbar({ open: true, message: 'Inquilino creado exitosamente', severity: 'success' });
    setTimeout(() => navigate('/inquilinos'), 1500);
  };

  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Link
          component="button"
          variant="body1"
          onClick={() => navigate('/inquilinos')}
          underline="hover"
          color="inherit"
          sx={{ cursor: 'pointer' }}
        >
          Inquilinos
        </Link>
        <Typography color="text.primary">Nuevo inquilino</Typography>
      </Breadcrumbs>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate('/inquilinos')}
          variant="outlined"
          aria-label="Volver a lista de inquilinos"
        >
          Volver
        </Button>
        <Typography variant="h4" component="h1">
          Nuevo Inquilino
        </Typography>
      </Box>

      <Card sx={{ maxWidth: 800 }}>
        <CardContent sx={{ p: 4 }}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="subtitle1" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
                Tipo de Inquilino
              </Typography>
              <ToggleButtonGroup
                value={tipo}
                exclusive
                onChange={(_, newTipo) => newTipo && setTipo(newTipo)}
                aria-label="Tipo de inquilino"
                fullWidth
              >
                <ToggleButton value="persona" aria-label="Persona física">
                  <Person sx={{ mr: 1 }} />
                  Persona Física
                </ToggleButton>
                <ToggleButton value="empresa" aria-label="Empresa">
                  <Business sx={{ mr: 1 }} />
                  Empresa
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            {tipo === 'persona' ? (
              <>
                <Typography variant="subtitle1" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
                  <Person sx={{ verticalAlign: 'middle', mr: 1 }} />
                  Nombres
                </Typography>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Primer nombre"
                      value={primerNombre}
                      onChange={(e) => setPrimerNombre(e.target.value)}
                      required
                      inputProps={{ 'aria-required': 'true' }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Segundo nombre"
                      value={segundoNombre}
                      onChange={(e) => setSegundoNombre(e.target.value)}
                    />
                  </Grid>
                </Grid>

                <Typography variant="subtitle1" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
                  <Person sx={{ verticalAlign: 'middle', mr: 1 }} />
                  Apellidos
                </Typography>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Primer apellido"
                      value={primerApellido}
                      onChange={(e) => setPrimerApellido(e.target.value)}
                      required
                      inputProps={{ 'aria-required': 'true' }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Segundo apellido"
                      value={segundoApellido}
                      onChange={(e) => setSegundoApellido(e.target.value)}
                    />
                  </Grid>
                </Grid>

                <Typography variant="subtitle1" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
                  Documento
                </Typography>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid size={{ xs: 12, sm: 4 }}>
                    <TextField
                      select
                      fullWidth
                      label="Tipo"
                      value={tipoDocumento}
                      onChange={(e) => setTipoDocumento(e.target.value as any)}
                      required
                    >
                      <MenuItem value="DNI">DNI</MenuItem>
                      <MenuItem value="CUIT">CUIT</MenuItem>
                      <MenuItem value="CUIL">CUIL</MenuItem>
                      <MenuItem value="Pasaporte">Pasaporte</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 8 }}>
                    <TextField
                      fullWidth
                      label="Número de documento"
                      value={numeroDocumento}
                      onChange={(e) => setNumeroDocumento(e.target.value)}
                      required
                      inputProps={{ 'aria-required': 'true' }}
                    />
                  </Grid>
                </Grid>

                <Typography variant="subtitle1" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
                  Fecha de Nacimiento
                </Typography>
                <TextField
                  fullWidth
                  type="date"
                  value={fechaNacimiento}
                  onChange={(e) => setFechaNacimiento(e.target.value)}
                  sx={{ mb: 3 }}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{
                    'aria-label': 'Fecha de nacimiento',
                  }}
                />
              </>
            ) : (
              <>
                <Typography variant="subtitle1" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
                  Datos de la Empresa
                </Typography>
                <TextField
                  fullWidth
                  label="Razón Social"
                  value={razonSocial}
                  onChange={(e) => setRazonSocial(e.target.value)}
                  required
                  sx={{ mb: 2 }}
                  inputProps={{ 'aria-required': 'true' }}
                />
                <TextField
                  fullWidth
                  label="CUIT"
                  value={cuit}
                  onChange={(e) => setCuit(e.target.value)}
                  placeholder="XX-XXXXXXXX-X"
                  required
                  sx={{ mb: 3 }}
                  inputProps={{ 'aria-required': 'true' }}
                />
              </>
            )}

            <Typography variant="subtitle1" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
              Información de Contacto
            </Typography>
            <TextField
              fullWidth
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{ mb: 2 }}
              inputProps={{ 'aria-required': 'true' }}
            />
            <TextField
              fullWidth
              label="Teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="+54 9 XXX XXX XXXX"
              required
              sx={{ mb: 3 }}
              inputProps={{ 'aria-required': 'true' }}
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
              sx={{ mb: 4 }}
            />

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
              <Button variant="outlined" onClick={() => navigate('/inquilinos')} size="large">
                Cancelar
              </Button>
              <Button type="submit" variant="contained" color="primary" size="large">
                Guardar Inquilino
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