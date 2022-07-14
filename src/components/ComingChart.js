import React, { useState, useEffect } from "react";
import styled from "styled-components";
import comingChartApi from "../api/comingChartApi";
import Poster from "./Poster";

const MovieBox = styled.div`
  display: inline-block;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 26px 100px 0px 150px;
  max-width: 230px;
`;

const MovieInfo = styled.div`
  margin: 15px 0px 15px 0px;
  min-width: 200px;
  min-height: 45px;
  color: #666666;
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
    .filter((data) => !data.genreAlt.includes("성인물(에로)"))
    .filter((data) => data.prdtStatNm === "개봉예정")
    .sort((a, b) => a.openDt - b.openDt);

  // console.log(filteredList);

  return filteredList.map((movie) => {
    return (
      <MovieBox key={movie.movieCd}>
        <Poster movieTitle={movie.movieNm} />
        <MovieInfo>
          <MovieName>{movie.movieNm}</MovieName>
          <MovieDetail>
            {movie.openDt.slice(0, 4)}.{movie.openDt.slice(4, 6)}.
            {movie.openDt.slice(6, 8)} 개봉
          </MovieDetail>
        </MovieInfo>
      </MovieBox>
    );
  });
}

export default ComingChart;
