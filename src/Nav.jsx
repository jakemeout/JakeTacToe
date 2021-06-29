import styled from "styled-components";

const Nav = () => {
  return (
    <NavContainerStyle>
      <h1>JakeTacToe</h1>
      <h4>Welcome to the most fun version of Tic Tac Toe</h4>
    </NavContainerStyle>
  );
};

const NavContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Nav;
