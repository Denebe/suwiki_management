import React, { useState, useEffect } from 'react';
import * as Styled from './styled';
import { useLocation } from 'react-router';
import { noticeDeleteApi, noticeDetailApi } from '../../api/Api';
import { useNavigate } from 'react-router-dom';

const NoticeDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state;

  const [db, setData] = useState({ data: {} });

  const onDelete = () => {
    if (window.confirm('강의평가를 삭제하시겠습니까?') === true) {
        noticeDeleteApi(id)
        navigate('/notice')
      } else {
          console.log('dd')
        return;
      }
  }

  useEffect(() => {
    noticeDetailApi(id).then((data) => setData(data));
  }, [id]);

  return (
    <Styled.AppContainer>
      <Styled.AppTitle>공지사항</Styled.AppTitle>
      <Styled.Content>
        <Styled.Title>{db.data.title}</Styled.Title>
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

        <Styled.Back onClick={onDelete}>
          삭제
        </Styled.Back>
      </Styled.BackWrapper>
    
    </Styled.AppContainer>
  );
};

export default NoticeDetail;
