import { Separator } from '../About/About.styles';
import { ProjectContainer, ProjectSubtitle, ProjectTitle } from './Project.Styles';
import ProjectBox from '../ProjectBox/ProjectBox';



const Project = () => {
  return (
    <>
    <ProjectContainer id='projects'>
        <ProjectTitle>Projects</ProjectTitle>
        <Separator />
        <ProjectSubtitle>I have enjoyed building some projects with React, using different components and functionalities. My projects have been developed with JavaScript, HTML and CSS incorporating some libraries like React Router or React Hook Form. Here you can see some of the projects I built.
           </ProjectSubtitle>
      </ProjectContainer>
    <ProjectBox/> 
    </>
  )
}

export default Project;