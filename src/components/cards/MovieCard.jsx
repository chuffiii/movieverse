import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

    return (
      <div className="
        bg-zinc-900
        rounded-xl
        overflow-hidden
        shadow-lg
        hover:scale-105
        hover:shadow-blue-500/20
        transition-all
        duration-300
      ">
      {/* Image */}
      <img
        src={imageUrl}
        alt={movie.title}
        className="w-full h-80 object-cover object-center"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="font-semibold text-lg truncate">
          {movie.title}
        </h2>

        <p className="text-yellow-400 mt-1">
          ⭐ {movie.vote_average.toFixed(1)}
        </p>

        <Link to={`/movieverse/${movie.id}`}>
          <button className="
            mt-4
            w-full
            bg-blue-600
            hover:bg-blue-700
            py-2
            rounded-lg
            transition
          ">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;