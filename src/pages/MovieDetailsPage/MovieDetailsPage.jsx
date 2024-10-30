import { useState, useEffect, Suspense } from "react";

import {
  Link,
  useNavigate,
  useLocation,
  Outlet,
  useParams,
} from "react-router-dom";

import { getTrendingMoviesById } from "../../api/movies";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const [movie, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const movieInfo = await getTrendingMoviesById(movieId);
        setMovies(movieInfo);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const backUrl = location.state?.from || "/movies";

  const goBack = () => {
    navigate(backUrl);
  };

  return (
    <div>
      <button type="button" onClick={goBack}>
        Go Back
      </button>
      {error && error}
      {isLoading && <Loader />}

      <img
        src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}
        alt="movie"
      />
      <h2>{movie.title}</h2>
      <p>User Score: {movie.vote_average}</p>
      <br />
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <br />
      <h4>Genres</h4>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <br />
      <p>Additional information</p>
      <Link to={`cast`} state={{ from: backUrl }}>
        Cast
      </Link>
      <br />
      <Link to={`reviews`} state={{ from: backUrl }}>
        Reviews
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
