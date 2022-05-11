import React, { useState, useEffect } from "react";
import * as Styled from "./styled";
import { useNavigate } from 'react-router-dom'
import {loginApi} from '../../api/Api'

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  let navigate = useNavigate();

  const [db, setData] = useState({
    data: [],
  });

  const [loading, setLoading] = useState(false);

  const idChange = (e) => {
    setId(e.target.value);
  };

  const pwChange = (e) => {
    setPw(e.target.value);
  };

  const onLogin = () => {
      loginApi(setData, setLoading, id, pw);
  };

  const onKeypress = (e) => {
    if (e.key === 'Enter') {
        loginApi(setData, setLoading, id, pw);
    }
  };

  useEffect(() => {
    console.log(db);
    if (loading === true) {
      if (db != null) {
        navigate('/home');
      }
    }
  })
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
