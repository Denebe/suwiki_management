import React, { useState } from "react";
import * as Styled from "./styled";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { evaluateBanApi, examBanApi, noBanEvaluateApi, noBanExamApi, blackEvaluateApi, blackExamApi } from "../../api/Api";

/*
최근 신고된 글(신고된 날짜, 강의이름, 교수이름, 작성한 글, 신고 당한 횟수, 담당자)
클릭 시 화면 이동
*/

//블랙리스트 추가 기능 일 수 상관없이 

const Report = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const { props } = location.state;
  const [reason, setReason] = useState("");
  const [judge, setJudge] = useState('')

  const [hide , setHide] = useState(false)


  const [time, setTime] = useState(30);

  console.log(props.type)



  const onClick = () => {
      setHide(!hide)
  }

  const onChange = (e) => {
    setReason(e.target.value);
  };

  const onJudge = (e) => {
    setJudge(e.target.value);
  };

  const onBantime = (e) => {
      setTime(e.target.value)
  }


  const onReport = () => {
    if(props.type === false) {
      console.log(props.evaluate, reason, judge)
        evaluateBanApi(parseInt(props.evaluate), reason, judge, parseInt(time))
        alert('신고처리 됐습니다.')
        //navigate('/home')
    } else {
      console.log(props.exam, reason, judge)
        examBanApi(parseInt(props.exam), reason,judge,parseInt(time))
        alert('신고처리 됐습니다.')
        //navigate('/home')
    }
  };

  const noBan = () => {
    if(props.type === false) {
        noBanEvaluateApi(parseInt(props.evaluate))
        alert('이상없음처리 됐습니다.')
        console.log(props.evaluate)
        //navigate('/home')
    } else {
        noBanExamApi(parseInt(props.exam))
        alert('이상없음처리 됐습니다.')
        //navigate('/home')
    }
  }

  const onBlack = () => {
    if(props.type === false) {
      //api변경
      console.log(props.evaluate, reason, judge)
        blackEvaluateApi(parseInt(props.evaluate), reason, judge)
        alert('블랙리스트 처리 됐습니다.')
        console.log(props.evaluate)
        //navigate('/home')
    } else {
      console.log(props.exam, reason, judge)
        blackExamApi(parseInt(props.exam), reason, judge)
        alert('블랙리스트 처리 됐습니다.')
        //navigate('/home')
    }
  }


  return (
    <Styled.AppContainer>
      <Styled.AppTitle>신고된 글</Styled.AppTitle>
      <Styled.Content>
        <Styled.Title>{props.id}</Styled.Title>
        <Styled.Date>날짜: {props.date}</Styled.Date>
        교수이름 :{props.pro}
        <br />
        강의이름 : {props.lecture}
        <br />
        작성한 글 : {props.content}
        <br />
      </Styled.Content>
      <Styled.BackWrapper>
        <Styled.Back onClick={onClick}>해당유저 블랙 or 정지</Styled.Back>

        <Styled.Back onClick={noBan}>이상없음</Styled.Back>

        

        <Styled.Back onClick={() => navigate("/home")}>목록</Styled.Back>
      </Styled.BackWrapper>
{
    hide ? 
        <>
           <select onChange={onBantime}>
              <option value={30}>30일</option>
          </select>

          <Styled.Report
            type="text"
            id="reason"
            value={reason}
            onChange={onChange}
            placeholder="정지사유"
          ></Styled.Report>

        <Styled.Report
            type="text"
            id="judge"
            value={judge}
            onChange={onJudge}
            placeholder="조치사항"
          ></Styled.Report>
       
          <Styled.Button onClick={onReport}>벤 등록하기</Styled.Button>
          <Styled.Button onClick={onBlack}>블랙리스트 추가</Styled.Button>
          <Styled.Button onClick={() => navigate('/home')}>뒤로가기</Styled.Button>
        </>
        : ''
}

    </Styled.AppContainer>
  );
};

export default Report;
