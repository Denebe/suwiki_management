import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 3rem 0;
  justify-content: center;
  flex-direction : column;

  @media only screen and (max-width: 480px) {
    width: 80%;
    padding: 20px;
  }
`;

export const Text = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-family: "Pretendard-SemiBold";
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;

  @media only screen and (max-width: 480px) {
    font-family: "Pretendard";
    font-size: 24px;
  }
`;


export const Wrapper = styled.div`
  display: flex;
  width: 50%;

   @media screen and (max-width: 768px) {
    width: 100%;
  display: flex;

  }
`;

export const FullWrapSub = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
  display: flex;

  }
 

`;
export const TextWrapper =styled.div`
display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;`

  export const Title = styled.div`
  display: flex;
  font-size: 1.5rem;
  margin-right: 0.7rem;
  `
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom : 1rem;
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

export const Professor = styled.div`
  display: flex;
  color: #515151;
  font-size: 1.5rem;
  margin: 0.3rem 0;
`;

export const Option = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: rgb(239, 239, 239);
  padding: 5px 10px;
  font-size: 1.5em;
`;

export const RateWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-top: 14px;
`;

export const Rate = styled.span`
  color: #346cfd;
  font-size: 1.5rem;
  padding-left: 4px;
`;

export const LectureWrapper = styled.div`
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const MarginTop = styled.div`
  padding: 14px 24px;
`;
export const MarginRight = styled.span`
  margin-right: 6px;
  font-size: 1.5rem;
`;

export const StarFlex = styled.div`
  display: flex;
  font-size: 1.5rem;
  padding-right: 1rem;
  background-color: #f9f9f9;
  padding: 8px 12px;
  align-items: center;

  &#top {
    border-top: 1px solid #eeeeee;
  }
`;
