function posterApi(movieTitle) {
  const key = process.env.REACT_APP_POSTER_KEY;
  let year = new Date().getFullYear();

  let api = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=ko-KR&query=${movieTitle}&page=1&include_adult=false&year=${year}`;

  return api;
}

export default posterApi;
