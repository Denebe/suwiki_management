import React, {useState} from "react";
import {useLocation} from 'react-router';
import {useNavigate} from 'react-router-dom';
import * as Styled from "./styled";
/*
공지사항 제목 내용
*/
const Update = () => {
 

    let location = useLocation();
    let navigate = useNavigate();

    const { props } = location.state;

    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);
  
    const titleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const contentChange = (e) => {
      setContent(e.target.value);
    };
  
    const onSubmit = () => {
        alert(title+ content)
    };
  
    const onKeypress = (e) => {
      if (e.key === 'Enter') {
          alert(title+content)
      }
    };
    
  return (
    <Styled.Container>
      <Styled.LoginWrapper>
        <Styled.Title>공지사항 글쓰기</Styled.Title>

        <Styled.Input
          type="text"
          name="title"
          value={title}
          onChange={titleChange}
          id="title"
          placeholder="제목"
        ></Styled.Input>

        <Styled.Content
          type="text"
          name="content"
          id="content"
          value={content}
          onChange={contentChange}
          placeholder="내용"
          onKeyPress={onKeypress}
        ></Styled.Content>
        <Styled.Button onClick={onSubmit}>
            글쓰기
        </Styled.Button>
        <Styled.Button onClick={() => navigate('/notice')}>
            목록
        </Styled.Button>
      </Styled.LoginWrapper>
    </Styled.Container>
  );
};

export default Update;
