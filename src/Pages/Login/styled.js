import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 8rem 0;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    width: 80%;
    padding: 20px;
  }
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.5rem;
  font-family: "Pretendard-SemiBold";
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media only screen and (max-width: 480px) {
    font-family: "Pretendard";
    font-size: 24px;
  }
`;

export const Input = styled.input`
  height: 50px;
  border-radius: 30px;
  margin-top: 10px;
  padding: 0px 20px;
  border: 1px solid lightgray;
  outline: none;
  display: flex;

  @media only screen and (max-width: 480px) {
    font-family: "Pretendard";
    font-size: 24px;
  }
`;

export const Button = styled.button`
  margin: 0;
  padding: 0 1rem;
  padding-top: 1rem;
  margin: 8px 0;
  border: none;
  padding-bottom: 1rem;
  background: ${(props) => props.background};
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

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 405px;
  @media only screen and (max-width: 960px) {
    width: 350px;
  }
`;
