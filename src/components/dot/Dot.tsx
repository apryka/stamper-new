import styled, { css } from "styled-components";

const Dot = styled.div<{ isActive: boolean }>`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid transparent;
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    css`
      border-color: #709be7;
      background-color: transparent;
    `};
`;
export { Dot };
