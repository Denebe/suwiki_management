import { memo, useState } from 'react';
import * as Styled from './style';
import NoticeItem from './NoticeItem';

const Notice = () => {
  const [db, setData] = useState({
    data: [],
  });


  return (
    <Styled.AppContainer>
      <Styled.AppTitle>공지사항</Styled.AppTitle>
      {/* {db.data.map((i) => {
        return <NoticeItem id={i.id} title={i.title} modifiedDate={i.modifiedDate} key={i.id} />;
      })} */}
    </Styled.AppContainer>
  );
};

export default memo(Notice);
