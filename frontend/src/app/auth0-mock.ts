import { type ReactNode, createContext, useContext, createElement, useEffect } from 'react'

const API_BASE = 'http://localhost:8080/api/v1'

const mockResponses: Record<string, { status: number; body: unknown }> = {
  [`POST /me`]: { status: 200, body: { message: 'ok' } },
  [`GET /me`]: {
    status: 200,
    body: {
      id: 1,
      sub: 'auth0|mock',
      nivelAcceso: 'ADMIN',
      personaId: null,
    },
  },
}

const originalFetch = globalThis.fetch.bind(globalThis)

globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url
  const method = init?.method ?? 'GET'

  if (url.startsWith(API_BASE)) {
    const endpoint = url.slice(API_BASE.length)
    const key = `${method} ${endpoint}`
    const mock = mockResponses[key]
    if (mock) {
      return new Response(JSON.stringify(mock.body), {
        status: mock.status,
        headers: { 'Content-Type': 'application/json' },
      })
    }
  }

  return originalFetch(input, init)
}

interface Auth0ContextType {
  isAuthenticated: boolean
  isLoading: boolean
  user: { name: string; email: string } | undefined
  loginWithRedirect: () => void
  logout: (opts?: { logoutParams?: { returnTo?: string } }) => void
  getAccessTokenSilently: () => Promise<string>
}

const Auth0Context = createContext<Auth0ContextType | null>(null)

const useAuth0 = () => {
  const ctx = useContext(Auth0Context)
  if (!ctx) {
    return {
      isAuthenticated: true,
      isLoading: false,
      user: { name: 'Usuario de Prueba', email: 'test@inmobiliaria.com' },
      loginWithRedirect: () => {},
      logout: () => {},
      getAccessTokenSilently: () => Promise.resolve('mock-token'),
    }
  }
  return ctx
}

const Auth0Provider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    return () => { globalThis.fetch = originalFetch }
  }, [])

  const value: Auth0ContextType = {
    isAuthenticated: true,
    isLoading: false,
    user: { name: 'Usuario de Prueba', email: 'test@inmobiliaria.com' },
    loginWithRedirect: () => {},
    logout: () => {},
    getAccessTokenSilently: () => Promise.resolve('mock-token'),
  }
  return createElement(Auth0Context.Provider, { value }, children)
}

export { Auth0Provider, useAuth0 }
