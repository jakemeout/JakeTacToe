import styled from "styled-components";

const Nav = () => {
  return (
    <NavContainerStyle>
      <h1>Test</h1>
    </NavContainerStyle>
  );
};

const NavContainerStyle = styled.div`
  display: flex;
  justify-content: center;
`;

export default Nav;
