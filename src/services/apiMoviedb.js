import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'b8b4ca8ae31738ae90c3cb58e4b03190';
const ADULT = 'false';
const LANGUAGE = 'en-US';
//  20 items are always returned per page, no change!

// общий список --- HomePage
const getTrending = async () => {
  const resp = await axios.get(`/trending/movie/day?api_key=${API_KEY}&include_adult=${ADULT}`);
  // console.log(resp.data.results);      // array
  return resp.data.results.map(({ id, title }) => {
    return { id, title };
  });
};

// поиск по названию --- SearchForm
const searchMovies = async inputValue => {
  const resp = await axios.get(`/search/movie?api_key=${API_KEY}&include_adult=${ADULT}&query=${inputValue}&language=${LANGUAGE}&page=1`);
  // console.log(resp.data.results);       // array
  return resp.data.results.map(({ id, title }) => {
    return { id, title };
  });
};

// описание 1 фильма --- MovieDetailsPage
const getMovieDetails = async movieId => {
  const resp = await axios.get(`/movie/${movieId}?api_key=${API_KEY}&language=${LANGUAGE}`);
  // console.log(resp.data);         // object
  return resp.data;
};

// состав актеров --- Cast
const getMovieCredits = async moviesId => {
  const resp = await axios.get(`/movie/${moviesId}/credits?api_key=${API_KEY}&language=${LANGUAGE}`);
  // console.log(resp.data.cast);      // array
  return resp.data.cast.map(({ name, character, profile_path, id }) => {
    return { name, character, profile_path, id };
  });
};

// отзывы --- Reviews
const getMoviesReviews = async moviesId => {
  const resp = await axios.get(`/movie/${moviesId}/reviews?api_key=${API_KEY}&language=${LANGUAGE}&page=1`);
  // console.log(resp.data.results);      // array
  return resp.data.results.map(({ author, content, id }) => {
    return { author, content, id };
  });
};

export {getTrending, searchMovies, getMovieDetails, getMovieCredits, getMoviesReviews};
