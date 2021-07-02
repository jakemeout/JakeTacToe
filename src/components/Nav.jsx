import styled from "styled-components";

const Nav = () => {
  return (
    <NavContainerStyle>
      <h1>JakeTacToe</h1>
      <p>Welcome to the most fun version of Tic Tac Toe</p>
      <p>Refresh the page to reset 🔄 </p>
    </NavContainerStyle>
  );
};

const NavContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid black;
`;

export default Nav;
