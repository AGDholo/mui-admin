import {
  MonitorOutlined,
  EmailOutlined,
  ChatOutlined,
  ListOutlined,
  AirplanemodeActiveOutlined,
  MoneyOutlined,
  LocalPrintshopOutlined,
  PersonOutlined,
  BuildCircleOutlined,
  CreateOutlined,
  ListAltOutlined,
  TableChartOutlined,
} from '@mui/icons-material';
import { RouteObject } from 'react-router-dom';
import Home from '../pages/home';

interface IAppRoutes extends RouteObject {
  data?: {
    label?: string;
    icon?: React.ReactElement;
    selected?: boolean;
  };
  subheader?: string;
  children?: IAppRoutes[];
}

// static router
const staticRoutes: IAppRoutes[] = [
  {
    path: '',
    element: <Home />,
    data: {
      icon: <MonitorOutlined />,
      label: 'Dashboard',
      selected: true,
    },
  },
  {
    path: 'apps',
    subheader: 'APPS',
    children: [
      {
        path: 'email',
        data: {
          icon: <EmailOutlined />,
          label: 'Email',
        },
        element: <Home />,
      },
      {
        path: 'chat',
        data: {
          icon: <ChatOutlined />,
          label: 'Chat',
        },
        element: <Home />,
      },
      {
        path: 'todo',
        data: {
          icon: <ListOutlined />,
          label: 'To Do',
        },
        element: <Home />,
      },
    ],
  },
  {
    path: 'pages',
    subheader: 'PAGES',
    children: [
      {
        path: 'lading',
        data: {
          icon: <AirplanemodeActiveOutlined />,
          label: 'Lading',
        },
      },
      {
        path: 'pricing',
        data: {
          icon: <MoneyOutlined />,
          label: 'Pricing',
        },
      },
      {
        path: 'billing',
        data: {
          icon: <LocalPrintshopOutlined />,
          label: 'Billing',
        },
      },
      {
        path: 'profile',
        data: {
          icon: <PersonOutlined />,
          label: 'Profile',
        },
      },
      {
        path: 'settings',
        data: {
          icon: <BuildCircleOutlined />,
          label: 'Setting',
        },
      },
    ],
  },
  {
    path: 'components',
    subheader: 'COMPONENTS',
    children: [
      {
        path: 'form',
        data: {
          icon: <CreateOutlined />,
          label: 'Form',
        },
      },
      {
        path: 'list',
        data: {
          icon: <ListAltOutlined />,
          label: 'List',
        },
      },
      {
        path: 'table',
        data: {
          icon: <TableChartOutlined />,
          label: 'Table',
        },
      },
    ],
  },
];

export default staticRoutes;
