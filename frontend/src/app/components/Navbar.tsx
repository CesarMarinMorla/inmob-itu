"use client";

import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, Toolbar, Typography, IconButton, Box, Menu, MenuItem } from '@mui/material';
import { Notifications, AccountCircle } from '@mui/icons-material';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { logout } = useAuth0();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout({
      logoutParams: {
        returnTo: `${window.location.origin}/login`,
      },
    });
  };

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
            onClick={handleMenu}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
