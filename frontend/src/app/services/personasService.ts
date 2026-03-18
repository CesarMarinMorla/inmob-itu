export interface Telefono {
  numero: string;
  tipo: 'CELULAR' | 'FIJO';
}

export interface Mail {
  email: string;
  tipo: 'PERSONAL' | 'LABORAL';
  esPrincipal: boolean;
}

export interface Direccion {
  calle: string;
  altura: string;
  piso?: string;
  departamento?: string;
  barrio?: string;
  localidad: string;
  provincia: string;
  codigoPostal?: string;
  tipoDomicilio: 'PARTICULAR' | 'LABORAL' | 'OTRO';
}

export interface PersonaFisica {
  id?: number | string;
  primerNombre: string;
  segundoNombre?: string;
  primerApellido: string;
  segundoApellido?: string;
  tipoDocumento: 'DNI' | 'CUIT' | 'CUIL' | 'Pasaporte';
  numDocumento: string;
  fechaNacimiento: string;
  telefonos: Telefono[];
  mails: Mail[];
  direcciones: Direccion[];
}

const API_BASE_URL = 'http://localhost:8080/api/v1';

export const getPersonasFisicas = async (): Promise<PersonaFisica[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/personas-fisicas`);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error al obtener personas físicas:', error);
    return [];
  }
};

export const createPersonaFisica = async (persona: PersonaFisica): Promise<PersonaFisica | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/personas-fisicas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(persona),
    });
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error al crear persona física:', error);
    return null;
  }
};
