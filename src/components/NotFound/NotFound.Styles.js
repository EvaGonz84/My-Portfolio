import styled from "styled-components";
const desktopStartWidth = 900;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const NotFoundContainer = styled.section`
  color: #f1f1f1;
  letter-spacing: 1px;
  min-height: calc(100vh - 254px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${mobile} {
    min-height: calc(100vh - 220px);
  }
  
`;

export const Span = styled.span`
  color: #f26728;
  font-size: 80px;
  ${mobile} {
    font-size: 70px;
    width: 85%;
  }
`;

export const NotFoundMessage = styled.h1`
  font-size: 40px;
  margin-bottom: 10px;

  ${mobile} {
    font-size: 30px;
    width: 85%;
  }
`;
