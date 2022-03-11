import React from 'react';
import { useDisneyContext } from '../../context';
import Award from './Award';
import '../../Styles/awards.scss';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';

const Awards = () => {
  const { displayAwards, pageForPagination, totalPage, handlePage } =
    useDisneyContext();
  console.log(displayAwards);
  return (
    <section className='awards'>
      <h3>Celebrate Women's History Month on Disney+</h3>
      <div className='awards-container'>
        <div className='awards-center'>
          {displayAwards.map((award) => {
            return <Award key={award.id} {...award}></Award>;
          })}
        </div>
        <div className='award-btn-container'>
          {totalPage.length > pageForPagination + 1 ? (
            <button
              className='right-btn'
              onClick={() => handlePage(pageForPagination + 1)}
            >
              <MdOutlineNavigateNext />
            </button>
          ) : (
            <button
              className='left-btn'
              onClick={() => handlePage(pageForPagination - 1)}
            >
              <MdOutlineNavigateBefore />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Awards;
