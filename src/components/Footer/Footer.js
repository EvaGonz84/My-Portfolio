import {
  ContainerFooter,
  LinksContainer,
  Links,
  CopyContainer,
} from "./Footer.styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowAltCircleUp} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
   
    <ContainerFooter>
      <ScrollToTop smooth top="20" component={<FaArrowAltCircleUp/>} />
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
      <CopyContainer>
        <p>{`Copyright © Eva González ${year}`}</p>
      </CopyContainer>
    </ContainerFooter>
    
  );
};

export default Footer;
