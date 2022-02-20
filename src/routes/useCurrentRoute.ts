import { useLocation } from 'react-router-dom';
import staticRoutes, { IAppRoutes } from './app.router';

const useCurrentRoute = () => {
  const { pathname } = useLocation();

  let currentRoute: IAppRoutes = {};

  staticRoutes.map((route) => {
    if (route.path === pathname) {
      currentRoute = route;
    }
    if (route.children) {
      route.children.map((child) => {
        if (`${route.path}/${child.path}` === pathname) {
          currentRoute = child;
        }
      });
    }
  });

  return currentRoute;
};

export default useCurrentRoute;
