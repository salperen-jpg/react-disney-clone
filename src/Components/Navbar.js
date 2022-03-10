import React from 'react';
import logo from '../Assets/logo.png';
import '../Styles/navbar.scss';
import { FaSearch } from 'react-icons/fa';
import { useDisneyContext } from '../context';
import { sublinks } from './Sublinks';

const Navbar = () => {
  const { isSidebarOpen, toggleSidebar, openSubmenu, closeSubmenu } =
    useDisneyContext();
  const displayMenu = (e) => {
    const page = e.target.innerHTML;
    const temp = e.target.getBoundingClientRect();
    const center = (temp.left + temp.right) / 2;
    const bottom = temp.bottom - 3;
    console.log(temp);
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      closeSubmenu();
    }
  };
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <div className='btn-container' onClick={toggleSidebar}>
            <button className='hamburger'>
              <span
                className={`${isSidebarOpen ? 'top-active top ' : 'top'}`}
              ></span>
              <span
                className={`${
                  isSidebarOpen ? 'bottom-active bottom' : 'bottom'
                }`}
              ></span>
            </button>
          </div>
          <img className='logo' src={logo} alt='' />
          <ul className='nav-links'>
            {sublinks.map((link) => {
              const { id, text } = link;
              return (
                <li key={id}>
                  <a href='#' className='nav-link' onMouseOver={displayMenu}>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
          <FaSearch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
