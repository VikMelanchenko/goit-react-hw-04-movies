import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as API from '../../service/api_movie';

export default function HomeView() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.fetchTrendingMovies().then((request) => setMovies(request.results));
  }, []);

  return (
    <>
      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`${url}movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
