import React, { useContext, useState } from "react";
import { removeAlbum } from "../../common/api";
import AlbumList from "../../components/AlbumList/AlbumList";
import AppContext from "../../contex";
import Title from "../../components/Title/Title";
import Search from "../../components/Search/Search";
import BorderedLevel from "../../components/BorderedLevel/BorderedLevel";

const AlbumsView = () => {
  const [searchAlbum, setSearchAlbum] = useState("");
  const { albumList, setAlbumList } = useContext(AppContext);

  const deleteAlbum = async id => {
    await removeAlbum(id).then(() => {
      const updatedAlbumsList = albumList.filter(album => album.id !== id);
      setAlbumList(updatedAlbumsList);
    });
  };

  const handleSearchInputChange = e => setSearchAlbum(e.target.value);

  return (
    <main className="column">
      <BorderedLevel>
        <Title>Albums</Title>
        <Search
          searchAlbum={searchAlbum}
          handleSearchInputChange={handleSearchInputChange}
        />
      </BorderedLevel>
      <AlbumList
        albums={albumList}
        deleteAlbum={deleteAlbum}
        searchAlbum={searchAlbum}
      />
    </main>
  );
};

export default AlbumsView;
