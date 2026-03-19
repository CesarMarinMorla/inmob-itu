import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
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
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Autocomplete,
  Radio,
  FormControlLabel,
} from '@mui/material';
import { Business, Person, ArrowBack, Delete, Add, AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import {
  getPersonaFisicaByDni,
  updatePersonaFisica,
  type Telefono,
  type Mail,
  type Direccion,
} from '../services/personasService';
import {
  getPropietariosByInquilinoId,
  getPropietarios,
  linkPropietarioToInquilino,
  unlinkInquilinoFromPropietario,
  type Propietario,
} from '../data/mockData';

export default function EditarInquilinoPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [tipo, setTipo] = useState<'persona' | 'empresa'>('persona');
  const [personaId, setPersonaId] = useState<number | string | null>(null);
  const [linkDialogOpen, setLinkDialogOpen] = useState(false);
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
  // const [email, setEmail] = useState(''); // Removed
  const [telefonos, setTelefonos] = useState<Telefono[]>([{ numero: '', tipo: 'CELULAR' }]);
  const [mails, setMails] = useState<Mail[]>([{ email: '', tipo: 'PERSONAL', esPrincipal: true }]);

  const [calle, setCalle] = useState('');
  const [altura, setAltura] = useState('');
  const [piso, setPiso] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [barrio, setBarrio] = useState('');
  const [provincia, setProvincia] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [tipoDomicilio, setTipoDomicilio] = useState<'PARTICULAR' | 'LABORAL' | 'OTRO'>('PARTICULAR');

  const [propietariosVinculados, setPropietariosVinculados] = useState<Propietario[]>([]);
  const [selectedPropietario, setSelectedPropietario] = useState<Propietario | null>(null);

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

  useEffect(() => {
    const loadInquilino = async () => {
      if (id) {
        const inquilino = await getPersonaFisicaByDni(id);
        if (inquilino) {
          if (inquilino.id) setPersonaId(inquilino.id);
          setTipo('persona');
          setPrimerNombre(inquilino.primerNombre || '');
          setSegundoNombre(inquilino.segundoNombre || '');
          setPrimerApellido(inquilino.primerApellido || '');
          setSegundoApellido(inquilino.segundoApellido || '');
          setTipoDocumento(inquilino.tipoDocumento || 'DNI');
          setNumeroDocumento(inquilino.numDocumento || '');
          setFechaNacimiento(inquilino.fechaNacimiento || '');
          
          if (inquilino.telefonos && inquilino.telefonos.length > 0) {
            setTelefonos(inquilino.telefonos);
          }
          if (inquilino.mails && inquilino.mails.length > 0) {
            setMails(inquilino.mails);
          }
          if (inquilino.direcciones && inquilino.direcciones.length > 0) {
            const dir = inquilino.direcciones[0];
            setCalle(dir.calle || '');
            setAltura(dir.altura || '');
            setPiso(dir.piso || '');
            setDepartamento(dir.departamento || '');
            setBarrio(dir.barrio || '');
            setProvincia(dir.provincia || '');
            setLocalidad(dir.localidad || '');
            setCodigoPostal(dir.codigoPostal || '');
            setTipoDomicilio(dir.tipoDomicilio || 'PARTICULAR');
          }
          
          setPropietariosVinculados(getPropietariosByInquilinoId(id));
        } else {
          setSnackbar({ open: true, message: 'Inquilino no encontrado en el servidor', severity: 'error' });
          navigate('/inquilinos');
        }
        setLoading(false);
      }
    };
    loadInquilino();
  }, [id, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!id) return;

    if (tipo === 'persona' && (!primerNombre || !primerApellido || !numeroDocumento)) {
      setSnackbar({ open: true, message: 'Por favor complete nombre, apellido y documento', severity: 'error' });
      return;
    }

    if (!personaId) {
      setSnackbar({ open: true, message: 'Error: No se encontró el ID interno del inquilino', severity: 'error' });
      return;
    }

    const personaData = {
      tipo,
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      tipoDocumento,
      numDocumento: numeroDocumento,
      fechaNacimiento,
      telefonos: telefonos.filter(t => t.numero.trim() !== ''),
      mails: mails.filter(m => m.email.trim() !== ''),
      direcciones: [{
        calle,
        altura,
        piso,
        departamento,
        barrio,
        localidad,
        provincia,
        codigoPostal,
        tipoDomicilio
      }]
    };

    const updated = await updatePersonaFisica(personaId, personaData as any);

    if (updated) {
      setSnackbar({ open: true, message: 'Inquilino actualizado exitosamente', severity: 'success' });
      setTimeout(() => navigate('/inquilinos'), 1500);
    } else {
      setSnackbar({ open: true, message: 'Error al actualizar el inquilino en el servidor', severity: 'error' });
    }
  };

  const handleLinkPropietario = () => {
    if (selectedPropietario && id) {
      linkPropietarioToInquilino(selectedPropietario.id, id);
      setPropietariosVinculados(getPropietariosByInquilinoId(id));
      setSelectedPropietario(null);
      setLinkDialogOpen(false);
      setSnackbar({ open: true, message: 'Propietario vinculado exitosamente', severity: 'success' });
    }
  };

  const handleUnlinkPropietario = (propietarioId: string) => {
    if (id) {
      unlinkInquilinoFromPropietario(id, propietarioId);
      setPropietariosVinculados(getPropietariosByInquilinoId(id));
      setSnackbar({ open: true, message: 'Propietario desvinculado exitosamente', severity: 'success' });
    }
  };

  const getPropietariosDisponibles = (): Propietario[] => {
    const todosPropietarios = getPropietarios();
    const vinculadosIds = propietariosVinculados.map(p => p.id);
    return todosPropietarios.filter(p => !vinculadosIds.includes(p.id));
  };

  const getNombrePropietario = (propietario: Propietario): string => {
    if (propietario.tipo === 'persona') {
      return `${propietario.primerNombre || ''} ${propietario.primerApellido || ''}`.trim();
    }
    return propietario.razonSocial || '';
  };

  if (loading) {
    return <Typography>Cargando...</Typography>;
  }

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
        <Typography color="text.primary">Editar inquilino</Typography>
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
          Editar Inquilino
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
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
                    />
                    <TextField
                      fullWidth
                      label="CUIT"
                      value={cuit}
                      onChange={(e) => setCuit(e.target.value)}
                      placeholder="XX-XXXXXXXX-X"
                      required
                      sx={{ mb: 3 }}
                    />
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
                  onChange={(e) => setTipoDomicilio(e.target.value as 'PARTICULAR' | 'LABORAL' | 'OTRO')}
                >
                  <MenuItem value="PARTICULAR">Particular</MenuItem>
                  <MenuItem value="LABORAL">Laboral</MenuItem>
                  <MenuItem value="OTRO">Otro</MenuItem>
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
                  <Button variant="outlined" onClick={() => navigate('/inquilinos')} size="large">
                    Cancelar
                  </Button>
                  <Button type="submit" variant="contained" color="primary" size="large">
                    Guardar Cambios
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" component="h2">
                  Propietarios Vinculados
                </Typography>
                <Button
                  size="small"
                  startIcon={<Add />}
                  onClick={() => setLinkDialogOpen(true)}
                  variant="outlined"
                  color="primary"
                >
                  Vincular
                </Button>
              </Box>

              {propietariosVinculados.length === 0 ? (
                <Typography variant="body2" color="text.secondary" sx={{ py: 2, textAlign: 'center' }}>
                  No hay propietarios vinculados
                </Typography>
              ) : (
                <List>
                  {propietariosVinculados.map((propietario) => (
                    <ListItem key={propietario.id} divider>
                      <ListItemText
                        primary={getNombrePropietario(propietario)}
                        secondary={propietario.email}
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          aria-label="desvincular"
                          onClick={() => handleUnlinkPropietario(propietario.id)}
                          size="small"
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Dialog open={linkDialogOpen} onClose={() => setLinkDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Vincular Propietario</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <Autocomplete
              options={getPropietariosDisponibles()}
              getOptionLabel={(option) => getNombrePropietario(option)}
              value={selectedPropietario}
              onChange={(_, newValue) => setSelectedPropietario(newValue)}
              renderInput={(params) => <TextField {...params} label="Seleccionar propietario" />}
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
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLinkDialogOpen(false)}>Cancelar</Button>
          <Button onClick={handleLinkPropietario} variant="contained" disabled={!selectedPropietario}>
            Vincular
          </Button>
        </DialogActions>
      </Dialog>

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