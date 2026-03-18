import { useNavigate } from 'react-router';
import { Box, Typography, Card, CardActionArea, CardContent } from '@mui/material';
import { People, Home } from '@mui/icons-material';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100%',
        gap: 4,
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'text.primary' }}>
          Hola, bienvenido
        </Typography>
        <Typography variant="h5" component="h2" sx={{ color: 'text.secondary' }}>
          ¿Qué deseas hacer hoy?
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: 4,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Card
          sx={{
            width: 280,
            height: 280,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.2s',
            '&:hover': {
              boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.15)',
              transform: 'translateY(-4px)',
            },
          }}
        >
          <CardActionArea
            onClick={() => navigate('/propietarios')}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            aria-label="Ver Propietarios"
          >
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                textAlign: 'center',
              }}
            >
              <People sx={{ fontSize: 100, color: 'text.primary' }} />
              <Typography variant="h5" component="h3" sx={{ fontWeight: 500 }}>
                Ver Propietarios
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card
          sx={{
            width: 280,
            height: 280,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.2s',
            '&:hover': {
              boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.15)',
              transform: 'translateY(-4px)',
            },
          }}
        >
          <CardActionArea
            onClick={() => navigate('/inquilinos')}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            aria-label="Ver Inquilinos"
          >
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                textAlign: 'center',
              }}
            >
              <People sx={{ fontSize: 100, color: 'text.primary' }} />
              <Typography variant="h5" component="h3" sx={{ fontWeight: 500 }}>
                Ver Inquilinos
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card
          sx={{
            width: 280,
            height: 280,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.2s',
            '&:hover': {
              boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.15)',
              transform: 'translateY(-4px)',
            },
          }}
        >
          <CardActionArea
            onClick={() => navigate('/inmuebles')}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            aria-label="Ver Inmuebles"
          >
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                textAlign: 'center',
              }}
            >
              <Home sx={{ fontSize: 100, color: 'text.primary' }} />
              <Typography variant="h5" component="h3" sx={{ fontWeight: 500 }}>
                Ver Inmuebles
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
}
