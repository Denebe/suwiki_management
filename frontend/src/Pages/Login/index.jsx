import React, { useState } from "react";
import * as Styled from "./styled";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const idChange = (e) => {
    setId(e.target.value);
  };

  const pwChange = (e) => {
    setPw(e.target.value);
  };

  const onLogin = () => {
      alert(id+ pw)
  };

  const onKeypress = (e) => {
    if (e.key === 'Enter') {
        alert(id+pw)
    }
  };
  return (
    <Styled.Container>
      <Styled.LoginWrapper>
        <Styled.Title>로그인</Styled.Title>

        <Styled.Input
          type="id"
          name="id"
          id="id"
          onChange={idChange}
          placeholder="아이디"
        ></Styled.Input>

        <Styled.Input
          type="password"
          name="pw"
          id="pw"
          onChange={pwChange}
          placeholder="비밀번호"
          onKeyPress={onKeypress}
        ></Styled.Input>
        <Styled.Button
          background="#346cfd"
          type="submit"
          fullWidth
          variant="contained"
          onClick={onLogin}
        >
          로그인
        </Styled.Button>
      </Styled.LoginWrapper>
    </Styled.Container>
  );
};

export default Login;
