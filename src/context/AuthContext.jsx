import { createContext, useMemo, useState } from 'react';
import { readStorage, removeStorage, writeStorage } from '../utils/storage.js';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readStorage('user', null));

  const value = useMemo(() => ({
    user,
    login(nextUser) {
      setUser(nextUser);
      writeStorage('user', nextUser);
    },
    logout() {
      setUser(null);
      removeStorage('user');
    },
  }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
