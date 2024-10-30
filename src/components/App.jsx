import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import Navigation from "./Navigation/Navigation";
// import HomePage from "../pages/HomePage/HomePage";
// import MoviePage from "../pages/MoviesPage/MoviesPage";
// import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
// import MovieCast from "./MovieCast/MovieCast";
// import MovieReviews from "./MovieReviews/MovieReviews";
// import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const Navigation = lazy(() => import("./Navigation/Navigation"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviePage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviePage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
