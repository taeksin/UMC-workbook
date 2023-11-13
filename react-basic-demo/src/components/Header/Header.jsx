// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../Login/LoginButton";
import HeaderStyle from "./Header.style";

const Header = () => {
  return (
    <HeaderStyle.HeaderContainer>
      <Link to="/">
        <img
          style={{ width: "130px", height: "2vw" }}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </Link>
      <Link to="/moviePage" style={{ textDecoration: "none" }}>
        <HeaderStyle.HeaderP>영화</HeaderStyle.HeaderP>
      </Link>
      <Link to="/tvPage" style={{ textDecoration: "none" }}>
        <HeaderStyle.HeaderP>TV 프로그램</HeaderStyle.HeaderP>
      </Link>
      <Link to="/celebirityPage" style={{ textDecoration: "none" }}>
        <HeaderStyle.HeaderP>인물</HeaderStyle.HeaderP>
      </Link>
      <LoginButton />
    </HeaderStyle.HeaderContainer>
  );
};

export default Header;