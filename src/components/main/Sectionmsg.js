import React, { Fragment, useState } from "react";
import Modal from "../UIElements/Modal";
import "./Sectionmsg.css";

const Sectionmsg = (props) => {
  const [myState, setMyState] = useState(false);

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [enteredMessage, setEnteredMessage] = useState("");
  const [enteredMessageTouched, setEnteredMessageTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const enteredEmailIsInValid = !enteredEmailIsValid && enteredEmailTouched;

  const enteredMessageIsValid = enteredMessage.trim() !== "";
  const messageInputIsInValid = !enteredMessageIsValid && enteredMessageTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const messageInputChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const messageInputBlurHandler = (event) => {
    setEnteredMessageTouched(true);
  };

  const formSubmissionHandler = async (event) => {
    event.preventDefault();
    setMyState(true);
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: enteredName,
          email: enteredEmail,
          mg: enteredMessage,
        }),
      };

      const responseData = await fetch(
        "https://omar321api.onrender.com/api/messages",
        requestOptions
      );
    } catch (err) {
      console.log(err.message);
    }
    setMyState(false);
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    setEnteredName("");
    setEnteredNameTouched(false);

    setEnteredEmail("");
    setEnteredEmailTouched(false);

    setEnteredMessage("");
    setEnteredMessageTouched(false);
    props.onClick();
  };

  const cartModelContent = (
    <Fragment>
      <form onSubmit={formSubmissionHandler} className="form-control">
        <div className="div1">
          {myState && <div>Please wait...</div>}
          <label htmlFor="name">Name</label>
          <input
            value={enteredName}
            id="name"
            name="name"
            type="text"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
          />
          {nameInputIsInValid && (
            <p className="error-text">Name must not be empty</p>
          )}
        </div>
        <div className="div1">
          <label htmlFor="email">Email</label>
          <input
            value={enteredEmail}
            id="email"
            name="email"
            type="email"
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
          />
          {enteredEmailIsInValid && (
            <p className="error-text">please Enter a valid Email</p>
          )}
        </div>
        <div className="div1">
          <label htmlFor="message">Message</label>
          <textarea
            value={enteredMessage}
            id="message"
            name="message"
            type="text"
            onChange={messageInputChangeHandler}
            onBlur={messageInputBlurHandler}
            rows="5"
          ></textarea>
          {messageInputIsInValid && (
            <p className="error-text">Message must not be empty</p>
          )}
        </div>
        <div className="messageBtn">
          <button type="submit" className="btnone" disabled={!formIsValid}>
            Send Message
          </button>
        </div>
      </form>
    </Fragment>
  );
  return <Modal onClose={props.onClick}>{cartModelContent}</Modal>;
};

export default Sectionmsg;
