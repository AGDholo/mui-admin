import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import useCurrentRoute from '../routes/useCurrentRoute';
import { rAuthState } from '../states/authState';

interface IInput {
  email: string;
  password: string;
}

const fakeToken = (secretKey: IInput) => secretKey.email + secretKey.password;

export const useAuth = () => {
  const [authState, setAuthState] = useRecoilState(rAuthState);

  const navigate = useNavigate();

  // set token if it found in localStorage
  const localToken = localStorage.getItem('token') ?? '';
  useEffect(() => {
    if (localToken) {
      setAuthState({ ...authState, isAuthenticated: localToken !== '' });
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
      localStorage.setItem('token', token);
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