import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../movieSearch-api';
import { FcVoicePresentation } from 'react-icons/fc';
import wink from './defaultImg/wink.png';

function MoviesReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getReviews(movieId);
        setReviews(data);
      } catch (error) {}
    }
    getData();
  }, [movieId]);

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <img
            src={
              review.author_details.avatar_path
                ? `https://image.tmdb.org/t/p/w45${review.author_details.avatar_path}`
                : wink
            }
            width={45}
            height={45}
            alt=""
          />
          <p>Author:{review.author_details.username}</p>
          <p>Rating:{review.author_details.rating}</p>
          <p>Reviews: {review.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default MoviesReviews;

//    <ul>
//   <p>Author:{review.author}</p>
//   {reviews.map(review => (
//     <li key={review.id}>
//       <p>Author:{review.author}</p>
//       <p>Character:{review.character}</p>
//           <p>Popularity: {review.popularity}</p>
//     </li>
//   ))}
// </ul>;
