import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

function MovieList({ results }) {
  // console.log(results);
  const location = useLocation();

  return (
    <ul className={css.container}>
      {results.map(result => (
        <li className={css.nameList} key={result.id}>
          <Link
            className={css.nameFilm}
            to={`/movies/${result.id}`}
            state={{ from: location }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w154${result.poster_path}`}
              alt=""
            />
            {result.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;

{
  /* <img
src={`https://image.tmdb.org/t/p/w300${poster_path}`}
alt={filmId.title}
/> */
}
