import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

const mockLoginWithRedirect = vi.fn();
const mockNavigate = vi.fn();

vi.mock('@auth0/auth0-react', () => ({
  useAuth0: vi.fn(),
}));

vi.mock('react-router', () => ({
  useNavigate: () => mockNavigate,
}));

import { useAuth0 } from '@auth0/auth0-react';
import LoginPage from './LoginPage';

describe('LoginPage — Casos de prueba funcionales', () => {

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('TC-001: renderiza titulo boton y descripcion cuando no esta autenticado', () => {
    (useAuth0 as ReturnType<typeof vi.fn>).mockReturnValue({
      loginWithRedirect: mockLoginWithRedirect,
      isAuthenticated: false,
      isLoading: false,
      user: null,
    });
    render(<LoginPage />);
    expect(screen.getByText(/CRM Inmobiliario/i)).toBeInTheDocument();
    const loginBtn = screen.getByRole('button', { name: /ingresar con auth0/i });
    expect(loginBtn).toBeInTheDocument();
    expect(loginBtn).not.toBeDisabled();
    expect(screen.getByText(/panel de gesti/i)).toBeInTheDocument();
  });

  it('TC-002: no muestra boton cuando Auth0 esta inicializando', () => {
    (useAuth0 as ReturnType<typeof vi.fn>).mockReturnValue({
      loginWithRedirect: mockLoginWithRedirect,
      isAuthenticated: false,
      isLoading: true,
      user: null,
    });
    render(<LoginPage />);
    expect(screen.queryByRole('button', { name: /ingresar con auth0/i })).not.toBeInTheDocument();
  });

  it('TC-003: redirige al dashboard si el usuario ya esta autenticado', async () => {
    (useAuth0 as ReturnType<typeof vi.fn>).mockReturnValue({
      loginWithRedirect: mockLoginWithRedirect,
      isAuthenticated: true,
      isLoading: false,
      user: { name: 'Admin' },
    });
    render(<LoginPage />);
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/dashboard', expect.anything());
    });
  });

  it('TC-004: click en boton invoca loginWithRedirect exactamente una vez', () => {
    (useAuth0 as ReturnType<typeof vi.fn>).mockReturnValue({
      loginWithRedirect: mockLoginWithRedirect,
      isAuthenticated: false,
      isLoading: false,
      user: null,
    });
    render(<LoginPage />);
    const loginBtn = screen.getByRole('button', { name: /ingresar con auth0/i });
    fireEvent.click(loginBtn);
    expect(mockLoginWithRedirect).toHaveBeenCalledTimes(1);
  });

  it('TC-005: doble click llama a loginWithRedirect dos veces', () => {
    (useAuth0 as ReturnType<typeof vi.fn>).mockReturnValue({
      loginWithRedirect: mockLoginWithRedirect,
      isAuthenticated: false,
      isLoading: false,
      user: null,
    });
    render(<LoginPage />);
    const loginBtn = screen.getByRole('button', { name: /ingresar con auth0/i });
    fireEvent.click(loginBtn);
    fireEvent.click(loginBtn);
    expect(mockLoginWithRedirect).toHaveBeenCalledTimes(2);
  });

  it('TC-006: el componente no se rompe si loginWithRedirect rechaza con error de red', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    mockLoginWithRedirect.mockRejectedValueOnce(new Error('Auth0 network error'));
    (useAuth0 as ReturnType<typeof vi.fn>).mockReturnValue({
      loginWithRedirect: mockLoginWithRedirect,
      isAuthenticated: false,
      isLoading: false,
      user: null,
    });
    render(<LoginPage />);
    fireEvent.click(screen.getByRole('button', { name: /ingresar con auth0/i }));
    await waitFor(() => {
      expect(mockLoginWithRedirect).toHaveBeenCalledTimes(1);
    });
    errorSpy.mockRestore();
  });

});
