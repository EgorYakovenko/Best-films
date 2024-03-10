import { Link } from 'react-router-dom';

function MovieList({ results }) {
  // console.log(results);

  return (
    <ul>
      {results.map(result => (
        <li key={result.id}>
          {/* <p>{result.overview}</p> */}
          <Link to={`/movies/${result.id}`}>{result.title}</Link>
          {/* <p>{result.backdrop_path}</p> */}
        </li>
      ))}
    </ul>
  );
}

export default MovieList;

{
  /* <img src={results.poster_path} alt="" />; */
}

//
