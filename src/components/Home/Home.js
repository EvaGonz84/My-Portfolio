import { GlobalStyle } from "../../components/GlobalStyle.styles";
import {
  Container,
  Title,
  Subtitle,
  LinksContainer,
  Links,
  ScrollToBottomContainer,
  ImageHome,
  LinkToProjects,
} from "./Home.styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { FaArrowCircleDown } from "react-icons/fa";
import Project from "../Project/Project";
import BackToTopButton from "../BackToTopButton/BackToTopButton";

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Container id="home">
        <ImageHome src={require("../../assets/evagonzalez.jpg")} alt="me" />
        <Title>Hi, I'm Eva González</Title>
        <Subtitle>
          Junior Frontend Developer based in Barcelona. I build
          websites with a beautiful and responsive design.
        </Subtitle>
        <LinksContainer>
          <Links href="https://github.com/EvaGonz84" target="blank">
            <FaGithub />
          </Links>
          <Links
            href="https://www.linkedin.com/in/eva-gonz%C3%A1lez-s%C3%A1nchez-6567a6233"
            target="blank"
          >
            <FaLinkedin />
          </Links>
        </LinksContainer>
        <ScrollToBottomContainer>
          <p>View my projects</p>
          <LinkToProjects
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-64}
            duration={1200}
          >
            <FaArrowCircleDown />
          </LinkToProjects>
        </ScrollToBottomContainer>
      </Container>
      <About />
      <Project />
      <Contact />
      <BackToTopButton />
    </>
  );
};

export default Home;
