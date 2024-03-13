import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
// import MovieList from '../components/MovieList';
import MovieList from '../components/MoveList';
import SearchFilms from '../components/SearchFilms';
import { searchMovieByName } from '../movieSearch-api/';

function MoviesPage() {
  const [movies, setMovies] = useState([]);

  const [params] = useSearchParams();
  const movieFilter = params.get('query') ?? '';

  useEffect(() => {
    async function getData() {
      try {
        const data = await searchMovieByName(movieFilter);
        setMovies(data);
      } catch (error) {}
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
      <SearchFilms />
      <MovieList results={filteredMovies} />
      <p>Сторінка пошуку кінофільмів за ключовим словом.</p>
    </div>
  );
}

export default MoviesPage;
