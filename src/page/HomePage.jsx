import { useEffect, useState } from 'react';
import MovieList from '../components/MoveList';
import { getFilms } from '../movieSearch-api';

function HomePage() {
  const [films, setFilms] = useState([]);
  // console.log(films);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getFilms();
        setFilms(data);
      } catch (error) {}
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Welcome</h1>
      <MovieList results={films} />
    </div>
  );
}

export default HomePage;
