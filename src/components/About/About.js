import {
  Container,
  TextContainer,
  Title,
  Subtitle,
  Separator,
  Skills,
  AboutMeContainer,
  AboutTitle,
  AboutSubtitle,
  AboutSubtitleSkills,
  MySkills,
} from "./About.styles";
import { Button } from "../../components/Button.styles";
import { HashLink } from "react-router-hash-link";

const About = () => {
  return (
    <>
      <Container id="about">
        <TextContainer>
          <Title>About me</Title>
          <Separator />
          <Subtitle>
            Hello!My name is Eva and I'm a Frontend developer just graduated
            from a React Bootcamp. I have discovered a new passion in
            programming while learning and I have gained a lot of knowledge on
            how to develop beautiful websites quickly and efficiently. I'm open
            to job opportunities offering my acquired knowledge and willing to
            continue learning and develop my professional career.
          </Subtitle>
          <HashLink
            to="/#contact"
            scroll={(el) => {
              el.scrollIntoView(true);
              window.scrollBy(0, -100);
            }}
          >
            <Button>Contact</Button>
          </HashLink>
        </TextContainer>
        <AboutMeContainer>
          <Skills>
            <AboutTitle>Education</AboutTitle>
            <AboutSubtitle>
              · React Bootcamp in IT Academy, Barcelona. May-October 2022
              <br />· Programming Fundamentals in IT Academy.March-April 2022
            </AboutSubtitle>
          </Skills>
          <Skills>
            <AboutTitle>Skills</AboutTitle>
            <AboutSubtitleSkills>
              <MySkills>React</MySkills>
              <MySkills>JavaScript</MySkills>
              <MySkills>HTML5</MySkills>
              <MySkills>CSS3</MySkills>
              <MySkills>Bootstrap</MySkills>
              <MySkills>SASS</MySkills>
              <MySkills>GIT</MySkills>
              <MySkills>GITHUB</MySkills>
              <MySkills>Responsive Design</MySkills>
            </AboutSubtitleSkills>
          </Skills>
        </AboutMeContainer>
      </Container>
    </>
  );
};

export default About;
