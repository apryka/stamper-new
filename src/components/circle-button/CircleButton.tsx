import React from "react";
import styled, { css } from "styled-components";
import { transparentize } from "polished";
import { useTheme } from "../../styles";

import Arrow from "../../images/icons/button-arrow-icon.svg";

const baseColor = "#0147F5";

type Props = {
  width: number;
  height: number;
  baseColor: string;
  transparentize: number;
};

const Container = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const Circle = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  transition: background-color 250ms ease-in-out;

  ${(props) => css`
    width: ${props.width}px;
    height: ${props.height}px;
    background: ${transparentize(props.transparentize, props.baseColor)};
  `};
`;

const CircleButton: React.FC = () => {
  const [isActive, setActive] = React.useState(false);

  return (
    <Container
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <Circle
        baseColor={baseColor}
        width={129}
        height={129}
        transparentize={isActive ? 0.7 : 0.85}
      >
        <Circle
          baseColor={baseColor}
          width={95}
          height={95}
          transparentize={isActive ? 0.5 : 0.6}
        >
          <Circle
            baseColor={baseColor}
            width={61}
            height={61}
            transparentize={0}
          >
            <Arrow />
          </Circle>
        </Circle>
      </Circle>
    </Container>
  );
};

export { CircleButton };
