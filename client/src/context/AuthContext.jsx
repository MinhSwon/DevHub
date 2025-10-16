import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';

export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  token: null,
  login: async () => {},
  logout: () => {},
});

const STORAGE_KEY = 'umtsporthub_auth';

function getStoredAuth() {
  try {
    const sessionRaw = sessionStorage.getItem(STORAGE_KEY);
    if (sessionRaw) return JSON.parse(sessionRaw);
    const localRaw = localStorage.getItem(STORAGE_KEY);
    if (localRaw) return JSON.parse(localRaw);
  } catch (_) {}
  return null;
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = getStoredAuth();
    if (saved && saved.token) {
      setToken(saved.token);
      setUser(saved.user || null);
    }
  }, []);

  const persistAuth = useCallback((data, remember) => {
    try {
      const payload = JSON.stringify(data);
      if (remember) {
        localStorage.setItem(STORAGE_KEY, payload);
        sessionStorage.removeItem(STORAGE_KEY);
      } else {
        sessionStorage.setItem(STORAGE_KEY, payload);
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch (_) {}
  }, []);

  const clearPersisted = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      sessionStorage.removeItem(STORAGE_KEY);
    } catch (_) {}
  }, []);

  const login = useCallback(async ({ email, password, remember }) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      const message = (error && (error.msg || error.error)) || 'Đăng nhập thất bại';
      throw new Error(message);
    }
    const data = await res.json();
    const nextToken = data.token;
    let nextUser = data.user || { email };
    try {
      // Try decode JWT payload for user id if available
      const base64 = nextToken.split('.')[1];
      const payload = JSON.parse(atob(base64));
      const userId = payload?.user?.id;
      if (userId) nextUser = { ...nextUser, id: userId };
    } catch (_) {}
    setToken(nextToken);
    setUser(nextUser);
    persistAuth({ token: nextToken, user: nextUser }, Boolean(remember));
    return { token: nextToken, user: nextUser };
  }, [persistAuth]);

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    clearPersisted();
  }, [clearPersisted]);

  const value = useMemo(() => ({
    isAuthenticated: Boolean(token),
    user,
    token,
    login,
    logout,
  }), [login, logout, token, user]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}


