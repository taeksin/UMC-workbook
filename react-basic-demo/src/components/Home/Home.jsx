// Movies.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HomeContainer } from './Home.style';
import AdPage from '../components/AdPage';

export default function Home() {
  return (
    <HomeContainer>
      <AdPage/>
      <div>
        <h1>홈 페이지</h1>
        <Link to="/movies">영화</Link>
        <Link to="/tv">TV 프로그램</Link>
        <Link to="/celebrity">연예인</Link>
      </div>
    </HomeContainer>
  );
}
