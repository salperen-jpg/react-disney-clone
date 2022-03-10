import React from 'react';
import { movies } from './data';
import Movie from './Movie';
import '../../Styles/movies.scss';

const Movies = () => {
  return (
    <section className='movies'>
      <div className='movies-center'>
        {movies.map((movie) => {
          return <Movie key={movie.id} {...movie}></Movie>;
        })}
      </div>
    </section>
  );
};

export default Movies;
