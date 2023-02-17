import styled from "styled-components";

const desktopStartWidth = 900;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #2a536e;
  margin: 50px 140px 100px 140px;
  padding: 20px 30px 20px 20px;

  ${mobile} {
    margin: 20px 20px 80px 20px;
  } ;
`;

export const InputContainerName = styled.div`
  width: 55%;
  margin: 20px auto;
  ${mobile} {
    width: 100%;
  }
`;

export const InputContainerEmail = styled.div`
  width: 55%;
  margin: 20px auto;
  ${mobile} {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  width: 55%;
  margin: 20px auto;
  ${mobile} {
    width: 100%;
  }
`;

export const InputName = styled.input`
  padding: 0.8em;
  border-radius: 2px;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 0.5em;
  background-color: #f1f1f1;
  color: #f26728;
  outline: none;
  font-weight: bold;
  border: ${({ isRight }) => (isRight ? "2px solid red" : "none")};
  &:focus {
    background-color: white;
    border: ${({ isRight }) => (isRight ? "2px solid red" : "none")};
  }

  ${mobile} {
    width: 95%;
  }
`;

export const InputText = styled.textarea`
  padding: 0.8em;
  border-radius: 2px;
  font-size: 1rem;
  width: 100%;
  height: 100px;
  margin-bottom: 0.5em;
  background-color: #f1f1f1;
  color: #f26728;
  outline: none;
  font-weight: bold;
  border: ${({ isRight }) => (isRight ? "2px solid red" : "none")};
  box-sizing: inherit;

  &:focus {
    background-color: white;
    border: ${({ isRight }) => (isRight ? "2px solid red" : "none")};
  }

  ${mobile} {
    width: 95%;
  }
`;

export const InputEmail = styled.input`
  padding: 0.8em;
  border-radius: 2px;
  width: 100%;
  margin-bottom: 0.5em;
  background-color: #f1f1f1;
  font-size: 1rem;
  color: #f26728;
  font-weight: bold;
  outline: none;
  border: ${({ isRight }) => (isRight ? "2px solid red" : "none")};
  &:focus {
    background-color: white;
    border: ${({ isRight }) => (isRight ? "2px solid red" : "none")};
  }
  ${mobile} {
    width: 95%;
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;
  color: #f1f1f1;
  letter-spacing: 1px;
  margin-bottom: 0.5em;
  display: block;

  ${mobile} {
    font-size: 1.1rem;
  }
`;

export const Span = styled.span`
  color: red;
  margin-bottom: 0.5em;
  display: block;
`;
