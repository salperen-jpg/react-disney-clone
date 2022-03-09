import React from 'react';
import '../../Styles/movie.scss';

const Movie = ({ text, exp, img }) => {
  return (
    <aside className='movie'>
      <img src={img} alt='' />
      <div className='movie-info'>
        <span className='movie-name'>{text}</span>
        <p className='movie-exp'>{exp}</p>
        <a href='#' type='button' className='movie-btn'>
          Learn More
        </a>
      </div>
    </aside>
  );
};

export default Movie;
