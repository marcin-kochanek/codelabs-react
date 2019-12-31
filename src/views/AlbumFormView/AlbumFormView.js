import React, { useContext, useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import AppContext from "../../contex";
import Title from "../../components/Title/Title";
import UploadPhoto from "../../components/UploadPhoto/UploadPhoto";
import { updateAlbum, addAlbum } from "../../common/api";
import BorderedLevel from "../../components/BorderedLevel/BorderedLevel";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 550px;
`

const AlbumForm = () => {
  const { albumList, setAlbumList } = useContext(AppContext);
  const [albumTitle, setAlbumTitle] = useState("");
  const [toAlbums, setToAlbums] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const editedAlbum = albumList.find(album => album.id == id);

    if (editedAlbum) {
      setAlbumTitle(editedAlbum.title);
    }
  }, [albumList, id]);

  const handleSubmit = async e => {
    e.preventDefault();

    const newAlbum = {
      id: id || Math.floor(Math.random() * 100) + 10,
      userId: 1,
      title: albumTitle
    };

    if (id) {
      await updateAlbum(id, newAlbum).then(() => {
        const foundIndex = albumList.findIndex(x => x.id == id);
        albumList[foundIndex] = newAlbum;
      });
    } else {
      await addAlbum(newAlbum).then(() => {
        setAlbumList([...albumList, newAlbum]);
      });
    }

    setToAlbums(true);
    setAlbumTitle("");
  };

  const handleAlbumTitleChange = e => setAlbumTitle(e.target.value);

  return toAlbums ? (
    <Redirect to="/albums" />
  ) : (
    <main className="column">
      <BorderedLevel>
        <Title>{id ? "Edit" : "Add"} album</Title>
      </BorderedLevel>

      <FormWrapper className="columns is-centered">
        <div className="column is-6">
          <form className="box">
            <div className="field">
              <label htmlFor="albumTitle" className="label">
                Album
              </label>
              <div className="control">
                <input
                  type="text"
                  placeholder="Album title"
                  className="input"
                  name="albumTitle"
                  id="albumTitle"
                  value={albumTitle}
                  onChange={handleAlbumTitleChange}
                  required
                />
              </div>
            </div>

            <UploadPhoto />

            <div className="field is-grouped is-grouped-right">
              <div className="control">
                <button
                  type="submit"
                  onClick={() => setToAlbums(true)}
                  className="button is-warning"
                >
                  Back
                </button>
              </div>
              <div className="control">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="button is-success"
                >
                  {id ? "Edit" : "Add"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </FormWrapper>
    </main>
  );
};

export default AlbumForm;
