import {
  AppBar,
  Badge,
  Box,
  IconButton,
  OutlinedInput,
  Toolbar,
} from '@mui/material';
import { FiberManualRecord, NotificationsOutlined } from '@mui/icons-material';
import { drawerWidth } from './Sidebar';

function Navbar() {
  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'right',
        }}
      >
        <Box>
          <OutlinedInput
            size="small"
            sx={{
              borderRadius: 10,
              width: '500px',
            }}
            placeholder="Search..."
          />

          <IconButton
            sx={{
              mx: 1,
            }}
          >
            <Badge badgeContent="5" color="primary">
              <NotificationsOutlined />
            </Badge>
          </IconButton>

          <IconButton>
            <Badge variant="dot" color="success" overlap="circular">
              <FiberManualRecord fontSize="large" />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
