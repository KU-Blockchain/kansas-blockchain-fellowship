import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isVerified, setIsVerified] = useState(false);

  const verifyUser = (credentials) => {
    setIsVerified(true);
  };

  return (
    <AuthContext.Provider value={{ isVerified, verifyUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
