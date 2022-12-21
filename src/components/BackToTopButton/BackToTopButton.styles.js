import styled from "styled-components";
const desktopStartWidth = 900;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const BackButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  height: 50px;
  width: 50px;
  font-size: 50px;
  background-color: transparent;
  border: transparent;

  ${mobile} {
    right: 20px;
  }

  svg {
    font-size: 2rem;
    fill: white;
    &:hover {
      transition: 0.5s all ease;
      fill: #faa36c;
    }
  }
`;
