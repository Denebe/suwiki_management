import React, { useState , useEffect} from "react";
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
    const [db, setData] = useState([]);
    
      let navigate = useNavigate();
    
      useEffect(() => {
        mainApi().then((data) => setData(data));

      }, []);
      console.log(db)

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
          {db && db.map((date) => (
            <Subject 
              key={date.id}
              date={date.reportedDate}
              pro={date.professor}
              lecture={date.lectureName}
              evaluate={date.evaluateIdx}
              exam={date.examIdx}
              type={date.postType}
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
          <Styled.Title>{props.lecture}</Styled.Title>
          <Styled.Option>{props.type}</Styled.Option>
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
