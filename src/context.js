import React, { useContext, useState } from 'react';
import { sublinks } from './Components/Sublinks';

const DisneyContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });

  const toggleSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  };

  const openSubmenu = (text, coordinates) => {
    console.log(text);
    const page = sublinks.find((link) => link.text === text);
    setPage(page);
    if (!page) {
      setPage(sublinks[1]);
    }

    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  return (
    <DisneyContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        location,
        page,
      }}
    >
      {children}
    </DisneyContext.Provider>
  );
};

export const useDisneyContext = () => {
  return useContext(DisneyContext);
};
