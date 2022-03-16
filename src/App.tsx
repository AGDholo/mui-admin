import { Box, Toolbar } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Sidebar, { drawerWidth } from './components/Layout/Sidebar';
import { staticRoutes } from './routes/app.router';
import useCurrentRoute from './hooks/useCurrentRoute';
import { useAuth } from './hooks/useAuth';

function setDocumentTitle() {
  const { meta } = useCurrentRoute();
  const title = meta?.title ?? 'undefined';

  useEffect(() => {
    document.title = `${title} - Mui-Admin`;
  }, [meta]);
}

function App() {
  // init router
  const { isLogin } = useAuth();
  const staticPages = useRoutes(staticRoutes);

  // init document title
  setDocumentTitle();

  return (
    <Box sx={{ display: 'flex' }}>
      {isLogin && (
        <Box>
          <Navbar />
          <Sidebar />
        </Box>
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {staticPages}
      </Box>
    </Box>
  );
}

export default App;
