import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  OutlinedInput,
  Paper,
  Toolbar,
} from '@mui/material';
import {
  usePopupState,
  bindPopover,
  bindTrigger,
} from 'material-ui-popup-state/hooks';

import {
  FiberManualRecord,
  GitHub,
  LogoutOutlined,
  NotificationsOutlined,
} from '@mui/icons-material';
import { drawerWidth } from './Sidebar';
import { useAuth } from '../../hooks/useAuth';
import { MNotice } from '../MList';

function Notice() {
  const noticePopupState = usePopupState({
    variant: 'popover',
    popupId: 'noticeNavbarMenu',
  });

  return (
    <>
      <IconButton
        {...bindTrigger(noticePopupState)}
        sx={{
          mx: 1,
        }}
      >
        <Badge badgeContent={5} color="primary">
          <NotificationsOutlined />
        </Badge>
      </IconButton>

      <Menu {...bindPopover(noticePopupState)}>
        <Paper sx={{ width: 300, maxWidth: '100%' }} elevation={0}>
          <MNotice />
        </Paper>
      </Menu>
    </>
  );
}

function Navbar() {
  const accountPopupState = usePopupState({
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

          <Notice />

          <IconButton {...bindTrigger(accountPopupState)}>
            <Badge variant="dot" color="success" overlap="circular">
              <FiberManualRecord fontSize="large" />
            </Badge>
          </IconButton>

          <Menu {...bindPopover(accountPopupState)}>
            <Paper sx={{ width: 150, maxWidth: '100%' }} elevation={0}>
              <List dense>
                <ListItem
                  button
                  onClick={logout}
                  secondaryAction={<LogoutOutlined />}
                >
                  <ListItemText>Logout</ListItemText>
                </ListItem>
              </List>
            </Paper>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
