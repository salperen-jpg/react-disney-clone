import React from 'react';
import logo from '../Assets/logo.png';
import '../Styles/navbar.scss';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <div className='btn-container'>
            <button className='button'>
              <span className='top'></span>
              <span className='bottom'></span>
            </button>
          </div>
          <img className='logo' src={logo} alt='' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
