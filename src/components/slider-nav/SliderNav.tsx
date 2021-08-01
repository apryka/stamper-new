import React from "react";
import styled, { css } from "styled-components";

import Chevron from "../../images/icons/chevron-icon.svg";

type Direction = "left" | "right";

const Container = styled.div<{ direction: Direction; inverse: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 150ms ease-out, border-width 150ms ease-out;
  cursor: pointer;

  ${(props) =>
    props.direction === "right" &&
    css`
      transform: rotate(180deg);
    `};

  ${(props) =>
    props.inverse &&
    css`
      border-color: #0147f5;

      path {
        fill: #0147f5;
      }
    `};

  &:hover {
    background-color: #0147f5;
    border-color: transparent;

    ${(props) =>
      props.inverse &&
      css`
        path {
          fill: #fff;
        }
      `};
  }
`;

type Props = {
  direction?: Direction;
  inverse?: boolean;
  onClick: () => void;
};

const SliderNav: React.FC<Props> = ({
  direction = "left",
  inverse = false,
  onClick,
}) => {
  return (
    <Container direction={direction} inverse={inverse} onClick={onClick}>
      <Chevron />
    </Container>
  );
};

export { SliderNav };
