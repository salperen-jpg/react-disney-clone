import React from 'react';
import '../../Styles/singleNew.scss';

const SingleNews = ({ name, exp, img, date }) => {
  return (
    <article className='single-new'>
      <img src={img} alt='img' className='new-img-section' />
      <div className='news-info'>
        <span className='title'>
          <span>news {name}</span>
          <span className='news-date'>{date}</span>
        </span>
        <p className='news-exp'>{exp}</p>
        <span className='bottom-date'>{date},2022</span>
      </div>
    </article>
  );
};

export default SingleNews;
