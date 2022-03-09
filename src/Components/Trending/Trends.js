import React from 'react';
import { trends } from './data';
import Trend from './Trend';
import '../../Styles/trends.scss';

const Trends = () => {
  return (
    <article className='trends'>
      <h3>Trending on Disney+</h3>
      <div className='trends-center'>
        {trends.map((trend) => {
          return <Trend key={trend.id} {...trend}></Trend>;
        })}
      </div>
    </article>
  );
};

export default Trends;
