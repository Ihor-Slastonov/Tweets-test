import axios from 'axios';

const BASE_URL = 'https://644c553bcfdddac9708efb6d.mockapi.io/';

export const fetchTweets = async (page, limit = 3) => {
  const response = await axios.get(`${BASE_URL}users`, {
    params: {
      page,
      limit,
    },
  });
  return response.data;
};
