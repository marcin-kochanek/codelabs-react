import React, { useState, useEffect } from "react";
import { getAlbumPhotos } from "../../common/api";
import { useParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import BorderedLevel from "../../components/BorderedLevel/BorderedLevel";

const GalleryView = () => {
  const [photos, setPhotos] = useState([]);
  const { id: albumId } = useParams();

  useEffect(() => {
    async function fetchPhtots() {
      const fetchedPhotos = await getAlbumPhotos(albumId);
      setPhotos(fetchedPhotos);
    }

    fetchPhtots();
  }, [albumId]);

  return (
    <main className="column">
      <BorderedLevel>
        <Title>Album</Title>
      </BorderedLevel>
      <div className="columns is-multiline">
        {photos.map(({ title, url }) => (
          <PhotoCard title={title} url={url} />
        ))}
      </div>
    </main>
  );
};

export default GalleryView;
