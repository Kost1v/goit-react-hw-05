import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchMovieCast, defaultImg } from "../../api/movies";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css"

const MovieCast = () => {
  const [movieCast, setMoviesCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const movieCast = await fetchMovieCast(movieId);
        setMoviesCast(movieCast.cast);
        
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
        window.scrollBy({
          top: 425,
          behavior: "smooth",
        });
      }
    };
    fetchMovies();
  }, [movieId]);

  if (!movieCast) {
    return null;
  }

  return (
    <div>
      <ul className={css.listCast}>
        {error && error}
        {isLoading && <Loader />}
        {movieCast !== null &&
          movieCast.map((cast) => {
            return (
              <li key={cast.id}>
                <img
                  src={
                    cast.profile_path
                      ? "https://image.tmdb.org/t/p/w500/" + cast.profile_path
                      : defaultImg
                  }
                  width={250}
                  alt={cast.original_name}
                />
                <h4>{cast.original_name}</h4>
                <p>{cast.character}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieCast;
