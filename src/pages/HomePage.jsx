import * as API from 'services/apiMoviedb';
import { useEffect } from 'react';
import { useState } from 'react';
import { TrendingList } from 'components/TrendingList/TrendingList';

const HomePage = () => {
  const [trendingMovies, setMovies] = useState([]);

  useEffect(() => {
    API.getTrending().then(resp => setMovies(resp));
  }, []);

  return (
    <div>
      <TrendingList movies={trendingMovies} />
    </div>
  );
};

export default HomePage;
