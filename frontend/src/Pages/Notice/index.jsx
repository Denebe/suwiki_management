import { memo, useState, useEffect } from "react";
import * as Styled from "./style";
import { useNavigate } from "react-router-dom";

const Notice = () => {
  const [db, setData] = useState({
    data: [],
  });

  const data = [
    { id: "1", title: "공지사항", modifedDate: "2022", content: "www" },
    { id: "2", title: "공지사항", modifedDate: "2022", content: "www" },
  ];

  let navigate = useNavigate();

  //   useEffect(() => {
  //     noticeApi().then((data) => setData(data));
  //   }, []);

  return (
    <Styled.AppContainer>
      <Styled.Button onClick={() => navigate("/home")}>뒤로가기</Styled.Button>
      <Styled.Button onClick={() => navigate("/write")}>
        공지사항 글쓰기
      </Styled.Button>
      <Styled.AppTitle>공지사항</Styled.AppTitle>
      {data.map((data) => (
        <NoticeItem
          key={data.id}
          id={data.id}
          title={data.title}
          modifiedDate={data.modifedDate}
          content={data.content}
        />
      ))}
      {/* {db.data.map((i) => {
        return <NoticeItem id={i.id} title={i.title} modifiedDate={i.modifiedDate} key={i.id} />;
      })} */}
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
      <Styled.Option>{props.content}</Styled.Option>
    </Styled.NoticeWrap>
  );
};

export default memo(Notice);
