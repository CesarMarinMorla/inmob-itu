import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import InquilinosPage from './InquilinosPage';
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
  primerNombre: 'Carlos',
  primerApellido: 'Gomez',
  tipoDocumento: 'DNI',
  numDocumento: '11111111',
  fechaNacimiento: '1990-01-01',
  telefonos: [{ numero: '1234567890', tipo: 'CELULAR' }],
  mails: [{ email: 'carlos@test.com', tipo: 'PERSONAL', esPrincipal: true }],
  direcciones: []
};

const mockJuridica: personasService.PersonaJuridica = {
  id: 2,
  razonSocial: 'Empresa Test',
  cuit: '30-11111111-9',
  fechaConstitucion: '2000-01-01',
  telefonos: [],
  mails: [{ email: 'empresa@test.com', tipo: 'LABORAL', esPrincipal: true }],
  direcciones: []
};

describe('InquilinosPage Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (personasService.getPersonasFisicas as any).mockResolvedValue([]);
    (personasService.getPersonasJuridicas as any).mockResolvedValue([]);
  });

  const renderComponent = () => render(
    <MemoryRouter>
        <InquilinosPage />
    </MemoryRouter>
  );

  it('renders the title and new button', async () => {
    renderComponent();
    expect(screen.getByRole('heading', { name: /inquilinos/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /nuevo inquilino/i })).toBeInTheDocument();

    // Wait for the async load to settle to avoid act() warnings
    await waitFor(() => {
      expect(personasService.getPersonasFisicas).toHaveBeenCalled();
    });
  });

  it('loads and displays inquilinos properly', async () => {
    (personasService.getPersonasFisicas as any).mockResolvedValue([mockFisica]);
    (personasService.getPersonasJuridicas as any).mockResolvedValue([mockJuridica]);

    renderComponent();

    // Verify loading of physical person
    expect(await screen.findByText('Carlos Gomez')).toBeInTheDocument();
    expect(screen.getByText('DNI 11111111')).toBeInTheDocument();
    expect(screen.getByText('carlos@test.com')).toBeInTheDocument();

    // Verify loading of legal person
    expect(screen.getByText('Empresa Test')).toBeInTheDocument();
    expect(screen.getByText('CUIT 30-11111111-9')).toBeInTheDocument();
    expect(screen.getByText('empresa@test.com')).toBeInTheDocument();
  });

  it('filters results according to search term', async () => {
    (personasService.getPersonasFisicas as any).mockResolvedValue([mockFisica]);
    (personasService.getPersonasJuridicas as any).mockResolvedValue([mockJuridica]);

    renderComponent();
    expect(await screen.findByText('Carlos Gomez')).toBeInTheDocument();

    const searchInput = screen.getByRole('textbox', { name: /buscar inquilinos/i });
    
    // Filter for "Empresa"
    fireEvent.change(searchInput, { target: { value: 'Empresa' } });
    
    expect(screen.getByText('Empresa Test')).toBeInTheDocument();
    expect(screen.queryByText('Carlos Gomez')).not.toBeInTheDocument();
  });

  it('opens delete confirmation and deletes record when confirmed', async () => {
    (personasService.getPersonasFisicas as any).mockResolvedValue([mockFisica]);
    (personasService.deletePersonaFisica as any).mockResolvedValue(true);

    renderComponent();
    
    // Wait for data
    expect(await screen.findByText('Carlos Gomez')).toBeInTheDocument();

    // Find delete button
    const deleteBtn = screen.getByRole('button', { name: /eliminar carlos gomez/i });
    fireEvent.click(deleteBtn);

    // Dialog should appear
    expect(screen.getByRole('dialog', { name: /confirmar eliminación/i })).toBeInTheDocument();
    
    // Confirm delete
    const confirmBtn = screen.getByRole('button', { name: 'Eliminar' });
    fireEvent.click(confirmBtn);

    await waitFor(() => {
        expect(personasService.deletePersonaFisica).toHaveBeenCalledWith("1");
    });
    
    // Check if success snackbar pops up
    expect(screen.getByText(/inquilino eliminado exitosamente/i)).toBeInTheDocument();
  });
});
