import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import Navigation from './components/Navigation';
import MoviesPage from './page/MoviesPage';
import MovieDetailsPage from './page/MovieDetailsPage';
import MovieCast from './components/MovieCast';
import MoviesReviews from './components/MovieReviews';
import NotFoundPage from './page/NotFoundPage';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="/movies/:movieId/cast" element={<MovieCast />} />
          <Route path="/movies/:movieId/reviews" element={<MoviesReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
