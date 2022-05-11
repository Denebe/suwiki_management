import React, { useState } from "react";
import * as Styled from "./style";
import { useNavigate } from "react-router-dom";
/*
최근 신고된 글(신고된 날짜, 강의이름, 교수이름, 작성한 글, 신고 당한 횟수, 담당자)
클릭 시 화면 이동

  "userIdx" : Long, //유저 인덱스 
    "evaluateIdx" : Long, //강의평가 게시글 인덱스(강의평가 게시글 신고일 때만)
    "examIdx" : Long, //강의평가 게시글 인덱스(강의평가 게시글 신고일 때만)
    "postType" : Boolean, //True는 강의평가, False는 시험정보
*/

const Home = () => {
  const db = [
    {
      id: "1",
      date: "2022",
      pro: "교수",
      book: "강좌",
      content: "내용",
      count: "신고당한 회수",
    },
    {
      id: "2",
      date: "2022",
      pro: "교수",
      book: "강좌",
      content: "내용",
      count: "3",
    }
      
  ];

  let navigate = useNavigate();

  return (
    <Styled.Container>
      <Styled.TextWrapper>
        <Styled.Button onClick={() => navigate("/notice")}>
          공지사항으로 가기
        </Styled.Button>
        <Styled.Text>최근 신고된 글</Styled.Text>
      </Styled.TextWrapper>

      <Styled.Wrapper>
        <Styled.FullWrapSub>
          {db.map((date) => (
            <Subject
              key={date.id}
              date={date.date}
              pro={date.pro}
              book={date.book}
              content={date.content}
              count={date.count}
            />
          ))}
        </Styled.FullWrapSub>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export const Subject = (props) => {
  let navigate = useNavigate();

  const onClick = () => {
    navigate("/report", { state: { props: props } });
  };

  return (
    <Styled.LectureWrapper onClick={() => onClick()}>
      <Styled.MarginTop>
        <Styled.TitleWrapper>
          <Styled.Title>{props.book}</Styled.Title>
          <Styled.Option>{props.count}</Styled.Option>
        </Styled.TitleWrapper>
        <Styled.TitleWrapper>
          <Styled.Professor>{props.pro}</Styled.Professor>
          <Styled.Option>{props.date}</Styled.Option>
        </Styled.TitleWrapper>
        <Styled.RateWrapper>
          <Styled.Rate>{props.content}</Styled.Rate>
        </Styled.RateWrapper>
      </Styled.MarginTop>
    </Styled.LectureWrapper>
  );
};

export default Home;
