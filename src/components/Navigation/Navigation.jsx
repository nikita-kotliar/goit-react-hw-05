import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const makeLinkIsActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  return (
    <>
      <nav className={css.nav}>
        <NavLink to="/" className={makeLinkIsActive}>
          Home
        </NavLink>
        <NavLink to="/movies" className={makeLinkIsActive}>
          Movies
        </NavLink>
      </nav>
      <hr></hr>
    </>
  );
}
