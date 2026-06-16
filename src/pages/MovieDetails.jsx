import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const apikey = import.meta.env.VITE_API_KEY;

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h2 className="text-2xl">Loading...</h2>
      </div>
    );
  }

  const {
    title,
    backdrop_path,
    release_date,
    vote_average,
    overview,
    genres,
    runtime,
    original_language,
  } = movie;

  const backdropUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  function formatRuntime(runtime) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img
          src={backdropUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* Movie Info on Banner */}
        <div className="absolute bottom-0 left-0 p-10">
          <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>

          <div className="flex flex-wrap gap-4 mt-4 text-gray-300">
            <span>{release_date?.slice(0, 4)}</span>

            <span className="text-yellow-400 font-semibold">
              ⭐ {vote_average?.toFixed(1)}
            </span>

            <span>{formatRuntime(runtime)}</span>

            <span>{original_language?.toUpperCase()}</span>
          </div>

          <div className="flex gap-3 mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition">
              ▶ Play
            </button>

            <button className="bg-gray-800 hover:bg-gray-700 px-6 py-2 rounded-lg transition">
              + Watchlist
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Side */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Overview
          </h2>

          <p className="text-gray-300 leading-relaxed">
            {overview}
          </p>

          <h2 className="text-2xl font-bold text-blue-400 mt-8 mb-4">
            Genres
          </h2>

          <div className="flex gap-3 flex-wrap">
            {genres?.map((genre) => (
              <span
                key={genre.id}
                className="bg-blue-900 px-4 py-2 rounded-full text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div>
          <div className="bg-zinc-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-blue-400 mb-4">
              Movie Info
            </h3>

            <div className="space-y-3 text-gray-300">
              <p>
                <span className="text-white font-semibold">
                  Release:
                </span>{" "}
                {release_date}
              </p>

              <p>
                <span className="text-white font-semibold">
                  Language:
                </span>{" "}
                {original_language?.toUpperCase()}
              </p>

              <p>
                <span className="text-white font-semibold">
                  Rating:
                </span>{" "}
                ⭐ {vote_average?.toFixed(1)}
              </p>

              <p>
                <span className="text-white font-semibold">
                  Runtime:
                </span>{" "}
                {formatRuntime(runtime)}
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6 shadow-lg mt-6">
            <h3 className="text-xl font-bold text-blue-400 mb-4">
              Actions
            </h3>

            <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg mb-3 transition">
              Play Trailer
            </button>

            <button className="w-full bg-gray-800 hover:bg-gray-700 py-3 rounded-lg transition">
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;