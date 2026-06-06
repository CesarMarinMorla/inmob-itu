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
  tipoDomicilio: 'legal' | 'particular' | 'comercial';
}

export interface PersonaFisica {
  id?: number | string;
  primerNombre: string;
  segundoNombre?: string;
  primerApellido: string;
  segundoApellido?: string;
  tipoDocumento: 'dni' | 'cuit' | 'cuil' | 'pasaporte';
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



// Tipos para roles
export interface InquilinoDTO {
  ocupacionPrincipal?: string;
  ingresosMensuales?: number;
  antiguedadLaboral?: number;
  antecedentesMora?: boolean;
  observacionesPrivadas?: string;
}

export interface PropietarioDTO {
  cuitCuil?: string;
  condicionIva?: string;
  ingresosBrutosNro?: string;
  esPersonaJuridica?: boolean;
  observacionesPropietario?: string;
  observacionesPrivadas?: string;
}

export const getPersonasFisicas = async (fetchWithToken: (endpoint: string, options?: RequestInit) => Promise<Response>, rol?: string): Promise<PersonaFisica[]> => {
  try {
    const endpoint = rol ? `/personas-fisicas?rol=${rol}` : '/personas-fisicas';
    const response = await fetchWithToken(endpoint);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error al obtener personas físicas:', error);
    return [];
  }
};

export const createPersonaFisica = async (fetchWithToken: (endpoint: string, options?: RequestInit) => Promise<Response>, persona: PersonaFisica): Promise<PersonaFisica | null> => {
  try {
    const response = await fetchWithToken('/personas-fisicas', {
      method: 'POST',
      body: JSON.stringify(persona),
    });
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Error al crear persona física:', error);
    return null;
  }
};


export const getPersonaFisicaByDni = async (fetchWithToken: (endpoint: string, options?: RequestInit) => Promise<Response>, dni: string): Promise<PersonaFisica | null> => {
  try {
    const response = await fetchWithToken(`/personas-fisicas/${dni}`);
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

export const updatePersonaFisica = async (fetchWithToken: (endpoint: string, options?: RequestInit) => Promise<Response>, id: number | string, persona: PersonaFisica): Promise<PersonaFisica | null> => {
  try {
    const response = await fetchWithToken(`/personas-fisicas/${id}`, {
      method: 'PUT',
      body: JSON.stringify(persona),
    });
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`Error al actualizar persona física con ID ${id}:`, error);
    return null;
  }
};

export const deletePersonaFisica = async (fetchWithToken: (endpoint: string, options?: RequestInit) => Promise<Response>, id: number | string): Promise<boolean> => {
  try {
    const response = await fetchWithToken(`/personas-fisicas/${id}`, {
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

export const getPersonasJuridicas = async (fetchWithToken: (endpoint: string, options?: RequestInit) => Promise<Response>, rol?: string): Promise<PersonaJuridica[]> => {
  try {
    const endpoint = rol ? `/personas-juridicas?rol=${rol}` : '/personas-juridicas';
    const response = await fetchWithToken(endpoint);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error al obtener personas jurídicas:', error);
    return [];
  }
};

export const createPersonaJuridica = async (fetchWithToken: (endpoint: string, options?: RequestInit) => Promise<Response>, persona: PersonaJuridica): Promise<PersonaJuridica | null> => {
  try {
    const response = await fetchWithToken('/personas-juridicas', {
      method: 'POST',
      body: JSON.stringify(persona),
    });
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Error al crear persona jurídica:', error);
    return null;
  }
};

export const getPersonaJuridicaByCuit = async (fetchWithToken: (endpoint: string, options?: RequestInit) => Promise<Response>, cuit: string): Promise<PersonaJuridica | null> => {
  try {
    const response = await fetchWithToken(`/personas-juridicas/cuit/${cuit}`);
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

export const updatePersonaJuridica = async (fetchWithToken: (endpoint: string, options?: RequestInit) => Promise<Response>, id: number | string, persona: PersonaJuridica): Promise<PersonaJuridica | null> => {
  try {
    const response = await fetchWithToken(`/personas-juridicas/${id}`, {
      method: 'PUT',
      body: JSON.stringify(persona),
    });
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`Error al actualizar persona jurídica con ID ${id}:`, error);
    return null;
  }
};

export const deletePersonaJuridica = async (fetchWithToken: (endpoint: string, options?: RequestInit) => Promise<Response>, id: number | string): Promise<boolean> => {
  try {
    const response = await fetchWithToken(`/personas-juridicas/${id}`, {
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

// Funciones para asignar roles
export const asignarRolInquilino = async (fetchWithToken: (endpoint: string, options?: RequestInit) => Promise<Response>, personaId: number, inquilinoData: InquilinoDTO): Promise<any> => {
  try {
    const response = await fetchWithToken(`/personas/${personaId}/roles/inquilino`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inquilinoData),
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error al asignar rol de inquilino:', error);
    return null;
  }
};

export const asignarRolPropietario = async (fetchWithToken: (endpoint: string, options?: RequestInit) => Promise<Response>, personaId: number, propietarioData: PropietarioDTO): Promise<any> => {
  try {
    const response = await fetchWithToken(`/personas/${personaId}/roles/propietario`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(propietarioData),
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error al asignar rol de propietario:', error);
    return null;
  }
};
