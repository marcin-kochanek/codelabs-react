import React from 'react';

const UploadPhoto = () => {
  return (
    <div className='field'>
      <div className='file is-centered is-boxed'>
        <label className='file-label'>
          <input
            className='file-input'
            type='file'
            name='resume'
            multiple='multiple'
          />
          <span className='file-cta'>
            <span className='file-icon'>
              <i className='fas fa-upload'></i>
            </span>
            <span className='file-label'>Choose photos</span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default UploadPhoto;
