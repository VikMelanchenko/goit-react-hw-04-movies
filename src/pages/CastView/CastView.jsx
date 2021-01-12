import { useState, useEffect } from 'react';
import { fetchMovieCredits } from '../../service/api_movie';
import defaultImg from '../../images/defaul_img.png';

export default function CastView({ movieId }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then((request) => setCharacters(request.cast));
  }, [movieId]);

  return (
    <>
      {characters && (
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              {character.profile_path && (
                <img
                  src={
                    character.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${character.profile_path}`
                      : defaultImg
                  }
                  alt={character.original_name}
                  width={185}
                />
              )}
              <h3>{character.name}</h3>
              <p>Character: {character.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
