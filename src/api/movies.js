import axios from "axios";

const moviesInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    language: "en-US",
  },
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2I4NzI3ODUxYWU3ZWUzYjI0OTgyYTkwMDk4YmNiZiIsIm5iZiI6MTcyOTk1ODI0My4wNTM2ODQsInN1YiI6IjY3MWQxMDQ3MzRjMGZhYmQ2ODFjYmFhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gkYjlH0NamjDDBGLeOe7ODq62grNf5m8k_zIWPHAR-4",
  },
});

export const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

export const getTrendingMovies = async (params) => {
  const { data } = await moviesInstance.get(
    "/trending/movie/day",
    params
  );
  return data;
};

export const getTrendingMoviesById = async (movieId) => {
  const { data } = await moviesInstance.get(`/movie/${movieId}`);  
  return data
}

export const fetchMovieCast = async (movieId) => {
  const { data } = await moviesInstance.get(`/movie/${movieId}/credits`);
  return data;
};

export const fetchMovieReviews = async (movieId) => {
  const { data } = await moviesInstance.get(`/movie/${movieId}/reviews`);
  return data;
};

export const searchMovie = async (q) => {
  const { data } = await moviesInstance.get(
    `/search/movie?query=${q}`
  );
  return data;
};