import React from "react";
import styled from "styled-components";
import { motion, useMotionValue, MotionProps } from "framer-motion";

import UserGrid1 from "../../images/icons/user-grid-1.svg";
import UserGrid2 from "../../images/icons/user-grid-2.svg";
import UserGrid3 from "../../images/icons/user-grid-3.svg";

type Props = {
  variant: number;
};

const BackgroundContainer = styled(motion.div)<MotionProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Container = styled.div`
  position: relative;
  min-width: ${(props) => (props.theme.screens.md ? "100%" : "560px")};
  text-align: center;
`;

const MotionBackground: React.FC<Props> = ({ variant = 0, children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const wrapperRef = React.useRef(null);

  const handleMouse = (event: React.MouseEvent) => {
    if (!wrapperRef.current) return;
    const {
      left,
      top,
      width,
      height,
    } = wrapperRef.current.getBoundingClientRect();
    x.set((left + 0.5 * width - event.clientX) / 15);
    y.set((top + 0.5 * height - event.clientY) / 15);
  };

  const renderBackground = () => {
    switch (variant) {
      case 1:
        return <UserGrid2 />;
      case 2:
        return <UserGrid3 />;
      default:
        return <UserGrid1 />;
    }
  };

  return (
    <Container ref={wrapperRef} onMouseMove={handleMouse}>
      <BackgroundContainer initial={{ x: 0, y: 0 }} x={x} y={y}>
        {renderBackground()}
      </BackgroundContainer>
      {children}
    </Container>
  );
};

export { MotionBackground };
