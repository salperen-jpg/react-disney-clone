import React from 'react';
import { useDisneyContext } from '../context';
import '../Styles/sidebar.scss';
import { sublinks } from './Sublinks';

const Sidebar = () => {
  const { isSidebarOpen } = useDisneyContext();
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show' : 'sidebar'}`}>
      <ul className='sidebar-links'>
        {sublinks.map((sublink) => {
          return (
            <li>
              <a href='#'>{sublink.text}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
