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

export const getCast = async movieId => {
  const url = `movie/${movieId}/credits?language=en-US`;
  const response = await axios.get(url, options);
  // console.log(response);
  return response.data.cast;
};
// 'https://api.themoviedb.org/3/movie/218/reviews?language=en-US&page=1';

export const getReviews = async movieId => {
  const url = `movie/${movieId}/reviews?language=en-US&page=1`;
  const response = await axios.get(url, options);
  console.log(response);
  return response.data.results;
};

// 'https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US';

// `search/movie?query =${name}`
// 'https://api.themoviedb.org/3/search/movie?query=dune&include_adult=false&language=en-US&page=1'
export const searchMovieByName = async movieFilter => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movieFilter}&include_adult=false&language=en-US&page=1`,
    options
  );
  // console.log(response);
  return response.data.results;
};
