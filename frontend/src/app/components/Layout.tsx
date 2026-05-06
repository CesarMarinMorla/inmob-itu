import { Outlet } from 'react-router';
import { Box, CssBaseline } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', bgcolor: 'background.default' }}>
      <CssBaseline />
      <Navbar />
      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flex: 1,
            overflow: 'auto',
            p: 3,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
