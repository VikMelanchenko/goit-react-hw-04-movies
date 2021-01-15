import { useState, useEffect, lazy, Suspense } from 'react';
import {
  Route,
  useParams,
  NavLink,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import * as API from '../../service/api_movie';
import defaultImg from '../../images/defaul_img.png';
import styles from '../../components/Navigation/Navigation.module.css';

const CastView = lazy(() =>
  import(`../CastView/CastView` /* webpackChunkName: "cast-subview"*/)
);
const Reviews = lazy(() =>
  import(`../ReviewsView/Reviews` /* webpackChunkName: "cast-subview"*/)
);

export default function MovieDetailsView() {
  const location = useLocation();
  const history = useHistory();
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    API.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from?.location ?? '/');
  };

  return (
    <>
      <hr />
      <button type="button" onClick={onGoBack}>
        Back
      </button>

      <hr />

      {movie && (
        <>
          <div className={styles.card_wrap}>
            {movie.poster_path && (
              <div>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : defaultImg
                  }
                  alt={movie.original_title}
                />
              </div>
            )}
            <div>
              <h2>{movie.title}</h2>
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
            </div>

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

            <Suspense>
              <Route exact path={`${path}/cast`}>
                <CastView movieId={movieId} />
              </Route>

              <Route exact path={`${path}/reviews`}>
                <Reviews movieId={movieId} />
              </Route>
            </Suspense>
          </div>
        </>
      )}
    </>
  );
}
