import React from 'react';
import { sublinks } from './Sublinks';
import '../Styles/undernav.scss';

const UnderNav = () => {
  return (
    <>
      <aside className='underNav'>
        {sublinks.slice(0, 4).map((link) => {
          return (
            <a href='#' className='under-links' key={link.id}>
              {link.text}
            </a>
          );
        })}
      </aside>
      <a href='#' className='information'>
        <span>
          your favorite disney movies & series streaming anytime on disney+
        </span>
      </a>
    </>
  );
};

export default UnderNav;
