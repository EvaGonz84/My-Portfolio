import styled from "styled-components";
const desktopStartWidth = 900;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const NotFoundContainer = styled.section`
  color: #f1f1f1;
  letter-spacing: 1px;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Span = styled.span`
  color: #f26728;
`;

export const NotFoundMessage = styled.h1`
  font-size: 70px;
  margin-bottom: 10px;

  ${mobile} {
    font-size: 50px;
  }
`;
