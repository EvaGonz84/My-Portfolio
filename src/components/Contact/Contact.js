import { Separator } from "../About/About.styles";
import Form from "../Form/Form";
import {
  ContactContainer,
  ContactSubtitle,
  ContactTitle,
} from "./Contact.styles";

const Contact = () => {
  return (
    <>
      <ContactContainer id="contact">
        <ContactTitle>Contact</ContactTitle>
        <Separator />
        <ContactSubtitle>
          Please, if you want to contact me, write me a message on this form and
          I answer as soon as possible. Thank you!
        </ContactSubtitle>
      </ContactContainer>
      <Form />
    </>
  );
};

export default Contact;
