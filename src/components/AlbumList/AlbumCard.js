import React from 'react';
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

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 23% !important;
    margin: 10px;
`;

const AlbumCard = ({ albumPhoto, title, id, deleteAlbum }) => {
  return (
    <Card className='column is-3 card'>
      <div className='card-image'>
        <figure className='image is-4by3'>
          <img src={albumPhoto} alt='Album' />
        </figure>
      </div>
      <div className='card-content'>
        <p className='title is-4'>{title}</p>
      </div>

      <Footer className='card-footer'>
        <NavLinkButton to={`albums/${id}/photos`} className='button'>
        <span className='icon is-small'>
          <i className='fas fa-images' />
          </span>
        </NavLinkButton>
        <NavLinkButton to={`albums/${id}/edit`} className='button'>
          <span className='icon is-small'>
            <i className='fas fa-edit' />
          </span>
        </NavLinkButton>
        <Button className='button' onClick={() => deleteAlbum(id)}>
        <span className='icon is-small'>
          <i className='fas fa-trash-alt' />
          </span>
        </Button>
      </Footer>
    </Card>
  );
};

export default AlbumCard;
