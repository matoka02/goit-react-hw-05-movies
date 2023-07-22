import * as API from 'services/apiMoviedb';
import { TrendingList } from 'components/TrendingList/TrendingList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';


const SearchForm = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   API.searchMovies(input).then(ret => setMovies(ret));
  // }, [input]);
  // return { movies };

  const handleSubmit = evt => {
    setSearchParams({ query: evt.target[0].value });
    evt.preventDefault();
    return;
  };

  useEffect(() => {
    const movieTitle = searchParams.get('query');
    if (movieTitle) {
      API.searchMovies(movieTitle).then(ret => setMovies(ret));
    }
  }, [searchParams]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..."></input>
        <button type="submit">Search</button>
      </form>
      <TrendingList movies={movies} />
    </div>
  );
};

export default SearchForm;
