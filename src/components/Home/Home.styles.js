import styled from "styled-components";
import { Link } from "react-scroll";

const desktopStartWidth = 900;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const Container = styled.div`
  max-width: 100%;
  height: 90vh;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 1px;
  color: #f1f1f1;

  svg {
    font-size: 2rem;
    fill: #f1f1f1;
    &:hover {
      fill: #faa36c;
    }
  }
`;

export const ImageHome = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  ${mobile} {
    margin-top: 40px;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin: 0;

  ${mobile} {
    font-size: 2.2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  letter-spacing: 1px;
  width: 65%;
  margin: 0;

  ${mobile} {
    font-size: 1.2rem;
    width: 90%;
  }
`;

export const Span = styled.span`
  color: #faa36c;
`;

export const LinksContainer = styled.div`
  margin-top: 10px;
  font-size: 20px;
`;

export const Links = styled.a`
  margin: 10px;
  color: #f1f1f1;

  &:hover {
    color: #faa36c;
    transition: 0.5s all ease;
  }

  svg {
    font-size: 1.6em;
    &:hover {
      fill: #faa36c;
      transition: 0.5s all ease;
    }
  }
`;

export const ScrollToBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25px;


  p {
    margin-bottom: -20px;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 1px;
  }

  ${mobile}{
    margin-top: 15px;
  }
`;

export const LinkToProjects = styled(Link)`
margin-top: 30px;
`;
