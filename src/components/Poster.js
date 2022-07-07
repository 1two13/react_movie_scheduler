import React, { useState, useEffect } from "react";
import posterApi from "../api/posterApi";

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
        <img
          alt="image"
          src={`https://image.tmdb.org/t/p/w200/${poster.results[0].poster_path}`}
        />
      ) : (
        "이미지 준비중"
      )}
    </div>
  );
}

export default Poster;
