import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useLocation,
} from 'react-router-dom';
import { getFilmsById } from '../../movieSearch-api';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [filmId, setFilmId] = useState({});

  const location = useLocation();
  // console.log(location);
  const goBackLink = useRef(location.state?.from ?? '/');
  // console.log(movieId);
  // console.log(movieId);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getFilmsById(movieId);
        setFilmId(data);
      } catch (error) {}
    }
    getData();
  }, [movieId]);

  return (
    <div>
      <ul>
        <Link to={goBackLink.current}>Go back</Link>
        <li>
          <img
            src={`https://image.tmdb.org/t/p/w300${filmId.poster_path}`}
            alt={filmId.title}
          />
          <p>Movie title: {filmId.title} </p>
          <p>{filmId.tagline}</p>
          <p>Overview: {filmId.overview}</p>
          <p>Budget: {filmId.budget} $</p>
          <p>Popularity: {filmId.popularity}</p>
          <p>Status: {filmId.status}</p>
          <p>Release date: {filmId.release_date}</p>
          <p>Average rating: {filmId.vote_average}</p>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="cast">Actors</NavLink>
        </li>
        <li>
          <NavLink to="reviews">About views</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
export default MovieDetailsPage;
