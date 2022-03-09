import React from 'react';
import '../../Styles/trend.scss';

const Trend = ({ img, title, exp }) => {
  return (
    <aside className='trend'>
      <img src={img} alt='img' />
      <span className='trend-name'>{title}</span>
      <p className='trend-exp'>{exp}</p>
      <a href='#' className='trend-btn'>
        stream now
      </a>
    </aside>
  );
};

export default Trend;
