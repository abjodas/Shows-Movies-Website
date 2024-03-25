export const API_BEARER =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2NhY2Q1YTk4YTMxYTEwNTVkMjhiZjkyYzhhYzFkZCIsInN1YiI6IjYyODNmYWU0ZmQxNDBiMzAwZWM1NTgzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4iFNm5t58AMQ2dsoeuQ7eeJjSRIgtb4elXtT-z7Bx5w";
export const API_KEY = "f3cacd5a98a31a1055d28bf92c8ac1dd";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated&api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
