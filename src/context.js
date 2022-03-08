import React, { useContext } from 'react';

const DisneyContext = React.createContext();

export const AppProvider = ({ children }) => {
  return (
    <DisneyContext.Provider value='hello'>{children}</DisneyContext.Provider>
  );
};

export const useDisneyContext = () => {
  return useContext(DisneyContext);
};
