import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import PropietariosPage from './PropietariosPage';
import * as personasService from '../services/personasService';

// Setup basic mocks
vi.mock('../services/personasService', () => ({
  getPersonasFisicas: vi.fn(),
  getPersonasJuridicas: vi.fn(),
  deletePersonaFisica: vi.fn(),
  deletePersonaJuridica: vi.fn(),
}));

const mockNav = vi.fn();
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual as any,
    useNavigate: () => mockNav,
  };
});

const mockFisica: personasService.PersonaFisica = {
  id: 1,
  primerNombre: 'Ana',
  primerApellido: 'Martinez',
  tipoDocumento: 'dni',
  numDocumento: '22222222',
  fechaNacimiento: '1985-01-01',
  telefonos: [{ numero: '0987654321', tipo: 'celular' }],
  mails: [{ email: 'ana@test.com', tipo: 'personal', esPrincipal: true }],
  direcciones: []
};

const mockJuridica: personasService.PersonaJuridica = {
  id: 2,
  razonSocial: 'Constructora SA',
  cuit: '30-22222222-9',
  fechaConstitucion: '2005-01-01',
  telefonos: [],
  mails: [{ email: 'constructora@test.com', tipo: 'laboral', esPrincipal: true }],
  direcciones: []
};

describe('PropietariosPage Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (personasService.getPersonasFisicas as any).mockResolvedValue([]);
    (personasService.getPersonasJuridicas as any).mockResolvedValue([]);
  });

  const renderComponent = () => render(
    <MemoryRouter>
      <PropietariosPage />
    </MemoryRouter>
  );

  it('renders the title and new button', async () => {
    renderComponent();
    expect(screen.getByRole('heading', { name: /propietarios/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /nuevo propietario/i })).toBeInTheDocument();

    await waitFor(() => {
      expect(personasService.getPersonasFisicas).toHaveBeenCalledWith('propietario');
    });
  });

  it('loads and displays propietarios properly', async () => {
    (personasService.getPersonasFisicas as any).mockResolvedValue([mockFisica]);
    (personasService.getPersonasJuridicas as any).mockResolvedValue([mockJuridica]);

    renderComponent();

    expect(await screen.findByText('Ana Martinez')).toBeInTheDocument();
    expect(screen.getByText('DNI 22222222')).toBeInTheDocument();
    expect(screen.getByText('ana@test.com')).toBeInTheDocument();

    expect(screen.getByText('Constructora SA')).toBeInTheDocument();
    expect(screen.getByText('CUIT 30-22222222-9')).toBeInTheDocument();
    expect(screen.getByText('constructora@test.com')).toBeInTheDocument();
  });

  it('filters results according to search term', async () => {
    (personasService.getPersonasFisicas as any).mockResolvedValue([mockFisica]);
    (personasService.getPersonasJuridicas as any).mockResolvedValue([mockJuridica]);

    renderComponent();
    expect(await screen.findByText('Ana Martinez')).toBeInTheDocument();

    const searchInput = screen.getByRole('textbox', { name: /buscar propietarios/i });

    fireEvent.change(searchInput, { target: { value: 'Constructora' } });

    expect(screen.getByText('Constructora SA')).toBeInTheDocument();
    expect(screen.queryByText('Ana Martinez')).not.toBeInTheDocument();
  });

  it('opens delete confirmation and deletes record when confirmed', async () => {
    (personasService.getPersonasFisicas as any).mockResolvedValue([mockFisica]);
    (personasService.deletePersonaFisica as any).mockResolvedValue(true);

    renderComponent();

    expect(await screen.findByText('Ana Martinez')).toBeInTheDocument();

    const deleteBtn = screen.getByRole('button', { name: /eliminar ana martinez/i });
    fireEvent.click(deleteBtn);

    expect(screen.getByRole('dialog', { name: /confirmar eliminación/i })).toBeInTheDocument();

    const confirmBtn = screen.getByRole('button', { name: 'Eliminar' });
    fireEvent.click(confirmBtn);

    await waitFor(() => {
      expect(personasService.deletePersonaFisica).toHaveBeenCalledWith("1");
    });

    expect(screen.getByText(/propietario eliminado exitosamente/i)).toBeInTheDocument();
  });
});
