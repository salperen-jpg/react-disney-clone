import React from 'react';
import logo from '../Assets/logo.png';
import '../Styles/footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <img className='logo' src={logo} alt='logo' />
      <ul className='upper-links'>
        <li>
          <a href='#'>About Disney</a>
        </li>
        <li>
          <a href='#'>Disney Help</a>
        </li>
        <li>
          <a href='#'>Careers</a>
        </li>
        <li>
          <a href='#'>Contact us</a>
        </li>
        <li>
          <a href='#'>Advertise With Us</a>
        </li>
        <li>
          <a href='#'>Disney Primer Visa Card</a>
        </li>
      </ul>
      <ul className='bottom-links'>
        <li>
          <a href='#'>Terms of Use</a>
        </li>
        <li>
          <a href='#'>Additional Content Information</a>
        </li>
        <li>
          <a href='#'>Privacy Policy</a>
        </li>
        <li>
          <a href='#'>Your California Privacy Rights</a>
        </li>
        <li>
          <a href='#'>Children's Online Privacy Policy</a>
        </li>
        <li>
          <a href='#'>Do Not Sell My Personal Information</a>
        </li>
        <li>
          <a href='#'>Interest-Based Ads</a>
        </li>
      </ul>
      <span>&copy;Disney,All Rights Reserved,Disney Entertainment</span>
    </footer>
  );
};

export default Footer;
