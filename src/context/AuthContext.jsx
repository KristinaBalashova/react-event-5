import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const token = localStorage.getItem('token');

  const [authState, setAuthState] = useState({
    auth: !!token,
    token: token || null,
  });

  const login = (token) => {
    setAuthState({ auth: true, token });
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setAuthState({ auth: false, token: null });
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>{children}</AuthContext.Provider>
  );
};

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('Err in coNText!');
  return context;
}
