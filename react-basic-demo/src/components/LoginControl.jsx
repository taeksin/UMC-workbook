import React, { useState } from "react";
import styled from "styled-components";

function LoginControl() {
  const [loginClick, setLoginClick] = useState(false);

  const LoginButtonStyle = styled.button`
    background-color: white;
    margin-right: 20px;
    font-size: 0.8rem;
    border: 0.2vw solid #2a2a3a;
    border-radius: 1.5vw;
    background: #white;
    color: #484a64;
    outline: none;
    padding: 0.2vw 1vw 0.2vw 1vw;
  `;
  const WelcomeText = styled.span`
    color: white;
    font-size: 1vw;
    margin-left: 1vw;
    margin-right: 100px;
  `;

  const handleLoginClick = () => {
    setLoginClick(true);
  };

  const handleLogoutClick = () => {
    setLoginClick(false);
  };

  return (
    <div>
      {loginClick ? (
        <span>
          <LoginButtonStyle onClick={handleLogoutClick}>
            로그아웃
          </LoginButtonStyle>
          <WelcomeText>환영합니다!</WelcomeText>
        </span>
      ) : (
        <span>
          <LoginButtonStyle onClick={handleLoginClick}>로그인</LoginButtonStyle>
          <WelcomeText>로그인 해주세요!</WelcomeText>
        </span>
      )}
    </div>
  );
}

export default LoginControl;
