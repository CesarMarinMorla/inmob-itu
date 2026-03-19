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


export const getPersonaFisicaByDni = async (dni: string): Promise<PersonaFisica | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/personas-fisicas/${dni}`);
    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error al obtener persona física con DNI ${dni}:`, error);
    return null;
  }
};

export const updatePersonaFisica = async (id: number | string, persona: PersonaFisica): Promise<PersonaFisica | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/personas-fisicas/${id}`, {
      method: 'PUT',
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
    console.error(`Error al actualizar persona física con ID ${id}:`, error);
    return null;
  }
};

export const deletePersonaFisica = async (id: number | string): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/personas-fisicas/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error(`Error al eliminar persona física con ID ${id}:`, error);
    return false;
  }
};

