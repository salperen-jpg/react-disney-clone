import React from 'react';
import { useDisneyContext } from '../context';
import '../Styles/submenu.scss';

const Submenu = () => {
  const container = React.useRef(null);
  const { isSubmenuOpen, location, page } = useDisneyContext();
  React.useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `48px`;
  }, [location]);

  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      {page.links.map((link, index) => {
        return (
          <span className='submenu-link' key={index}>
            {link}
          </span>
        );
      })}
    </aside>
  );
};

export default Submenu;
