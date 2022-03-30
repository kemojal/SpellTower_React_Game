import { useState } from "react";

import { useSelector } from "react-redux";

import "./styles.css";
import GridBoard from "./GridBoard";
export default function App() {
  const { currentWord } = useSelector((state) => state);
  const [spelledWord, setSpelledWord] = useState(
    currentWord ? currentWord : ""
  );
  console.log("current word ", spelledWord);
  return (
    <div className="App">
      <h1>{spelledWord}</h1>
      <GridBoard />
    </div>
  );
}
