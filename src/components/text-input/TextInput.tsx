import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  label: string;
  name: string;
  type?: "text" | "password" | "email";
};

const variants = {
  active: {
    y: -15,
    fontSize: "12px",
  },
  initial: {
    y: 0,
    fontSize: "16px",
  },
};

const StyledInput = styled.input`
  background: none;
  border: none;
  outline: none;
  font-family: Nunito, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #001331;
`;

const StyledLabel = styled(motion.label)`
  padding: 15px 19px;
  background-color: #fff;
  border-radius: 4px;
  border: 2px solid #fff;
  cursor: text;
  position: relative;
  display: inline-block;
`;

const StyledTitle = styled(motion.div).attrs(() => ({
  initial: "initial",
  variants,
}))`
  font-family: Nunito, sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  color: #7d7d7d;
  position: absolute;
  left: 21px;
`;

const TextInput: React.FC<Props> = ({ label, name, type = "text" }) => {
  const [isActive, setActive] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  return (
    <StyledLabel
      onFocus={() => !isActive && setActive(true)}
      onBlur={() => inputValue === "" && setActive(false)}
    >
      <AnimatePresence>
        <StyledTitle animate={isActive ? "active" : "initial"}>
          {label}
        </StyledTitle>
      </AnimatePresence>
      <StyledInput
        value={inputValue}
        type={type}
        name={name}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </StyledLabel>
  );
};

export { TextInput };
