import React from "react";
import { GlobalStyle } from "../GlobalStyle.styles";
import { NotFoundContainer, NotFoundMessage, Span } from "./NotFound.Styles";
import { Button } from "../Button.styles";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <GlobalStyle />
      <NotFoundContainer>
        <NotFoundMessage>
          <Span>404</Span>
          <br />
          The page you are looking for doesn't exist!
        </NotFoundMessage>
        <Button onClick={handleClick}>Return home</Button>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;
