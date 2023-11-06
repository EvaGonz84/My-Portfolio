import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  ProjectBoxContainer,
  LinksProject,
  ImgProject,
  TextBoxContainer,
  ImgContainer,
  ProjectText,
} from "./ProjectBox.styles";
import FitnessAppImg from "../../assets/FitnessProject.jpg";
import PortfolioImg from "../../assets/MyPortfolio.jpg";
import DBreadImg from "../../assets/Ecommerce.jpg";
import QuickTaskImg from "../../assets/QuickTask.JPG";

const ProjectBox = () => {
  const projects = [
    {
      title: "Fitness App",
      description:
        " Fitness App is a website I created from scratch during the Bootcamp. You can search for different types of training by choosing a muscle group",
      img: FitnessAppImg,
      alt: "fitness-app-project",
      path: " https://evagonz84.github.io/Fitness-App/",
      github: "https://github.com/EvaGonz84/Fitness-App.git",
      text: "Buitl with React.js, JavasScript, HTML, CSS, React Router, external API, context API,React Hook Form, Styled Components ",
    },
    {
      title: "My Portfolio",
      description:
        "My portfolio is a website created with React. You can find my resume, education and my work",
      img: PortfolioImg,
      alt: "my-portfolio-project",
      path: "https://evagonzalez.net",
      github: "https://github.com/EvaGonz84/My-Portfolio.git",
      text: "Built with React.js, Javascript, HTML, CSS, React Router, external API, Context API, React Hook Form, Styled Components",
    },
    {
      title: "DBread",
      description:
        "DBread is a website created with React and Tailwindcss. You can browse the app to find the product information and add the desired quantity to the cart",
      img: DBreadImg,
      alt: "dbread-project",
      path: "https://e-commerce-enero-2023.netlify.app/",
      github: "https://github.com/EvaGonz84/React-ecommerce.git",
      text: "Built with React.js, Javascript, HTML, Tailwindcss, React Router, Context API, React Hook Form",
    },
    {
      title: "QuickTask",
      description:
        "QuickTask is a React.js CRUD application. You can manage your tasks in seconds easily",
      img: QuickTaskImg,
      alt: "quicktask-project",
      path: "https://quicktask.netlify.app/",
      github: "https://github.com/EvaGonz84/Task-list-React-and-Tailwindcss",
      text: "Buitl with React.js, JavasScript, HTML, Tailwindcss, React Icons",
    },
  ];

  return (
    <>
      {projects.map((project) => {
        return (
          <div key={project.title}>
            <ProjectBoxContainer>
              <ImgContainer>
                <a href={project.path} target="blank">
                  <ImgProject src={project.img} alt={project.alt} />
                </a>
              </ImgContainer>

              <TextBoxContainer>
                <h3>{project.title}</h3>
                <LinksProject>
                  <a href={project.path} target="blank">
                    <FaExternalLinkAlt />
                  </a>
                  <a href={project.github} target="blank">
                    <FaGithub />
                  </a>
                </LinksProject>
                <p>{project.description}</p>
              </TextBoxContainer>
            </ProjectBoxContainer>
            <ProjectText>{project.text}</ProjectText>
          </div>
        );
      })}
    </>
  );
};

export default ProjectBox;
