import React, { useState, useEffect } from 'react';
import { getAlbumPhotos, deleteAlbum } from '../common/api';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Button = styled.button`
    border: none;
`;

const NavLinkButton = styled(NavLink)`
    border: none;
`;

const Footer = styled.footer`
    display: flex;
    justify-content: space-around;
`;

const Album = ({ album, deleteAlbum }) => {
    const [albumPhoto, setAlbumPhoto] = useState(null);

    useEffect(() => {
        async function fetchAlbums() {
            const { id } = album;

            if (id) {
                const fetchedAlbumPhoto = await getAlbumPhotos(id);
                setAlbumPhoto(fetchedAlbumPhoto[0].thumbnailUrl);
            } else {
                setAlbumPhoto('https://via.placeholder.com/150')
            }

        }

        fetchAlbums();
    }, [album, albumPhoto]);

    return (
        <div className="column is-3 card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={albumPhoto} alt="Album" />
                </figure>
            </div>
            <div className="card-content">
                <p className="title is-4">{album.title}</p>
            </div>

            <Footer className="card-footer">
                <NavLinkButton to={`albums/${album.id}/photos`}
                    className="button"
                >
                    <i className="fas fa-images" />
                </NavLinkButton>
                <NavLinkButton to={`albums/${album.id}/edit`}
                    className="button"
                >
                    <span className="icon is-small has-text-danger">
                        <i className="fas fa-edit" />
                    </span>
                </NavLinkButton>
                <Button
                    className="button"
                    onClick={() => deleteAlbum(album.id)}
                >
                    <i className="fas fa-trash-alt" />
                </Button>
            </Footer>
        </div>
    )
}

export default Album
