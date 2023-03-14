import axios from 'axios';
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '66ec31e8b6msh2dae0fa7e7cfc27p183b0cjsnd8734633bb6e',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
