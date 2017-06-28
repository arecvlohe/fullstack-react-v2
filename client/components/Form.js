import React from "react";
import styled from "styled-components";
import Button from "./Button";

import colors from "../colors";

function Form({ handleSubmit, inputs, children, className, submitText }) {
  return (
    <form onSubmit={handleSubmit} className={className}>
      {inputs.map((input, i) => {
        return (
          <div className="form-input" key={`form-input-${i}`}>
            {input}
          </div>
        );
      })}
      {children}
      <Button type="submit" component="button" primary>
        {submitText}
      </Button>
    </form>
  );
}

export default styled(Form)`
  input[type=text] {
    padding: 5px 0;
    box-sizing: border-box;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid gainsboro;
    outline: none;
    width: 50%;
    color: ${() => colors.black};
    caret-color: ${() => colors.coral};
    &::placeholder {
      color: gainsboro;
    }
  }
  .form-input {
    padding: 20px 0;
  }
`;
