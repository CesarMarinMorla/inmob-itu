import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import InmueblesPage from './InmueblesPage';
import * as propiedadesService from '../services/propiedadesService';

// Setup basic mocks
vi.mock('../services/propiedadesService', () => ({
  getAllPropiedades: vi.fn(),
  deleteCasa: vi.fn(),
  deleteDepartamento: vi.fn(),
  deleteTerreno: vi.fn(),
}));

const mockNav = vi.fn();
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual as any,
    useNavigate: () => mockNav,
  };
});

const mockCasa: propiedadesService.PropiedadConTipo = {
  id: 1,
  codigoRef: 'CASA-001',
  estado: 'disponible',
  tipoProp: 'casa',
  superficieTotal: 200,
  direccion: {
    calleRuta: 'Av. Siempreviva',
    alturaKm: '742',
    localidad: 'Springfield',
    provincia: 'Buenos Aires'
  }
};

const mockDepto: propiedadesService.PropiedadConTipo = {
  id: 2,
  codigoRef: 'DEPTO-002',
  estado: 'alquilado',
  tipoProp: 'departamento',
  superficieTotal: 80,
  direccion: {
    calleRuta: 'Calle Falsa',
    alturaKm: '123',
    localidad: 'Springfield',
    provincia: 'Buenos Aires'
  }
};

describe('InmueblesPage Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (propiedadesService.getAllPropiedades as any).mockResolvedValue([]);
  });

  const renderComponent = () => render(
    <MemoryRouter>
      <InmueblesPage />
    </MemoryRouter>
  );

  it('renders the title and new button', async () => {
    renderComponent();
    expect(screen.getByRole('heading', { name: /inmuebles/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /nuevo inmueble/i })).toBeInTheDocument();

    await waitFor(() => {
      expect(propiedadesService.getAllPropiedades).toHaveBeenCalled();
    });
  });

  it('loads and displays properties properly', async () => {
    (propiedadesService.getAllPropiedades as any).mockResolvedValue([mockCasa, mockDepto]);

    renderComponent();

    expect(await screen.findByText('CASA-001')).toBeInTheDocument();
    expect(screen.getByText('Av. Siempreviva 742, Springfield, Buenos Aires')).toBeInTheDocument();
    expect(screen.getByText('Superficie: 200 m²')).toBeInTheDocument();

    expect(screen.getByText('DEPTO-002')).toBeInTheDocument();
    expect(screen.getByText('Calle Falsa 123, Springfield, Buenos Aires')).toBeInTheDocument();
    expect(screen.getByText('Superficie: 80 m²')).toBeInTheDocument();
  });

  it('filters results according to type toggle selection', async () => {
    (propiedadesService.getAllPropiedades as any).mockResolvedValue([mockCasa, mockDepto]);

    renderComponent();
    expect(await screen.findByText('CASA-001')).toBeInTheDocument();
    expect(screen.getByText('DEPTO-002')).toBeInTheDocument();

    // Toggle to only Casas
    const casasToggle = screen.getByRole('button', { name: 'Casas' });
    fireEvent.click(casasToggle);

    expect(screen.getByText('CASA-001')).toBeInTheDocument();
    expect(screen.queryByText('DEPTO-002')).not.toBeInTheDocument();
  });

  it('opens delete confirmation and deletes property when confirmed', async () => {
    (propiedadesService.getAllPropiedades as any).mockResolvedValue([mockCasa]);
    (propiedadesService.deleteCasa as any).mockResolvedValue(undefined);

    renderComponent();

    expect(await screen.findByText('CASA-001')).toBeInTheDocument();

    const deleteBtn = screen.getByRole('button', { name: /eliminar/i });
    fireEvent.click(deleteBtn);

    expect(screen.getByRole('dialog', { name: /confirmar eliminación/i })).toBeInTheDocument();

    const confirmBtn = screen.getByRole('button', { name: 'Eliminar' });
    fireEvent.click(confirmBtn);

    await waitFor(() => {
      expect(propiedadesService.deleteCasa).toHaveBeenCalledWith(expect.anything(), 1);
    });
  });
});
