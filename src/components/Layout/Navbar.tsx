import {
  AppBar,
  Badge,
  Box,
  Button,
  Collapse,
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
  bindTrigger,
} from 'material-ui-popup-state/hooks';

import {
  CheckBoxSharp,
  CheckCircleOutlined,
  CheckOutlined,
  DeleteOutlined,
  FiberManualRecord,
  GitHub,
  HourglassEmptyOutlined,
  LogoutOutlined,
  NotificationsOutlined,
} from '@mui/icons-material';
import { useCallback, useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { drawerWidth } from './Sidebar';
import { useAuth } from '../../hooks/useAuth';

function Notice() {
  const [fakeNoticeList, setFakeNoticeList] = useState([1, 2, 3, 4, 5]);
  const noticePopupState = usePopupState({
    variant: 'popover',
    popupId: 'noticeNavbarMenu',
  });

  const handleDelete = (item: number) => {
    setFakeNoticeList(fakeNoticeList.filter((index: number) => index !== item));
  };

  const handleAllRead = () => {
    setFakeNoticeList([]);
  };

  return (
    <>
      <IconButton
        {...bindTrigger(noticePopupState)}
        sx={{
          mx: 1,
        }}
      >
        <Badge badgeContent={fakeNoticeList.length} color="primary">
          <NotificationsOutlined />
        </Badge>
      </IconButton>

      <Menu {...bindPopover(noticePopupState)}>
        <Paper sx={{ width: 300, maxWidth: '100%' }} elevation={0}>
          <List dense>
            {fakeNoticeList.length > 0 ? (
              <>
                <TransitionGroup>
                  {fakeNoticeList.map((item) => (
                    <Collapse key={item}>
                      <ListItem
                        secondaryAction={
                          <IconButton
                            edge="end"
                            onClick={() => handleDelete(item)}
                          >
                            <DeleteOutlined />
                          </IconButton>
                        }
                      >
                        <ListItemText
                          primary={`Notice ${item}`}
                          secondary="List Secondary"
                        />
                      </ListItem>

                      <Divider />
                    </Collapse>
                  ))}
                </TransitionGroup>

                <Box textAlign="center" mt={2}>
                  <Button onClick={handleAllRead}>All Read</Button>
                </Box>
              </>
            ) : (
              <Box textAlign="center">
                <CheckCircleOutlined fontSize="large" />
              </Box>
            )}
          </List>
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
