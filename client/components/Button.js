import React from "react";
import styled from "styled-components";
import { componentFromProp } from "recompose";

import colors from "../colors";

const Button = componentFromProp("component");

export default styled(Button)`
  background: ${props => (props.primary ? colors.coral : colors.white)};
  color: ${props => (props.primary ? `${colors.white}` : `${colors.black}`)};
  font-size: 1em;
  text-decoration: none;
  text-transform: uppercase;
  border: ${props =>
    props.primary ? `1px solid ${colors.coral}` : `1px solid ${colors.black}`};
  padding: 10px 30px;
  transition: all .3s ease-in-out 0s;
  &:visited, &:focus, &:active {
    color: ${props => (props.primary ? `${colors.white}` : `${colors.black}`)};
    outline: 0;
  }
  &:hover {
    cursor: pointer;
    background: ${props => (props.primary ? colors.white : colors.black)};
    color: ${props => (props.primary ? `${colors.coral}` : `${colors.white}`)};
  }
`;
