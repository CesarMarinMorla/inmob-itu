import { createTheme } from '@mui/material/styles';

// Paleta de colores según 60-30-10
// 60% - #F7F7F7 (fondo principal)
// 30% - #282D33 (contenido, textos)
// 10% - #7A0000 (CTAs y acentos principales)
// Acento secundario - #FF6725 (con transparencia ajustada)

export const theme = createTheme({
  palette: {
    primary: {
      main: '#7A0000', // Color principal para CTAs
      light: '#A33232',
      dark: '#4D0000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF6725', // Color secundario
      light: '#FF8951',
      dark: '#CC5219',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F7F7F7', // 60% - Fondo principal
      paper: '#FFFFFF',
    },
    text: {
      primary: '#282D33', // 30% - Texto principal
      secondary: '#5A6169',
    },
    divider: 'rgba(40, 45, 51, 0.12)',
    error: {
      main: '#D32F2F',
    },
    warning: {
      main: '#ED6C02',
    },
    info: {
      main: '#0288D1',
    },
    success: {
      main: '#2E7D32',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      color: '#282D33',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#282D33',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#282D33',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#282D33',
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 500,
      color: '#282D33',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      color: '#282D33',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '1rem',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(40, 45, 51, 0.23)',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: 12,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});
