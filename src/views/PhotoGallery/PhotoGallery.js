import React, { useState, useEffect } from 'react';
import { getAlbumPhotos } from '../../common/api';
import {
    useParams
  } from "react-router-dom";

const PhotoGallery = () => {
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
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <div className="title">Album</div>
                        </div>
                    </div>
                </div>

                <div className="columns is-multiline">
                    {photos.map(photo => (
                        <div className="column is-2">
                            <div className="panel">
                                <p className="panel-heading">
                                    {photo.title}
                                </p>
                                <div className="panel-block">
                                    <figure className="image is-16x9">
                                        <img src={photo.url} />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </main>
    )
}

export default PhotoGallery;