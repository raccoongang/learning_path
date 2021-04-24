import React from 'react';

import ReactTooltip from 'react-tooltip';
import './Rating.scss';


const Rating = ({ checkedType, likeHandler, dislikeHandler }) => {
  return <div className='Rating'>
    <button
      className={`RatingBtn RatingBtn_like ${checkedType === 'like'  ? 'RatingBtn_active' : ''}`}
      aria-label='like'
      data-tip='Like'
      onClick={likeHandler}
    >
      <svg className='RatingIcon'>
        <use xmlns='http://www.w3.org/1999/xlink' xlinkHref='#icon-like'/>
      </svg>
    </button>
    <button
      className={`RatingBtn RatingBtn_dislike ${checkedType === 'dislike'  ? 'RatingBtn_active' : ''}`}
      aria-label='dislike'
      data-tip='Dislike'
      onClick={dislikeHandler}
    >
      <svg className='RatingIcon'>
        <use xmlns='http://www.w3.org/1999/xlink' xlinkHref='#icon-dislike'/>
      </svg>
    </button>
    <ReactTooltip place='bottom' type='dark' effect='solid' />
  </div>
};

export {Rating};
