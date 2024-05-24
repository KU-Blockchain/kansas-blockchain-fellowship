import React, { createContext, useContext, useState } from 'react';
import io from 'socket.io-client';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isVerified, setIsVerified] = useState(false);

  const verifyUser = (authToken) => {
    setIsVerified(true);
    console.log('User authenticated');
  };

  return (
    <AuthContext.Provider value={{ isVerified, verifyUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
