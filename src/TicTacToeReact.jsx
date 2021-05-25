import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import angryDad from "./assets/images/AngryDad.png";
import jakeO from "./assets/images/jakeO.png";
import "./TicTacToe.css";
// Square
// value (prop) which represents the players value or name of playerr (x or o)
// onclick or handleClick (prop) function which saves the player choice to the board

//Board
// create state for the board like null values and the default or current player
// boardState
// turnState
// handleClick function that gets passed to the Square component
//edit board state whenever something is clicked
// if the index of the board is filled, return
// copy of our board state and mutate copy to add x or o
// calculate next turn
// set state of the board
// set the state of the turn

// function that calculates the winner
// create a set of winning combinations

const TicTacToeReact = () => {
  const Square = ({ handleClick, value }) => {
    return (
      <button className="square" onClick={handleClick}>
        {value}
      </button>
    );
  };

  const Board = () => {
    const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [xImage, setXImage] = useState(
      <img
        src={angryDad}
        alt="xDefaultLogo"
        style={{ height: "200px", width: "200px" }}
      />
    );
    const [oImage, setOImage] = useState(
      <img
        src={jakeO}
        alt="oDefaultLogo"
        style={{ height: "200px", width: "200px" }}
      />
    );

    const handleClick = (index) => {
      const squares = [...boardSquares];

      if (calculateWinner(boardSquares) || squares[index]) return;

      squares[index] = xIsNext ? xImage : oImage;
      // mutate the board with either X or O
      console.log(squares);
      setBoardSquares(squares);
      //set the state
      setXIsNext(!xIsNext);
      //set state of turn to next person
    };
    const onDrop = (picture) => {
      // console.log(picture[0])
      setXImage(picture)
    };

    const renderSquare = (index) => {
      return (
        <Square
          value={boardSquares[index]}
          handleClick={() => handleClick(index)}
        />
      );
    };

    const winner = calculateWinner(boardSquares);
    const nextPlayerStatus = xIsNext ? xImage : oImage;

    const status = winner ? winner : nextPlayerStatus;
    const statusLabel = winner ? `Winner is:` : `Next Player:`;

    return (
      <div>
        <div className="playerImageContainer">
          <div>
            <h1>Update Player 1(X)</h1>
            <ImageUploader
              withIcon={true}
              singleImage={true}
              buttonText="Choose images"
              onChange={onDrop}
              imgExtension={[".jpg", ".gif", ".png", ".gif"]}
              maxFileSize={5242880}
              withPreview={true}
            />
          </div>
          <div>
            <h1>Update Player 2(O)</h1>
            <ImageUploader
              withIcon={true}
              buttonText="Choose images"
              // onChange={}
              imgExtension={[".jpg", ".gif", ".png", ".gif"]}
              maxFileSize={5242880}
              singleImage={true}
              withPreview={true}
            />
          </div>
        </div>
        <div className="status">
          {statusLabel}
          {status}
        </div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
  };

  const calculateWinner = (squares) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 6],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const possibleWinner of winningLines) {
      const [a, b, c] = possibleWinner;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  return <Board />;
};

export default TicTacToeReact;
