import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovie } from "../../api/movies";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const onSearch = (event) => {
    event.preventDefault();
    const queryTerm = event.target.elements.search.value;
    setSearchParams({ query: queryTerm });
  };

  const searchQuery = searchParams.get("query");

  useEffect(() => {
    const searchMovies = async () => {
      if (searchQuery === null) {
        return;
      }

      try {
        setIsLoading(true);
        const data = await searchMovie(searchQuery);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    searchMovies();
  }, [searchQuery]);

  return (
    <div>
      <form onSubmit={onSearch}>
        <label>
          <input
            type="text"
            name="search"
            placeholder="Search movie"
            style={{ padding: 5 }}
          />
        </label>

        <button type="submit">Search film</button>
      </form>
      {error && error}
      {isLoading && <Loader />}
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
