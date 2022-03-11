import React from 'react';
import '../../Styles/award.scss';

const Award = ({ img, name }) => {
  return (
    <aside className='award'>
      <img src={img} />
      <span>{name}</span>
    </aside>
  );
};

export default Award;
