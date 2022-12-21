import styled from "styled-components";

const desktopStartWidth = 900;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  font-family: "Lato", sans-serif;
  letter-spacing: 1px;
  color: #f1f1f1;
`;

export const TextContainer = styled.div`
  text-align: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 3rem;
  width: 100%;
  letter-spacing: 1px;

  ${mobile} {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  margin: auto;
  max-width: 65%;
  padding: 20px 0;

  ${mobile} {
    font-size: 1.2rem;
    max-width: 90%;
    
  }
`;

export const Separator = styled.hr`
  width: 5%;
  border: 2px solid #f26728;
`;

export const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 40px;
  line-height: 1.6;
  margin: 30px auto;
  max-width: 95%;
  letter-spacing: 1px;

  ${mobile} {
    flex-direction: column;
    max-width: 90%;
  }
`;

export const AboutTitle = styled.h3`
  font-size: 2.2rem;

  ${mobile} {
    font-size: 1.5rem;
  }
`;

export const AboutSubtitle = styled.p`
  font-size: 1.5rem;

  ${mobile} {
    font-size: 1.2rem;
  }
`;

export const AboutSubtitleSkills = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  svg {
    font-size: 1.1rem;
  }

  ${mobile} {
    gap: 15px;
  }
`;

export const Skills = styled.div`
  width: 50%;

  ${mobile} {
    width: 100%;
  }
`;

export const MySkills = styled.div`
  background: white;
  color: #305d7a;
  font-size: 1.3rem;
  font-weight: bold;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  letter-spacing: 1px;
  margin: 5px 15px 5px 0;

  ${mobile} {
    font-size: 1.1rem;
    margin: 1px;
  }
`;
