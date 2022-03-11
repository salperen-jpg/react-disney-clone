import React, { useContext, useState, useEffect } from 'react';
import { sublinks } from './Components/Sublinks';
import { awardsMovie } from './Components/AcademyAward/data';
import pagination from './Components/Utils/pagination';

const DisneyContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  // SUBMENU STATES
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });
  // MOVIE PAGINATION STATES
  const [awards, setAwards] = useState(awardsMovie);
  const [displayAwards, setDisplayAwards] = useState([]);
  const [pageForPagination, setPageForPagination] = useState(0);
  const [totalPage, setTotalPage] = useState(pagination(awards));

  useEffect(() => {
    setDisplayAwards(pagination(awards)[pageForPagination]);
  }, [pageForPagination]);

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

  const handlePage = (pageNumber) => {
    setPageForPagination(pageNumber);
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
        displayAwards,
        pageForPagination,
        totalPage,
        handlePage,
      }}
    >
      {children}
    </DisneyContext.Provider>
  );
};

export const useDisneyContext = () => {
  return useContext(DisneyContext);
};
