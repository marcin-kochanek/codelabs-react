import wretch from "wretch";
import { API_URL } from './constants';

export const api = () => wretch()
    .content("application/json")
    .catcher(401, (err, req) => {
        // return history.push("/login");
        console.log(err)
    });

export const addAlbum = async (payload) => {
    return await wretch()
        .content("application/json")
        .url(`${API_URL}/albums`)
        .post(payload)
        .res()
};

export const updateAlbum = async (albumId, payload) => {
    return await api
        .withAuth()
        .url(`${API_URL}/albums/${albumId}`)
        .put(payload)
        .res();
};

export const getAlbums = async (userId) => {
    return await wretch()
        .content("application/json")
        .url(`${API_URL}/albums?userId=${userId}`)
        .get()
        .json()
};

export const getAlbumPhotos = async (albumId) => {
    return await wretch()
        .content("application/json")
        .url(`${API_URL}/photos?albumId=${albumId}`)
        .get()
        .json()
};

export const removeAlbum = async ( albumId ) => {
    return await wretch()
        .content('application/json')
        .url(`${API_URL}/albums/${albumId}`)
        .delete()
        .res();
  };