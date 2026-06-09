import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import {
  Box, Typography, Button, Card, CardContent, Chip, CircularProgress, Alert,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
} from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';
import { useAuthClient } from '../services/authClient';
import { getContratos, deleteContrato, type ContratoDTO, type EstadoContrato } from '../services/contratosService';

const ESTADO_COLOR: Record<EstadoContrato, 'default' | 'success' | 'error' | 'warning'> = {
  BORRADOR: 'default', VIGENTE: 'success', FINALIZADO: 'error', EN_MORA: 'warning',
};

export default function ContratosPage() {
  const navigate = useNavigate();
  const { fetchWithToken } = useAuthClient();
  const [contratos, setContratos] = useState<ContratoDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<ContratoDTO | null>(null);
  const [deleting, setDeleting] = useState(false);

  const cargar = async () => {
    setLoading(true); setError(null);
    try { setContratos(await getContratos(fetchWithToken)); }
    catch { setError('No se pudo conectar con el servidor.'); }
    finally { setLoading(false); }
  };

  useEffect(() => { cargar(); }, []);

  const handleEliminar = async () => {
    if (!deleteTarget?.id) return;
    setDeleting(true);
    try { await deleteContrato(fetchWithToken, deleteTarget.id); setDeleteTarget(null); cargar(); }
    catch { setError('Error al eliminar el contrato.'); }
    finally { setDeleting(false); }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1" color="text.primary">Contratos</Typography>
        <Button variant="contained" startIcon={<Add />} onClick={() => navigate('/contratos/nuevo')}>Nuevo Contrato</Button>
      </Box>
      {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}><CircularProgress /></Box>
      ) : contratos.length === 0 ? (
        <Card><CardContent><Typography variant="body1" color="text.secondary" align="center" sx={{ py: 4 }}>No hay contratos registrados</Typography></CardContent></Card>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>N° Contrato</strong></TableCell>
                <TableCell><strong>Propiedad ID</strong></TableCell>
                <TableCell><strong>Inicio</strong></TableCell>
                <TableCell><strong>Final</strong></TableCell>
                <TableCell><strong>Estado</strong></TableCell>
                <TableCell><strong>Monto</strong></TableCell>
                <TableCell align="right"><strong>Acciones</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contratos.map(c => (
                <TableRow key={c.id} hover>
                  <TableCell>{c.contratoNumero}</TableCell>
                  <TableCell>{c.propiedadAlquiladaId}</TableCell>
                  <TableCell>{c.fechaInicio}</TableCell>
                  <TableCell>{c.fechaFinal}</TableCell>
                  <TableCell><Chip label={c.contratoEstado} size="small" color={ESTADO_COLOR[c.contratoEstado]} /></TableCell>
                  <TableCell>{c.montoBase.toLocaleString('es-AR')} {c.tipoMoneda}</TableCell>
                  <TableCell align="right">
                    <IconButton aria-label={`editar contrato ${c.contratoNumero}`} size="small" onClick={() => navigate(`/contratos/${c.id}/editar`)}><Edit fontSize="small" /></IconButton>
                    <IconButton aria-label={`eliminar contrato ${c.contratoNumero}`} size="small" color="error" onClick={() => setDeleteTarget(c)}><Delete fontSize="small" /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Dialog open={!!deleteTarget} onClose={() => setDeleteTarget(null)}>
        <DialogTitle>Confirmar eliminación</DialogTitle>
        <DialogContent><DialogContentText>¿Eliminás el contrato <strong>{deleteTarget?.contratoNumero}</strong>?</DialogContentText></DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteTarget(null)} disabled={deleting}>Cancelar</Button>
          <Button onClick={handleEliminar} color="error" variant="contained" disabled={deleting}>{deleting ? 'Eliminando...' : 'Eliminar'}</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
