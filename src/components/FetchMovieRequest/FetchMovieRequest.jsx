import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import { fetchSearchMovie } from '../../service/api_movie';
import defaultImg from '../../images/defaul_img.png';

import styles from '../../pages/HomeView/HomeView.module.css';

export default function FetchMovieRequest({ query }) {
  const [movies, setMovies] = useState([]);
  const { url } = useRouteMatch();

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchSearchMovie(query).then(({ results }) => {
      setMovies(results);
    });
  }, [query]);

  return (
    <>
      {movies && (
        <ul className={styles.MovieList}>
          {movies.map((movie, id) => (
            <li key={movie.id} id={id} className={styles.movie_card}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : defaultImg
                }
                alt={movie.original_name}
              />
              <div className={styles.card_body}>
                <Link
                  to={`${url}/${movie.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <h5 className={styles.card_title}>{movie.title}</h5>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
