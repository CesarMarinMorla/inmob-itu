import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import * as personasService from './personasService';

// Mock data
const mockPersonaFisica: personasService.PersonaFisica = {
  id: 1,
  primerNombre: 'Juan',
  primerApellido: 'Perez',
  tipoDocumento: 'dni',
  numDocumento: '12345678',
  fechaNacimiento: '1990-01-01',
  telefonos: [],
  mails: [],
  direcciones: []
};

const mockPersonaJuridica: personasService.PersonaJuridica = {
  id: 2,
  razonSocial: 'Empresa SA',
  cuit: '30-12345678-9',
  fechaConstitucion: '2000-01-01',
  telefonos: [],
  mails: [],
  direcciones: []
};

describe('Personas Service', () => {
  beforeEach(() => {
    // Reset any previous mocks
    vi.clearAllMocks();

    // Mock global fetch
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Personas Físicas', () => {
    it('getPersonasFisicas should fetch and return data correctly', async () => {
      const mockData = [mockPersonaFisica];
      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: async () => mockData
      });

      const result = await personasService.getPersonasFisicas(global.fetch as any);

      expect(global.fetch).toHaveBeenCalledWith('/personas-fisicas');
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockData);
    });

    it('getPersonasFisicas should handle errors and return empty array', async () => {
      (global.fetch as any).mockRejectedValue(new Error('Network error'));

      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => { });

      const result = await personasService.getPersonasFisicas(global.fetch as any);

      expect(result).toEqual([]);
      expect(consoleSpy).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });

    it('createPersonaFisica should send correct POST request', async () => {
      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: async () => mockPersonaFisica
      });

      const result = await personasService.createPersonaFisica(global.fetch as any, mockPersonaFisica);

      expect(global.fetch).toHaveBeenCalledWith('/personas-fisicas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mockPersonaFisica)
      });
      expect(result).toEqual(mockPersonaFisica);
    });

    it('getPersonaFisicaByDni should return data if DNI exist', async () => {
      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: async () => mockPersonaFisica
      });

      const result = await personasService.getPersonaFisicaByDni(global.fetch as any, '12345678');

      expect(global.fetch).toHaveBeenCalledWith('/personas-fisicas/12345678');
      expect(result).toEqual(mockPersonaFisica);
    });

    it('getPersonaFisicaByDni should return null if status 404', async () => {
      (global.fetch as any).mockResolvedValue({
        ok: false,
        status: 404
      });

      const result = await personasService.getPersonaFisicaByDni(global.fetch as any, '000');
      expect(result).toBeNull();
    });

    it('updatePersonaFisica should send correct PUT request', async () => {
      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: async () => mockPersonaFisica
      });

      const result = await personasService.updatePersonaFisica(global.fetch as any, 1, mockPersonaFisica);

      expect(global.fetch).toHaveBeenCalledWith('/personas-fisicas/1', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mockPersonaFisica)
      });
      expect(result).toEqual(mockPersonaFisica);
    });

    it('deletePersonaFisica should send DELETE request and return true', async () => {
      (global.fetch as any).mockResolvedValue({
        ok: true
      });

      const result = await personasService.deletePersonaFisica(global.fetch as any, 1);

      expect(global.fetch).toHaveBeenCalledWith('/personas-fisicas/1', {
        method: 'DELETE'
      });
      expect(result).toBe(true);
    });
  });

  describe('Personas Jurídicas', () => {
    it('getPersonasJuridicas should fetch and return data correctly', async () => {
      const mockData = [mockPersonaJuridica];
      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: async () => mockData
      });

      const result = await personasService.getPersonasJuridicas(global.fetch as any);

      expect(global.fetch).toHaveBeenCalledWith('/personas-juridicas');
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockData);
    });

    it('getPersonasJuridicas should append rol parameter if provided', async () => {
      const mockData = [mockPersonaJuridica];
      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: async () => mockData
      });

      const result = await personasService.getPersonasJuridicas(global.fetch as any, 'propietario');

      expect(global.fetch).toHaveBeenCalledWith('/personas-juridicas?rol=propietario');
      expect(result).toEqual(mockData);
    });

    it('createPersonaJuridica should send correct POST request', async () => {
      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: async () => mockPersonaJuridica
      });

      const result = await personasService.createPersonaJuridica(global.fetch as any, mockPersonaJuridica);

      expect(global.fetch).toHaveBeenCalledWith('/personas-juridicas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mockPersonaJuridica)
      });
      expect(result).toEqual(mockPersonaJuridica);
    });

    it('getPersonaJuridicaByCuit should return null if status 404', async () => {
      (global.fetch as any).mockResolvedValue({
        ok: false,
        status: 404
      });

      const result = await personasService.getPersonaJuridicaByCuit(global.fetch as any, '000');
      expect(result).toBeNull();
    });

    it('updatePersonaJuridica should send correct PUT request', async () => {
      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: async () => mockPersonaJuridica
      });

      const result = await personasService.updatePersonaJuridica(global.fetch as any, 2, mockPersonaJuridica);

      expect(global.fetch).toHaveBeenCalledWith('/personas-juridicas/2', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mockPersonaJuridica)
      });
      expect(result).toEqual(mockPersonaJuridica);
    });

    it('deletePersonaJuridica should send DELETE request and return true', async () => {
      (global.fetch as any).mockResolvedValue({
        ok: true
      });

      const result = await personasService.deletePersonaJuridica(global.fetch as any, 2);

      expect(global.fetch).toHaveBeenCalledWith('/personas-juridicas/2', {
        method: 'DELETE'
      });
      expect(result).toBe(true);
    });
  });
});
