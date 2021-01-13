import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { fetchSearchMovie } from '../../service/api_movie';

export default function FetchMovieRequest({ query }) {
  const [movies, setMovies] = useState([]);
  const { url } = useRouteMatch();
  console.log(query);

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
        <ul>
          {movies.map((movie, id) => (
            <li key={movie.id} id={id}>
              <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
