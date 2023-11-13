// Header.style.jsx
import styled from "styled-components";

const HeaderContainer = styled.div`
  background: #083258;
  display: flex;
  align-items: center;
  gap: 2vw;
  padding-left: 15%;
`;

const HeaderP = styled.p`
  color: white;
  font-size: 1vw;
  font-weight: bold;
`;

const HeaderStyle = {
  HeaderContainer,
  HeaderP,
};

export default HeaderStyle;
