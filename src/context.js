import React, { useContext, useState } from 'react';

const DisneyContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  };

  return (
    <DisneyContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </DisneyContext.Provider>
  );
};

export const useDisneyContext = () => {
  return useContext(DisneyContext);
};
