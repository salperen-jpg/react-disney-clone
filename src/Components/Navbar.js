import React from 'react';
import logo from '../Assets/logo.png';
import '../Styles/navbar.scss';
import { FaSearch } from 'react-icons/fa';
import { useDisneyContext } from '../context';
import { sublinks } from './Sublinks';

const Navbar = () => {
  const { isSidebarOpen, toggleSidebar } = useDisneyContext();
  return (
    <nav className='nav'>
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
                  <a href='#'>{text}</a>
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
