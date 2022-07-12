import React, { useState, useEffect } from "react";
import styled from "styled-components";
import posterApi from "../api/posterApi";

const Img = styled.img`
  display: block;
  min-width: 230px;
  min-height: 345px;
`;

const PreImg = styled.div`
  display: block;
  min-width: 230px;
  min-height: 25px;
  padding: 160px 0;
  text-align: center;
  color: #666666;
`;

function Poster({ movieTitle }) {
  const [error, setError] = useState(null);
  const [poster, setPoster] = useState(null);

  useEffect(() => {
    fetch(posterApi({ movieTitle }))
      .then((res) => res.json())
      .then((poster) => {
        setPoster(poster);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error !== null) console.error(movieTitle, error);
  if (error) return <p>Error!</p>;

  return (
    <div>
      {poster && poster.results && poster.results.length > 0 ? (
        <Img
          alt="image"
          src={`https://image.tmdb.org/t/p/w200/${poster.results[0].poster_path}`}
        />
      ) : (
        <PreImg>이미지 준비중</PreImg>
      )}
    </div>
  );
}

export default Poster;
