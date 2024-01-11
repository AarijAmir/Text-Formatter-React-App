// import React, { useState } from "react";
import React, { useState } from "react";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

/**
 *
 */
const Textform = (props) => {
  const [text, setText] = useState("");

  const handleUppercaseOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("message has been converted into upper-text", "success");
  };
  const handleLowercaseOnClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("message has been converted into lower-text", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClear = () => {
    setText("");
  };
  return (
    <>
      <h1>{props.count}</h1>
      <div
        className="container"
        style={{ backgroundColor: props.mode === "dark" ? "grey" : "white" }}
      >
        <div
          className="container"
          style={{ backgroundColor: props.mode === "dark" ? "grey" : "white" }}
        >
          <h1>{props.heading}</h1>
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          >
            Example Textarea {text}
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows={8}
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={handleUppercaseOnClick}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={handleLowercaseOnClick}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={handleClear}
          >
            Clear Text
          </button>
          <div className="container my-2">
            <h1>Your text summary</h1>
            <p>
              {text.split(/\s+/).filter((element) => element.length !== 0)
                .length + " "}
              words and {text.length} characters
            </p>
            <p>
              {0.008 *
                text.split(" ").filter((element) => element.length !== 0)
                  .length +
                " "}
              time required to read words
              {" " + text.length}
            </p>
            <h2>Preview</h2>
            <p>{text.length === 0 ? "Waiting! Write something" : text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

// #endregion

export default Textform;
