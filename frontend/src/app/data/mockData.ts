// Tipos de datos
export interface Propietario {
  id: string;
  tipo: 'persona' | 'empresa';
  // Persona física
  primerNombre?: string;
  segundoNombre?: string;
  primerApellido?: string;
  segundoApellido?: string;
  tipoDocumento?: 'dni' | 'cuit' | 'cuil' | 'pasaporte';
  numeroDocumento?: string;
  fechaNacimiento?: string;
  // Empresa
  razonSocial?: string;
  cuit?: string;
  // Común
  email: string;
  telefono: string;
  direccion: string;
  provincia: string;
  localidad: string;
  codigoPostal?: string;
  inmuebles: string[]; // IDs de inmuebles
  inquilinos: string[]; // IDs de inquilinos
}

export interface Inquilino {
  id: string;
  tipo: 'persona' | 'empresa';
  // Persona física
  primerNombre?: string;
  segundoNombre?: string;
  primerApellido?: string;
  segundoApellido?: string;
  tipoDocumento?: 'dni' | 'cuit' | 'cuil' | 'pasaporte';
  numeroDocumento?: string;
  fechaNacimiento?: string;
  // Empresa
  razonSocial?: string;
  cuit?: string;
  // Común
  email: string;
  telefono: string;
  direccion: string;
  provincia: string;
  localidad: string;
  codigoPostal?: string;
  inmuebles: string[]; // IDs de inmuebles alquilados
  propietarios: string[]; // IDs de propietarios
}

export interface Inmueble {
  id: string;
  direccion: string;
  provincia: string;
  localidad: string;
  codigoPostal?: string;
  tipo: 'Casa' | 'Departamento' | 'Local' | 'Terreno' | 'Oficina';
  estado: 'Disponible' | 'Alquilado' | 'Reservado';
  precio: number;
  propietarioId?: string;
  inquilinoId?: string;
  descripcion?: string;
}

// Data mock inicial
export let propietarios: Propietario[] = [
  {
    id: '1',
    tipo: 'empresa',
    razonSocial: 'Vaquitas S.A.',
    cuit: '33-13532521-2',
    email: 'contacto@vaquitas.com.ar',
    telefono: '+54 9 2253 545 234',
    direccion: 'Av. Siempre Viva 500',
    provincia: 'Chubut',
    localidad: 'Esquel',
    codigoPostal: '9200',
    inmuebles: [],
    inquilinos: [],
  },
  {
    id: '2',
    tipo: 'persona',
    primerNombre: 'Juan',
    primerApellido: 'Pérez',
    tipoDocumento: 'dni',
    numeroDocumento: '13532521',
    email: 'juanperez@gmail.com',
    telefono: '+54 9 2253 545 234',
    direccion: 'Av. Siempre Viva 500',
    provincia: 'Chubut',
    localidad: 'Esquel',
    codigoPostal: '9200',
    inmuebles: [],
    inquilinos: [],
  },
];

export let inquilinos: Inquilino[] = [
  {
    id: '1',
    tipo: 'persona',
    primerNombre: 'María',
    primerApellido: 'González',
    tipoDocumento: 'dni',
    numeroDocumento: '25123456',
    email: 'maria.gonzalez@gmail.com',
    telefono: '+54 9 2253 123 456',
    direccion: 'Calle Falsa 123',
    provincia: 'Buenos Aires',
    localidad: 'La Plata',
    codigoPostal: '1900',
    inmuebles: [],
    propietarios: [],
  },
];

export let inmuebles: Inmueble[] = [
  {
    id: '1',
    direccion: 'Av. Siempre Viva 500',
    provincia: 'Chubut',
    localidad: 'Esquel',
    codigoPostal: '9200',
    tipo: 'Casa',
    estado: 'Disponible',
    precio: 500000,
    descripcion: 'Casa amplia con jardín',
  },
];

// Funciones CRUD para Propietarios
export const getPropietarios = (): Propietario[] => propietarios;

export const getPropietarioById = (id: string): Propietario | undefined => {
  return propietarios.find(p => p.id === id);
};

export const createPropietario = (propietario: Omit<Propietario, 'id'>): Propietario => {
  const newPropietario = {
    ...propietario,
    id: Date.now().toString(),
  };
  propietarios.push(newPropietario);
  return newPropietario;
};

export const updatePropietario = (id: string, data: Partial<Propietario>): Propietario | undefined => {
  const index = propietarios.findIndex(p => p.id === id);
  if (index === -1) return undefined;
  propietarios[index] = { ...propietarios[index], ...data };
  return propietarios[index];
};

export const deletePropietario = (id: string): boolean => {
  const index = propietarios.findIndex(p => p.id === id);
  if (index === -1) return false;

  // Desvincular de inquilinos
  const propietario = propietarios[index];
  propietario.inquilinos.forEach(inquilinoId => {
    unlinkPropietarioFromInquilino(id, inquilinoId);
  });

  propietarios.splice(index, 1);
  return true;
};

// Funciones CRUD para Inquilinos
export const getInquilinos = (): Inquilino[] => inquilinos;

export const getInquilinoById = (id: string): Inquilino | undefined => {
  return inquilinos.find(i => i.id === id);
};

export const createInquilino = (inquilino: Omit<Inquilino, 'id'>): Inquilino => {
  const newInquilino = {
    ...inquilino,
    id: Date.now().toString(),
  };
  inquilinos.push(newInquilino);
  return newInquilino;
};

export const updateInquilino = (id: string, data: Partial<Inquilino>): Inquilino | undefined => {
  const index = inquilinos.findIndex(i => i.id === id);
  if (index === -1) return undefined;
  inquilinos[index] = { ...inquilinos[index], ...data };
  return inquilinos[index];
};

export const deleteInquilino = (id: string): boolean => {
  const index = inquilinos.findIndex(i => i.id === id);
  if (index === -1) return false;

  // Desvincular de propietarios
  const inquilino = inquilinos[index];
  inquilino.propietarios.forEach(propietarioId => {
    unlinkInquilinoFromPropietario(id, propietarioId);
  });

  inquilinos.splice(index, 1);
  return true;
};

// Funciones CRUD para Inmuebles
export const getInmuebles = (): Inmueble[] => inmuebles;

export const getInmuebleById = (id: string): Inmueble | undefined => {
  return inmuebles.find(i => i.id === id);
};

export const createInmueble = (inmueble: Omit<Inmueble, 'id'>): Inmueble => {
  const newInmueble = {
    ...inmueble,
    id: Date.now().toString(),
  };
  inmuebles.push(newInmueble);
  return newInmueble;
};

export const updateInmueble = (id: string, data: Partial<Inmueble>): Inmueble | undefined => {
  const index = inmuebles.findIndex(i => i.id === id);
  if (index === -1) return undefined;
  inmuebles[index] = { ...inmuebles[index], ...data };
  return inmuebles[index];
};

export const deleteInmueble = (id: string): boolean => {
  const index = inmuebles.findIndex(i => i.id === id);
  if (index === -1) return false;
  inmuebles.splice(index, 1);
  return true;
};

// Funciones de vinculación
export const linkPropietarioToInquilino = (propietarioId: string, inquilinoId: string): void => {
  const propietario = getPropietarioById(propietarioId);
  const inquilino = getInquilinoById(inquilinoId);

  if (propietario && inquilino) {
    if (!propietario.inquilinos.includes(inquilinoId)) {
      propietario.inquilinos.push(inquilinoId);
    }
    if (!inquilino.propietarios.includes(propietarioId)) {
      inquilino.propietarios.push(propietarioId);
    }
  }
};

export const unlinkPropietarioFromInquilino = (propietarioId: string, inquilinoId: string): void => {
  const propietario = getPropietarioById(propietarioId);
  const inquilino = getInquilinoById(inquilinoId);

  if (propietario) {
    propietario.inquilinos = propietario.inquilinos.filter(id => id !== inquilinoId);
  }
  if (inquilino) {
    inquilino.propietarios = inquilino.propietarios.filter(id => id !== propietarioId);
  }
};

export const unlinkInquilinoFromPropietario = (inquilinoId: string, propietarioId: string): void => {
  unlinkPropietarioFromInquilino(propietarioId, inquilinoId);
};

export const getInquilinosByPropietarioId = (propietarioId: string): Inquilino[] => {
  const propietario = getPropietarioById(propietarioId);
  if (!propietario) return [];
  return inquilinos.filter(i => propietario.inquilinos.includes(i.id));
};

export const getPropietariosByInquilinoId = (inquilinoId: string): Propietario[] => {
  const inquilino = getInquilinoById(inquilinoId);
  if (!inquilino) return [];
  return propietarios.filter(p => inquilino.propietarios.includes(p.id));
};
