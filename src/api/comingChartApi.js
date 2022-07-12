function comingChartApi(curPage) {
  const key = process.env.REACT_APP_MOVIE_KEY;
  let year = new Date().getFullYear();

  let api = `https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&openStartDt=${year}&itemPerPage=100&curPage=${curPage}`;

  return api;
}

export default comingChartApi;
