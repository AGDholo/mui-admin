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
  Typography
} from "@mui/material";
import { useState } from "react";
import {
  AirplanemodeActiveOutlined,
  BuildCircleOutlined,
  ChatOutlined,
  CheckCircleOutlined,
  CreateOutlined,
  EmailOutlined,
  HighlightOffOutlined,
  ListAltOutlined,
  ListOutlined,
  LocalPrintshopOutlined,
  MoneyOutlined,
  MonitorOutlined,
  PersonOutlined,
  TableChartOutlined
} from "@mui/icons-material";

export const drawerWidth = 240;

function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const container = window !== undefined ? () => document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const data = [
    {
      icon: <MonitorOutlined />,
      label: "Dashboard",
      selected: true
    },
    {
      subheader: "APPS",
      sItem: [
        {
          icon: <EmailOutlined />,
          label: "Email"
        },
        {
          icon: <ChatOutlined />,
          label: "Chat"
        },
        {
          icon: <ListOutlined />,
          label: "To Do"
        }
      ]
    },
    {
      subheader: "PAGES",
      sItem: [
        {
          icon: <AirplanemodeActiveOutlined />,
          label: "Lading"
        },
        {
          icon: <MoneyOutlined />,
          label: "Pricing"
        },
        {
          icon: <LocalPrintshopOutlined />,
          label: "Billing"
        },
        {
          icon: <PersonOutlined />,
          label: "Profile"
        },
        {
          icon: <BuildCircleOutlined />,
          label: "Setting"
        }
      ]
    },
    {
      subheader: "COMPONENTS",
      sItem: [
        {
          icon: <CreateOutlined />,
          label: "Form"
        },
        {
          icon: <ListAltOutlined />,
          label: "List"
        },
        {
          icon: <TableChartOutlined />,
          label: "Table"
        }
      ]
    },
    {
      subheader: "Exception",
      sItem: [
        {
          icon: <CheckCircleOutlined />,
          label: "Success"
        },
        {
          icon: <HighlightOffOutlined />,
          label: "Fail"
        }
      ]
    }
  ];

  const drawer = (
    <div>
      <Toolbar disableGutters sx={{ ml: 2 }}>
        <Typography variant="h6">MUI Admin</Typography>
      </Toolbar>
      <Divider />
      <List>
        {data.map((item) => {
          if (item.subheader) {
            return (
              <>
                <ListSubheader key={item.subheader}>
                  {item.subheader}
                </ListSubheader>
                {item.sItem.map((subItem) => (
                  <ListItem button key={subItem.label}>
                    <ListItemIcon>{subItem.icon}</ListItemIcon>
                    <ListItemText primary={subItem.label} />
                  </ListItem>
                ))}
              </>
            );
          }
          return (
            <ListItem button key={item.label} selected={item.selected}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth
          }
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth
          }
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Sidebar;
