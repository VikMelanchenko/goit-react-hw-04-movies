import { useState, useEffect, lazy, Suspense } from 'react';
import {
  Route,
  useParams,
  NavLink,
  useRouteMatch,
  useLocation,
  useHistory,
  Switch,
} from 'react-router-dom';
import * as API from '../../service/api_movie';
import defaultImg from '../../images/defaul_img.png';
import styles from './movie.module.css';

const Cast = lazy(() =>
  import(`../../components/Cast/Cast` /* webpackChunkName: "cast-subview"*/)
);
const Reviews = lazy(() =>
  import(
    `../../components/Reviews/Reviews` /* webpackChunkName: "cast-subview"*/
  )
);

export default function MovieDetailsView() {
  const location = useLocation();
  const history = useHistory();
  const { path, url } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    API.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from?.location ?? '/');
    // if (location && location.state && location.state.from) {
    //   history.push(location.state.from);
    //   return;
    // }
    // history.push('/');
  };

  return (
    <>
      {/* <hr /> */}
      <div className={styles.container}>
        <button type="button" onClick={onGoBack} className={styles.button_back}>
          Go Back
        </button>
      </div>

      <div className={styles.container}>
        {movie && (
          <>
            <ul>
              {movie.poster_path && (
                <li className={styles.card_item}>
                  <div className={styles.card_left}>
                    <img
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                          : defaultImg
                      }
                      alt={movie.original_title}
                      className={styles.card_img}
                    />
                  </div>

                  <div className={styles.card_right}>
                    <h2>{movie.title}</h2>
                    <h3>
                      <b>User Score: </b>{' '}
                      <span>{movie.vote_average * 10}%</span>
                    </h3>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    {movie.genres && (
                      <ul className={styles.gender_list}>
                        {movie.genres.map((genre) => (
                          <li key={genre.id}>{genre.name}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              )}

              <hr />

              <nav>
                <NavLink
                  to={{
                    pathname: `${url}/cast`,
                    state: { from: location.state ? location.state.from : '/' },
                  }}
                  className={styles.link}
                  activeClassName={styles.activeLink}
                >
                  Cast
                </NavLink>
                <NavLink
                  to={{
                    pathname: `${url}/reviews`,
                    state: { from: location.state ? location.state.from : '/' },
                  }}
                  className={styles.link}
                  activeClassName={styles.activeLink}
                >
                  Reviews
                </NavLink>
              </nav>

              <Suspense>
                <Switch>
                  <Route exact path={`${path}/cast`}>
                    <Cast movieId={movieId} />
                  </Route>

                  <Route exact path={`${path}/reviews`}>
                    <Reviews movieId={movieId} />
                  </Route>
                </Switch>
              </Suspense>
            </ul>
          </>
        )}
      </div>
    </>
  );
}
