import React from 'react';
import Album from './Album';

const AlbumList = ({ albums, deleteAlbum, searchAlbum }) => (
  <div className='columns is-multiline'>
    {albums
      .filter(album =>
        album.title.toLowerCase().includes(searchAlbum.toLowerCase())
      )
      .map(album => (
        <Album key={album.id} album={album} deleteAlbum={deleteAlbum} />
      ))}
  </div>
);

export default AlbumList;
