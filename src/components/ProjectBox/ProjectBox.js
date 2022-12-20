import { useState } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaArrowAltCircleDown,
  FaRegWindowClose
} from "react-icons/fa";
import {
  ProjectBoxContainer,
  LinksProject,
  ImgProject,
  TextBoxContainer,
  ImgContainer,
  ProjectText,
  IconsText
} from "./ProjectBox.styles";
import {Span} from '../Home/Home.styles';
const ProjectBox = () => {
  const [showTextStarWars, setShowTextStarWars] = useState(false);
  const [showTextFitnessApp, setShowTextFitnessApp] = useState(false);
  const [showTextPortfolio, setShowTextPortfolio] = useState(false);

  return (
    <>
      <ProjectBoxContainer>
        <ImgContainer>
          <ImgProject
            src={require("../../assets/StarWarsProject.PNG")}
            alt="starwars-project"
          />
        </ImgContainer>
        <TextBoxContainer>
          <h3>Star Wars</h3>
          <LinksProject>
            <a href=" https://evagonz84.github.io/STAR-WARS-/" target="blank">
              <FaExternalLinkAlt />
            </a>
            <a href="https://github.com/EvaGonz84/STAR-WARS-" target="blank">
              <FaGithub />
            </a>
          </LinksProject>
          <p>
            Star Wars is a project created with React during Bootcamp. You can search for the ships of the saga by registering previously.
         
          </p>
          <p><Span>Built with...</Span></p>
          <IconsText
            onClick={() => setShowTextStarWars(!showTextStarWars)}>
         {showTextStarWars? <FaRegWindowClose/> : <FaArrowAltCircleDown/>}
          </IconsText>
        </TextBoxContainer>
      </ProjectBoxContainer>
      {showTextStarWars && (
        <ProjectText>
         Buitl with React.js, JavasScript, HTML, CSS, React Router, API, API Context, React Hook Form, Styled Components.
        </ProjectText>
      )}
      <ProjectBoxContainer>
        <ImgContainer>
          <ImgProject
            src={require("../../assets/FitnessProject.PNG")}
            alt="fitness-app-project"
          />
        </ImgContainer>
        <TextBoxContainer>
          <h3>Fitness App</h3>
          <LinksProject>
            <a href=" https://evagonz84.github.io/Fitness-App/" target="blank">
              <FaExternalLinkAlt />
            </a>
            <a href="https://github.com/EvaGonz84/Fitness-App" target="blank">
              <FaGithub />
            </a>
          </LinksProject>
          <p>
            Fitness App is an own website created during the Bootcamp. It can
            search for different types of training by choosing a muscle group.
          </p>
          <p><Span>Built with...</Span></p>
          <IconsText
            onClick={() => setShowTextFitnessApp(!showTextFitnessApp)}>
         {showTextFitnessApp? <FaRegWindowClose/> : <FaArrowAltCircleDown/>}
          </IconsText>
        </TextBoxContainer>
      </ProjectBoxContainer>
      {showTextFitnessApp && (
        <ProjectText>
          Buitl with React.js, JavasScript, HTML, CSS, React Router, API, API Context, React Hook Form, Styled Components.
        </ProjectText>
      )}
      <ProjectBoxContainer>
        <ImgContainer>
          <ImgProject
            src={require("../../assets/MyPortfolio.PNG")}
            alt="my-portfolio"
          />
        </ImgContainer>
        <TextBoxContainer>
          <h3>My Portfolio</h3>
          <LinksProject>
            <a href=" https://evagonz84.github.io/STAR-WARS-/" target="blank">
              <FaExternalLinkAlt />
            </a>
            <a href="https://github.com/EvaGonz84/STAR-WARS-" target="blank">
              <FaGithub />
            </a>
          </LinksProject>
          <p>
            My portfolio is a website created with React. You can find my
            resume, education and my work.
          </p>
          <p><Span>Built with...</Span></p>
          <IconsText
            onClick={() => setShowTextPortfolio(!showTextPortfolio)}>
         {showTextPortfolio? <FaRegWindowClose/> : <FaArrowAltCircleDown/>}
          </IconsText>
        </TextBoxContainer>
      </ProjectBoxContainer>
      {showTextPortfolio && (
        <ProjectText>
          Buitl with React.js, JavasScript, HTML, CSS, React Router, React Hook Form, Styled Components.
        </ProjectText>
      )}
    </>
  );
};

export default ProjectBox;
