import React from "react";
import styled from "styled-components";
// import 'fontsource-nunito';

import background from "../../images/dropdown-icon.svg";
import { Option } from "./types";

const Switcher = styled.select`
  font-size: 12px;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  padding: 5px 15px 5px 10px;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 28px;
  align-self: center;
  margin-left: auto;

  appearance: none;
  cursor: pointer;
  background: url(${background}) 80% 50% no-repeat;
`;

type Props = {
  options: Option[];
};

const LanguageSwitcher: React.FC<Props> = ({ options }) => {
  return (
    <Switcher title="language">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Switcher>
  );
};

export { LanguageSwitcher };
