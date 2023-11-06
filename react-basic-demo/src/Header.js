import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <nav className="Header-nav">
      <ul className="header-list">
        <li><img
		style={{ width: "154px", height: "20px" }}
		src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
		alt="로고"
/></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movie">영화</Link></li>
        <li><Link to="/tv">TV프로그램</Link></li>
        <li><Link to="/celebrity">인물</Link></li>
      </ul>
    </nav>
  );
}


export default Header;
