import React, { createContext, useContext } from 'react';

// Create a Context
const UserContext = createContext();

// Create a Provider Component
export function UserProvider({ children, value }) {
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

// Create a custom hook for using the context
export function useUserContext() {
  return useContext(UserContext);
}
