import PropTypes from 'prop-types';

export default function ReviewsList({ reviews }) {
  return (
    <>
      {reviews && (
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
      )}
    </>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.array,
};
