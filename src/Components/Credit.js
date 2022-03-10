import React from 'react';
import credit from '../Assets/credit.png';
import '../Styles/credit.scss';

const Credit = () => {
  return (
    <article className='credit'>
      <div className='credit-center'>
        <div className='credit-img-container'>
          <img className='credit-img' src={credit} alt='credit' />
        </div>
        <div className='credit-info'>
          <div>
            <span className='credit-title'>
              Your Disney dream is in the cards
            </span>
            <span className='credit-earn'>
              Earn a <strong>$300</strong> statement credit. New Disney Premier
              Visa Cardmembers only.
            </span>
            <a href='#' className='credit-btn'>
              Learn More
            </a>
            <span className='apply'>
              Restrictions apply. Disney and its related entities.
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Credit;
