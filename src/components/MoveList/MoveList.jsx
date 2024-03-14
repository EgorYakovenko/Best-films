import { Link, useLocation } from 'react-router-dom';

function MovieList({ results }) {
  // console.log(results);
  const location = useLocation();

  return (
    <ul>
      {results.map(result => (
        <li key={result.id}>
          <Link to={`/movies/${result.id}`} state={{ from: location }}>
            {result.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
