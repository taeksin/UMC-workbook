import React, { useState } from "react";
import styled from "styled-components";

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 300px;
  height: 30px; 
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
`;

const FormButton = styled.button`
  width: 100%;
  height: 30px; 
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: red;
  margin: 5px 0;
`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // 간단한 email 유효성 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("올바른 이메일 주소를 입력하세요.");
      return;
    }

    // 비밀번호 최소 길이 검사
    if (password.length < 6) {
      setError("비밀번호는 최소 6자 이상이어야 합니다.");
      return;
    }

    // 여기에서 실제 로그인 처리를 수행하면 됩니다.
    console.log("Email:", email);
    console.log("Password:", password);

    // 로그인 성공 후 상태 초기화
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <LoginPageContainer>
      <LoginForm>
        <h2>Login</h2>
        <FormLabel>
          Email:
          <FormInput
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormLabel>
        <FormLabel>
          Password:
          <FormInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormLabel>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <FormButton type="button" onClick={handleLogin}>
          Login
        </FormButton>
      </LoginForm>
    </LoginPageContainer>
  );
};

export default LoginPage;
