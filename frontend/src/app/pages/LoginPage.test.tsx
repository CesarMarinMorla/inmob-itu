import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { LoginPage } from './LoginPage';

// TC-001 a TC-004: Tests del componente LoginPage con Auth0

const mockLoginWithRedirect = vi.fn();

vi.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    isAuthenticated: false,
    isLoading: false,
    loginWithRedirect: mockLoginWithRedirect,
  }),
}));

describe('LoginPage', () => {
  beforeEach(() => {
    mockLoginWithRedirect.mockClear();
  });

  // TC-001: Partición de equivalencia - estado no autenticado
  it('TC-001: muestra el boton de login cuando el usuario no esta autenticado', () => {
    render(<LoginPage />);
    expect(
      screen.getByRole('button', { name: /ingresar con auth0/i })
    ).toBeInTheDocument();
  });

  // TC-002: Diseño basado en estados - transición no autenticado → redirigiendo
  it('TC-002: click en boton llama a loginWithRedirect exactamente una vez', () => {
    render(<LoginPage />);
    const loginBtn = screen.getByRole('button', { name: /ingresar con auth0/i });
    fireEvent.click(loginBtn);
    expect(mockLoginWithRedirect).toHaveBeenCalledTimes(1);
  });

  // TC-003: Comportamiento emergente - doble click
  it('TC-003: doble click documenta comportamiento actual del componente', () => {
    render(<LoginPage />);
    const loginBtn = screen.getByRole('button', { name: /ingresar con auth0/i });
    fireEvent.click(loginBtn);
    fireEvent.click(loginBtn);
    expect(mockLoginWithRedirect).toHaveBeenCalledTimes(2);
  });

  // TC-004: Partición de equivalencia - texto descriptivo presente
  it('TC-004: muestra descripcion informativa del sistema', () => {
    render(<LoginPage />);
    expect(screen.getByText(/panel de gesti/i)).toBeInTheDocument();
  });
});
