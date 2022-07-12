import React, { useState, useEffect } from "react";
import styled from "styled-components";
import movieChartApi from "../api/movieChartApi";
import Poster from "./Poster";

const MovieBox = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0px 140px 0px 150px;
`;

const MovieInfo = styled.div`
  margin: 15px 0px 15px 0px;
  min-width: 200px;
  min-height: 400px;
  color: #666666;
`;

const Rank = styled.div`
  margin-right: 20px;
  font-size: 22px;
  font-weight: bolder;
  color: #ff4256;
`;

const MovieName = styled.div`
  margin: 10px 0px 7px 0px;
  font-size: 15px;
  font-weight: bold;
  color: #333333;
`;

const MovieDetail = styled.div`
  margin-bottom: 3px;
  font-size: smaller;
`;

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
      <MovieBox key={movie.movieCd}>
        <MovieInfo>
          <Rank>No.{movie.rank}</Rank>
          <Poster movieTitle={movie.movieNm} />
          <MovieName>{movie.movieNm}</MovieName>
          <MovieDetail>{movie.openDt} 개봉</MovieDetail>
          <MovieDetail>
            누적 관객수 {Math.round(movie.audiAcc / 10000)}만 명
          </MovieDetail>
        </MovieInfo>
      </MovieBox>
    );
  });
}

export default MoiveChart;
