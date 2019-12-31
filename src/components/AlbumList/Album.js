import React, { useEffect, useState } from 'react';
import { getAlbumPhotos } from '../../common/api';
import AlbumCard from './AlbumCard';

const Album = ({ album, deleteAlbum }) => {
  const [albumPhoto, setAlbumPhoto] = useState(null);

  useEffect(() => {
    async function fetchAlbums() {
      const { id } = album;

      if (id) {
        const fetchedAlbumPhoto = await getAlbumPhotos(id);
        setAlbumPhoto(fetchedAlbumPhoto[0].thumbnailUrl);
      } else {
        setAlbumPhoto('https://via.placeholder.com/150');
      }
    }

    fetchAlbums();
  }, [album, albumPhoto]);

  return (
    <AlbumCard
      albumPhoto={albumPhoto}
      title={album.title}
      id={album.id}
      deleteAlbum={deleteAlbum}
    />
  );
};

export default Album;
