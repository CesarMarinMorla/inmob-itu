import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import ContratosPage from './ContratosPage';
import * as contratosService from '../services/contratosService';

// Setup basic mocks
vi.mock('../services/contratosService', () => ({
  getContratos: vi.fn(),
  deleteContrato: vi.fn(),
}));

const mockNav = vi.fn();
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual as any,
    useNavigate: () => mockNav,
  };
});

const mockContrato: contratosService.ContratoDTO = {
  id: 1,
  contratoNumero: 'CON-001',
  fechaFirma: '2026-01-01',
  fechaInicio: '2026-01-01',
  fechaFinal: '2027-01-01',
  contratoEstado: 'VIGENTE',
  montoBase: 150000,
  tipoMoneda: 'ARS',
  propiedadAlquiladaId: 10,
  propietariosIds: [1],
  inquilinosIds: [2],
};

describe('ContratosPage Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (contratosService.getContratos as any).mockResolvedValue([]);
  });

  const renderComponent = () => render(
    <MemoryRouter>
      <ContratosPage />
    </MemoryRouter>
  );

  it('renders the title and new button', async () => {
    renderComponent();
    expect(screen.getByRole('heading', { name: /contratos/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /nuevo contrato/i })).toBeInTheDocument();

    await waitFor(() => {
      expect(contratosService.getContratos).toHaveBeenCalled();
    });
  });

  it('loads and displays contracts properly', async () => {
    (contratosService.getContratos as any).mockResolvedValue([mockContrato]);

    renderComponent();

    expect(await screen.findByText('CON-001')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument(); // Propiedad ID
    expect(screen.getByText('VIGENTE')).toBeInTheDocument();
    expect(screen.getByText('150.000 ARS')).toBeInTheDocument();
  });

  it('opens delete confirmation and deletes contract when confirmed', async () => {
    (contratosService.getContratos as any).mockResolvedValue([mockContrato]);
    (contratosService.deleteContrato as any).mockResolvedValue(undefined);

    renderComponent();

    expect(await screen.findByText('CON-001')).toBeInTheDocument();

    const deleteBtn = screen.getByRole('button', { name: /eliminar contrato CON-001/i });
    fireEvent.click(deleteBtn);

    expect(screen.getByRole('dialog', { name: /confirmar eliminación/i })).toBeInTheDocument();

    const confirmBtn = screen.getByRole('button', { name: 'Eliminar' });
    fireEvent.click(confirmBtn);

    await waitFor(() => {
      expect(contratosService.deleteContrato).toHaveBeenCalledWith(expect.anything(), 1);
    });
  });
});
