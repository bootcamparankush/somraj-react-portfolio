import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
// Custom CSS Style
const styles = {
  cardBodyStyle: {
    padding: "10px",
    background: "#222831",
    opacity: "0.9",
    color: "white",
    paddingBottom: "50px",
  },
  formStyle: {
    margin: "10px 0",
  },
};
// Creates variables and sets states of '' for all
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  // handles wich error message to display
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };
  // validate fields
  const validateFields = () => {
    let isValid = true;
    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    }
    if (!validateEmail(email)) {
      setEmailError("Email is invalid");
      isValid = false;
    }
    if (!message.trim()) {
      setMessageError("Message is required");
      isValid = false;
    }
    return isValid;
  };
  // resets to '' after submitting
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      alert(`Hello ${name}`);
      setName("");
      setEmail("");
      setMessage("");
      setNameError("");
      setEmailError("");
      setMessageError("");
    }
  };
  // When user clicks away from inputs, check for value, otherwise sets the error message
  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      if (!value.trim()) {
        setNameError("Name is required");
      } else {
        setNameError("");
      }
    } else if (name === "email") {
      if (!validateEmail(value)) {
        setEmailError("Email is invalid");
      } else {
        setEmailError("");
      }
    } else {
      if (!value.trim()) {
        setMessageError("Message is required");
      } else {
        setMessageError("");
      }
    }
  };

  return (
    <div className="card" style={styles.cardBodyStyle}>
      <h4 className="card-header">Contact Me {name}</h4>
      <form className="form card-body">
        <input
          style={styles.formStyle}
          className="form-control"
          name="name"
          onBlur={handleBlur}
          onChange={handleInputChange}
          type="name"
          placeholder="Name"
          value={name}
        />
        {nameError && <p className="error-text">{nameError}</p>}
        <input
          style={styles.formStyle}
          className="form-control"
          name="email"
          onBlur={handleBlur}
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
          value={email}
        />
        {emailError && <p className="error-text">{emailError}</p>}
        <textarea
          style={styles.formStyle}
          className="form-control"
          name="message"
          onBlur={handleBlur}
          onChange={handleInputChange}
          value={message}
          placeholder="Message"
          rows="5"
        />
        {messageError && <p className="error-text">{messageError}</p>}

        <button
          style={styles.formStyle}
          className="btn btn-secondary"
          type="button"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
      {messageError && <p className="error-text">{messageError}</p>}
    </div>
  );
}

export default Contact;