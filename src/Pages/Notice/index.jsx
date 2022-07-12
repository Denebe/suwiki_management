import { useState, useEffect, useCallback, useRef } from "react";
import * as Styled from "./style";
import { useNavigate } from "react-router-dom";
import { noticeApi } from "../../api/Api";

const Notice = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(1);

  let navigate = useNavigate();

  const getDog = useCallback(async () => {
    setLoad(true); //로딩 시작
    const res = await noticeApi(page);
    console.log(page, res);
    if (res.data) {
      setList((prev) => [...prev, ...res.data]);
      preventRef.current = true;
    } else {
      console.log(res); //에러
    }
    setLoad(false); //로딩 종료
  }, [page]);

  const preventRef = useRef(true);
  const obsRef = useRef(null);

  useEffect(() => {
    getDog();
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line no-use-before-define
  }, [getDog]);

  const obsHandler = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setPage((prev) => prev + 1);
    }
  };


  return (
    <Styled.AppContainer>
      <Styled.Button onClick={() => navigate("/home")}>뒤로가기</Styled.Button>
      <Styled.Button onClick={() => navigate("/write")}>
        공지사항 글쓰기
      </Styled.Button>
      <Styled.AppTitle>공지사항</Styled.AppTitle>
      {list & list.map((data) => (
        <NoticeItem
          props={data}
          key={data.id}
          id={data.id}
          title={data.title}
          modifiedDate={data.modifiedDate}
          content={data.content}
        />
      ))}
     {load ? <div style={{ opacity: '0', width: '0%' }}>로딩 중</div> : <></>}
      <div ref={obsRef} style={{ opacity: '0', width: '0%' }}>
        옵저버 Element
      </div>
    </Styled.AppContainer>
  );
};

export const NoticeItem = (props) => {
  let navigate = useNavigate();

  const onClick = () => {
    navigate("/noticedetail", { state: { id: props.id, props: props } });
  };
  return (
    <Styled.NoticeWrap onClick={onClick}>
      <Styled.Title>{props.title}</Styled.Title>
      <Styled.Option>{props.modifiedDate}</Styled.Option>
    </Styled.NoticeWrap>
  );
};

export default Notice;
