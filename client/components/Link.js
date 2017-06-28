import React from "react";
import styled from "styled-components";
import { componentFromProp } from "recompose";

import colors from "../colors";

const Link = componentFromProp("component");

export default styled(Link)`
  color: ${() => colors.pastelGreen};
  text-transform: uppercase;
  text-decoration: none;
`;
