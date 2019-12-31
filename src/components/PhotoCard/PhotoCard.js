import React from 'react';

const PhotoCard = ({ title, url }) => (
  <div className='column is-2'>
    <div className='panel'>
      <p className='panel-heading'>{title}</p>
      <div className='panel-block'>
        <figure className='image is-16x9'>
          <img className='image' src={url} />
        </figure>
      </div>
    </div>
  </div>
);

export default PhotoCard;
