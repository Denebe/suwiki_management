import React, { useState } from "react";
import * as Styled from "./style";

/*
최근 신고된 글(신고된 날짜, 강의이름, 교수이름, 작성한 글, 신고 당한 횟수, 담당자)
클릭 시 화면 이동

  "userIdx" : Long, //유저 인덱스 
    "evaluateIdx" : Long, //강의평가 게시글 인덱스(강의평가 게시글 신고일 때만)
    "examIdx" : Long, //강의평가 게시글 인덱스(강의평가 게시글 신고일 때만)
    "postType" : Boolean, //True는 강의평가, False는 시험정보
*/

const Home = () => {
  return (
    <Styled.Container>
      <Styled.TextWrapper>
        <Styled.Text>최근 신고된 글</Styled.Text>
      </Styled.TextWrapper>

      <Styled.Wrapper>
        <Styled.FullWrapSub>
          <Subject />
        </Styled.FullWrapSub>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export const Subject = (props) => {

  return (
    <Styled.LectureWrapper>
      <Styled.MarginTop>
        <Styled.TitleWrapper>
          <Styled.Title>강좌이름</Styled.Title>
          <Styled.Option>신고당한 회수</Styled.Option>
        </Styled.TitleWrapper>
        <Styled.TitleWrapper>
          <Styled.Professor>교수</Styled.Professor>
          <Styled.Option>신고된 날짜</Styled.Option>
        </Styled.TitleWrapper>
        <Styled.RateWrapper>
          <Styled.Rate>작성한 글</Styled.Rate>
        </Styled.RateWrapper>
      </Styled.MarginTop>
    </Styled.LectureWrapper>
  );
};

export default Home;
