import {
  AirplanemodeActiveOutlined,
  BuildCircleOutlined,
  ChatOutlined,
  CreateOutlined,
  EmailOutlined,
  ListAltOutlined,
  ListOutlined,
  LocalPrintshopOutlined,
  LoginOutlined,
  MoneyOutlined,
  MonitorOutlined,
  PersonOutlined,
  TableChartOutlined,
} from '@mui/icons-material';
import { RouteObject } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Pricing from '../pages/pages/Pricing';
import Email from '../pages/apps/Email';
import Login from '../pages/pages/Login';
import MList from '../components/MList';

export interface IAppRoutes extends RouteObject {
  data?: {
    label?: string;
    icon?: React.ReactElement;
    selected?: boolean;
  };
  subheader?: string;
  children?: IAppRoutes[];
  meta?: {
    title?: string;
    description?: string;
    keywords?: string;
  };
}

// static router
export const staticRoutes: IAppRoutes[] = [
  {
    path: '/',
    element: <Home />,
    data: {
      icon: <MonitorOutlined />,
      label: 'Dashboard',
      selected: true,
    },
    meta: {
      title: 'Dashboard',
      description: '',
      keywords: '',
    },
  },
  {
    path: '/apps',
    subheader: 'APPS',
    children: [
      {
        path: 'email',
        meta: {
          title: 'Email',
          description: '',
          keywords: '',
        },
        data: {
          icon: <EmailOutlined />,
          label: 'Email',
        },
        element: <Email />,
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
    path: '/pages',
    subheader: 'PAGES',
    children: [
      {
        path: 'login',
        data: {
          icon: <LoginOutlined />,
          label: 'Login',
        },
        meta: {
          title: 'Login',
          description: '',
          keywords: '',
        },
        element: <Login />,
      },
      {
        path: 'lading',
        data: {
          icon: <AirplanemodeActiveOutlined />,
          label: 'Lading',
        },
      },
      {
        path: 'pricing',
        meta: {
          title: 'Pricing',
          description: '',
          keywords: '',
        },
        element: <Pricing />,
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
    path: '/components',
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
        element: <MList />,
        meta: {
          title: 'List',
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
