import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, useParams, NavLink, useRouteMatch } from 'react-router-dom';
import * as API from '../../service/api_movie';
import defaultImg from '../../images/defaul_img.png';

import styles from './MovieDetails.module.css';

const CastView = lazy(() =>
  import(`../CastView/CastView` /* webpackChunkName: "cast-subview"*/)
);
const Reviews = lazy(() =>
  import(`../ReviewsView/Reviews` /* webpackChunkName: "cast-subview"*/)
);

export default function MovieDetailsView() {
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    API.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <h2>{movie.title}</h2>
      {movie && (
        <>
          {movie.poster_path && (
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImg
              }
              alt={movie.original_title}
            />
          )}
          <h3>User Score:</h3>
          <span>{movie.vote_average * 10}%</span>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          {movie.genres && (
            <ul>
              {movie.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          )}
          <hr />

          <nav>
            <NavLink
              to={`${url}/cast`}
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Cast
            </NavLink>
            <NavLink
              to={`${url}/reviews`}
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Reviews
            </NavLink>
          </nav>

          <hr />

          <Suspense>
            <Route exact path={`${path}/cast`}>
              <CastView movieId={movieId} />
            </Route>

            <Route exact path={`${path}/reviews`}>
              <Reviews movieId={movieId} />
            </Route>
          </Suspense>
        </>
      )}
    </>
  );
}
