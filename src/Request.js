const key = "68f4b59ea8f386525f82ae64b21dafcc";

const requests = {
  requestPopular:
    `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated:
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending:
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&language=en-US&page=1`,
  requestHorror:
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming:
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;