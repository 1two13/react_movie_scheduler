import React, { useState, useEffect } from "react";
import comingChartApi from "../api/comingChartApi";
import Poster from "./Poster";

// 개봉예정작을 클릭했을 때 보여지는 화면
function ComingChart() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [curPage, setCurPage] = useState(1);
  const [movie, setMovie] = useState(null);
  const [accList, setAccList] = useState([]);
  let filteredList;

  useEffect(() => {
    fetch(comingChartApi(curPage))
      .then((res) => res.json())
      .then((movie) => {
        setAccList((accList) => [
          ...accList,
          ...movie.movieListResult.movieList,
        ]);
        setMovie(movie);
        setLoading(false);
        if (movie.movieListResult.totCnt / 100 >= curPage) {
          setCurPage((curPage) => curPage + 1);
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [curPage]);

  // console.log(movie);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  filteredList = accList
    .sort((a, b) => a.openDt - b.openDt)
    .filter((data) => !data.genreAlt.includes("성인물(에로)"))
    .filter((data) => data.prdtStatNm === "개봉예정");

  // console.log(filteredList);

  return filteredList.map((movie) => {
    return (
      <div key={movie.movieCd} id="movieBox">
        <Poster movieTitle={movie.movieNm} />
        <div id="movieInfo">
          <div id="movieInfo${movie.movieNm}"></div>
          <div id="movieName">{movie.movieNm}</div>
          <div id="movieDetail">
            {movie.openDt.slice(0, 4)}.{movie.openDt.slice(4, 6)}.
            {movie.openDt.slice(6, 8)} 개봉
          </div>
        </div>
      </div>
    );
  });
}

export default ComingChart;
