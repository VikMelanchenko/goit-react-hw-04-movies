import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../service/api_movie';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then((request) => setReviews(request.results));
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>"{review.content}"</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no reviews for this movie.</p>
      )}
    </>
  );
}
