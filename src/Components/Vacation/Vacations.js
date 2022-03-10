import React from 'react';
import { vacations } from './data';
import Vacation from './Vacation';
import '../../Styles/vacations.scss';

const Vacations = () => {
  return (
    <article className='vacations'>
      <h3>Vacation with Disney Parks</h3>
      <div className='vacations-center'>
        {vacations.map((vacation) => {
          return <Vacation key={vacation.id} {...vacation}></Vacation>;
        })}
      </div>
    </article>
  );
};

export default Vacations;
