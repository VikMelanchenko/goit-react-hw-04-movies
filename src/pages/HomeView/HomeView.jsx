import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as API from '../../service/api_movie';
import defaultImg from '../../images/defaul_img.png';

import styles from './HomeView.module.css';

export default function HomeView() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.fetchTrendingMovies().then((request) => setMovies(request.results));
  }, []);

  return (
    <>
      {movies && (
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
                <Link
                  style={{ textDecoration: 'none' }}
                  to={`${url}movies/${movie.id}`}
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
