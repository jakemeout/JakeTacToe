import React, { useState } from "react";

//Square
// value (prop) representing X or O
// handleClick (prop) to register the event and set it to the board

// Board
// state holding the board (rows and columns) in an array
// state containing the current player
// handleClick component logic passed to square
// renderSquares which renders the columns
// function that calculates the winner

const TicTacToe = () => {
  const Square = ({ handleClick, value }) => {
    return <button onClick={handleClick}>{value}</button>;
  };

  const Board = () => {
    const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
    const [xPlayer, setXPlayer] = useState(true);

    const handleClick = (idx) => {
      const squares = [...boardSquares];
      if (calculateWinner(squares) || squares[idx]) return;
      //if the player is true it is 'X' if its false 'O'
      squares[idx] = xPlayer ? "X" : "O";
      console.log(squares);
      setBoardSquares(squares);
      setXPlayer(!xPlayer);
    };

    const renderSquares = (index) => {
      return <Square value={xPlayer} handleClick={() => handleClick(index)} />;
    };
    const calculateWinner = (squares) =>{
        const winningLines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [2,5,8],
            [1,4,7]
        ]

        for(const possibleWinners of boardSquares){
            const [a,b,c] = winningLines;
            if(boardSquares[a])
            return squares[a]
        }
    }

    return (
      <div>
        <div className="board-row">
          {renderSquares(0)}
          {renderSquares(1)}
          {renderSquares(2)}
        </div>
        <div className="board-row">
          {renderSquares(3)}
          {renderSquares(4)}
          {renderSquares(5)}
        </div>
        <div className="board-row">
          {renderSquares(6)}
          {renderSquares(7)}
          {renderSquares(8)}
        </div>
      </div>
    );
  };

  const calculate

  return (
    <div className="board">
      <Board />
    </div>
  );
};

export default TicTacToe;
