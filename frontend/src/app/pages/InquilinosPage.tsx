import { useState } from 'react';
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
import { Search, Add, Edit, Delete, Business, Person, Email, Phone, LocationOn } from '@mui/icons-material';
import { getInquilinos, deleteInquilino, type Inquilino } from '../data/mockData';

export default function InquilinosPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [inquilinos, setInquilinos] = useState<Inquilino[]>(getInquilinos());
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success',
  });

  const filteredInquilinos = inquilinos.filter((inq) => {
    const searchLower = searchTerm.toLowerCase();
    const nombre = inq.tipo === 'persona' 
      ? `${inq.primerNombre} ${inq.primerApellido}`
      : inq.razonSocial || '';
    const documento = inq.tipo === 'persona' ? inq.numeroDocumento : inq.cuit;
    
    return (
      nombre.toLowerCase().includes(searchLower) ||
      documento?.includes(searchLower) ||
      inq.email.toLowerCase().includes(searchLower)
    );
  });

  const handleDelete = (id: string) => {
    setSelectedId(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (selectedId) {
      const success = deleteInquilino(selectedId);
      if (success) {
        setInquilinos(getInquilinos());
        setSnackbar({ open: true, message: 'Inquilino eliminado exitosamente', severity: 'success' });
      } else {
        setSnackbar({ open: true, message: 'Error al eliminar el inquilino', severity: 'error' });
      }
    }
    setDeleteDialogOpen(false);
    setSelectedId(null);
  };

  const getNombreCompleto = (inq: Inquilino): string => {
    if (inq.tipo === 'persona') {
      return `${inq.primerNombre || ''} ${inq.segundoNombre || ''} ${inq.primerApellido || ''} ${inq.segundoApellido || ''}`.trim();
    }
    return inq.razonSocial || '';
  };

  const getDocumento = (inq: Inquilino): string => {
    if (inq.tipo === 'persona') {
      return `${inq.tipoDocumento || 'DNI'} ${inq.numeroDocumento || ''}`;
    }
    return `CUIT ${inq.cuit || ''}`;
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
                  {inq.tipo === 'empresa' ? (
                    <Business sx={{ fontSize: 32, color: 'text.secondary' }} />
                  ) : (
                    <Person sx={{ fontSize: 32, color: 'text.secondary' }} />
                  )}
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
                      label={inq.tipo === 'empresa' ? 'Empresa' : 'Persona Física'}
                      size="small"
                      color={inq.tipo === 'empresa' ? 'secondary' : 'default'}
                    />
                  </Box>
                </Box>

                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1, minWidth: 250 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocationOn sx={{ fontSize: 20, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {inq.direccion}, {inq.localidad}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Email sx={{ fontSize: 20, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {inq.email}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Phone sx={{ fontSize: 20, color: 'success.main' }} />
                    <Typography variant="body2" color="success.main" sx={{ fontWeight: 600 }}>
                      {inq.telefono}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <CardActions sx={{ gap: 1 }}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => navigate(`/inquilinos/${inq.id}/editar`)}
                  startIcon={<Edit />}
                  aria-label={`Editar ${getNombreCompleto(inq)}`}
                >
                  Editar
                </Button>
                <IconButton
                  color="error"
                  onClick={() => handleDelete(inq.id)}
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
