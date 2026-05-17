import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getIndices, getUltimosIndices } from './indicesService';

// TC-005 a TC-010: Tests del servicio de índices económicos

describe('indicesService', () => {
    beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn());
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    // TC-005: Valor límite - respuesta exitosa con array de índices
    it('TC-005: getIndices retorna datos cuando la API responde correctamente', async () => {
        const mockData = [
            { id: 1, fecha: '2024-01', valor: 211.4, tipo: 'ICL' },
            { id: 2, fecha: '2024-02', valor: 219.8, tipo: 'ICL' },
        ];
        (fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        });

        const result = await getIndices();
        expect(result).toEqual(mockData);
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    // TC-006: Partición de equivalencia - respuesta vacía (array vacío es válido)
    it('TC-006: getIndices retorna array vacio cuando no hay indices registrados', async () => {
        (fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
            ok: true,
            json: async () => [],
        });

        const result = await getIndices();
        expect(result).toEqual([]);
    });

    // TC-007: Manejo de errores - API devuelve error HTTP
    it('TC-007: getIndices lanza error cuando la API devuelve status 500', async () => {
        (fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
            ok: false,
            status: 500,
            statusText: 'Internal Server Error',
        });

        await expect(getIndices()).rejects.toThrow();
    });

    // TC-008: Manejo de errores - sin respuesta del servidor (red caída)
    it('TC-008: getIndices lanza error cuando no hay respuesta del servidor', async () => {
        (fetch as ReturnType<typeof vi.fn>).mockRejectedValueOnce(
            new Error('Network Error')
        );

        await expect(getIndices()).rejects.toThrow('Network Error');
    });

    // TC-009: Valor límite - getUltimosIndices retorna el último registro
    it('TC-009: getUltimosIndices retorna el indice mas reciente disponible', async () => {
        const mockLatest = { id: 5, fecha: '2024-05', valor: 235.1, tipo: 'ICL' };
        (fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
            ok: true,
            json: async () => mockLatest,
        });

        const result = await getUltimosIndices();
        expect(result).toEqual(mockLatest);
    });

    // TC-010: Diseño basado en estados - error 404 cuando no hay índices
    it('TC-010: getUltimosIndices maneja correctamente un 404 del backend', async () => {
        (fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
            ok: false,
            status: 404,
            statusText: 'Not Found',
        });

        await expect(getUltimosIndices()).rejects.toThrow();
    });
});