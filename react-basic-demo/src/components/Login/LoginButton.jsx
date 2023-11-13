// LoginButton.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoginButtonStyle from "./LoginButton.style";

const WelcomeText = styled.span`
  color: white;
  font-size: 1vw;
  margin-left: 1vw;
`;

const LoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleButtonClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <Link to="/loginPage">
        <LoginButtonStyle onClick={handleButtonClick}>
          {isLoggedIn ? "로그아웃" : "로그인"}
        </LoginButtonStyle>
      </Link>
      <WelcomeText>
        {isLoggedIn ? "환영합니다!" : "로그인 해주세요!"}
      </WelcomeText>
    </div>
  );
};

export default LoginButton;
