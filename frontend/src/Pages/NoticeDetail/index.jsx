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
      console.log(props)
    //noticeDetailApi(id).then((data) => setData(data));
  }, [id]);

  return (
    <Styled.AppContainer>
      <Styled.AppTitle>공지사항</Styled.AppTitle>
      <Styled.Content>
        <Styled.Title>{props.id}</Styled.Title>
        <Styled.Date>
          {console.log(typeof db.data.modifiedDate)}
          {props.modifiedDate}
          {/* {db.data.modifiedDate.slice(0, 10)}{" "}
                    {db.data.modifiedDate.slice(11)} */}
        </Styled.Date>
        {props.content}
      </Styled.Content>
      <Styled.BackWrapper onClick={() => navigate('/notice')}>
        <Styled.Back>
          목록
        </Styled.Back>
      </Styled.BackWrapper>
    </Styled.AppContainer>
  );
};

export default NoticeDetail;
