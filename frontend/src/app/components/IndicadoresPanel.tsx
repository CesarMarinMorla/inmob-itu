import {
  Alert,
  Box,
  Card,
  CardContent,
  Chip,
  IconButton,
  Skeleton,
  Tooltip,
  Typography,
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useIndices } from '../hooks/useIndices';
import type { Indice, OrigenIndice } from '../services/indicesService';

// Mapa de presentacion del badge segun la procedencia del dato.
// El theme MUI (#7A0000 / #FF6725) se usa como referencia visual.
const ORIGEN_LABEL: Record<OrigenIndice, { label: string; color: 'success' | 'default' | 'warning' }> = {
  LIVE: { label: 'En vivo', color: 'success' },
  CACHE: { label: 'Cache', color: 'default' },
  FALLBACK: { label: 'Ultimo valor disponible', color: 'warning' },
};

const TITULO_INDICE: Record<Indice['tipo'], string> = {
  IPC: 'IPC',
  ICL: 'ICL',
};

const DESCRIPCION_INDICE: Record<Indice['tipo'], string> = {
  IPC: 'Indice de Precios al Consumidor',
  ICL: 'Indice para Contratos de Locacion',
};

const formatearValor = (valor: number | null): string => {
  if (valor === null || valor === undefined || Number.isNaN(valor)) return '—';
  return valor.toLocaleString('es-AR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const formatearFecha = (fechaIso: string | null): string => {
  if (!fechaIso) return 'sin datos';
  try {
    const d = new Date(fechaIso);
    if (Number.isNaN(d.getTime())) return fechaIso;
    return d.toLocaleDateString('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  } catch {
    return fechaIso;
  }
};

interface IndiceCardProps {
  indice: Indice;
}

function IndiceCard({ indice }: IndiceCardProps) {
  const origen = ORIGEN_LABEL[indice.origen];
  return (
    <Card
      sx={{
        flex: '1 1 280px',
        minWidth: 260,
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h4" component="h3" sx={{ color: 'primary.main', fontWeight: 600 }}>
              {TITULO_INDICE[indice.tipo]}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {DESCRIPCION_INDICE[indice.tipo]}
            </Typography>
          </Box>
          <Chip
            label={origen.label}
            color={origen.color}
            size="small"
            variant={indice.origen === 'FALLBACK' ? 'filled' : 'outlined'}
          />
        </Box>

        <Typography variant="h3" component="p" sx={{ fontWeight: 500, mt: 1 }}>
          {formatearValor(indice.valor)}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Actualizado al {formatearFecha(indice.fecha)}
        </Typography>
      </CardContent>
    </Card>
  );
}

function IndiceCardSkeleton() {
  return (
    <Card sx={{ flex: '1 1 280px', minWidth: 260, border: '1px solid', borderColor: 'divider' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Skeleton variant="text" width="40%" height={36} />
        <Skeleton variant="text" width="70%" height={20} />
        <Skeleton variant="text" width="50%" height={48} />
        <Skeleton variant="text" width="60%" height={20} />
      </CardContent>
    </Card>
  );
}

export default function IndicadoresPanel() {
  const { data, loading, error, refetch } = useIndices();

  return (
    <Box sx={{ width: '100%', maxWidth: 900, mx: 'auto', mb: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="h6" component="h2" sx={{ color: 'text.primary' }}>
          Indices economicos
        </Typography>
        <Tooltip title="Actualizar">
          <span>
            <IconButton
              onClick={refetch}
              disabled={loading}
              size="small"
              aria-label="Actualizar indices"
            >
              <RefreshIcon fontSize="small" />
            </IconButton>
          </span>
        </Tooltip>
      </Box>

      {error && data.length === 0 && (
        <Alert severity="warning" sx={{ mb: 2 }}>
          No se pudieron obtener los indices economicos. Se mostraran los ultimos valores
          disponibles cuando se restablezca la conexion.
        </Alert>
      )}

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        {loading && data.length === 0 ? (
          <>
            <IndiceCardSkeleton />
            <IndiceCardSkeleton />
          </>
        ) : (
          data.map((indice) => <IndiceCard key={indice.tipo} indice={indice} />)
        )}
      </Box>
    </Box>
  );
}
