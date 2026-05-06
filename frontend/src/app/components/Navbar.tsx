import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Notifications, AccountCircle } from '@mui/icons-material';

export default function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: '#282D33',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: '#F7F7F7',
            fontWeight: 600,
            letterSpacing: '0.5px',
          }}
        >
          ORGANIZACIÓN CR
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton
            color="inherit"
            aria-label="notificaciones"
            sx={{ color: '#F7F7F7' }}
          >
            <Notifications />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="perfil de usuario"
            sx={{ color: '#F7F7F7' }}
          >
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
