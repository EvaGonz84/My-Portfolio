import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../Button.styles";
import {
  FormContainer,
  InputName,
  InputEmail,
  InputText,
  InputContainerName,
  InputContainerEmail,
  Label,
  Span,
  TextContainer,
} from "./Form.Styles";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  const form = useRef();
  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (e) => {
    emailjs
      .sendForm(
        "service_aeixiuw",
        "template_sgl44bd",
        form.current,
        "zF-CiFaWj1ONk0OqR"
      )
      .then(
        (result) => {
          toast.success("Success!!");
        },
        (error) => {
          toast.error("Error!!");
        }
      );
    reset();
  };

  return (
    <FormContainer ref={form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainerName>
        <Label>Enter your name</Label>
        <InputName isRight={errors.user_name}
          type="text"
          name="user_name"
          autoComplete="off"
          placeholder="Name"
          {...register("user_name", {
            required: {
              value: true,
              message: "⚠ A name is required",
            },
            minLength: {
              value: 2,
              message: "⚠ Minimum 2 letters",
            },
          })}
        ></InputName>
        {errors.user_name && <Span>{errors.user_name.message}</Span>}
      </InputContainerName>
      <InputContainerEmail>
        <Label>Enter your Email</Label>
        <InputEmail isRight={errors.user_email}
          type="email"
          name="user_email"
          autoComplete="off"
          placeholder="Email"
          {...register("user_email", {
            required: {
              value: true,
              message: "⚠ An email is required",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "⚠ The email is not correct",
            },
          })}
        ></InputEmail>
        {errors.user_email && <Span>{errors.user_email.message}</Span>}
      </InputContainerEmail>

      <TextContainer>
        <Label>Message</Label>
        <InputText isRight={errors.message}
          type="text"
          name="message"
          placeholder="Writte something..."
          {...register("message", {
            required: {
              value: true,
              message: "⚠ A message is required",
            },
          })}
        />
        {errors.message && <Span>{errors.message.message}</Span>}
      </TextContainer>

      <Button
        type="submit"
        value="Send"
        style={{
          display: "block",

          margin: "40px auto",
        }}
      >
        Contact me
      </Button>
      <Toaster position="	top-center" />
    </FormContainer>
  );
};

export default Form;
