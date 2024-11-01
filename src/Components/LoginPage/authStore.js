// authStore.js
import { createStore } from 'zustand';

const store = createStore((set) => ({
  isAuthenticated: false,
  userRole: null,
  accessToken: null,
  sessionId: null,
  setAuth: (authData) => set({
    isAuthenticated: true,
    userRole: authData.role,
    accessToken: authData.accessToken,
    sessionId: authData.sessionId,
  }),
  clearAuth: () => set({
    isAuthenticated: false,
    userRole: null,
    accessToken: null,
    sessionId: null,
  }),
}));

export default store;
