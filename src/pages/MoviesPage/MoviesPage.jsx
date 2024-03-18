import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/loader/Loader';
import MovieList from '../../components/MovieList/MovieList';
import SearchFilms from '../../components/SearchFilms/SearchFilms';
import { searchMovieByName } from '../../movieSearch-api';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [params] = useSearchParams();
  const movieFilter = params.get('query') ?? '';

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await searchMovieByName(movieFilter);
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [movieFilter]);

  const filteredMovies = useMemo(() => {
    return movies.filter(movie =>
      movie.title.toLowerCase().includes(movieFilter.toLowerCase())
    );
  }, [movieFilter, movies]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <SearchFilms />
      {filteredMovies.length > 0 && <MovieList results={filteredMovies} />}
      {!filteredMovies.length > 0 && movieFilter && (
        <p>Information is absent</p>
      )}
    </div>
  );
}

export default MoviesPage;
