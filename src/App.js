import React, { useState } from "react";
import Top from "./components/Top";
import MovieChart from "./components/MovieChart";
import ComingChart from "./components/ComingChart";

function App() {
  const [value, setValue] = useState("0");
  const changeTabHandler = (value) => {
    // console.log(value);
    setValue(value);
  };

  return (
    <div>
      <Top changeTab={changeTabHandler} />
      {value === "0" ? <MovieChart /> : <ComingChart />}
    </div>
  );
}

export default App;
