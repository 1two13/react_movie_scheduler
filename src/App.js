import React, { useState } from "react";
import styled from "styled-components";
import Top from "./components/Top";
import MovieChart from "./components/MovieChart";
import ComingChart from "./components/ComingChart";

const Div = styled.div`
  margin: 0px 150px 0px 150px;
  top: 0;
`;

function App() {
  const [value, setValue] = useState("movieChart");
  const changeTabHandler = (value) => {
    // console.log(value);
    setValue(value);
  };

  return (
    <Div>
      <Top changeTab={changeTabHandler} />
      {value === "movieChart" ? <MovieChart /> : <ComingChart />}
    </Div>
  );
}

export default App;
