import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import {
  Box, Typography, Button, Card, CardContent, CardActions,
  Chip, Grid, CircularProgress, Dialog, DialogTitle,
  DialogContent, DialogContentText, DialogActions, Alert,
  ToggleButtonGroup, ToggleButton,
} from '@mui/material';
import { Add, Home } from '@mui/icons-material';
import { useAuthClient } from '../services/authClient';
import {
  getAllPropiedades, deleteCasa, deleteDepartamento, deleteTerreno,
  type PropiedadConTipo, type TipoProp,
} from '../services/propiedadesService';

const ESTADO_COLOR: Record<string, 'success' | 'warning' | 'info' | 'default'> = {
  disponible: 'success', alquilado: 'warning', reservado: 'info', fuera_de_servicio: 'default',
};
const ESTADO_LABEL: Record<string, string> = {
  disponible: 'Disponible', alquilado: 'Alquilado', reservado: 'Reservado', fuera_de_servicio: 'Fuera de servicio',
};
const TIPO_LABEL: Record<TipoProp, string> = { casa: 'Casa', departamento: 'Departamento', terreno: 'Terreno' };

export default function InmueblesPage() {
  const navigate = useNavigate();
  const { fetchWithToken } = useAuthClient();
  const [propiedades, setPropiedades] = useState<PropiedadConTipo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filtro, setFiltro] = useState<TipoProp | 'todos'>('todos');
  const [deleteTarget, setDeleteTarget] = useState<PropiedadConTipo | null>(null);
  const [deleting, setDeleting] = useState(false);

  const cargar = async () => {
    setLoading(true); setError(null);
    try { setPropiedades(await getAllPropiedades(fetchWithToken)); }
    catch { setError('No se pudo conectar con el servidor.'); }
    finally { setLoading(false); }
  };

  useEffect(() => { cargar(); }, []);

  const filtradas = filtro === 'todos' ? propiedades : propiedades.filter(p => p.tipoProp === filtro);

  const formatDireccion = (p: PropiedadConTipo) => {
    if (!p.direccion) return '—';
    const { calleRuta, alturaKm, localidad, provincia } = p.direccion;
    return `${calleRuta}${alturaKm ? ` ${alturaKm}` : ''}, ${localidad}, ${provincia}`;
  };

  const handleEliminar = async () => {
    if (!deleteTarget?.id) return;
    setDeleting(true);
    try {
      if (deleteTarget.tipoProp === 'casa') await deleteCasa(fetchWithToken, deleteTarget.id);
      else if (deleteTarget.tipoProp === 'departamento') await deleteDepartamento(fetchWithToken, deleteTarget.id);
      else await deleteTerreno(fetchWithToken, deleteTarget.id);
      setDeleteTarget(null); cargar();
    } catch { setError('Error al eliminar la propiedad.'); }
    finally { setDeleting(false); }
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3, color: 'text.primary' }}>
        Inmuebles
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap', alignItems: 'center' }}>
        <ToggleButtonGroup value={filtro} exclusive onChange={(_, val) => val && setFiltro(val)} size="small">
          <ToggleButton value="todos">Todos</ToggleButton>
          <ToggleButton value="casa">Casas</ToggleButton>
          <ToggleButton value="departamento">Deptos.</ToggleButton>
          <ToggleButton value="terreno">Terrenos</ToggleButton>
        </ToggleButtonGroup>
        <Button variant="contained" color="primary" startIcon={<Add />} onClick={() => navigate('/inmuebles/nuevo')} sx={{ ml: 'auto' }}>
          Nuevo Inmueble
        </Button>
      </Box>
      {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}><CircularProgress /></Box>
      ) : filtradas.length === 0 ? (
        <Card><CardContent><Typography variant="body1" color="text.secondary" align="center" sx={{ py: 4 }}>No hay inmuebles registrados</Typography></CardContent></Card>
      ) : (
        <Grid container spacing={3}>
          {filtradas.map(prop => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={`${prop.tipoProp}-${prop.id}`}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', '&:hover': { boxShadow: '0px 4px 12px rgba(0,0,0,0.15)' } }}>
                <Box sx={{ height: 140, bgcolor: 'action.hover', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid', borderColor: 'divider' }}>
                  <Home sx={{ fontSize: 64, color: 'text.secondary' }} />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ mb: 1.5, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Chip label={ESTADO_LABEL[prop.estado] ?? prop.estado} size="small" color={ESTADO_COLOR[prop.estado] ?? 'default'} />
                    <Chip label={TIPO_LABEL[prop.tipoProp]} size="small" variant="outlined" />
                  </Box>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>{prop.codigoRef}</Typography>
                  <Typography variant="body2" color="text.secondary">{formatDireccion(prop)}</Typography>
                  {prop.superficieTotal && <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>Superficie: {prop.superficieTotal} m²</Typography>}
                </CardContent>
                <CardActions sx={{ gap: 1, px: 2, pb: 2 }}>
                  <Button size="small" variant="outlined" onClick={() => navigate(`/inmuebles/${prop.tipoProp}/${prop.id}/editar`)}>Editar</Button>
                  <Button size="small" variant="outlined" color="error" onClick={() => setDeleteTarget(prop)}>Eliminar</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <Dialog open={!!deleteTarget} onClose={() => setDeleteTarget(null)}>
        <DialogTitle>Confirmar eliminación</DialogTitle>
        <DialogContent><DialogContentText>¿Eliminás <strong>{deleteTarget?.codigoRef}</strong>? Esta acción no se puede deshacer.</DialogContentText></DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteTarget(null)} disabled={deleting}>Cancelar</Button>
          <Button onClick={handleEliminar} color="error" disabled={deleting} variant="contained">{deleting ? 'Eliminando...' : 'Eliminar'}</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
