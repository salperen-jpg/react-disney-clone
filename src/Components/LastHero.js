import React from 'react';
import bg from '../Assets/lastimg.webp';
import icons from '../Assets/colloborations.webp';
import '../Styles/lasthero.scss';

const LastHero = () => {
  return (
    <section className='last-hero'>
      <div className='last-hero-info'>
        <img src={icons} alt='' />
        <p className='last-title'>Stream the best movies,shows and sports.</p>
        <a href='#' className='last-link'>
          Get the disney bundle
        </a>
      </div>
      <span className='last-exp '>
        Incl.Hulu(ad-supported) or Hulu (No Ads).Access content from each
        service seperately and select ESPN+ content via Hulu.
      </span>
    </section>
  );
};

export default LastHero;
