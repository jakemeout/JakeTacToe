import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import angryDad from "./assets/images/AngryDad.png";
import jakeO from "./assets/images/jakeO.png";
import styled from "styled-components";

// Square
// value (prop) which represents the players value or name of playerr (x or o)
// onclick or handleClick (prop) function which saves the player choice to the board

//Board
// create state for the board like null values and te default or current player
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
    return <SquareStyle onClick={handleClick}>{value}</SquareStyle>;
  };

  const [pictures, setPictures] = useState([]);

  const onDrop = (picture) => {
    setPictures([...pictures, picture]);
  };
  const Board = () => {
    const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [xImage, setXImage] = useState(
      <img src={angryDad} alt="xDefaultLogo" style={SquareImageStyle} />
    );
    const [oImage, setOImage] = useState(
      <img src={jakeO} alt="oDefaultLogo" style={SquareImageStyle} />
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
      // setXImage(picture[0]);
      let reader = new FileReader();
      reader.readAsDataURL(picture[0]);

      reader.onload = (e) => {
        console.log(e.target.result);
      };
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
    const statusLabel = winner ? `Winner is:` : `Next Player`;

    return (
      <div>
        <PlayerContainerStyle>
          <ImageUploadStyle>
            <ImportStyles>
              <h1>Player 1</h1>
              <ImageUploader
                withIcon={true}
                // fileContainerStyle={fileContainer}
                singleImage={true}
                buttonText="Choose images"
                onChange={onDrop}
                imgExtension={[".jpg", ".gif", ".jpeg"]}
                maxFileSize={5242880}
                // withPreview={true}
              />
            </ImportStyles>
            <ImportStyles>
              <h1>Player 2</h1>
              <ImageUploader
                withIcon={true}
                buttonText="Choose images"
                // fileContainerStyle={fileContainer}
                imgExtension={[".jpg", ".gif"]}
                maxFileSize={5242880}
                singleImage={true}
                withPreview={true}
              />
            </ImportStyles>
          </ImageUploadStyle>
          <StatusStyle>{statusLabel}</StatusStyle>
          <StatusStyle>{status}</StatusStyle>
          <BoardContainer>
            <BoardStyle>
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            </BoardStyle>
          </BoardContainer>
        </PlayerContainerStyle>
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

const SquareImageStyle = {
  height: "200px",
  width: "200px",
};

const SquareStyle = styled.div`
  border: 1px solid black;
  height: 200px;
  width: 200px;
`;

const ImportStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StatusStyle = styled.div`
  font-size: 50px;
  align-self: center;
`;

const PlayerContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 20%;
  padding-left: 20%;
  margin-top: 5%;
`;
const ImageUploadStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const BoardStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0fr);
`;

const BoardContainer = styled.div``;

export default TicTacToeReact;
