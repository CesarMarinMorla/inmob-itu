import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import {
  Box,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,
  Snackbar,
  Alert,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Autocomplete,
} from '@mui/material';
import { ArrowBack, ExpandMore } from '@mui/icons-material';
import { createContrato, type ContratoDTO, type EstadoContrato, type TipoMoneda, type IndiceAjuste } from '../services/contratosService';
import { getAllPropiedades, type PropiedadConTipo } from '../services/propiedadesService';
import { getPersonasFisicas, getPersonasJuridicas, type PersonaFisica, type PersonaJuridica } from '../services/personasService';

type PersonaOpcion = { id: number; label: string };

const toOpciones = (personas: (PersonaFisica | PersonaJuridica)[]): PersonaOpcion[] =>
  personas
    .filter((p) => p.id !== undefined)
    .map((p) => ({
      id: Number(p.id),
      label: 'primerNombre' in p
        ? `${(p as PersonaFisica).primerNombre} ${(p as PersonaFisica).primerApellido}`
        : (p as PersonaJuridica).razonSocial,
    }));

export default function NuevoContratoPage() {
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Datos para selects
  const [propiedades, setPropiedades] = useState<PropiedadConTipo[]>([]);
  const [personasOpciones, setPersonasOpciones] = useState<PersonaOpcion[]>([]);
  const [loadingOpts, setLoadingOpts] = useState(true);

  // Campos obligatorios
  const [contratoNumero, setContratoNumero] = useState('');
  const [fechaFirma, setFechaFirma] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFinal, setFechaFinal] = useState('');
  const [contratoEstado, setContratoEstado] = useState<EstadoContrato>('BORRADOR');
  const [montoBase, setMontoBase] = useState('');
  const [tipoMoneda, setTipoMoneda] = useState<TipoMoneda>('ARS');
  const [propiedadId, setPropiedadId] = useState('');
  const [propietariosIds, setPropietariosIds] = useState<PersonaOpcion[]>([]);
  const [inquilinosIds, setInquilinosIds] = useState<PersonaOpcion[]>([]);
  const [garantesIds, setGarantesIds] = useState<PersonaOpcion[]>([]);

  // Opcionales
  const [diaVencimientoPago, setDiaVencimientoPago] = useState('');
  const [porcentajeComision, setPorcentajeComision] = useState('');
  const [montoDeposito, setMontoDeposito] = useState('');
  const [monedaDeposito, setMonedaDeposito] = useState<TipoMoneda | ''>('');
  const [observacionesGarantia, setObservacionesGarantia] = useState('');
  const [indiceAjuste, setIndiceAjuste] = useState<IndiceAjuste | ''>('');
  const [frecuenciaAjuste, setFrecuenciaAjuste] = useState('');
  const [mesProximoAjuste, setMesProximoAjuste] = useState('');
  const [aplicaProdCarne, setAplicaProdCarne] = useState(false);
  const [cantidadCarne, setCantidadCarne] = useState('');

  useEffect(() => {
    Promise.all([
      getAllPropiedades(),
      getPersonasFisicas(),
      getPersonasJuridicas(),
    ]).then(([props, fisicas, juridicas]) => {
      setPropiedades(props);
      setPersonasOpciones([...toOpciones(fisicas), ...toOpciones(juridicas)]);
    }).catch(() => setError('Error al cargar datos auxiliares.')).finally(() => setLoadingOpts(false));
  }, []);

  const handleSubmit = async () => {
    if (!contratoNumero || !fechaFirma || !fechaInicio || !fechaFinal || !montoBase || !propiedadId) {
      setError('Completá todos los campos obligatorios.');
      return;
    }
    if (propietariosIds.length === 0 || inquilinosIds.length === 0) {
      setError('Debe haber al menos un propietario y un inquilino.');
      return;
    }
    setSaving(true);
    setError(null);
    try {
      const dto: ContratoDTO = {
        contratoNumero,
        fechaFirma,
        fechaInicio,
        fechaFinal,
        contratoEstado,
        montoBase: Number(montoBase),
        tipoMoneda,
        propiedadAlquiladaId: Number(propiedadId),
        propietariosIds: propietariosIds.map((p) => p.id),
        inquilinosIds: inquilinosIds.map((p) => p.id),
        garantesIds: garantesIds.map((p) => p.id),
        ...(diaVencimientoPago && { diaVencimientoPago: Number(diaVencimientoPago) }),
        ...(porcentajeComision && { porcentajeComision: Number(porcentajeComision) }),
        ...(montoDeposito && { montoDeposito: Number(montoDeposito) }),
        ...(monedaDeposito && { monedaDeposito }),
        ...(observacionesGarantia && { observacionesGarantia }),
        ...(indiceAjuste && { indiceAjuste }),
        ...(frecuenciaAjuste && { frecuenciaAjuste: Number(frecuenciaAjuste) }),
        ...(mesProximoAjuste && { mesProximoAjuste }),
        aplicaProdCarne,
        ...(cantidadCarne && { cantidadCarne: Number(cantidadCarne) }),
      };
      await createContrato(dto);
      setSuccess(true);
      setTimeout(() => navigate('/contratos'), 1500);
    } catch {
      setError('Error al crear el contrato.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Button startIcon={<ArrowBack />} onClick={() => navigate('/contratos')} variant="text">Volver</Button>
        <Typography variant="h4" component="h1" color="text.primary">Nuevo Contrato</Typography>
      </Box>

      {loadingOpts && <CircularProgress sx={{ mb: 2 }} />}

      {/* Datos principales */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>Datos del contrato</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
            <TextField label="N° de contrato *" value={contratoNumero} onChange={(e) => setContratoNumero(e.target.value)} />
            <FormControl>
              <InputLabel>Estado *</InputLabel>
              <Select value={contratoEstado} label="Estado *" onChange={(e) => setContratoEstado(e.target.value as EstadoContrato)}>
                {(['BORRADOR', 'VIGENTE', 'FINALIZADO', 'EN_MORA'] as EstadoContrato[]).map((s) => (
                  <MenuItem key={s} value={s}>{s}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField label="Fecha de firma *" type="date" InputLabelProps={{ shrink: true }} value={fechaFirma} onChange={(e) => setFechaFirma(e.target.value)} />
            <TextField label="Fecha de inicio *" type="date" InputLabelProps={{ shrink: true }} value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} />
            <TextField label="Fecha final *" type="date" InputLabelProps={{ shrink: true }} value={fechaFinal} onChange={(e) => setFechaFinal(e.target.value)} />
            <TextField label="Monto base *" type="number" value={montoBase} onChange={(e) => setMontoBase(e.target.value)} />
            <FormControl>
              <InputLabel>Moneda *</InputLabel>
              <Select value={tipoMoneda} label="Moneda *" onChange={(e) => setTipoMoneda(e.target.value as TipoMoneda)}>
                <MenuItem value="ARS">ARS</MenuItem>
                <MenuItem value="USD">USD</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel>Propiedad *</InputLabel>
              <Select value={propiedadId} label="Propiedad *" onChange={(e) => setPropiedadId(e.target.value)}>
                {propiedades.map((p) => (
                  <MenuItem key={`${p.tipoProp}-${p.id}`} value={String(p.id)}>
                    {p.codigoRef} ({p.tipoProp})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </CardContent>
      </Card>

      {/* Personas */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>Personas involucradas</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Autocomplete
              multiple
              options={personasOpciones}
              getOptionLabel={(o) => o.label}
              value={propietariosIds}
              onChange={(_, val) => setPropietariosIds(val)}
              renderInput={(params) => <TextField {...params} label="Propietarios *" />}
            />
            <Autocomplete
              multiple
              options={personasOpciones}
              getOptionLabel={(o) => o.label}
              value={inquilinosIds}
              onChange={(_, val) => setInquilinosIds(val)}
              renderInput={(params) => <TextField {...params} label="Inquilinos *" />}
            />
            <Autocomplete
              multiple
              options={personasOpciones}
              getOptionLabel={(o) => o.label}
              value={garantesIds}
              onChange={(_, val) => setGarantesIds(val)}
              renderInput={(params) => <TextField {...params} label="Garantes (opcional)" />}
            />
          </Box>
        </CardContent>
      </Card>

      {/* Opcionales */}
      <Accordion sx={{ mb: 3 }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography fontWeight={600}>Parámetros opcionales</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
            <TextField label="Día de vencimiento de pago" type="number" value={diaVencimientoPago} onChange={(e) => setDiaVencimientoPago(e.target.value)} />
            <TextField label="% Comisión" type="number" value={porcentajeComision} onChange={(e) => setPorcentajeComision(e.target.value)} />
            <TextField label="Monto depósito" type="number" value={montoDeposito} onChange={(e) => setMontoDeposito(e.target.value)} />
            <FormControl>
              <InputLabel>Moneda depósito</InputLabel>
              <Select value={monedaDeposito} label="Moneda depósito" onChange={(e) => setMonedaDeposito(e.target.value as TipoMoneda)}>
                <MenuItem value="">—</MenuItem>
                <MenuItem value="ARS">ARS</MenuItem>
                <MenuItem value="USD">USD</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel>Índice de ajuste</InputLabel>
              <Select value={indiceAjuste} label="Índice de ajuste" onChange={(e) => setIndiceAjuste(e.target.value as IndiceAjuste)}>
                <MenuItem value="">—</MenuItem>
                <MenuItem value="ICL">ICL</MenuItem>
                <MenuItem value="IPC">IPC</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Frecuencia de ajuste (meses)" type="number" value={frecuenciaAjuste} onChange={(e) => setFrecuenciaAjuste(e.target.value)} />
            <TextField label="Mes próximo ajuste" type="date" InputLabelProps={{ shrink: true }} value={mesProximoAjuste} onChange={(e) => setMesProximoAjuste(e.target.value)} />
            <TextField label="Observaciones garantía" multiline rows={2} value={observacionesGarantia} onChange={(e) => setObservacionesGarantia(e.target.value)} sx={{ gridColumn: { sm: 'span 2' } }} />
            <Box sx={{ gridColumn: { sm: 'span 2' }, display: 'flex', gap: 3, flexWrap: 'wrap', alignItems: 'center' }}>
              <FormControlLabel control={<Checkbox checked={aplicaProdCarne} onChange={(e) => setAplicaProdCarne(e.target.checked)} />} label="Aplica prod. en carne" />
              {aplicaProdCarne && (
                <TextField label="Cantidad carne" type="number" value={cantidadCarne} onChange={(e) => setCantidadCarne(e.target.value)} size="small" />
              )}
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
        <Button variant="outlined" onClick={() => navigate('/contratos')} disabled={saving}>Cancelar</Button>
        <Button variant="contained" onClick={handleSubmit} disabled={saving || loadingOpts} startIcon={saving ? <CircularProgress size={18} /> : undefined}>
          {saving ? 'Guardando...' : 'Crear contrato'}
        </Button>
      </Box>

      <Snackbar open={success} autoHideDuration={3000}>
        <Alert severity="success">Contrato creado correctamente</Alert>
      </Snackbar>
    </Box>
  );
}
