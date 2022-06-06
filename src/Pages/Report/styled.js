import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  padding-bottom: 25rem;
  margin: 0 auto;
`;

export const AppTitle = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.5rem;
  font-family: 'Pretendard-SemiBold';
  padding-top: 5rem;
  padding-bottom: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1.5px solid #f1f1f1;
  border-radius: 15px;
  padding: 1.5rem 1.5rem;
  margin-top: 2vh;
`;

export const Img = styled.img`
  margin-right: 6px;
`;

export const Title = styled.div`
  display: flex;
  font-size: 1.7rem;
  padding-bottom: 0.7rem;
`;
export const Date = styled.div`
  display: flex;
  font-size: 0.9rem;
  padding-bottom: 3rem;
  color: #a3a3a3;
`;

export const BackWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

export const Back = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  border: 1px solid #000;
  cursor: pointer; 
  margin: 20px;
`;

export const Button = styled.button`
  margin: 0;
  padding: 0 1rem;
  padding-top: 1rem;
  margin: 8px 0;
  border: none;
  padding-bottom: 1rem;
  background: #346cfd;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 12px;
  font-family: "Pretendard-Regular";
  cursor: pointer;
  user-select: none;
  transition: 0.3s all;

  @media only screen and (max-width: 480px) {
    margin-top: 5rem;
  }
`;

export const Report = styled.textarea`
  height: 200px;
  border-radius: 30px;
  margin-top: 10px;
  padding: 0px 20px;
  border: 1px solid lightgray;
  outline: none;
  width: 100%;
  display: flex;

  @media only screen and (max-width: 480px) {
    font-family: "Pretendard";
    font-size: 24px;
  }
`;