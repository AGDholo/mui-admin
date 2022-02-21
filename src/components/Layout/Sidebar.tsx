import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import staticRoutes from '../../routes/app.router';

export const drawerWidth = 240;

function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const container = window !== undefined ? () => document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { pathname } = useLocation();

  const drawer = (
    <div>
      <Toolbar disableGutters sx={{ ml: 2 }}>
        <Typography
          variant="subtitle1"
          sx={{
            letterSpacing: '.0125em',
            color: theme.palette.info.main,
          }}
          fontWeight="600"
        >
          MUI ADMIN
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {staticRoutes.map((item) => (
          <Box key={`${item.subheader}/${item.path}`}>
            {item.subheader && (
              <ListSubheader key={`${item.subheader}`}>
                {item.subheader}
              </ListSubheader>
            )}

            {item.data && (
              <Link
                key={`${item?.data.label}/${item.path}`}
                to={`${item.path}` ?? '#'}
                style={{
                  color: 'initial',
                  textDecoration: 'none',
                }}
              >
                <ListItem button selected={pathname === `${item.path}`}>
                  <ListItemIcon>{item?.data.icon}</ListItemIcon>
                  <ListItemText primary={item?.data.label} />
                </ListItem>
              </Link>
            )}

            {item.children &&
              item?.children.map(
                (subItem) =>
                  subItem.data && (
                    <Link
                      key={subItem?.data.label}
                      to={`${item.path}/${subItem.path}` ?? '#'}
                      style={{
                        color: 'initial',
                        textDecoration: 'none',
                      }}
                    >
                      <ListItem
                        button
                        selected={pathname === `${item.path}/${subItem.path}`}
                      >
                        <ListItemIcon>{subItem?.data.icon}</ListItemIcon>
                        <ListItemText primary={subItem?.data.label} />
                      </ListItem>
                    </Link>
                  )
              )}
          </Box>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        elevation={0}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: {
            xs: 'block',
            sm: 'none',
          },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        elevation={0}
        variant="permanent"
        sx={{
          display: {
            xs: 'none',
            sm: 'block',
          },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Sidebar;
