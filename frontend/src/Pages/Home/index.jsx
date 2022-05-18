import React, { useState, useEffect } from "react";
import * as Styled from "./style";
import { useNavigate } from "react-router-dom";
import { mainApi } from "../../api/Api";
/*
최근 신고된 글(신고된 날짜, 강의이름, 교수이름, 작성한 글, 신고 당한 횟수, 담당자)
클릭 시 화면 이동

  "userIdx" : Long, //유저 인덱스 
    "evaluateIdx" : Long, //강의평가 게시글 인덱스(강의평가 게시글 신고일 때만)
    "examIdx" : Long, //강의평가 게시글 인덱스(강의평가 게시글 신고일 때만)
    "postType" : Boolean, //True는 강의평가, False는 시험정보
*/

const Home = () => {
  const [db, setData] = useState({
    examPostReports: [],
    evaluatePostReports: [],
  });

  const [type, setType] = useState(true);

  const onType = () => {
    setType(!type);
  };

  let navigate = useNavigate();

  useEffect(() => {
    mainApi().then((data) => setData(data));
  }, []);
  console.log(db);

  return (
    <Styled.Container>
      <Styled.TextWrapper>
        신고처리가 되면 메인페이지에서 없앨 것인지, 이상없음이란 항목도 있는데
        이상없으면 어떻게 처리할 것 인지
        <Styled.Button onClick={() => navigate("/notice")}>
          공지사항으로 가기
        </Styled.Button>
      </Styled.TextWrapper>
      <div>
        <Styled.Button style={{ marginRight: "20px" }} onClick={onType}>
          강의평가 신고된 글
        </Styled.Button>
        <Styled.Button onClick={onType}>시험평가 신고된 글</Styled.Button>
      </div>
      <Styled.Wrapper>
        <Styled.FullWrapSub>
          {type
            ? db.evaluatePostReports.map((date) => (
                <Subject
                  key={date.id}
                  date={date.reportedDate}
                  pro={date.professor}
                  lecture={date.lectureName}
                  reported={date.reportedUserIdx}
                  reporting={date.reportingUserIdx}
                  evaluate={date.evaluateIdx}
                  content={date.content}
                />
              ))
            : db.examPostReports.map((date) => (
                <Subject
                  key={date.id}
                  date={date.reportedDate}
                  pro={date.professor}
                  reported={date.reportedUserIdx}
                  reporting={date.reportingUserIdx}
                  lecture={date.lectureName}
                  exam={date.examIdx}
                  content={date.content}
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
          <Styled.Title>강의 게시글: {props.lecture}</Styled.Title>
        </Styled.TitleWrapper>
        <Styled.TitleWrapper>
          <Styled.Professor>담당 교수님 : {props.pro}</Styled.Professor>
          <Styled.Option>신고 일자: {props.date}</Styled.Option>
        </Styled.TitleWrapper>
        <Styled.TitleWrapper>
          <Styled.Professor>신고한 유저 :{props.reporting}</Styled.Professor>
          <Styled.Professor>신고된 유저 : {props.reported}</Styled.Professor>
        </Styled.TitleWrapper>
        <Styled.RateWrapper>
          <Styled.Rate>신고 내용: {props.content}</Styled.Rate>
        </Styled.RateWrapper>
      </Styled.MarginTop>
    </Styled.LectureWrapper>
  );
};

export default Home;
