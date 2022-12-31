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
          Please, if you want to get in touch with me, write me a message via this form and
          I will answer as soon as possible. Thank you!
        </ContactSubtitle>
      </ContactContainer>
      <Form />
    </>
  );
};

export default Contact;
