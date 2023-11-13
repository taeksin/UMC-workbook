// NotFound.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/'); // 홈 화면으로 이동
  };
  
  return (
    <>
      <h2>NotFound</h2>
      <p onClick={goToHomePage} style={{ cursor: "pointer" }}>
        메인 페이지로 가기
      </p>
    </>
  );
}
