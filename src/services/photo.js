import axios from 'axios';

const URL = 'https://api.unsplash.com';

const CLIENT_ID = 'H8wbirHkWxYe3FC-49Zdbc0MSBiHKcmCXveIdv20jDs';

export const getPhotos = async (page, size) => {
  const res = await axios.get(
    `${URL}/photos?page=${page}&per_page=${size}&client_id=${CLIENT_ID}`
  );

  return res;
};

export const getPhoto = async (id) => {
  const res = await axios.get(`${URL}/photos/${id}?client_id=${CLIENT_ID}`);

  return res;
};
