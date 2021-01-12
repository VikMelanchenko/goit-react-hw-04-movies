import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../service/api_movie';
import defaultImg from '../../images/defaul_img.png';

export default function MovieDetailsView() {
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
        </>
      )}
    </>
  );
}
