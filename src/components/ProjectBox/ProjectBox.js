import { useState } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaArrowAltCircleDown,
  FaRegWindowClose,
} from "react-icons/fa";
import {
  ProjectBoxContainer,
  LinksProject,
  ImgProject,
  TextBoxContainer,
  ImgContainer,
  ProjectText,
  IconsText,
} from "./ProjectBox.styles";
import { Span } from "../Home/Home.styles";
const ProjectBox = () => {
  const [showTextFitnessApp, setShowTextFitnessApp] = useState(false);
  const [showTextPortfolio, setShowTextPortfolio] = useState(false);
  const [showTextEcommerce, setShowTextEcommerce] = useState(false);
  const [showTextQuickTask, setShowTextQuickTask] = useState(false);

  return (
    <>
      <ProjectBoxContainer>
        <ImgContainer>
          <a href=" https://evagonz84.github.io/Fitness-App/" target="blank">
            <ImgProject
              src={require("../../assets/FitnessProject.jpg")}
              alt="fitness-app-project"
            />{" "}
          </a>
        </ImgContainer>

        <TextBoxContainer>
          <h3>Fitness App</h3>
          <LinksProject>
            <a href=" https://evagonz84.github.io/Fitness-App/" target="blank">
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/EvaGonz84/Fitness-App.git"
              target="blank"
            >
              <FaGithub />
            </a>
          </LinksProject>
          <p>
            Fitness App is a website I created from scratch during the Bootcamp.
            You can search for different types of training by choosing a muscle
            group.
          </p>
          <p>
            <Span>Built with...</Span>
          </p>
          <IconsText onClick={() => setShowTextFitnessApp(!showTextFitnessApp)}>
            {showTextFitnessApp ? (
              <FaRegWindowClose />
            ) : (
              <FaArrowAltCircleDown />
            )}
          </IconsText>
        </TextBoxContainer>
      </ProjectBoxContainer>
      {showTextFitnessApp && (
        <ProjectText>
          Buitl with React.js, JavasScript, HTML, CSS, React Router, external
          API, Context API, React Hook Form, Styled Components.
        </ProjectText>
      )}
      <ProjectBoxContainer>
        <ImgContainer>
          <a href="https://evagonzalez.net" target="blank">
            <ImgProject
              src={require("../../assets/MyPortfolio.jpg")}
              alt="my-portfolio"
            />
          </a>
        </ImgContainer>
        <TextBoxContainer>
          <h3>My Portfolio</h3>
          <LinksProject>
            <a href="https://evagonzalez.net" target="blank">
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/EvaGonz84/My-Portfolio.git"
              target="blank"
            >
              <FaGithub />
            </a>
          </LinksProject>
          <p>
            My portfolio is a website created with React. You can find my
            resume, education and my work.
          </p>
          <p>
            <Span>Built with...</Span>
          </p>
          <IconsText onClick={() => setShowTextPortfolio(!showTextPortfolio)}>
            {showTextPortfolio ? (
              <FaRegWindowClose />
            ) : (
              <FaArrowAltCircleDown />
            )}
          </IconsText>
        </TextBoxContainer>
      </ProjectBoxContainer>
      {showTextPortfolio && (
        <ProjectText>
          Buitl with React.js, JavasScript, HTML, CSS, React Router, React Hook
          Form, Styled Components, EmailJS.
        </ProjectText>
      )}
      <ProjectBoxContainer>
        <ImgContainer>
          <a href="https://e-commerce-enero-2023.netlify.app/" target="blank">
            <ImgProject
              src={require("../../assets/Ecommerce.jpg")}
              alt="image-ecommerce-project"
            />
          </a>
        </ImgContainer>
        <TextBoxContainer>
          <h3>E-commerce</h3>
          <LinksProject>
            <a href="https://e-commerce-enero-2023.netlify.app/" target="blank">
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/EvaGonz84/React-ecommerce.git"
              target="blank"
            >
              <FaGithub />
            </a>
          </LinksProject>
          <p>
            E-commerce is a website created with React and Tailwindcss. You can
            browse the app to find the product information and add the desired
            quantity to the cart.
          </p>
          <p>
            <Span>Built with...</Span>
          </p>

          <IconsText onClick={() => setShowTextEcommerce(!showTextEcommerce)}>
            {showTextEcommerce ? (
              <FaRegWindowClose />
            ) : (
              <FaArrowAltCircleDown />
            )}
          </IconsText>
        </TextBoxContainer>
      </ProjectBoxContainer>
      {showTextEcommerce && (
        <ProjectText>
          Buitl with React.js, JavasScript, HTML, Tailwindcss, React Router,
          ContextAPI, React Hook Form, React Icons.
        </ProjectText>
      )}
      <ProjectBoxContainer>
        <ImgContainer>
          <a href=" https://evagonz84.github.io/Fitness-App/" target="blank">
            <ImgProject
              src={require("../../assets/QuickTask.JPG")}
              alt="quick-task-project"
            />{" "}
          </a>
        </ImgContainer>

        <TextBoxContainer>
          <h3>QuickTask</h3>
          <LinksProject>
            <a href="https://quicktask.netlify.app/" target="blank">
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/EvaGonz84/Task-list-React-and-Tailwindcss"
              target="blank"
            >
              <FaGithub />
            </a>
          </LinksProject>
          <p>
            QuickTask is a React.js CRUD application. You can manage your tasks
            in seconds easily.
          </p>
          <p>
            <Span>Built with...</Span>
          </p>
          <IconsText onClick={() => setShowTextQuickTask(!showTextQuickTask)}>
            {showTextQuickTask ? (
              <FaRegWindowClose />
            ) : (
              <FaArrowAltCircleDown />
            )}
          </IconsText>
        </TextBoxContainer>
      </ProjectBoxContainer>
      {showTextQuickTask && (
        <ProjectText>
          Buitl with React.js, JavasScript, HTML, Tailwindcss, React Icons.
        </ProjectText>
      )}
    </>
  );
};

export default ProjectBox;
