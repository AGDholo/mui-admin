import { Box, Toolbar } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Sidebar, { drawerWidth } from './components/Layout/Sidebar';
import staticRoutes from './routes/app.router';

function App() {
  const element = useRoutes(staticRoutes);
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {element}
      </Box>
    </Box>
  );
}

export default App;
