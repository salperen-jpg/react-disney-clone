import React from 'react';
import { news } from './data';
import SingleNews from './SingleNews';
import '../../Styles/news.scss';
const News = () => {
  return (
    <article className='news'>
      <h3>Disney News</h3>
      <div className='news-center'>
        {news.map((singleNew) => {
          return <SingleNews key={singleNew.id} {...singleNew}></SingleNews>;
        })}
      </div>
    </article>
  );
};

export default News;
