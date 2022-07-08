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

//담당자 표시하기 ppt자료 확인

const Home = () => {
  const [db, setData] = useState({
    examPostReports: [],
    evaluatePostReports: [],
  });

  const [type, setType] = useState(false);

  const onExam = () => {
    setType(true);
    
  };

  const onEval = () => {
    setType(false);
    console.log(db)
  };

  let navigate = useNavigate();

  useEffect(() => {
    mainApi().then((data) => setData(data));
  }, [type]);


  return (
    <Styled.Container>
      <Styled.TextWrapper>

        <Styled.Button onClick={() => navigate("/notice")}>
          공지사항으로 가기
        </Styled.Button>
      </Styled.TextWrapper>
      <div>
        <Styled.Button style={{ marginRight: "20px" }} onClick={onEval}>
          강의평가 신고된 글
        </Styled.Button>
        <Styled.Button onClick={onExam}>시험평가 신고된 글</Styled.Button>
      </div>
      <Styled.Wrapper>
        <Styled.FullWrapSub>
            
            <h1 style={{textAlign:'center'}}>신고된 글</h1>
          {type == false
            ? 
            db.evaluatePostReports.map((date) => (
                <Subject
                id={date.id}
                  key={date.id}
                  type={type}
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
                  type={type}
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

  const [wow, setWow] = useState(Number(props.date.replace(/-/g, "").slice(6,8)));
  
  const [dam , setDam] = useState('')
  const human = [
  {id: 0 , name: '이진욱'},
  {id: 1 , name: '박명범'},
  {id: 2 , name: '정충일'},
  {id: 3 , name: '조성래'},
  {id: 4 , name: '이영진'},
  {id: 5 , name: '정지원'},
  {id: 6 , name: '김도현'},
  {id: 7 , name: '한지석'}
]
 

  const eee = () =>{
    setWow(Math.floor((wow + 31) % 8));
    console.log(wow)
    for( let i = 0 ; 8 > i; i++){
      console.log(human[i].name, human[i].id)
      if( wow == human[i].id){
        setDam(human[i].name)
        break;
      }
    }
  }

  useEffect(() => {
    eee()
    
  }, []);

  const onClick = () => {
    navigate("/report", { state: { props: props } });
  };

  //담당자 보여주게 하기
  return (
    <Styled.LectureWrapper onClick={() => onClick()}>
      <Styled.MarginTop>
        <Styled.TitleWrapper>
          <Styled.Title>강의 게시글: {props.lecture}</Styled.Title>
          <Styled.Option>담당자: {dam}</Styled.Option>
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
