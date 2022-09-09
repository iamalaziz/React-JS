import React, { useState } from "react";
// import Cross from "../assets/cross.png";
import Circle from "../assets/circle.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import Cross from './Cross';

const LineHorizontal = styled(motion.div)`
  height: 10px;
  width: 0px;
  border-radius: 5px;
  background-color: #fafafa;
  position: absolute;
  transform: translate(0, -50%);
  transform-origin: center;
  margin-left: 5px;

`;
const LineVertical = styled(motion.div)`
  transform-origin: left center;
  transform: translate(-50%, 0%);
  margin-top: 5px;
  position: absolute;
  height: 0px;
  width: 10px;
  border-radius: 5px;
  background-color: #fafafa;

`;
const Board = () => {
  const [turn, setTurn] = useState("x");
  const [values, setValues] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState("");
  const checkForWinners = (cells) => {
    let combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let combo in combos) {
      const [a, b, c] = combos[combo];
      if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
        setWinner(cells[a]);
      }
    }
  };
  const handleClick = (num) => {
    if (values[num] !== "" || winner) {
      return;
    }
    let cells = [...values];
    if (winner) {
    } else {
      setTurn((curr) => (curr === "x" ? "o" : "x"));
      turn === "x" ? (cells[num] = turn) : (cells[num] = turn);
      setValues(cells);
      checkForWinners(cells);
    }
  };
  const playAgain = () => {
    setWinner("");
    setValues(Array(9).fill(""));
    setTurn("x");
  };
  const Cell = ({ num }) => {
    return (
      <td className="cell" onClick={() => handleClick(num)}>
        <img
          src={
            values[num] === "x"
              ? Cross
              : values[num] === "o"
              ? Circle
              : values[num]
          }
          width="80"

        />
      </td>
    );
  };

  return (
    <React.Fragment>
      {winner ? <p>Game Over</p> : <p>Current turn for: {turn}</p>}

      <table>
        <tbody>
          <tr>
            <Cell num={0} />
            <LineVertical
              initial={{ height: 0 }}
              animate={{ height: "300px" }}
              transition={{ duration: 0.5, delay: 0.25 }}
            />
            <Cell num={1} />
            <LineVertical
              initial={{ height: 0 }}
              animate={{ height: "300px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
            <Cell num={2} />
          </tr>
          <LineHorizontal
            initial={{ width: 0 }}
            animate={{ width: "300px" }}
            transition={{ duration: 0.5, delay: 0.75 }}
          />
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <LineHorizontal
            initial={{ width: 0 }}
            animate={{ width: "300px" }}
            transition={{ duration: 0.5, delay: 1 }}
          />
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      {winner && (
        <React.Fragment>
          <p>The winner is {winner}</p>
          <button onClick={playAgain}>Play again</button>
        </React.Fragment>
      )}
      <Cross />
    </React.Fragment>
  );
};
export default Board;
