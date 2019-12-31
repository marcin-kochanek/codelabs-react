import React, { useContext, useState } from "react";
import { removeAlbum } from "../../common/api";
import AlbumList from "../../components/AlbumList";
import AppContext from '../../contex';

const Albums = () => {
  const [searchAlbum, setSearchAlbum] = useState('');
  const { albumList, setAlbumList} = useContext(AppContext);

  const deleteAlbum = async id => {
    await removeAlbum(id).then(() => {
      const updatedAlbumsList = albumList.filter(album => album.id !== id);
      setAlbumList(updatedAlbumsList);
    });
  };

  const handleSearchInputChange = e => setSearchAlbum(e.target.value);

  return (
          <main className="column">
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <div className="title">Albums</div>
                </div>
              </div>

              <div className="level-right">
                <div className="level-item">
                  <p className="control has-icons-right">
                    <input
                      className="input is-rounded is-small"
                      type="text"
                      placeholder="Search album"
                      name="searchAlbum"
                      value={searchAlbum}
                      onChange={handleSearchInputChange}
                    />
                    <span className="icon is-small is-right">
                      <i className="fas fa-search" />
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <AlbumList albums={albumList} deleteAlbum={deleteAlbum} searchAlbum={searchAlbum} />
          </main>
  );
};

export default Albums;
