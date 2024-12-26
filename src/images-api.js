import axios from 'axios';

const UNSPLASH_ACC_KEY = 'vRafP9h19WwTpJkR108iVca61WHf6rwGxmB4z9HKnR4';
axios.defaults.baseURL = 'https://api.unsplash.com/search';
axios.defaults.headers.common['Accept-Version'] = 'v1';
axios.defaults.headers.common['Authorization'] =
  'Client-ID ' + UNSPLASH_ACC_KEY;

export const fetchImages = async (page, query) => {
  const response = await axios.get('/photos', {
    params: {
      page,
      query,
      per_page: 12,
      orientation: 'landscape',
    },
  });
  return response.data;
};
