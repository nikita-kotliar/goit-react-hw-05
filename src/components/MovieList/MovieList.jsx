import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ results }) {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {results.map(({ id, title }) => (
        <li key={id}>
          <Link
            className={css.text}
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
