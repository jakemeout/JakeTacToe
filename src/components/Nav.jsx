import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavContainerStyle>
      <h1>JakeTacToe</h1>
      <h3>Welcome to the most fun version of Tic Tac Toe</h3>
      <h3>Refresh the page to reset 🔄 </h3>
    </NavContainerStyle>
  );
};

const NavContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  border-bottom: 1px solid black;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,.2);
  font-family: "Quicksand";
}
`;

export default Nav;
