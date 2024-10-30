import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchMovieReviews, defaultImg } from "../../api/movies";
import Loader from "../Loader/Loader";
const MovieReviews = () => {
  const [movieReviews, setMoviesReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const movieReviews = await fetchMovieReviews(movieId);
        setMoviesReviews(movieReviews.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [movieId]);

  if (!movieReviews) {
    return null;
  }

  return (
    <div>
      {error && error}
      {isLoading && <Loader />}
      <ul>
        {movieReviews.length > 0 ? (
          movieReviews.map((reviews) => {
            return (
              <li key={reviews.id}>
                <p>{reviews.content}</p>
              </li>
            );
          })
        ) : (
          <h4>We don't have any reviews for this movie.</h4>
        )}
      </ul>
    </div>
  );
};

export default MovieReviews;
