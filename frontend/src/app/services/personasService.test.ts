import { describe, it, expect, vi, beforeEach } from 'vitest';
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
  let mockFetchWithToken: any;

  beforeEach(() => {
    mockFetchWithToken = vi.fn();
  });

  describe('Personas Físicas', () => {
    it('getPersonasFisicas should fetch and return data correctly', async () => {
      const mockData = [mockPersonaFisica];
      mockFetchWithToken.mockResolvedValue({
        ok: true,
        json: async () => mockData
      });

      const result = await personasService.getPersonasFisicas(mockFetchWithToken);

      expect(mockFetchWithToken).toHaveBeenCalledWith('/personas-fisicas');
      expect(mockFetchWithToken).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockData);
    });

    it('getPersonasFisicas should handle errors and return empty array', async () => {
      mockFetchWithToken.mockRejectedValue(new Error('Network error'));

      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => { });

      const result = await personasService.getPersonasFisicas(mockFetchWithToken);

      expect(result).toEqual([]);
      expect(consoleSpy).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });

    it('createPersonaFisica should send correct POST request', async () => {
      mockFetchWithToken.mockResolvedValue({
        ok: true,
        json: async () => mockPersonaFisica
      });

      const result = await personasService.createPersonaFisica(mockFetchWithToken, mockPersonaFisica);

      expect(mockFetchWithToken).toHaveBeenCalledWith('/personas-fisicas', {
        method: 'POST',
        body: JSON.stringify(mockPersonaFisica)
      });
      expect(result).toEqual(mockPersonaFisica);
    });

    it('getPersonaFisicaByDni should return data if DNI exist', async () => {
      mockFetchWithToken.mockResolvedValue({
        ok: true,
        json: async () => mockPersonaFisica
      });

      const result = await personasService.getPersonaFisicaByDni(mockFetchWithToken, '12345678');

      expect(mockFetchWithToken).toHaveBeenCalledWith('/personas-fisicas/12345678');
      expect(result).toEqual(mockPersonaFisica);
    });

    it('getPersonaFisicaByDni should return null if status 404', async () => {
      mockFetchWithToken.mockResolvedValue({
        ok: false,
        status: 404
      });

      const result = await personasService.getPersonaFisicaByDni(mockFetchWithToken, '000');
      expect(result).toBeNull();
    });

    it('updatePersonaFisica should send correct PUT request', async () => {
      mockFetchWithToken.mockResolvedValue({
        ok: true,
        json: async () => mockPersonaFisica
      });

      const result = await personasService.updatePersonaFisica(mockFetchWithToken, 1, mockPersonaFisica);

      expect(mockFetchWithToken).toHaveBeenCalledWith('/personas-fisicas/1', {
        method: 'PUT',
        body: JSON.stringify(mockPersonaFisica)
      });
      expect(result).toEqual(mockPersonaFisica);
    });

    it('deletePersonaFisica should send DELETE request and return true', async () => {
      mockFetchWithToken.mockResolvedValue({
        ok: true
      });

      const result = await personasService.deletePersonaFisica(mockFetchWithToken, 1);

      expect(mockFetchWithToken).toHaveBeenCalledWith('/personas-fisicas/1', {
        method: 'DELETE'
      });
      expect(result).toBe(true);
    });
  });

  describe('Personas Jurídicas', () => {
    it('getPersonasJuridicas should fetch and return data correctly', async () => {
      const mockData = [mockPersonaJuridica];
      mockFetchWithToken.mockResolvedValue({
        ok: true,
        json: async () => mockData
      });

      const result = await personasService.getPersonasJuridicas(mockFetchWithToken);

      expect(mockFetchWithToken).toHaveBeenCalledWith('/personas-juridicas');
      expect(mockFetchWithToken).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockData);
    });

    it('getPersonasJuridicas should append rol parameter if provided', async () => {
      const mockData = [mockPersonaJuridica];
      mockFetchWithToken.mockResolvedValue({
        ok: true,
        json: async () => mockData
      });

      const result = await personasService.getPersonasJuridicas(mockFetchWithToken, 'propietario');

      expect(mockFetchWithToken).toHaveBeenCalledWith('/personas-juridicas?rol=propietario');
      expect(result).toEqual(mockData);
    });

    it('createPersonaJuridica should send correct POST request', async () => {
      mockFetchWithToken.mockResolvedValue({
        ok: true,
        json: async () => mockPersonaJuridica
      });

      const result = await personasService.createPersonaJuridica(mockFetchWithToken, mockPersonaJuridica);

      expect(mockFetchWithToken).toHaveBeenCalledWith('/personas-juridicas', {
        method: 'POST',
        body: JSON.stringify(mockPersonaJuridica)
      });
      expect(result).toEqual(mockPersonaJuridica);
    });

    it('getPersonaJuridicaByCuit should return null if status 404', async () => {
      mockFetchWithToken.mockResolvedValue({
        ok: false,
        status: 404
      });

      const result = await personasService.getPersonaJuridicaByCuit(mockFetchWithToken, '000');
      expect(result).toBeNull();
    });

    it('updatePersonaJuridica should send correct PUT request', async () => {
      mockFetchWithToken.mockResolvedValue({
        ok: true,
        json: async () => mockPersonaJuridica
      });

      const result = await personasService.updatePersonaJuridica(mockFetchWithToken, 2, mockPersonaJuridica);

      expect(mockFetchWithToken).toHaveBeenCalledWith('/personas-juridicas/2', {
        method: 'PUT',
        body: JSON.stringify(mockPersonaJuridica)
      });
      expect(result).toEqual(mockPersonaJuridica);
    });

    it('deletePersonaJuridica should send DELETE request and return true', async () => {
      mockFetchWithToken.mockResolvedValue({
        ok: true
      });

      const result = await personasService.deletePersonaJuridica(mockFetchWithToken, 2);

      expect(mockFetchWithToken).toHaveBeenCalledWith('/personas-juridicas/2', {
        method: 'DELETE'
      });
      expect(result).toBe(true);
    });
  });
});
