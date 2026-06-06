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
  Chip,
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
  getPersonaJuridicaByCuit,
  updatePersonaJuridica,
  type Telefono,
  type Mail,
  type Direccion,
} from '../services/personasService';
import { useAuthClient } from '../services/authClient';
import {
  getInquilinosByPropietarioId,
  getInquilinos,
  linkPropietarioToInquilino,
  unlinkPropietarioFromInquilino,
  type Inquilino,
} from '../data/mockData';

export default function EditarPropietarioPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { fetchWithToken } = useAuthClient();
  const [loading, setLoading] = useState(true);
  const [tipo, setTipo] = useState<'persona' | 'empresa'>('persona');
  const [personaId, setPersonaId] = useState<number | string | null>(null);
  const [linkDialogOpen, setLinkDialogOpen] = useState(false);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success',
  });

  // Campos para persona física
  const [primerNombre, setPrimerNombre] = useState('');
  const [segundoNombre, setSegundoNombre] = useState('');
  const [primerApellido, setPrimerApellido] = useState('');
  const [segundoApellido, setSegundoApellido] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState<'dni' | 'cuit' | 'cuil' | 'pasaporte'>('dni');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');

  // Campos para empresa
  const [razonSocial, setRazonSocial] = useState('');
  const [cuit, setCuit] = useState('');
  const [fechaConstitucion, setFechaConstitucion] = useState('');
  const [nombreNegocio, setNombreNegocio] = useState('');


  // Campos comunes
  const [telefonos, setTelefonos] = useState<Telefono[]>([{ numero: '', tipo: 'celular' }]);
  const [mails, setMails] = useState<Mail[]>([{ email: '', tipo: 'personal', esPrincipal: true }]);

  const [calle, setCalle] = useState('');
  const [altura, setAltura] = useState('');
  const [piso, setPiso] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [barrio, setBarrio] = useState('');
  const [provincia, setProvincia] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [tipoDomicilio, setTipoDomicilio] = useState<'legal' | 'particular' | 'comercial'>('particular');

  // Inquilinos vinculados
  const [inquilinosVinculados, setInquilinosVinculados] = useState<Inquilino[]>([]);
  const [selectedInquilino, setSelectedInquilino] = useState<Inquilino | null>(null);

  const provinciasArgentinas = [
    'Buenos Aires', 'CABA', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba',
    'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja',
    'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan',
    'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero',
    'Tierra del Fuego', 'Tucumán',
  ];

  const handleAddTelefono = () => {
    setTelefonos([...telefonos, { numero: '', tipo: 'celular' }]);
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
    setMails([...mails, { email: '', tipo: 'personal', esPrincipal: mails.length === 0 }]);
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
    const loadPropietario = async () => {
      if (id) {
        let isEmpresa = false;
        let propietario: any = await getPersonaFisicaByDni(fetchWithToken, id);

        if (!propietario) {
          propietario = await getPersonaJuridicaByCuit(fetchWithToken, id);
          isEmpresa = !!propietario;
        }

        if (propietario) {
          if (propietario.id) setPersonaId(propietario.id);
          setTipo(isEmpresa ? 'empresa' : 'persona');

          if (isEmpresa) {
            setRazonSocial(propietario.razonSocial || '');
            setCuit(propietario.cuit || '');
            setFechaConstitucion(propietario.fechaConstitucion || '');
            setNombreNegocio(propietario.nombreNegocio || '');
          } else {
            setPrimerNombre(propietario.primerNombre || '');
            setSegundoNombre(propietario.segundoNombre || '');
            setPrimerApellido(propietario.primerApellido || '');
            setSegundoApellido(propietario.segundoApellido || '');
            setTipoDocumento(propietario.tipoDocumento || 'dni');
            setNumeroDocumento(propietario.numDocumento || '');
            setFechaNacimiento(propietario.fechaNacimiento || '');
          }

          if (propietario.telefonos && propietario.telefonos.length > 0) {
            setTelefonos(propietario.telefonos);
          }
          if (propietario.mails && propietario.mails.length > 0) {
            setMails(propietario.mails);
          }
          if (propietario.direcciones && propietario.direcciones.length > 0) {
            const dir = propietario.direcciones[0];
            setCalle(dir.calle || '');
            setAltura(dir.altura || '');
            setPiso(dir.piso || '');
            setDepartamento(dir.departamento || '');
            setBarrio(dir.barrio || '');
            setProvincia(dir.provincia || '');
            setLocalidad(dir.localidad || '');
            setCodigoPostal(dir.codigoPostal || '');
            setTipoDomicilio(dir.tipoDomicilio || 'particular');
          }

          setInquilinosVinculados(getInquilinosByPropietarioId(id));
        } else {
          setSnackbar({ open: true, message: 'Propietario no encontrado en el servidor', severity: 'error' });
          navigate('/propietarios');
        }
        setLoading(false);
      }
    };
    loadPropietario();
  }, [id, navigate, fetchWithToken]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!id) return;

    if (tipo === 'persona' && (!primerNombre || !primerApellido || !numeroDocumento)) {
      setSnackbar({ open: true, message: 'Por favor complete nombre, apellido y documento', severity: 'error' });
      return;
    }

    if (tipo === 'empresa' && (!razonSocial || !cuit)) {
      setSnackbar({ open: true, message: 'Por favor complete razón social y CUIT', severity: 'error' });
      return;
    }

    if (!personaId) {
      setSnackbar({ open: true, message: 'Error: No se encontró el ID interno del propietario', severity: 'error' });
      return;
    }

    const commonData = {
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

    let updated = null;

    if (tipo === 'persona') {
      const personaData = {
        ...commonData,
        primerNombre,
        segundoNombre,
        primerApellido,
        segundoApellido,
        tipoDocumento,
        numDocumento: numeroDocumento,
        fechaNacimiento,
      };
      updated = await updatePersonaFisica(fetchWithToken, personaId, personaData as any);
    } else {
      const empresaData = {
        ...commonData,
        razonSocial,
        cuit,
        nombreNegocio,
        fechaConstitucion,
      };
      updated = await updatePersonaJuridica(fetchWithToken, personaId, empresaData as any);
    }

    if (updated) {
      setSnackbar({ open: true, message: 'Propietario actualizado exitosamente', severity: 'success' });
      setTimeout(() => navigate('/propietarios'), 1500);
    } else {
      setSnackbar({ open: true, message: 'Error al actualizar el propietario en el servidor', severity: 'error' });
    }
  };

  const handleLinkInquilino = () => {
    if (selectedInquilino && id) {
      linkPropietarioToInquilino(id, selectedInquilino.id);
      setInquilinosVinculados(getInquilinosByPropietarioId(id));
      setSelectedInquilino(null);
      setLinkDialogOpen(false);
      setSnackbar({ open: true, message: 'Inquilino vinculado exitosamente', severity: 'success' });
    }
  };

  const handleUnlinkInquilino = (inquilinoId: string) => {
    if (id) {
      unlinkPropietarioFromInquilino(id, inquilinoId);
      setInquilinosVinculados(getInquilinosByPropietarioId(id));
      setSnackbar({ open: true, message: 'Inquilino desvinculado exitosamente', severity: 'success' });
    }
  };

  const getInquilinosDisponibles = (): Inquilino[] => {
    const todosInquilinos = getInquilinos();
    const vinculadosIds = inquilinosVinculados.map(i => i.id);
    return todosInquilinos.filter(i => !vinculadosIds.includes(i.id));
  };

  const getNombreInquilino = (inquilino: Inquilino): string => {
    if (inquilino.tipo === 'persona') {
      return `${inquilino.primerNombre || ''} ${inquilino.primerApellido || ''}`.trim();
    }
    return inquilino.razonSocial || '';
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
          onClick={() => navigate('/propietarios')}
          underline="hover"
          color="inherit"
          sx={{ cursor: 'pointer' }}
        >
          Propietarios
        </Link>
        <Typography color="text.primary">Editar propietario</Typography>
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
          Editar Propietario
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
            <CardContent sx={{ p: 4 }}>
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
                    Tipo de Propietario
                  </Typography>
                  <ToggleButtonGroup
                    value={tipo}
                    exclusive
                    onChange={(_, newTipo) => newTipo && setTipo(newTipo)}
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
                          <MenuItem value="dni">DNI</MenuItem>
                          <MenuItem value="cuit">CUIT</MenuItem>
                          <MenuItem value="cuil">CUIL</MenuItem>
                          <MenuItem value="pasaporte">Pasaporte</MenuItem>
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
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Razón Social"
                          value={razonSocial}
                          onChange={(e) => setRazonSocial(e.target.value)}
                          required
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
                          onChange={(e) => handleTelefonoChange(index, 'tipo', e.target.value as 'celular' | 'fijo')}
                        >
                          <MenuItem value="celular">Celular</MenuItem>
                          <MenuItem value="fijo">Fijo</MenuItem>
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
                          onChange={(e) => handleMailChange(index, 'tipo', e.target.value as 'personal' | 'laboral')}
                        >
                          <MenuItem value="personal">Personal</MenuItem>
                          <MenuItem value="laboral">Laboral</MenuItem>
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
                      onChange={(e) => setTipoDomicilio(e.target.value as 'legal' | 'particular' | 'comercial')}
                    >
                      <MenuItem value="particular">Particular</MenuItem>
                      <MenuItem value="legal">Legal</MenuItem>
                      <MenuItem value="comercial">Comercial</MenuItem>
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
                  Inquilinos Vinculados
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

              {inquilinosVinculados.length === 0 ? (
                <Typography variant="body2" color="text.secondary" sx={{ py: 2, textAlign: 'center' }}>
                  No hay inquilinos vinculados
                </Typography>
              ) : (
                <List>
                  {inquilinosVinculados.map((inquilino) => (
                    <ListItem key={inquilino.id} divider>
                      <ListItemText
                        primary={getNombreInquilino(inquilino)}
                        secondary={inquilino.email}
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          aria-label="desvincular"
                          onClick={() => handleUnlinkInquilino(inquilino.id)}
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
        <DialogTitle>Vincular Inquilino</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <Autocomplete
              options={getInquilinosDisponibles()}
              getOptionLabel={(option) => getNombreInquilino(option)}
              value={selectedInquilino}
              onChange={(_, newValue) => setSelectedInquilino(newValue)}
              renderInput={(params) => <TextField {...params} label="Seleccionar inquilino" />}
              renderOption={(props, option) => (
                <li {...props} key={option.id}>
                  <Box>
                    <Typography variant="body1">{getNombreInquilino(option)}</Typography>
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
          <Button onClick={handleLinkInquilino} variant="contained" disabled={!selectedInquilino}>
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