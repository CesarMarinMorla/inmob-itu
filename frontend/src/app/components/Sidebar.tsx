import { useNavigate, useLocation } from 'react-router';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { People, Home, Settings, Business } from '@mui/icons-material';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'Inicio', icon: <Home />, path: '/', id: 'inicio' },
    { text: 'Propietarios', icon: <People />, path: '/propietarios', id: 'propietarios' },
    { text: 'Inquilinos', icon: <People />, path: '/inquilinos', id: 'inquilinos' },
    { text: 'Inmuebles', icon: <Business />, path: '/inmuebles', id: 'inmuebles' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <Box
      component="nav"
      sx={{
        width: 96,
        bgcolor: '#E8E8E8',
        borderRight: '1px solid rgba(0, 0, 0, 0.12)',
        display: 'flex',
        flexDirection: 'column',
        pt: 2,
        pb: 2,
      }}
      role="navigation"
      aria-label="Menú principal de navegación"
    >
      <List sx={{ flexGrow: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ mb: 2 }}>
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                flexDirection: 'column',
                gap: 0.5,
                py: 1.5,
                borderRadius: 2,
                mx: 1,
                bgcolor: isActive(item.path) ? 'rgba(122, 0, 0, 0.08)' : 'transparent',
                '&:hover': {
                  bgcolor: isActive(item.path) ? 'rgba(122, 0, 0, 0.12)' : 'rgba(0, 0, 0, 0.04)',
                },
              }}
              aria-label={`Ir a ${item.text}`}
              aria-current={isActive(item.path) ? 'page' : undefined}
            >
              <ListItemIcon
                sx={{
                  minWidth: 'unset',
                  color: isActive(item.path) ? 'primary.main' : 'text.secondary',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: '0.75rem',
                  textAlign: 'center',
                  color: isActive(item.path) ? 'primary.main' : 'text.secondary',
                  fontWeight: isActive(item.path) ? 600 : 400,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ mx: 1, mb: 2 }} />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              flexDirection: 'column',
              gap: 0.5,
              py: 1.5,
              borderRadius: 2,
              mx: 1,
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
            aria-label="Configuración"
            disabled
          >
            <ListItemIcon
              sx={{
                minWidth: 'unset',
                color: 'text.disabled',
              }}
            >
              <Settings />
            </ListItemIcon>
            <ListItemText
              primary="Configurar"
              primaryTypographyProps={{
                fontSize: '0.75rem',
                textAlign: 'center',
                color: 'text.disabled',
                fontWeight: 400,
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}