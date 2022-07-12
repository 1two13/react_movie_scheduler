import styled from "styled-components";
import { useState } from "react";

const Title = styled.h1`
  margin-bottom: 10px;
`;

const ChangeChart = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  color: #666666;
`;

const Span = styled.span`
  margin-right: 8px;
  &.changeColor {
    color: #ff4256;
    font-weight: 500;
  }
`;

const Hr = styled.hr`
  border: solid;
  margin: 3px 0px 7px 0px;
`;

const Input = styled.input`
  width: 30%;
  margin-bottom: 7px;
`;

function Top({ changeTab }) {
  const [color, setColor] = useState(true);
  const onClickHandler = (value) => {
    setColor(!color);
    changeTab(value);
  };

  return (
    <div>
      <Title>무비 스케쥴러</Title>
      <ChangeChart>
        <Span
          className={color ? "changeColor" : ""}
          onClick={() => onClickHandler("0")}
        >
          무비 차트
        </Span>
        <Span
          className={color ? "" : "changeColor"}
          onClick={() => onClickHandler("1")}
        >
          개봉 예정작
        </Span>
      </ChangeChart>
      <Hr />
      <Input type="text" />
    </div>
  );
}

export default Top;
