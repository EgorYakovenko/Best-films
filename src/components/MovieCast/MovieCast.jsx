import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../movieSearch-api';
import Loader from '../loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function MovieCast() {
  const { movieId } = useParams();
  // console.log(movieId);
  const [casts, setCasts] = useState([]);
  // console.log(casts);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getCast(movieId);
        setCasts(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [movieId]);

  return (
    <ul>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
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
