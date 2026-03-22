import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Card,
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
import { getPersonasFisicas, deletePersonaFisica, type PersonaFisica, getPersonasJuridicas, deletePersonaJuridica, type PersonaJuridica } from '../services/personasService';

export default function InquilinosPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [inquilinos, setInquilinos] = useState<(PersonaFisica | PersonaJuridica)[]>([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | number | null>(null);
  const [deleteTipo, setDeleteTipo] = useState<'fisica' | 'juridica' | null>(null);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success',
  });

  useEffect(() => {
    loadInquilinos();
  }, []);

  const loadInquilinos = async () => {
    const dataFisicas = await getPersonasFisicas();
    const dataJuridicas = await getPersonasJuridicas();
    setInquilinos([...dataFisicas, ...dataJuridicas]);
  };

  const filteredInquilinos = inquilinos.filter((inq) => {
    const searchLower = searchTerm.toLowerCase();
    
    // Type guard checks
    const isFisica = 'primerNombre' in inq;
    
    const nombre = isFisica 
      ? `${inq.primerNombre} ${inq.primerApellido}`.toLowerCase()
      : `${inq.razonSocial}`.toLowerCase();
      
    const documento = isFisica ? inq.numDocumento : inq.cuit;
    const principalEmail = inq.mails.find(m => m.esPrincipal)?.email?.toLowerCase() || '';

    return (
      nombre.includes(searchLower) ||
      documento?.includes(searchLower) ||
      principalEmail.includes(searchLower)
    );
  });

  const handleDelete = (id: string | number | undefined, isPersonaFisica: boolean) => {
    if (!id) return;
    setSelectedId(id);
    // Store type of entity being deleted in state or just rely on passing it. 
    // For simplicity, we can encode it in selectedId if we want, or add a state.
    // Let's add a state for the type being deleted.
    setDeleteTipo(isPersonaFisica ? 'fisica' : 'juridica');
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!selectedId || !deleteTipo) return;
    
    let success = false;
    if (deleteTipo === 'fisica') {
        success = await deletePersonaFisica(selectedId.toString());
    } else {
        success = await deletePersonaJuridica(selectedId.toString());
    }
    if (success) {
      setSnackbar({ open: true, message: 'Inquilino eliminado exitosamente', severity: 'success' });
      loadInquilinos();
    } else {
      setSnackbar({ open: true, message: 'Error al eliminar el inquilino', severity: 'error' });
    }
    setDeleteDialogOpen(false);
    setSelectedId(null);
    setDeleteTipo(null);
  };

  const getNombreCompleto = (inq: PersonaFisica | PersonaJuridica): string => {
    if ('primerNombre' in inq) {
        return `${inq.primerNombre || ''} ${inq.segundoNombre || ''} ${inq.primerApellido || ''} ${inq.segundoApellido || ''}`.trim();
    } else {
        return inq.razonSocial || '';
    }
  };

  const getDocumento = (inq: PersonaFisica | PersonaJuridica): string => {
    if ('numDocumento' in inq) {
        return `${inq.tipoDocumento || 'DNI'} ${inq.numDocumento || ''}`;
    } else {
        return `CUIT ${inq.cuit || ''}`;
    }
  };

  const getPrincipalEmail = (inq: PersonaFisica | PersonaJuridica): string => {
    return inq.mails?.find(m => m.esPrincipal)?.email || 'Sin email';
  };

  const getPrincipalTelefono = (inq: PersonaFisica | PersonaJuridica): string => {
    return inq.telefonos?.[0]?.numero || 'Sin teléfono';
  };

  const getDireccionPrincipal = (inq: PersonaFisica | PersonaJuridica): string => {
    const dir = inq.direcciones?.[0];
    if (!dir) return 'Sin dirección';
    return `${dir.calle || ''} ${dir.altura || ''}, ${dir.localidad || ''}`.trim();
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3, color: 'text.primary' }}>
        Inquilinos
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          placeholder="Buscar inquilinos..."
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
            'aria-label': 'Buscar inquilinos',
          }}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={() => navigate('/inquilinos/nuevo')}
          sx={{ height: 56 }}
        >
          Nuevo Inquilino
        </Button>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {filteredInquilinos.length === 0 ? (
          <Card>
            <Box sx={{ p: 4 }}>
              <Typography variant="body1" color="text.secondary" align="center">
                {searchTerm ? 'No se encontraron inquilinos' : 'No hay inquilinos registrados'}
              </Typography>
            </Box>
          </Card>
        ) : (
          filteredInquilinos.map((inq) => (
            <Card
              key={inq.id}
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
                    {getNombreCompleto(inq)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {getDocumento(inq)}
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <Chip
                      label={'primerNombre' in inq ? "Persona Física" : "Empresa"}
                      size="small"
                      color="default"
                    />
                  </Box>
                </Box>

                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1, minWidth: 250 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocationOn sx={{ fontSize: 20, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {getDireccionPrincipal(inq)}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Email sx={{ fontSize: 20, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {getPrincipalEmail(inq)}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Phone sx={{ fontSize: 20, color: 'success.main' }} />
                    <Typography variant="body2" color="success.main" sx={{ fontWeight: 600 }}>
                      {getPrincipalTelefono(inq)}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <CardActions sx={{ gap: 1 }}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => navigate(`/inquilinos/${'numDocumento' in inq ? inq.numDocumento : inq.cuit}/editar`)}
                  startIcon={<Edit />}
                  aria-label={`Editar ${getNombreCompleto(inq)}`}
                >
                  Editar
                </Button>
                <IconButton
                  color="error"
                  onClick={() => handleDelete(inq.id, 'primerNombre' in inq)}
                  aria-label={`Eliminar ${getNombreCompleto(inq)}`}
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
            ¿Está seguro que desea eliminar este inquilino? Esta acción no se puede deshacer.
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
