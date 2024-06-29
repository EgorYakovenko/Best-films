import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useLocation,
} from 'react-router-dom';
import { getFilmsById } from '../../movieSearch-api';
import css from './MovieDetailsPage.module.css';

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
        <li className={css.container}>
          <img
            className={css.poster}
            src={`https://image.tmdb.org/t/p/w300${filmId.poster_path}`}
            alt={filmId.title}
          />
          <p className={css.text}>Movie title: {filmId.title} </p>
          <p className={css.text}>{filmId.tagline}</p>
          <p className={css.text}>Overview: {filmId.overview}</p>
          <p className={css.text}>Budget: {filmId.budget} $</p>
          <p className={css.text}>Popularity: {filmId.popularity}</p>
          <p className={css.text}>Status: {filmId.status}</p>
          <p className={css.text}>Release date: {filmId.release_date}</p>
          <p className={css.text}>Average rating: {filmId.vote_average}</p>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink className={css.textLink} to="cast">
            Actors
          </NavLink>
        </li>
        <li>
          <NavLink className={css.textLink} to="reviews">
            About views
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
export default MovieDetailsPage;
