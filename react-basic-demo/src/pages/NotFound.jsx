import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/'); // 홈 화면으로 이동
  };

  return (
    <>
      <div>NotFound</div>
      <p onClick={goToHomePage} style={{ cursor: 'pointer' }}>
        메인 페이지로 가기
      </p>
    </>
  );
};

export default NotFound;
