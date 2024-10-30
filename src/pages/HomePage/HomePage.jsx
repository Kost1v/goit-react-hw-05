import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../api/movies";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [searchValue, setSearchValue] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      {error && error}
      {isLoading && <Loader />}
      <h2>Tranding Today</h2>
      {movies !== null && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
