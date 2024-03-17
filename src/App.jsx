import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
// import HomePage from './page/HomePage/HomePage';
import Navigation from './components/Navigation/Navigation';
// import MoviesPage from './page/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MovieCast from './components/MovieCast/MovieCast';
import MoviesReviews from './components/MovieReviews/MovieReviews';
// import NotFoundPage from './page/NotFoundPage/NotFoundPage';
import Loader from './components/loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader></Loader>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<MovieCast />} />
            <Route
              path="/movies/:movieId/reviews"
              element={<MoviesReviews />}
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
