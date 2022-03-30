// import "./styles.css";
import { useState } from "react";
import styled from "styled-components";
import React from "react";
import { useDispatch } from "react-redux";

const GridSquareContainer = styled.div`
  background-color: ${({ isSelect }) =>
    isSelect ? "var(--red-color)" : "var(--empty--cell-color)"};
  border-style: solid;
  border-color: var(--cell--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--tile-size);
  height: var(--tile-size);
  border-width: var(--border-width);
  border-radius: 5px;
  h5 {
    font-size: 30px;
    font-weight: 100;
  }
  cursor: pointer;
`;
export default function GridSquare({ letter }) {
  const [isSelect, setIsSelected] = useState(false);
  const handleClick = () => {
    setIsSelected(!isSelect);
    // dispatch(
    //   option.istheAnswer === "yes"
    //     ? { type: "ADD_SCORE" }
    //     : { type: "CHANGE_QUESTION" }
    // );
    dispatch({ type: "SET_WORD", payload: letter });
  };

  const dispatch = useDispatch();

  return (
    <GridSquareContainer isSelect={isSelect} onClick={handleClick}>
      <h5>{letter}</h5>
    </GridSquareContainer>
  );
}
