import styled from "styled-components";

const desktopStartWidth = 900;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const ProjectBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 40px;
  letter-spacing: 1px;
  line-height: 1.6;
  margin: 40px auto;
  max-width: 95%;

  ${mobile} {
    flex-direction: column;
    max-width: 90%;
    gap: 5px;
    
  }

  h3 {
    font-size: 1.5rem;
    background-color: #f26728;
    color: #f1f1f1;
    width: 35%;
    margin: 0 auto;
    border-radius: 10px;
    ${mobile} {
      font-size: 1.3rem;
      width: 40%;
    }
  }
  svg {
    fill: #f1f1f1;
    font-size: 1.5rem;
    &:hover {
      fill: #faa36c;
    }
  }
  p {
    margin: 5px auto;
    font-size: 1.5rem;
    line-height: 1.6;
    color: #f1f1f1;

    ${mobile} {
      width: 95%;
      font-size: 1.2rem;
    }
  }

  ${mobile} {
    width: 100%;
  }
`;

export const TextBoxContainer = styled.div`
  width: 50%;

  ${mobile} {
    width: 100%;
  }
`;
export const LinksProject = styled.div`
  svg {
    fill: #f1f1f1;
    font-size: 1.5rem;
    padding: 20px 10px 10px 10px;
    &:hover {
      fill: #faa36c;
    }
  }
`;

export const ImgContainer = styled.div`
  width: 50%;

  ${mobile} {
    width: 100%;
  }
`;

export const ImgProject = styled.img`
  width: 458px;
  height: 319px;
  margin: 15px auto;
  border: 1px solid #f1f1f1;
  border-radius: 10px;

  ${mobile} {
    width: 90%;
    height: 90%;
  }
`;

export const ProjectText = styled.p`
  text-align: center;
  color: #f1f1f1;
  font-size: 1.5rem;
  line-height: 1.6;
  margin: -15px auto 0 auto;
  max-width: 65%;

  ${mobile} {
    font-size: 1.2rem;
    margin: -2px auto 0 auto;
    width: 95%;
  }
`;

export const IconsText = styled.div``;
