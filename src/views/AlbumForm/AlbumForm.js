import React, { useContext, useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import AppContext from "../../contex";

const AlbumForm = () => {
  const { albumList, setAlbumList } = useContext(AppContext);
  const [ albumTitle, setAlbumTitle ] = useState("");
  const [ toAlbums, setToAlbums ] = useState(false);
  const { id } = useParams();

  useEffect(() => {
        const editedAlbum = albumList.find(album => album.id == id);

        if (editedAlbum) {
          setAlbumTitle(editedAlbum.title)
        }
  }, [albumList, id])

  const handleSubmit = e => {
    e.preventDefault();

    const newAlbum = {
      id: id || Math.floor(Math.random() * 100) + 1,
      userId: 1,
      title: albumTitle
    };


    if (id) {
      const foundIndex = albumList.findIndex(x => x.id == id);
      albumList[foundIndex] = newAlbum;
    } else {
      setAlbumList([...albumList, newAlbum]);
    }

    setToAlbums(true)
    setAlbumTitle("");
  };

  const handleAlbumTitleChange = e => setAlbumTitle(e.target.value);

  return (
    toAlbums ? <Redirect to="/albums" /> : (
      <main className="column">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="title">{id ? 'Edit' : 'Add'} album</div>
            </div>
          </div>
        </div>

        <div className="columns is-centered">
          <div className="column is-8-tablet is-7-desktop is-6-widescreen">
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
              <div className="field">
                <div className="file is-centered is-boxed">
                  <label className="file-label">
                    <input
                      className="file-input"
                      type="file"
                      name="resume"
                      multiple="multiple"
                    />
                    <span className="file-cta">
                      <span className="file-icon">
                        <i className="fas fa-upload"></i>
                      </span>
                      <span className="file-label">Choose photos</span>
                    </span>
                  </label>
                </div>
              </div>

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
                    {id ? 'Edit' : 'Add'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    )
  );
};

export default AlbumForm;
