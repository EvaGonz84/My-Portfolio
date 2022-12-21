import { useState, useEffect } from "react";
import { BackButton } from "./BackToTopButton.styles";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    scroll.scrollToTop(570);
  };

  return (
    <>
      {backToTopButton && (
        <BackButton onClick={scrollUp}>
          <FaArrowAltCircleUp />
        </BackButton>
      )}
    </>
  );
};

export default BackToTopButton;
