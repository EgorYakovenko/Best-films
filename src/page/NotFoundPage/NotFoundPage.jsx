import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <Link to="/">Home page</Link>
      <p>
        Якщо користувач зайшов за неіснуючим маршрутом, потрібно показувати
        компонент NotFoundPage, в якому є посилання Link на домашню сторінку.
      </p>
    </div>
  );
}

export default NotFoundPage;
