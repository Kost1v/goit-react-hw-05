import { Link, useLocation } from "react-router-dom";
import { defaultImg } from "../../api/movies";
import css from "./MovieList.module.css"


const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.moviesList}>
      {movies !== null &&
        movies.map((movie) => {
          return (
            <li key={movie.id} className={css.item}>
              <Link
                state={{ from: location }}
                to={`/movies/${movie.id}`}
                key={movie.id}
              >
                <p>{movie.title}</p>
                <img
                  src={
                    movie.backdrop_path
                      ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                      : defaultImg
                  }
                  alt={movie.title}
                  width={250}
                  className={css.img}
                />
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
