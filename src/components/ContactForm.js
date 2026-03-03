import React, { useReducer, useRef, useState } from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-weight: 700;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 15px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const TextArea = styled.textarea`
  width: 100%;
  margin-bottom: 15px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  background: #1e6dfb;
  border: none;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: 600;
  color: white;

  &:hover {
    background: #1559d6;
  }
`;

const initialState = {
  name: "",
  email: "",
  message: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function ContactForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [submitted, setSubmitted] = useState(false);
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.name && state.email && state.message) {
      setSubmitted(true);
      dispatch({ type: "RESET" });
      nameRef.current.focus();
    }
  };

  return (
    <>
      <Title>Do You Have Any Question?</Title>

      {submitted && <p>Message Sent Successfully</p>}

      <form onSubmit={handleSubmit}>
        <Input
          ref={nameRef}
          type="text"
          placeholder="Your Name"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "SET_FIELD", field: "name", value: e.target.value })
          }
        />

        <Input
          type="email"
          placeholder="Your Email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_FIELD", field: "email", value: e.target.value })
          }
        />

        <TextArea
          rows="4"
          placeholder="Your Message"
          value={state.message}
          onChange={(e) =>
            dispatch({ type: "SET_FIELD", field: "message", value: e.target.value })
          }
        />

        <Button type="submit">Send Message</Button>
      </form>
    </>
  );
}

export default ContactForm;