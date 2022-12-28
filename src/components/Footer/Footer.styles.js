import styled from "styled-components";
const desktopStartWidth = 900;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const ContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: #f1f1f1;
  max-width: 100%;
  height: 25vh;
  padding: 10px;

  svg {
    fill: #f26728;
    font-size: 1.7rem;
    &:hover {
      fill: #305d7a;
    }
  }

  ${mobile} {
    padding: 10px;
  }
`;

export const LinksContainer = styled.div`
  padding-top: 10px;
`;

export const Links = styled.a`
  padding: 10px;
  color: #f26728;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    color: #305d7a;
    transition: 0.5s all ease;
  }
`;

export const CopyContainer = styled.div`
  color: #305d7a;
  font-size: 1rem;
  letter-spacing: 1px;
`;
