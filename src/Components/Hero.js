import React from 'react';
import hero from '../Assets/hero.webp';
import logo from '../Assets/logo.png';
import '../Styles/hero.scss';
import { useDisneyContext } from '../context';

const Hero = () => {
  const { closeSubmenu } = useDisneyContext();
  return (
    <article className='hero' onMouseOver={closeSubmenu}>
      <div className='section-center hero-img'>
        <div className='img-section'>
          <img src={hero} alt='' />
        </div>
        <div className='hero-info'>
          <div className='shop-logo'>
            <span className='shop'>shop</span>
            <img className='logo' src={logo} alt='' />
          </div>
          <p className='sale'>
            Oh Boy! Sale Up to 40% Off Clothing, Accessories, Sleepwear and FREE
            SHIPPING Sitewide.
          </p>
          <button type='button' className='hero-btn'>
            Shop now
          </button>
        </div>
      </div>
    </article>
  );
};

export default Hero;
