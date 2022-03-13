import {
  AppBar,
  Badge,
  Box,
  Button,
  Divider,
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
  bindHover,
} from 'material-ui-popup-state/hooks';

import {
  DeleteOutlined,
  FiberManualRecord,
  GitHub,
  LogoutOutlined,
  NotificationsOutlined,
} from '@mui/icons-material';
import { drawerWidth } from './Sidebar';
import { useAuth } from '../../hooks/useAuth';

function Navbar() {
  const accountPopupState = usePopupState({
    variant: 'popover',
    popupId: 'userNavbarMenu',
  });

  const noticePopupState = usePopupState({
    variant: 'popover',
    popupId: 'noticeNavbarMenu',
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
            {...bindHover(noticePopupState)}
            sx={{
              mx: 1,
            }}
          >
            <Badge badgeContent="5" color="primary">
              <NotificationsOutlined />
            </Badge>
          </IconButton>

          <Menu {...bindPopover(noticePopupState)}>
            <Paper sx={{ width: 300, maxWidth: '100%' }} elevation={0}>
              <List dense>
                {[...Array(5)].map(() => (
                  <Box>
                    <ListItem
                      secondaryAction={
                        <IconButton edge="end">
                          <DeleteOutlined />
                        </IconButton>
                      }
                    >
                      <ListItemText
                        primary="List Title"
                        secondary="List Secondary"
                      />
                    </ListItem>

                    <Divider />
                  </Box>
                ))}
                <Box textAlign="center" mt={2}>
                  <Button>All Read</Button>
                </Box>
              </List>
            </Paper>
          </Menu>

          <IconButton {...bindHover(accountPopupState)}>
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
