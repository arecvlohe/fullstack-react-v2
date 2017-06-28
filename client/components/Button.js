import React from "react";
import styled from "styled-components";
import { componentFromProp } from "recompose";

const Button = componentFromProp("component");

export default styled(Button)`
  text-decoration: none;
  text-transform: uppercase;
  border: 1px solid #222;
  padding: 10px 30px;
  border-radius: 2em;
  &:visited, &:focus, &:active {
    color: #222;
  }
`;
