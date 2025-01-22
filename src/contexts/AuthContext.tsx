import React, { createContext, ReactNode, useEffect, useState } from 'react';

export interface AuthContextType {
  authToken: string | null;
  setAuthToken: (token: string | null) => void;
  user: string | null;
}

export const AuthContext = createContext<AuthContextType>({
  authToken: null,
  setAuthToken: () => {},
  user: null,
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(
    localStorage.getItem('authToken')
  );
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    if (authToken) {
      setUser(authToken);
    }
  }, [authToken]);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
