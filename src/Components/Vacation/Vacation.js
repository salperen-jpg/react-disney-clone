import React from 'react';
import '../../Styles/vacation.scss';

const Vacation = ({ img, exp, title }) => {
  return (
    <article className='vacation'>
      <img src={img} alt='img' />
      <span className='vacation-name'>{title}</span>
      <p className='vacation-exp'>{exp}</p>
      <a href='#' className='vacation-btn'>
        stream now
      </a>
    </article>
  );
};

export default Vacation;
