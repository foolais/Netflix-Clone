const key = "b7ad125ac5d4cbd60f51c80dabca7059";

const request = {
  popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
  topRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  trendingMovies: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`,
  upComingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  actionMovies: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=action&page=1`,
  romanceMovies: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=romance&page=1`,
  animationMovies: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=animation&page=1`,
};

export default request;
