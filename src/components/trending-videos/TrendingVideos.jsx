import { useState } from "react";
import MovieCard from "../cards/MovieCard";

const apikey = import.meta.env.VITE_API_KEY;

export default function TrendingVideos() {
    const [movies, setMovies] = useState([]);
    function getPopularMovies() {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`;
        const options = {
            method: 'GET',
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                setMovies(json.results);
                console.log(json);
            })
            .catch(err => console.error(err));
    }
    return (
        <>
            <h1>trending video</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {
                movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))
            }
            </div>
            <button className="border border-slate-500 bg-black text-white" onClick={getPopularMovies}>Fetch api</button>
        </>
    )
}