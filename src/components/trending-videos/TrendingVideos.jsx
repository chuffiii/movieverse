import { useEffect, useState } from "react";
import MovieCard from "../cards/MovieCard";

import {
  getPopularMovies,
  searchMovies,
} from "../../services/tmdb";

export default function TrendingVideos({
  searchQuery,
}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        if (searchQuery.trim()) {
          const results =
            await searchMovies(searchQuery);

          setMovies(results);
        } else {
          const results =
            await getPopularMovies();

          setMovies(results);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, [searchQuery]);

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-white">
        {searchQuery
          ? `Results for "${searchQuery}"`
          : "Trending Movies"}
      </h1>

      <div className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        gap-5
      ">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </>
  );
}