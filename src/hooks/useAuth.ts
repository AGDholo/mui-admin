import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import useCurrentRoute from './useCurrentRoute';
import { rAuthState } from '../states/authState';

interface IInput {
  email: string;
  password: string;
}

// Here we need to use the server api to login the user
const fakeToken = (secretKey: IInput) => {
  const token = secretKey.email + secretKey.password;
  localStorage.setItem('token', token);
  return token;
};

export const useAuth = () => {
  const [authState, setAuthState] = useRecoilState(rAuthState);

  const navigate = useNavigate();

  // set token if it found in localStorage
  const localToken = localStorage.getItem('token') ?? '';
  useEffect(() => {
    if (localToken) {
      setAuthState({
        isAuthenticated: localToken !== '',
        token: localToken,
      });
    }
  }, [localToken]);

  // export a login function
  const login = useCallback(
    (input: IInput) => {
      const token = fakeToken(input);
      setAuthState({
        isAuthenticated: true,
        token,
      });
      navigate('/');
    },
    [authState]
  );

  // export a logout function
  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setAuthState({
      token: '',
      isAuthenticated: false,
    });
    navigate('/pages/login');
  }, [authState]);

  // export a function to check if user is authenticated
  const isLogin = localToken;
  const { meta } = useCurrentRoute();

  useEffect(() => {
    // auto direct to login page if not login
    if (!isLogin) {
      navigate('/pages/login');
    }
  }, [meta]);

  return { isLogin, authState, login, logout };
};
