import React from 'react';

const Search = ({ searchAlbum, handleSearchInputChange }) => (
  <div className='level-right'>
    <div className='level-item'>
      <p className='control has-icons-right'>
        <input
          className='input is-rounded'
          type='text'
          placeholder='Find album'
          name='searchAlbum'
          value={searchAlbum}
          onChange={handleSearchInputChange}
        />
        <span className='icon is-small is-right'>
          <i className='fas fa-search' />
        </span>
      </p>
    </div>
  </div>
);

export default Search;
