import { useState } from "react";

import styled from "styled-components";
import GridSquare from "./GridSquare";
const GridBoardContainer = styled.div`
  border: 1px solid var(--cell--border-color);
  display: grid;
  grid-template-columns: repeat(var(--cols), var(--tile-size));
  grid-gap: 0;
  margin-top: 15px;
  /* align-self: flex-start; */
  /* align-self: center; */
`;
export default function GridBoard() {
  const [gridData, setGridData] = useState();

  // generates an array of 18 rows, each containing 10 GridSquares.
  const grid = [];
  for (let row = 0; row < 12; row++) {
    grid.push([]);
    for (let col = 0; col < 10; col++) {
      grid[row].push(<GridSquare key={`${col}${row}`} letter="" />);
    }
  }
  grid[1][0] = <GridSquare key={`10`} letter="H" />;
  grid[1][1] = <GridSquare key={`11`} letter="A" />;
  grid[1][2] = <GridSquare key={`12`} letter="P" />;
  grid[1][3] = <GridSquare key={`13`} letter="P" />;
  grid[1][4] = <GridSquare key={`14`} letter="Y" />;
  // console.log("board = 1", grid[1][0]);
  return <GridBoardContainer>{grid}</GridBoardContainer>;
}
