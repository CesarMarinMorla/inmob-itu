export interface Telefono {
  numero: string;
  tipo: 'celular' | 'fijo' | 'trabajo';
}

export interface Mail {
  email: string;
  tipo: 'personal' | 'laboral';
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
  tipoDomicilio: 'particular' | 'laboral' | 'comercial';
}

export interface PersonaFisica {
  id?: number | string;
  primerNombre: string;
  segundoNombre?: string;
  primerApellido: string;
  segundoApellido?: string;
  tipoDocumento: 'dni' | 'cuit' | 'cuil' | 'Pasaporte';
  numDocumento: string;
  fechaNacimiento: string;
  telefonos: Telefono[];
  mails: Mail[];
  direcciones: Direccion[];
}

export interface PersonaJuridica {
  id?: number | string;
  razonSocial: string;
  nombreNegocio?: string;
  cuit: string;
  fechaConstitucion: string;
  telefonos: Telefono[];
  mails: Mail[];
  direcciones: Direccion[];
}

const API_BASE_URL = 'http://localhost:8080/api/v1';
const API_PERSONAS_FISICAS_URL = `${API_BASE_URL}/personas-fisicas`;
const API_PERSONAS_JURIDICAS_URL = `${API_BASE_URL}/personas-juridicas`;

export const getPersonasFisicas = async (): Promise<PersonaFisica[]> => {
  try {
    const response = await fetch(API_PERSONAS_FISICAS_URL);
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
    const response = await fetch(API_PERSONAS_FISICAS_URL, {
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
    const response = await fetch(`${API_PERSONAS_FISICAS_URL}/${dni}`);
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
    const response = await fetch(`${API_PERSONAS_FISICAS_URL}/${id}`, {
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
    const response = await fetch(`${API_PERSONAS_FISICAS_URL}/${id}`, {
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

// Personas Jurídicas

export const getPersonasJuridicas = async (): Promise<PersonaJuridica[]> => {
  try {
    const response = await fetch(API_PERSONAS_JURIDICAS_URL);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error al obtener personas jurídicas:', error);
    return [];
  }
};

export const createPersonaJuridica = async (persona: PersonaJuridica): Promise<PersonaJuridica | null> => {
  try {
    const response = await fetch(API_PERSONAS_JURIDICAS_URL, {
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
    console.error('Error al crear persona jurídica:', error);
    return null;
  }
};

export const getPersonaJuridicaByCuit = async (cuit: string): Promise<PersonaJuridica | null> => {
  try {
    const response = await fetch(`${API_PERSONAS_JURIDICAS_URL}/cuit/${cuit}`);
    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error al obtener persona jurídica con CUIT ${cuit}:`, error);
    return null;
  }
};

export const updatePersonaJuridica = async (id: number | string, persona: PersonaJuridica): Promise<PersonaJuridica | null> => {
  try {
    const response = await fetch(`${API_PERSONAS_JURIDICAS_URL}/${id}`, {
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
    console.error(`Error al actualizar persona jurídica con ID ${id}:`, error);
    return null;
  }
};

export const deletePersonaJuridica = async (id: number | string): Promise<boolean> => {
  try {
    const response = await fetch(`${API_PERSONAS_JURIDICAS_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error(`Error al eliminar persona jurídica con ID ${id}:`, error);
    return false;
  }
};