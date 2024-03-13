import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../movieSearch-api';

function MovieCast() {
  const { movieId } = useParams();
  console.log(movieId);
  const [casts, setCasts] = useState([]);
  console.log(casts);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getCast(movieId);

        setCasts(data);
      } catch (error) {}
    }
    getData();
  }, [movieId]);

  return (
    <ul>
      {casts.map(cast => (
        <li key={cast.id}>
          <img
            src={`https://image.tmdb.org/t/p/w154${cast.profile_path}`}
            alt=""
          />
          <p>Name:{cast.name}</p>
          <p>Character:{cast.character}</p>
          <p>Popularity: {cast.popularity}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;
