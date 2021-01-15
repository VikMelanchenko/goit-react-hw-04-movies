import PropTypes from 'prop-types';
import defaultImg from '../../images/defaul_img.png';

import { Link, useRouteMatch } from 'react-router-dom';

import styles from '../../css/styles.module.css';

export default function MovieCard({ movies }) {
  const { url } = useRouteMatch();

  return (
    <ul className={styles.MovieList}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.movie_card}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            alt={movie.original_name}
          />
          <div className={styles.card_body}>
            <Link to={`${url}/${movie.id}`} style={{ textDecoration: 'none' }}>
              <h5 className={styles.card_title}>{movie.title}</h5>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

MovieCard.propTypes = {
  movies: PropTypes.array.isRequired,
};
