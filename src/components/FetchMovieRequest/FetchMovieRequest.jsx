import { useState, useEffect } from 'react';
import { fetchSearchMovie } from '../../service/api_movie';
import Spinner from '../Loader/Loader';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';

import styles from '../../pages/HomeView/homeView.module.css';

import defaultImg from '../../images/defaul_img.png';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function FetchMovieRequest({ query }) {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { url } = useRouteMatch();

  useEffect(() => {
    if (!query) {
      return;
    }

    setStatus(Status.PENDING);
    fetchMovies();
    setStatus(Status.RESOLVED);
  }, [query]);

  const fetchMovies = () => {
    fetchSearchMovie(query)
      .then(({ results }) => {
        setMovies(results);
        if (!results.length) {
          throw new Error('Hmm...Nothing here. Try another search.');
        }
      })
      .catch((error) => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  };

  if (status === Status.IDLE) {
    return (
      <div style={{ textAlign: 'center' }}>
        <p>Please enter the title of your favorite movie...</p>
      </div>
    );
  }

  if (status === Status.PENDING) {
    return <Spinner />;
  }

  if (status === Status.REJECTED) {
    return <div>{error.message}</div>;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        {' '}
        {movies && (
          <div className={styles.container}>
            <ul className={styles.cards_wrap}>
              {movies.map((movie) => (
                <li key={movie.id} className={styles.card_box}>
                  <div className={styles.card_thumb}>
                    <img
                      className={styles.card_poster}
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                          : defaultImg
                      }
                      alt={movie.original_name}
                    />
                    <div className={styles.card_overlay}></div>
                  </div>
                  <div className={styles.card_content}>
                    <Link
                      style={{ textDecoration: 'none' }}
                      to={{
                        pathname: `${url}/${movie.id}`,
                        state: {
                          from: { location },
                        },
                      }}
                    >
                      <h5 className={styles.card_title}>{movie.title}</h5>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}
