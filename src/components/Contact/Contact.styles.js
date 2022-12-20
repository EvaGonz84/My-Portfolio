import styled from "styled-components";

const desktopStartWidth = 996;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  color: #f1f1f1;
  margin-top:50px;
 
`;

export const ContactTitle = styled.h2`
  font-size: 3rem;
  width: 100%;
  letter-spacing: 1px;

  ${mobile} {
    font-size: 2rem;
  }
`;

export const ContactSubtitle = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  margin: auto;
  max-width: 65%;
  padding: 20px 0;
  letter-spacing: 1px;

  ${mobile} {
    font-size: 1.2rem;
    max-width: 90%;
  }
`;
