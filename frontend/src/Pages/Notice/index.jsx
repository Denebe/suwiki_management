import { memo, useState } from 'react';
import * as Styled from './style';
import NoticeItem from './NoticeItem';
import { useNavigate } from 'react-router-dom'

const Notice = () => {
  const [db, setData] = useState({
    data: [],
  });

  let navigate = useNavigate();


  return (
    <Styled.AppContainer>
        <Styled.Button onClick={() => navigate('/write')}>공지사항 글쓰기</Styled.Button>
      <Styled.AppTitle>공지사항</Styled.AppTitle>
      {/* {db.data.map((i) => {
        return <NoticeItem id={i.id} title={i.title} modifiedDate={i.modifiedDate} key={i.id} />;
      })} */}
    </Styled.AppContainer>
  );
};

export default memo(Notice);
