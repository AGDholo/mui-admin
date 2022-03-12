import { atom } from 'recoil';

export const rAuthState = atom({
  key: 'authState',
  default: {
    isAuthenticated: false,
    token: localStorage.getItem('token') ?? '',
  },
});
