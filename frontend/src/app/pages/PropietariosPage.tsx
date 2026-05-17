import { useState, useEffect } from 'react';
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
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
  Alert,
} from '@mui/material';
import { Search, Add, Edit, Delete, Person, Email, Phone, LocationOn } from '@mui/icons-material';
import { useAuthClient } from '../services/authClient';
import { getPersonasFisicas, deletePersonaFisica, type PersonaFisica } from '../services/personasService';
import { getPersonasJuridicas, deletePersonaJuridica, type PersonaJuridica } from '../services/personasService';

export default function PropietariosPage() {
  const navigate = useNavigate();
  const { fetchWithToken } = useAuthClient();
  const [searchTerm, setSearchTerm] = useState('');
  const [propietarios, setPropietarios] = useState<(PersonaFisica | PersonaJuridica)[]>([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | number | null>(null);
  const [deleteTipo, setDeleteTipo] = useState<'fisica' | 'juridica' | null>(null);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success',
  });

  useEffect(() => {
    loadPropietarios();
  }, [fetchWithToken]);

  const loadPropietarios = async () => {
    const data = await getPersonasFisicas(fetchWithToken, 'propietario');
    const data2 = await getPersonasJuridicas(fetchWithToken, 'propietario');
    setPropietarios([...data, ...data2]);
  };

  const filteredPropietarios = propietarios.filter((prop) => {
    const searchLower = searchTerm.toLowerCase();

    // Type guard checks
    const isFisica = 'primerNombre' in prop;

    const nombre = isFisica
      ? `${prop.primerNombre} ${prop.primerApellido}`.toLowerCase()
      : `${prop.razonSocial}`.toLowerCase();

    const documento = isFisica ? prop.numDocumento : prop.cuit;
    const principalEmail = prop.mails.find(m => m.esPrincipal)?.email?.toLowerCase() || '';

    return (
      nombre.includes(searchLower) ||
      documento?.includes(searchLower) ||
      principalEmail.includes(searchLower)
    );
  });

  const handleDelete = (id: string | number | undefined, isPersonaFisica: boolean) => {
    if (!id) return;
    setSelectedId(id);
    setDeleteTipo(isPersonaFisica ? 'fisica' : 'juridica');
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!selectedId || !deleteTipo) return;

    let success = false;
    if (deleteTipo === 'fisica') {
      success = await deletePersonaFisica(fetchWithToken, selectedId.toString());
    } else {
      success = await deletePersonaJuridica(fetchWithToken, selectedId.toString());
    }
    if (success) {
      setSnackbar({ open: true, message: 'Propietario eliminado exitosamente', severity: 'success' });
      loadPropietarios();
    } else {
      setSnackbar({ open: true, message: 'Error al eliminar el propietario', severity: 'error' });
    }
    setDeleteDialogOpen(false);
    setSelectedId(null);
    setDeleteTipo(null);
  };

  const getNombreCompleto = (prop: PersonaFisica | PersonaJuridica): string => {
    if ('primerNombre' in prop) {
      return `${prop.primerNombre || ''} ${prop.segundoNombre || ''} ${prop.primerApellido || ''} ${prop.segundoApellido || ''}`.trim();
    } else {
      return prop.razonSocial || '';
    }
  };

  const getDocumento = (prop: PersonaFisica | PersonaJuridica): string => {
    if ('numDocumento' in prop) {
      return `${prop.tipoDocumento || 'dni'} ${prop.numDocumento || ''}`;
    } else {
      return `cuit ${prop.cuit || ''}`;
    }
  };

  const getPrincipalEmail = (prop: PersonaFisica | PersonaJuridica): string => {
    return prop.mails?.find(m => m.esPrincipal)?.email || 'Sin email';
  };

  const getPrincipalTelefono = (prop: PersonaFisica | PersonaJuridica): string => {
    return prop.telefonos?.[0]?.numero || 'Sin teléfono';
  };

  const getDireccionPrincipal = (prop: PersonaFisica | PersonaJuridica): string => {
    const dir = prop.direcciones?.[0];
    if (!dir) return 'Sin dirección';
    return `${dir.calle || ''} ${dir.altura || ''}, ${dir.localidad || ''}`.trim();
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3, color: 'text.primary' }}>
        Propietarios
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          placeholder="Buscar propietarios..."
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
            'aria-label': 'Buscar propietarios',
          }}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={() => navigate('/propietarios/nuevo')}
          sx={{ height: 56 }}
        >
          Nuevo Propietario
        </Button>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {filteredPropietarios.length === 0 ? (
          <Card>
            <CardContent>
              <Typography variant="body1" color="text.secondary" align="center" sx={{ py: 4 }}>
                {searchTerm ? 'No se encontraron propietarios' : 'No hay propietarios registrados'}
              </Typography>
            </CardContent>
          </Card>
        ) : (
          filteredPropietarios.map((prop) => (
            <Card
              key={prop.id}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                p: 2,
                '&:hover': {
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    bgcolor: 'action.hover',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Person sx={{ fontSize: 32, color: 'text.secondary' }} />
                </Box>

                <Box sx={{ flex: 1, minWidth: 200 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {getNombreCompleto(prop)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {getDocumento(prop)}
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <Chip
                      label={'primerNombre' in prop ? "Persona Física" : "Empresa"}
                      size="small"
                      color="default"
                    />
                  </Box>
                </Box>

                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1, minWidth: 250 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocationOn sx={{ fontSize: 20, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {getDireccionPrincipal(prop)}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Email sx={{ fontSize: 20, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {getPrincipalEmail(prop)}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Phone sx={{ fontSize: 20, color: 'success.main' }} />
                    <Typography variant="body2" color="success.main" sx={{ fontWeight: 600 }}>
                      {getPrincipalTelefono(prop)}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <CardActions sx={{ gap: 1 }}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => navigate(`/propietarios/${'numDocumento' in prop ? prop.numDocumento : prop.cuit}/editar`)}
                  startIcon={<Edit />}
                  aria-label={`Editar ${getNombreCompleto(prop)}`}
                >
                  Editar
                </Button>
                <IconButton
                  color="error"
                  onClick={() => handleDelete(prop.id, 'primerNombre' in prop)}
                  aria-label={`Eliminar ${getNombreCompleto(prop)}`}
                >
                  <Delete />
                </IconButton>
              </CardActions>
            </Card>
          ))
        )}
      </Box>

      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">Confirmar eliminación</DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            ¿Está seguro que desea eliminar este propietario? Esta acción no se puede deshacer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)} color="inherit">
            Cancelar
          </Button>
          <Button onClick={confirmDelete} color="error" variant="contained" autoFocus>
            Eliminar
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
