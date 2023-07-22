import * as API from 'services/apiMoviedb';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setReviews] = useState([]);

  useEffect(() => {
    API.getMoviesReviews(movieId).then(resp => setReviews(resp));
  }, [movieId]);

  return(
    <div>
      {(movieReviews?.length === 0) && (<p>We don't have any reviews for this movies</p>)} 
      <ul>
        {movieReviews.map(review=>{
          return (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  )
};

Reviews.propTypes = {
  movieId: PropTypes.string,
};

export default Reviews;
