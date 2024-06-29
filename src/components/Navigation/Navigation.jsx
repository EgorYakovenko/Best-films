import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation() {
  return (
    <>
      <h1 className={css.logo}>КиноКодер</h1>
      <nav className={css.nav}>
        <NavLink className={css.item} to="/">
          Home
        </NavLink>
        <NavLink className={css.item} to="/movies">
          Movies
        </NavLink>
      </nav>
    </>
  );
}

export default Navigation;
