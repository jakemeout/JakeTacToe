import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import angryDad from "../assets/images/AngryDad.png";
import jakeO from "../assets/images/jakeO.png";
import styled from "styled-components";

const TicTacToeReact = () => {
  const Square = ({ handleClick, value }) => {
    return <SquareStyle onClick={handleClick}>{value}</SquareStyle>;
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
      setBoardSquares(squares);
      setXIsNext(!xIsNext);
    };

    const onDropPlayerOne = (picture) => {
      let reader = new FileReader();
      reader.readAsDataURL(picture[0]);
      reader.onload = (e) => {
        setXImage(
          <img
            src={e.target.result}
            alt="xDefaultLogo"
            style={SquareImageStyle}
          />
        );
      };
    };

    const onDropPlayerTwo = (picture) => {
      let reader = new FileReader();
      if (picture[0]) reader.readAsDataURL(picture[0]);

      reader.onload = (e) => {
        setOImage(
          <img
            src={e.target.result}
            alt="xDefaultLogo"
            style={SquareImageStyle}
          />
        );
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
    const status =
      winner && winner === "LOL you tied" ? winner : nextPlayerStatus;
    const statusLabel = winner
      ? `You won!! Rub it in their face!`
      : `Your Turn`;

    return (
      <div>
        <PlayerContainerStyle>
          <ImageUploadStyle>
            <ImportStyles>
              <h1>Player 1</h1>
              <p>
                <i>Upload your avatar</i>
              </p>
              <ImageUploader
                withIcon={true}
                singleImage={true}
                buttonText="Choose images"
                onChange={onDropPlayerOne}
                imgExtension={[".jpg", ".gif", ".jpeg"]}
                maxFileSize={6042880}
                singleImage={true}
                withPreview={true}
                label="Max Size 5mb | accepts: jpg gif jpeg"
                buttonText="Upload an image or gif"
                errorClass="Sorry please try again"
              />
            </ImportStyles>
            <ImportStyles>
              <h1>Player 2</h1>
              <p>
                <i>Upload your avatar</i>
              </p>
              <ImageUploader
                withIcon={true}
                buttonText="Choose images"
                onChange={onDropPlayerTwo}
                imgExtension={[".jpg", ".gif"]}
                maxFileSize={5242880}
                singleImage={true}
                withPreview={true}
                label="Max Size 5mb Accepts: jpg gif jpeg"
                buttonText="Upload an image or gif"
                errorClass="Sorry please try again"
              
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

  // [
  //   [0,1,2],
  //   [3,4,5],
  //   [6,7,8]
  // ]

  const calculateWinner = (squares) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const possibleWinner of winningLines) {
      const [a, b, c] = possibleWinner;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      } else if (!squares.includes(null)) {
        return "LOL you tied";
      }
    }
    return null;
  };
  return <Board />;
};

const SquareImageStyle = {
  height: "150px",
  width: "150px",
};

const SquareStyle = styled.div`
  border: 1px solid black;
  height: 150px;
  width: 150px;
`;

const ImportStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 45%;
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

const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default TicTacToeReact;
