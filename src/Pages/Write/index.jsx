import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styled";
import { noticeWriteApi } from "../../api/Api";

/*
공지사항 제목 내용
*/
const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [db, setData] = useState({
    data: [],
  });

  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const contentChange = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    noticeWriteApi(setData, setLoading, title, content);
  };

  useEffect(() => {
    console.log(db);
    if (loading === true) {
      if (db != null) {
        navigate('/notice');
      }
    }
  })

  return (
    <Styled.Container>
      <Styled.LoginWrapper>
        <Styled.Title>공지사항 글쓰기</Styled.Title>

        <Styled.Input
          type="text"
          name="title"
          onChange={titleChange}
          id="title"
          placeholder="제목"
        ></Styled.Input>

        <Styled.Content
          type="text"
          name="content"
          id="content"
          onChange={contentChange}
          placeholder="내용"
        ></Styled.Content>
        <Styled.Button onClick={onSubmit}>글쓰기</Styled.Button>
        <Styled.Button onClick={() => navigate("/notice")}>목록</Styled.Button>
      </Styled.LoginWrapper>
    </Styled.Container>
  );
};

export default Write;
