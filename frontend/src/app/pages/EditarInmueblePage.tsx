import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useAuthClient } from '../services/authClient';
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
  Divider,
  CircularProgress,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useAuthClient } from '../services/authClient';
import {
  getCasaById,
  getDepartamentoById,
  getTerrenoById,
  updateCasa,
  updateDepartamento,
  updateTerreno,
  type CasaDTO,
  type DepartamentoDTO,
  type TerrenoDTO,
  type EstadoPropiedad,
  type Amenity,
  type Disposicion,
  type Perimetro,
  type TipoProp,
} from '../services/propiedadesService';

const ESTADOS: EstadoPropiedad[] = ['disponible', 'alquilado', 'reservado', 'fuera_de_servicio'];
const ESTADO_LABEL: Record<EstadoPropiedad, string> = {
  disponible: 'Disponible',
  alquilado: 'Alquilado',
  reservado: 'Reservado',
  fuera_de_servicio: 'Fuera de servicio',
};
const AMENITIES: Amenity[] = ['PILETA', 'GYM', 'SUM', 'PARRILLA', 'SEGURIDAD_24H'];
const DISPOSICIONES: Disposicion[] = ['FRENTE', 'CONTRAFRENTE', 'LATERAL', 'INTERNO'];
const PERIMETROS: Perimetro[] = ['ALAMBRADO', 'CERCADO', 'SIN_CIERRE'];

export default function EditarInmueblePage() {
  const { fetchWithToken } = useAuthClient();
  const navigate = useNavigate();
  const { tipo, id } = useParams<{ tipo: TipoProp; id: string }>();

  const [loadingData, setLoadingData] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Campos comunes
  const [codigoRef, setCodigoRef] = useState('');
  const [codigoCatastral, setCodigoCatastral] = useState('');
  const [estado, setEstado] = useState<EstadoPropiedad>('disponible');
  const [superficieTotal, setSuperficieTotal] = useState('');
  const [superficieCubierta, setSuperficieCubierta] = useState('');

  // Dirección
  const [calleRuta, setCalleRuta] = useState('');
  const [alturaKm, setAlturaKm] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [provincia, setProvincia] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');

  // Habitacional
  const [ambientesNum, setAmbientesNum] = useState('');
  const [dormitoriosNum, setDormitoriosNum] = useState('');
  const [baniosNum, setBaniosNum] = useState('');
  const [mascotas, setMascotas] = useState(false);
  const [aptoProfesional, setAptoProfesional] = useState(false);
  const [anioConstruccion, setAnioConstruccion] = useState('');

  // Casa
  const [plantasNum, setPlantasNum] = useState('');
  const [jardin, setJardin] = useState(false);
  const [cochera, setCochera] = useState(false);
  const [barrioCerrado, setBarrioCerrado] = useState(false);

  // Departamento
  const [piso, setPiso] = useState('');
  const [letraNumero, setLetraNumero] = useState('');
  const [expensasMonto, setExpensasMonto] = useState('');
  const [disposicion, setDisposicion] = useState<Disposicion | ''>('');
  const [amenities, setAmenities] = useState<Amenity[]>([]);

  // Terreno
  const [aplicaRendimiento, setAplicaRendimiento] = useState(false);
  const [superficieProduccion, setSuperficieProduccion] = useState('');
  const [perimetro, setPerimetro] = useState<Perimetro | ''>('');

  useEffect(() => {
    if (!tipo || !id) return;
    const numId = Number(id);

    const cargar = async () => {
      setLoadingData(true);
      try {
        if (tipo === 'casa') {
          const data = await getCasaById(fetchWithToken, numId);
          setCodigoRef(data.codigoRef ?? '');
          setCodigoCatastral(data.codigoCatastral ?? '');
          setEstado(data.estado);
          setSuperficieTotal(data.superficieTotal?.toString() ?? '');
          setSuperficieCubierta(data.superficieCubierta?.toString() ?? '');
          setCalleRuta(data.direccion?.calleRuta ?? '');
          setAlturaKm(data.direccion?.alturaKm ?? '');
          setLocalidad(data.direccion?.localidad ?? '');
          setProvincia(data.direccion?.provincia ?? '');
          setCodigoPostal(data.direccion?.codigoPostal ?? '');
          setAmbientesNum(data.ambientesNum?.toString() ?? '');
          setDormitoriosNum(data.dormitoriosNum?.toString() ?? '');
          setBaniosNum(data.baniosNum?.toString() ?? '');
          setMascotas(data.mascotas ?? false);
          setAptoProfesional(data.aptoProfesional ?? false);
          setAnioConstruccion(data.anioConstruccion?.toString() ?? '');
          setPlantasNum(data.plantasNum?.toString() ?? '');
          setJardin(data.jardin ?? false);
          setCochera(data.cochera ?? false);
          setBarrioCerrado(data.barrioCerrado ?? false);
        } else if (tipo === 'departamento') {
          const data = await getDepartamentoById(fetchWithToken, numId);
          setCodigoRef(data.codigoRef ?? '');
          setCodigoCatastral(data.codigoCatastral ?? '');
          setEstado(data.estado);
          setSuperficieTotal(data.superficieTotal?.toString() ?? '');
          setCalleRuta(data.direccion?.calleRuta ?? '');
          setAlturaKm(data.direccion?.alturaKm ?? '');
          setLocalidad(data.direccion?.localidad ?? '');
          setProvincia(data.direccion?.provincia ?? '');
          setCodigoPostal(data.direccion?.codigoPostal ?? '');
          setAmbientesNum(data.ambientesNum?.toString() ?? '');
          setDormitoriosNum(data.dormitoriosNum?.toString() ?? '');
          setBaniosNum(data.baniosNum?.toString() ?? '');
          setMascotas(data.mascotas ?? false);
          setAptoProfesional(data.aptoProfesional ?? false);
          setAnioConstruccion(data.anioConstruccion?.toString() ?? '');
          setPiso(data.piso ?? '');
          setLetraNumero(data.letraNumero ?? '');
          setExpensasMonto(data.expensasMonto?.toString() ?? '');
          setDisposicion(data.disposicion ?? '');
          setAmenities(data.amenities ?? []);
        } else {
          const data = await getTerrenoById(fetchWithToken, numId);
          setCodigoRef(data.codigoRef ?? '');
          setCodigoCatastral(data.codigoCatastral ?? '');
          setEstado(data.estado);
          setSuperficieTotal(data.superficieTotal?.toString() ?? '');
          setCalleRuta(data.direccion?.calleRuta ?? '');
          setAlturaKm(data.direccion?.alturaKm ?? '');
          setLocalidad(data.direccion?.localidad ?? '');
          setProvincia(data.direccion?.provincia ?? '');
          setCodigoPostal(data.direccion?.codigoPostal ?? '');
          setAplicaRendimiento(data.aplicaRendimiento ?? false);
          setSuperficieProduccion(data.superficieProduccion?.toString() ?? '');
          setPerimetro(data.perimetro ?? '');
        }
      } catch {
        setError('No se pudo cargar el inmueble.');
      } finally {
        setLoadingData(false);
      }
    };
    cargar();
  }, [tipo, id]);

  const toggleAmenity = (a: Amenity) =>
    setAmenities((prev) =>
      prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]
    );

  const handleSubmit = async () => {
    if (!codigoRef || !estado || !calleRuta || !localidad || !provincia) {
      setError('Completá los campos obligatorios.');
      return;
    }
    setSaving(true);
    setError(null);
    const numId = Number(id);

    try {
      const base = {
        codigoRef,
        estado,
        ...(codigoCatastral && { codigoCatastral }),
        ...(superficieTotal && { superficieTotal: Number(superficieTotal) }),
        ...(superficieCubierta && { superficieCubierta: Number(superficieCubierta) }),
        direccion: {
          calleRuta,
          ...(alturaKm && { alturaKm }),
          localidad,
          provincia,
          ...(codigoPostal && { codigoPostal }),
        },
      };

      const habitacional = {
        ...base,
        ...(ambientesNum && { ambientesNum: Number(ambientesNum) }),
        ...(dormitoriosNum && { dormitoriosNum: Number(dormitoriosNum) }),
        ...(baniosNum && { baniosNum: Number(baniosNum) }),
        mascotas,
        aptoProfesional,
        ...(anioConstruccion && { anioConstruccion: Number(anioConstruccion) }),
      };

      if (tipo === 'casa') {
        const dto: CasaDTO = {
          ...habitacional,
          ...(plantasNum && { plantasNum: Number(plantasNum) }),
          jardin,
          cochera,
          barrioCerrado,
        };
        await updateCasa(fetchWithToken, numId, dto);
      } else if (tipo === 'departamento') {
        const dto: DepartamentoDTO = {
          ...habitacional,
          ...(piso && { piso }),
          ...(letraNumero && { letraNumero }),
          ...(expensasMonto && { expensasMonto: Number(expensasMonto) }),
          ...(disposicion && { disposicion }),
          amenities,
        };
        await updateDepartamento(fetchWithToken, numId, dto);
      } else {
        const dto: TerrenoDTO = {
          ...base,
          aplicaRendimiento,
          ...(superficieProduccion && { superficieProduccion: Number(superficieProduccion) }),
          ...(perimetro && { perimetro }),
        };
        await updateTerreno(fetchWithToken, numId, dto);
      }

      setSuccess(true);
      setTimeout(() => navigate('/inmuebles'), 1500);
    } catch {
      setError('Error al guardar los cambios.');
    } finally {
      setSaving(false);
    }
  };

  if (loadingData) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Button startIcon={<ArrowBack />} onClick={() => navigate('/inmuebles')} variant="text">
          Volver
        </Button>
        <Typography variant="h4" component="h1" color="text.primary">
          Editar {tipo ? tipo.charAt(0).toUpperCase() + tipo.slice(1) : 'Inmueble'}
        </Typography>
      </Box>

      {/* Datos básicos */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>Datos básicos</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
            <TextField label="Código de referencia *" value={codigoRef} onChange={(e) => setCodigoRef(e.target.value)} />
            <TextField label="Código catastral" value={codigoCatastral} onChange={(e) => setCodigoCatastral(e.target.value)} />
            <FormControl>
              <InputLabel>Estado *</InputLabel>
              <Select value={estado} label="Estado *" onChange={(e) => setEstado(e.target.value as EstadoPropiedad)}>
                {ESTADOS.map((e) => <MenuItem key={e} value={e}>{ESTADO_LABEL[e]}</MenuItem>)}
              </Select>
            </FormControl>
            <TextField label="Superficie total (m²)" type="number" value={superficieTotal} onChange={(e) => setSuperficieTotal(e.target.value)} />
            <TextField label="Superficie cubierta (m²)" type="number" value={superficieCubierta} onChange={(e) => setSuperficieCubierta(e.target.value)} />
          </Box>
        </CardContent>
      </Card>

      {/* Dirección */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>Dirección</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
            <TextField label="Calle / Ruta *" value={calleRuta} onChange={(e) => setCalleRuta(e.target.value)} />
            <TextField label="Altura / Km" value={alturaKm} onChange={(e) => setAlturaKm(e.target.value)} />
            <TextField label="Localidad *" value={localidad} onChange={(e) => setLocalidad(e.target.value)} />
            <TextField label="Provincia *" value={provincia} onChange={(e) => setProvincia(e.target.value)} />
            <TextField label="Código postal" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} />
          </Box>
        </CardContent>
      </Card>

      {/* Habitacional */}
      {(tipo === 'casa' || tipo === 'departamento') && (
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>Datos habitacionales</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
              <TextField label="Ambientes" type="number" value={ambientesNum} onChange={(e) => setAmbientesNum(e.target.value)} />
              <TextField label="Dormitorios" type="number" value={dormitoriosNum} onChange={(e) => setDormitoriosNum(e.target.value)} />
              <TextField label="Baños" type="number" value={baniosNum} onChange={(e) => setBaniosNum(e.target.value)} />
              <TextField label="Año de construcción" type="number" value={anioConstruccion} onChange={(e) => setAnioConstruccion(e.target.value)} />
            </Box>
            <Box sx={{ mt: 2, display: 'flex', gap: 3 }}>
              <FormControlLabel control={<Checkbox checked={mascotas} onChange={(e) => setMascotas(e.target.checked)} />} label="Acepta mascotas" />
              <FormControlLabel control={<Checkbox checked={aptoProfesional} onChange={(e) => setAptoProfesional(e.target.checked)} />} label="Apto profesional" />
            </Box>
          </CardContent>
        </Card>
      )}

      {tipo === 'casa' && (
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>Características de la casa</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2, mb: 2 }}>
              <TextField label="Plantas" type="number" value={plantasNum} onChange={(e) => setPlantasNum(e.target.value)} />
            </Box>
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
              <FormControlLabel control={<Checkbox checked={jardin} onChange={(e) => setJardin(e.target.checked)} />} label="Jardín" />
              <FormControlLabel control={<Checkbox checked={cochera} onChange={(e) => setCochera(e.target.checked)} />} label="Cochera" />
              <FormControlLabel control={<Checkbox checked={barrioCerrado} onChange={(e) => setBarrioCerrado(e.target.checked)} />} label="Barrio cerrado" />
            </Box>
          </CardContent>
        </Card>
      )}

      {tipo === 'departamento' && (
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>Características del departamento</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2, mb: 2 }}>
              <TextField label="Piso" value={piso} onChange={(e) => setPiso(e.target.value)} />
              <TextField label="Letra / Número" value={letraNumero} onChange={(e) => setLetraNumero(e.target.value)} />
              <TextField label="Expensas ($)" type="number" value={expensasMonto} onChange={(e) => setExpensasMonto(e.target.value)} />
              <FormControl>
                <InputLabel>Disposición</InputLabel>
                <Select value={disposicion} label="Disposición" onChange={(e) => setDisposicion(e.target.value as Disposicion)}>
                  <MenuItem value="">—</MenuItem>
                  {DISPOSICIONES.map((d) => <MenuItem key={d} value={d}>{d}</MenuItem>)}
                </Select>
              </FormControl>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2" fontWeight={600} gutterBottom>Amenities</Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {AMENITIES.map((a) => (
                <FormControlLabel key={a} control={<Checkbox checked={amenities.includes(a)} onChange={() => toggleAmenity(a)} />} label={a} />
              ))}
            </Box>
          </CardContent>
        </Card>
      )}

      {tipo === 'terreno' && (
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>Características del terreno</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2, mb: 2 }}>
              <TextField label="Superficie de producción (m²)" type="number" value={superficieProduccion} onChange={(e) => setSuperficieProduccion(e.target.value)} />
              <FormControl>
                <InputLabel>Perímetro</InputLabel>
                <Select value={perimetro} label="Perímetro" onChange={(e) => setPerimetro(e.target.value as Perimetro)}>
                  <MenuItem value="">—</MenuItem>
                  {PERIMETROS.map((p) => <MenuItem key={p} value={p}>{p}</MenuItem>)}
                </Select>
              </FormControl>
            </Box>
            <FormControlLabel control={<Checkbox checked={aplicaRendimiento} onChange={(e) => setAplicaRendimiento(e.target.checked)} />} label="Aplica rendimiento" />
          </CardContent>
        </Card>
      )}

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
        <Button variant="outlined" onClick={() => navigate('/inmuebles')} disabled={saving}>Cancelar</Button>
        <Button variant="contained" onClick={handleSubmit} disabled={saving} startIcon={saving ? <CircularProgress size={18} /> : undefined}>
          {saving ? 'Guardando...' : 'Guardar cambios'}
        </Button>
      </Box>

      <Snackbar open={success} autoHideDuration={3000}>
        <Alert severity="success">Inmueble actualizado correctamente</Alert>
      </Snackbar>
    </Box>
  );
}
