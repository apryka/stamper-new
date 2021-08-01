import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  border-radius: 4px;
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

const Icon = styled.svg`
  fill: none;
  width: 9px;
  height: 7px;
  visibility: hidden;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  background-color: #8ab4fe;
  border-radius: 2px;
  transition: background-color 150ms;

  ${HiddenCheckbox}:checked + & {
    background-color: #0ce8f9;

    ${Icon} {
      visibility: visible;
    }
  }
`;

const Checkbox = ({ ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox {...props} />
    <StyledCheckbox>
      <Icon>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.828.737a.587.587 0 010 .83L4.133 6.262a.587.587 0 01-.83 0L.956 3.915a.587.587 0 01.83-.83l1.932 1.932 4.28-4.28a.587.587 0 01.83 0z"
          fill="#0046F5"
        />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export { Checkbox };
