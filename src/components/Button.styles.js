import styled from "styled-components";

const desktopStartWidth = 996;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const Button = styled.button`
  margin: 30px;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 18px;
  font-weight:bold;
  letter-spacing:1px;
  text-decoration: none;
  background-color: #f26728;
  font-family: 'Lato', sans-serif;
  color: #f1f1f1;
  border-color: #f1f1f1;

  &:hover {
    background-color: #f1f1f1;
    color:#305D7A ;
    border-color: #f1f1f1;
    transition: 0.5s all ease-in;
  }

  ${mobile} {
    font-size: 15px;
  }
`;
