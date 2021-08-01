import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledButton = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#fff"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <StyledButton onClick={toggle}>
    <svg width="33" height="26" viewBox="0 0 33 26">
      <Path
        variants={{
          closed: { d: "M 2 2 L 31 2" },
          open: { d: "M 2 2 L 31 24" },
        }}
      />
      <Path
        d="M 2 13 L 31 13"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 24 L 31 24" },
          open: { d: "M 2 24 L 31 2" },
        }}
      />
    </svg>
  </StyledButton>
);

export { MenuToggle };
