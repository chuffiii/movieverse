const MovieCard = ({ movie }) => {
    const baseUrl = "https://image.tmdb.org/t/p/original";
    const imageUrl = baseUrl + movie.poster_path;

    return (
        <div className="w-64 rounded-xl overflow-hidden shadow-lg">
            <img
                src={imageUrl}
                alt={movie.title}
                className="w-full h-96 object-cover"
            />

            <div className="p-3 bg-zinc-900 text-white">
                <h2>{movie.title}</h2>
                <p>⭐ {movie.vote_average}</p>
            </div>
        </div>
    );
};

export default MovieCard;