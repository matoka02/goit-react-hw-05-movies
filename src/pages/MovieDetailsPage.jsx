import * as API from 'services/apiMoviedb';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    API.getMovieDetails(movieId).then(movieDetailsReturnedFromApi =>
      setMovieDetails(movieDetailsReturnedFromApi)
    );
  }, [movieId]);

  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  return (
    <div>
      <Link to={backLink}>
        {' '}
        <button type="button">Go back</button>
      </Link>
      <h2>
        {movieDetails.title}(
        {movieDetails.release_date
          ? movieDetails.release_date.substring(0, 4)
          : ''}
        )
      </h2>
      <img
        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieDetails.poster_path}`}
        alt={movieDetails.original_title}
      />
      <p>
        User Score: {' '}
        {movieDetails.vote_average
          ? Math.fround(movieDetails.vote_average * 10).toFixed(0)
          : ''}
      </p>
      <h4>Genres</h4>
      <p>
        {movieDetails.genres
          ? movieDetails.genres.map(genre => genre.name).join('/')
          : ''}
      </p>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
