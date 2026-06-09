import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import * as propiedadesService from './propiedadesService';

const mockCasa: propiedadesService.CasaDTO = {
  id: 1,
  codigoRef: 'C-001',
  estado: 'disponible',
  plantasNum: 2,
};

const mockDepto: propiedadesService.DepartamentoDTO = {
  id: 2,
  codigoRef: 'D-002',
  estado: 'alquilado',
  piso: '3',
};

const mockTerreno: propiedadesService.TerrenoDTO = {
  id: 3,
  codigoRef: 'T-003',
  estado: 'reservado',
  aplicaRendimiento: true,
};

describe('Propiedades Service', () => {
  let mockFetch: any;

  beforeEach(() => {
    mockFetch = vi.fn();
  });

  describe('Casas', () => {
    it('getCasas should fetch and return data correctly', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => [mockCasa],
      });

      const result = await propiedadesService.getCasas(mockFetch);
      expect(mockFetch).toHaveBeenCalledWith('/casas');
      expect(result).toEqual([mockCasa]);
    });

    it('getCasaById should fetch and return a single house', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => mockCasa,
      });

      const result = await propiedadesService.getCasaById(mockFetch, 1);
      expect(mockFetch).toHaveBeenCalledWith('/casas/1');
      expect(result).toEqual(mockCasa);
    });

    it('createCasa should send POST and return new house', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => mockCasa,
      });

      const result = await propiedadesService.createCasa(mockFetch, mockCasa);
      expect(mockFetch).toHaveBeenCalledWith('/casas', {
        method: 'POST',
        body: JSON.stringify(mockCasa),
      });
      expect(result).toEqual(mockCasa);
    });

    it('updateCasa should send PUT and return updated house', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => mockCasa,
      });

      const result = await propiedadesService.updateCasa(mockFetch, 1, mockCasa);
      expect(mockFetch).toHaveBeenCalledWith('/casas/1', {
        method: 'PUT',
        body: JSON.stringify(mockCasa),
      });
      expect(result).toEqual(mockCasa);
    });

    it('deleteCasa should send DELETE', async () => {
      mockFetch.mockResolvedValue({ ok: true });

      await propiedadesService.deleteCasa(mockFetch, 1);
      expect(mockFetch).toHaveBeenCalledWith('/casas/1', { method: 'DELETE' });
    });
  });

  describe('Departamentos', () => {
    it('getDepartamentos should fetch and return data correctly', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => [mockDepto],
      });

      const result = await propiedadesService.getDepartamentos(mockFetch);
      expect(mockFetch).toHaveBeenCalledWith('/departamentos');
      expect(result).toEqual([mockDepto]);
    });

    it('getDepartamentoById should fetch and return a single depto', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => mockDepto,
      });

      const result = await propiedadesService.getDepartamentoById(mockFetch, 2);
      expect(mockFetch).toHaveBeenCalledWith('/departamentos/2');
      expect(result).toEqual(mockDepto);
    });

    it('createDepartamento should send POST', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => mockDepto,
      });

      const result = await propiedadesService.createDepartamento(mockFetch, mockDepto);
      expect(mockFetch).toHaveBeenCalledWith('/departamentos', {
        method: 'POST',
        body: JSON.stringify(mockDepto),
      });
      expect(result).toEqual(mockDepto);
    });

    it('updateDepartamento should send PUT', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => mockDepto,
      });

      const result = await propiedadesService.updateDepartamento(mockFetch, 2, mockDepto);
      expect(mockFetch).toHaveBeenCalledWith('/departamentos/2', {
        method: 'PUT',
        body: JSON.stringify(mockDepto),
      });
      expect(result).toEqual(mockDepto);
    });

    it('deleteDepartamento should send DELETE', async () => {
      mockFetch.mockResolvedValue({ ok: true });

      await propiedadesService.deleteDepartamento(mockFetch, 2);
      expect(mockFetch).toHaveBeenCalledWith('/departamentos/2', { method: 'DELETE' });
    });
  });

  describe('Terrenos', () => {
    it('getTerrenos should fetch and return data correctly', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => [mockTerreno],
      });

      const result = await propiedadesService.getTerrenos(mockFetch);
      expect(mockFetch).toHaveBeenCalledWith('/terrenos');
      expect(result).toEqual([mockTerreno]);
    });

    it('getTerrenoById should fetch and return a single terreno', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => mockTerreno,
      });

      const result = await propiedadesService.getTerrenoById(mockFetch, 3);
      expect(mockFetch).toHaveBeenCalledWith('/terrenos/3');
      expect(result).toEqual(mockTerreno);
    });

    it('createTerreno should send POST', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => mockTerreno,
      });

      const result = await propiedadesService.createTerreno(mockFetch, mockTerreno);
      expect(mockFetch).toHaveBeenCalledWith('/terrenos', {
        method: 'POST',
        body: JSON.stringify(mockTerreno),
      });
      expect(result).toEqual(mockTerreno);
    });

    it('updateTerreno should send PUT', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => mockTerreno,
      });

      const result = await propiedadesService.updateTerreno(mockFetch, 3, mockTerreno);
      expect(mockFetch).toHaveBeenCalledWith('/terrenos/3', {
        method: 'PUT',
        body: JSON.stringify(mockTerreno),
      });
      expect(result).toEqual(mockTerreno);
    });

    it('deleteTerreno should send DELETE', async () => {
      mockFetch.mockResolvedValue({ ok: true });

      await propiedadesService.deleteTerreno(mockFetch, 3);
      expect(mockFetch).toHaveBeenCalledWith('/terrenos/3', { method: 'DELETE' });
    });
  });

  describe('getAllPropiedades', () => {
    it('should aggregate casas, departamentos, and terrenos with correct tipoProp tag', async () => {
      mockFetch.mockImplementation((url: string) => {
        if (url === '/casas') return Promise.resolve({ ok: true, json: async () => [mockCasa] });
        if (url === '/departamentos') return Promise.resolve({ ok: true, json: async () => [mockDepto] });
        if (url === '/terrenos') return Promise.resolve({ ok: true, json: async () => [mockTerreno] });
        return Promise.reject(new Error('Unknown url'));
      });

      const result = await propiedadesService.getAllPropiedades(mockFetch);
      expect(result).toEqual([
        { ...mockCasa, tipoProp: 'casa' },
        { ...mockDepto, tipoProp: 'departamento' },
        { ...mockTerreno, tipoProp: 'terreno' },
      ]);
    });
  });
});
