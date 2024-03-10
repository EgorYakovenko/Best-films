import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDUxNzQyY2NhNjYyMTZlNDA0NDUxNzI4Njc5NmJjYiIsInN1YiI6IjY1ZWNhYTBjYzE1YjU1MDE4NmYxMTc1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9o7jle9Mfw0O00ur0whBnheWlZugP5aZIxSLUzy8cOY',
  },
};

const url = 'trending/movie/day?language=en-US';

export const getFilms = async () => {
  const response = await axios.get(url, options);
  // console.log(response);
  return response.data.results;
};

export const getFilmsById = async movieId => {
  const response = await axios.get(`movie/${movieId}`, options);
  // console.log(response);
  return response.data;
};
