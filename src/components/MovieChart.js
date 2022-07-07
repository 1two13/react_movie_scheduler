import React, { useState, useEffect } from "react";
import movieChartApi from "../api/movieChartApi";
import Poster from "./Poster";

// 무비 차트를 클릭했을 때 보여지는 화면
// ../api/dayApi 사용
function MoiveChart() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(movieChartApi())
      .then((res) => res.json())
      .then((movie) => {
        setMovie(movie);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return movie.boxOfficeResult.dailyBoxOfficeList.map((movie) => {
    return (
      <div key={movie.movieCd} id="movieBox">
        <Poster movieTitle={movie.movieNm} />
        <div id="movieInfo">
          <div id="rank">No.{movie.rank}</div>
          <div id="movieName">{movie.movieNm}</div>
          <div id="movieDetail">{movie.openDt} 개봉</div>
          <div id="movieDetail">
            누적 관객수 {Math.round(movie.audiAcc / 10000)}만 명
          </div>
        </div>
      </div>
    );
  });
}

export default MoiveChart;
