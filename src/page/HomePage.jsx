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
      <h1>КиноКодер</h1>
      <h2>Программисты Ищут Фильмы, А Фильмы Ищут Ответы В Их Коде</h2>
      <MovieList results={films} />
    </div>
  );
}

export default HomePage;
