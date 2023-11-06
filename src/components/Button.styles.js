import styled from "styled-components";

const desktopStartWidth = 900;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const Button = styled.button`
  margin: 30px;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  text-decoration: none;
  font-family: "Lato", sans-serif;
  color: #305d7a;
  border-color: #ffffff;
  background-color: #ffffff;

  &:hover {
    background-color: #305d7a;
    color: #ffffff;
    border-color: #ffffff;
    transition: 0.5s all ease-in;
  }

  ${mobile} {
    font-size: 15px;
  }
`;
