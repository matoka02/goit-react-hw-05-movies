import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'b8b4ca8ae31738ae90c3cb58e4b03190';

const getTrending = async () => {
  const resp = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return resp.data.results.map(({ id, title }) => {
    return { id, title };
  });
};

const searchMovies = async inputValue => {
  const resp = await axios.get(`/search/movie?api_key=${API_KEY}&query=${inputValue}&language=en-US&page=1`);
  return resp.data.results.map(({ id, title }) => {
    return { id, title };
  });
};

const getMovieDetails = async movieId => {
  const resp = await axios.get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
  return resp.data;
};

const getMovieCredits = async moviesId => {
  const resp = await axios.get(`/movie/${moviesId}/credits?api_key=${API_KEY}&language=en-US`);
  return resp.data.cast.map(({ name, character, profile_path, id }) => {
    return { name, character, profile_path, id };
  });
};

const getMoviesReviews = async moviesId => {
  const resp = await axios.get(`/movie/${moviesId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
  return resp.data.results.map(({ author, content, id }) => {
    return { author, content, id };
  });
};

export {getTrending, searchMovies, getMovieDetails, getMovieCredits, getMoviesReviews};
