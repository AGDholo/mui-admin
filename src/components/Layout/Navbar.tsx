import {
  AppBar,
  Badge,
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  OutlinedInput,
  Paper,
  Toolbar,
} from '@mui/material';
import {
  usePopupState,
  bindTrigger,
  bindPopover,
} from 'material-ui-popup-state/hooks';

import {
  FiberManualRecord,
  GitHub,
  LogoutOutlined,
  NotificationsOutlined,
} from '@mui/icons-material';
import { useCallback } from 'react';
import { drawerWidth } from './Sidebar';
import { useAuth } from '../../hooks/useAuth';

function Navbar() {
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'userNavbarMenu',
  });

  const { logout } = useAuth();

  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={0}
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
            sx={{ ml: 1 }}
            href="https://github.com/AGDholo/mui-admin"
            target="_blank"
          >
            <GitHub />
          </IconButton>

          <IconButton
            sx={{
              mx: 1,
            }}
          >
            <Badge badgeContent="5" color="primary">
              <NotificationsOutlined />
            </Badge>
          </IconButton>

          <IconButton {...bindTrigger(popupState)}>
            <Badge variant="dot" color="success" overlap="circular">
              <FiberManualRecord fontSize="large" />
            </Badge>
          </IconButton>

          <Menu {...bindPopover(popupState)}>
            <Paper sx={{ width: 150, maxWidth: '100%' }} elevation={0}>
              <MenuItem onClick={logout}>
                <ListItemText>Logout</ListItemText>
                <ListItemIcon>
                  <LogoutOutlined />
                </ListItemIcon>
              </MenuItem>
            </Paper>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
