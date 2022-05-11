import React, { useState, useEffect } from 'react';
import * as Styled from './styled';
import { useLocation } from 'react-router';
import { noticeDetailApi } from '../../api/Api';
import { useNavigate } from 'react-router-dom';

const NoticeDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id,props } = location.state;

  const [db, setData] = useState({ data: {} });

  useEffect(() => {
    noticeDetailApi(id).then((data) => setData(data));
  }, [id]);

  return (
    <Styled.AppContainer>
      <Styled.AppTitle>공지사항</Styled.AppTitle>
      <Styled.Content>
        <Styled.Title>{db.data.id}</Styled.Title>
        <Styled.Date>
          {db.data.modifiedDate}
 
        </Styled.Date>
        {db.data.content}
      </Styled.Content>
      <Styled.BackWrapper >
        <Styled.Back onClick={() => navigate('/notice')}>
          목록
        </Styled.Back>

        <Styled.Back onClick={() => navigate('/update', { state: { props: db.data } })}>
          수정
        </Styled.Back>

        <Styled.Back onClick={() => navigate('/notice')}>
          삭제
        </Styled.Back>
      </Styled.BackWrapper>
    
    </Styled.AppContainer>
  );
};

export default NoticeDetail;
