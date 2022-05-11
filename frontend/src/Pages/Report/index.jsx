import React, { useState } from "react";
import * as Styled from "./styled";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";

/*
최근 신고된 글(신고된 날짜, 강의이름, 교수이름, 작성한 글, 신고 당한 횟수, 담당자)
클릭 시 화면 이동
*/

const Report = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const { props } = location.state;
  const [because, setBecause] = useState("");

  const [hide, setHide] = useState(false);

  const onChange = (e) => {
    setBecause(e.target.value);
  };

  const onClick = () => {
    setHide(true);
  };

  const onReport = () => {
    alert(because);
  };

  console.log(props);

  return (
    <Styled.AppContainer>
      <Styled.AppTitle>신고된 글</Styled.AppTitle>
      <Styled.Content>
        <Styled.Title>{props.id}</Styled.Title>
        <Styled.Date>날짜: {props.date}</Styled.Date>
        교수이름 :{props.pro}
        <br />
        강의이름 : {props.book}
        <br />
        작성한 글 : {props.content}
        <br />
        신고 당한 횟수 : {props.count}
        <br />
      </Styled.Content>
      <Styled.BackWrapper>
        <Styled.Back onClick={onClick}>해당유저 30일 정지</Styled.Back>

        <Styled.Back onClick={onClick}>블랙리스트 추가</Styled.Back>

        <Styled.Back onClick={() => alert("이상없음")}>이상없음</Styled.Back>

        <Styled.Back onClick={() => navigate("/home")}>목록</Styled.Back>
      </Styled.BackWrapper>

      {hide ? (
        <>
          <Styled.Report
            type="text"
            name="because"
            id="because"
            onChange={onChange}
            placeholder="블랙사유"
          ></Styled.Report>

          <Styled.Button onClick={onReport}>등록하기</Styled.Button>
          <Styled.Button onClick={() => navigate('/home')}>뒤로가기</Styled.Button>
        </>
      ) : (
        ""
      )}
    </Styled.AppContainer>
  );
};

export default Report;
