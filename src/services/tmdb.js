const apikey = import.meta.env.VITE_API_KEY;

export async function getPopularMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`
  );

  const data = await res.json();
  return data.results;
}

export async function searchMovies(query) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${query}`
  );

  const data = await res.json();
  return data.results;
}

export async function getMovieDetails(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=en-US`
  );

  return res.json();
}