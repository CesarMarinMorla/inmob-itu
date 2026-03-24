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
  IconButton,
  Radio,
  FormControlLabel,
} from '@mui/material';
import { Business, Person, ArrowBack, AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import {
  createPersonaFisica,
  createPersonaJuridica,
  type Telefono,
  type Mail,
  type PersonaFisica,
  type PersonaJuridica,
} from '../services/personasService';

export default function NuevoPropietarioPage() {
  const navigate = useNavigate();
  const [tipo, setTipo] = useState<'persona' | 'empresa'>('persona');
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success',
  });

  // Campos persona física
  const [primerNombre, setPrimerNombre] = useState('');
  const [segundoNombre, setSegundoNombre] = useState('');
  const [primerApellido, setPrimerApellido] = useState('');
  const [segundoApellido, setSegundoApellido] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState<'DNI' | 'CUIT' | 'CUIL' | 'Pasaporte'>('DNI');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');

  // Campos persona jurídica
  const [razonSocial, setRazonSocial] = useState('');
  const [nombreNegocio, setNombreNegocio] = useState('');
  const [cuit, setCuit] = useState('');
  const [fechaConstitucion, setFechaConstitucion] = useState('');

  // Campos comunes de contacto
  const [telefonos, setTelefonos] = useState<Telefono[]>([{ numero: '', tipo: 'CELULAR' }]);
  const [mails, setMails] = useState<Mail[]>([{ email: '', tipo: 'PERSONAL', esPrincipal: true }]);

  // Dirección
  const [calle, setCalle] = useState('');
  const [altura, setAltura] = useState('');
  const [piso, setPiso] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [barrio, setBarrio] = useState('');
  const [provincia, setProvincia] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [tipoDomicilio, setTipoDomicilio] = useState<'REAL' | 'LEGAL' | 'CONSTITUIDO' | 'LABORAL' | 'SOCIAL' | 'FISCAL' | 'SUCURSAL'>('REAL');

  const provinciasArgentinas = [
    'Buenos Aires', 'CABA', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba',
    'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja',
    'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan',
    'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero',
    'Tierra del Fuego', 'Tucumán',
  ];

  const handleAddTelefono = () => {
    setTelefonos([...telefonos, { numero: '', tipo: 'CELULAR' }]);
  };

  const handleRemoveTelefono = (index: number) => {
    setTelefonos(telefonos.filter((_, i) => i !== index));
  };

  const handleTelefonoChange = (index: number, field: keyof Telefono, value: string) => {
    const newTelefonos = [...telefonos];
    newTelefonos[index] = { ...newTelefonos[index], [field]: value };
    setTelefonos(newTelefonos);
  };

  const handleAddMail = () => {
    setMails([...mails, { email: '', tipo: 'PERSONAL', esPrincipal: mails.length === 0 }]);
  };

  const handleRemoveMail = (index: number) => {
    const newMails = mails.filter((_, i) => i !== index);
    if (mails[index].esPrincipal && newMails.length > 0) {
      newMails[0].esPrincipal = true;
    }
    setMails(newMails);
  };

  const handleMailChange = (index: number, field: keyof Mail, value: string | boolean) => {
    const newMails = [...mails];
    if (field === 'esPrincipal' && value === true) {
      newMails.forEach(m => m.esPrincipal = false);
    }
    newMails[index] = { ...newMails[index], [field]: value };
    setMails(newMails);
  };

  const buildDireccion = () => ({
    calle,
    altura,
    piso,
    departamento,
    barrio,
    localidad,
    provincia,
    codigoPostal,
    tipoDomicilio,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (tipo === 'persona') {
      if (!primerNombre || !primerApellido || !numeroDocumento) {
        setSnackbar({ open: true, message: 'Por favor complete nombre, apellido y documento', severity: 'error' });
        return;
      }
      const personaData: PersonaFisica = {
        primerNombre,
        segundoNombre,
        primerApellido,
        segundoApellido,
        tipoDocumento,
        numDocumento: numeroDocumento,
        fechaNacimiento,
        telefonos: telefonos.filter(t => t.numero.trim() !== ''),
        mails: mails.filter(m => m.email.trim() !== ''),
        direcciones: [buildDireccion()],
      };
      const result = await createPersonaFisica(personaData);
      if (result) {
        setSnackbar({ open: true, message: 'Propietario creado exitosamente', severity: 'success' });
        setTimeout(() => navigate('/propietarios'), 1500);
      } else {
        setSnackbar({ open: true, message: 'Error al comunicarse con el servidor', severity: 'error' });
      }
    } else {
      if (!razonSocial || !cuit) {
        setSnackbar({ open: true, message: 'Por favor complete la razón social y el CUIT', severity: 'error' });
        return;
      }
      const empresaData: PersonaJuridica = {
        razonSocial,
        nombreNegocio: nombreNegocio || undefined,
        cuit,
        fechaConstitucion,
        telefonos: telefonos.filter(t => t.numero.trim() !== ''),
        mails: mails.filter(m => m.email.trim() !== ''),
        direcciones: [buildDireccion()],
      };
      const result = await createPersonaJuridica(empresaData);
      if (result) {
        setSnackbar({ open: true, message: 'Empresa creada exitosamente', severity: 'success' });
        setTimeout(() => navigate('/propietarios'), 1500);
      } else {
        setSnackbar({ open: true, message: 'Error al comunicarse con el servidor', severity: 'error' });
      }
    }
  };

  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Link
          component="button"
          variant="body1"
          onClick={() => navigate('/propietarios')}
          underline="hover"
          color="inherit"
          sx={{ cursor: 'pointer' }}
        >
          Propietarios
        </Link>
        <Typography color="text.primary">Nuevo propietario</Typography>
      </Breadcrumbs>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate('/propietarios')}
          variant="outlined"
          aria-label="Volver a lista de propietarios"
        >
          Volver
        </Button>
        <Typography variant="h4" component="h1">
          Nuevo Propietario
        </Typography>
      </Box>

      <Card sx={{ maxWidth: 800 }}>
        <CardContent sx={{ p: 4 }}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="subtitle1" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
                Tipo de Propietario
              </Typography>
              <ToggleButtonGroup
                value={tipo}
                exclusive
                onChange={(_, newTipo) => {
                  if (newTipo) {
                    setTipo(newTipo);
                    setTipoDomicilio(newTipo === 'persona' ? 'REAL' : 'SOCIAL');
                  }
                }}
                aria-label="Tipo de propietario"
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
                  inputProps={{ 'aria-label': 'Fecha de nacimiento' }}
                />
              </>
            ) : (
              <>
                <Typography variant="subtitle1" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
                  <Business sx={{ verticalAlign: 'middle', mr: 1 }} />
                  Datos de la Empresa
                </Typography>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Razón Social"
                      value={razonSocial}
                      onChange={(e) => setRazonSocial(e.target.value)}
                      required
                      inputProps={{ 'aria-required': 'true' }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Nombre comercial (opcional)"
                      value={nombreNegocio}
                      onChange={(e) => setNombreNegocio(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="CUIT"
                      value={cuit}
                      onChange={(e) => setCuit(e.target.value)}
                      placeholder="XX-XXXXXXXX-X"
                      required
                      inputProps={{ 'aria-required': 'true' }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      type="date"
                      label="Fecha de Constitución"
                      value={fechaConstitucion}
                      onChange={(e) => setFechaConstitucion(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      inputProps={{ 'aria-label': 'Fecha de constitución' }}
                    />
                  </Grid>
                </Grid>
              </>
            )}

            <Typography variant="subtitle1" gutterBottom sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
              Información de Contacto
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography variant="subtitle2" gutterBottom sx={{ color: 'text.secondary' }}>Teléfonos</Typography>
              {telefonos.map((tel, index) => (
                <Grid container spacing={2} sx={{ mb: 2 }} key={`tel-${index}`}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Número de teléfono"
                      value={tel.numero}
                      onChange={(e) => handleTelefonoChange(index, 'numero', e.target.value)}
                      placeholder="+54 9 XXX XXX XXXX"
                      required={index === 0}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 4 }}>
                    <TextField
                      select
                      fullWidth
                      label="Tipo"
                      value={tel.tipo}
                      onChange={(e) => handleTelefonoChange(index, 'tipo', e.target.value as 'CELULAR' | 'FIJO')}
                    >
                      <MenuItem value="CELULAR">Celular</MenuItem>
                      <MenuItem value="FIJO">Fijo</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 2 }} sx={{ display: 'flex', alignItems: 'center' }}>
                    {index > 0 && (
                      <IconButton color="error" onClick={() => handleRemoveTelefono(index)}>
                        <RemoveCircleOutline />
                      </IconButton>
                    )}
                    {index === telefonos.length - 1 && (
                      <IconButton color="primary" onClick={handleAddTelefono}>
                        <AddCircleOutline />
                      </IconButton>
                    )}
                  </Grid>
                </Grid>
              ))}
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="subtitle2" gutterBottom sx={{ color: 'text.secondary' }}>Mails</Typography>
              {mails.map((mail, index) => (
                <Grid container spacing={2} sx={{ mb: 2 }} key={`mail-${index}`}>
                  <Grid size={{ xs: 12, sm: 5 }}>
                    <TextField
                      fullWidth
                      type="email"
                      label="Correo electrónico"
                      value={mail.email}
                      onChange={(e) => handleMailChange(index, 'email', e.target.value)}
                      required={index === 0}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 3 }}>
                    <TextField
                      select
                      fullWidth
                      label="Tipo"
                      value={mail.tipo}
                      onChange={(e) => handleMailChange(index, 'tipo', e.target.value as 'PERSONAL' | 'LABORAL')}
                    >
                      <MenuItem value="PERSONAL">Personal</MenuItem>
                      <MenuItem value="LABORAL">Laboral</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 2 }} sx={{ display: 'flex', alignItems: 'center' }}>
                    <FormControlLabel
                      value="principal"
                      control={<Radio checked={mail.esPrincipal} onChange={() => handleMailChange(index, 'esPrincipal', true)} />}
                      label="Principal"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 2 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    {index > 0 && (
                      <IconButton color="error" onClick={() => handleRemoveMail(index)}>
                        <RemoveCircleOutline />
                      </IconButton>
                    )}
                    {index === mails.length - 1 && (
                      <IconButton color="primary" onClick={handleAddMail}>
                        <AddCircleOutline />
                      </IconButton>
                    )}
                  </Grid>
                </Grid>
              ))}
            </Box>

            <Typography variant="subtitle1" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
              Dirección
            </Typography>
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Calle"
                  value={calle}
                  onChange={(e) => setCalle(e.target.value)}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 3 }}>
                <TextField
                  fullWidth
                  label="Altura"
                  value={altura}
                  onChange={(e) => setAltura(e.target.value)}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 3 }}>
                <TextField
                  select
                  fullWidth
                  label="Tipo de Domicilio"
                  value={tipoDomicilio}
                  onChange={(e) => setTipoDomicilio(e.target.value as any)}
                >
                  {tipo === 'persona' ? [
                    <MenuItem key="REAL" value="REAL">Real</MenuItem>,
                    <MenuItem key="LEGAL" value="LEGAL">Legal</MenuItem>,
                    <MenuItem key="CONSTITUIDO" value="CONSTITUIDO">Constituido</MenuItem>,
                    <MenuItem key="LABORAL" value="LABORAL">Laboral</MenuItem>
                  ] : [
                    <MenuItem key="SOCIAL" value="SOCIAL">Social</MenuItem>,
                    <MenuItem key="FISCAL" value="FISCAL">Fiscal</MenuItem>,
                    <MenuItem key="SUCURSAL" value="SUCURSAL">Sucursal</MenuItem>
                  ]}
                </TextField>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField
                  fullWidth
                  label="Piso"
                  value={piso}
                  onChange={(e) => setPiso(e.target.value)}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField
                  fullWidth
                  label="Departamento"
                  value={departamento}
                  onChange={(e) => setDepartamento(e.target.value)}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField
                  fullWidth
                  label="Barrio"
                  value={barrio}
                  onChange={(e) => setBarrio(e.target.value)}
                />
              </Grid>
            </Grid>

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
              <Button variant="outlined" onClick={() => navigate('/propietarios')} size="large">
                Cancelar
              </Button>
              <Button type="submit" variant="contained" color="primary" size="large">
                Guardar Propietario
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