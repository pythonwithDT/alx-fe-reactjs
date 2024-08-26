// src/UserContext.jsx
import React, { createContext, useContext } from 'react';

const UserContext = createContext();

export function UserProvider({ value, children }) {
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
