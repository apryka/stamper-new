import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { layout, LayoutProps } from "styled-system";
import { useTheme } from "../../styles";

import { Chevron } from "../chevron";
import { Rotate } from "../rotate";

import { logos as data } from "./logos";

import { Direction } from "./types";

const LogoContainer = styled(motion.div).attrs(() => ({
  whileHover: { scale: 1.4 },
}))`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #eaf0fe;
  box-shadow: 0px 15px 30px rgba(0, 70, 245, 0.1);
  cursor: pointer;
  overflow: hidden;

  img {
    user-select: none;
  }
`;

const Nav = styled.div`
  display: ${(props) => (props.theme.screens.md ? "none" : "flex")};
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  transition: background-color 150ms ease-out;
  cursor: pointer;

  &:hover {
    background-color: #0046f5;

    path {
      fill: #fff;
    }
  }
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 95px;
  flex-wrap: no-wrap;
  min-width: 0;
`;

const Container = styled.div<LayoutProps & { x?: number }>`
  display: flex;
  align-items: center;
  column-gap: 70px;
  flex-wrap: no-wrap;

  ${layout};

  ${(props) =>
    props.x &&
    css`
      transform: translateX(${props.x}px);
    `};
`;

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const MobileNav = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const MobileNavItem = styled.div<{ isActive?: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: #e0e0e0;
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    css`
      background-color: transparent;
      border-color: #0046f5;
    `};
`;

const visibleItem = 5;

const LogoSlider: React.FC = () => {
  const [logos, setLogos] = React.useState(data);

  const handleSlide = (direction: Direction) => {
    if (direction === "prev") {
      const [last] = logos.slice(-1);
      const rest = logos.slice(0, -1);
      setLogos([last, ...rest]);
    }

    if (direction === "next") {
      const [first, ...rest] = logos;
      setLogos([...rest, first]);
    }
  };

  const timerRef = React.useRef();

  const callback = () => handleSlide("next");

  React.useEffect(() => {
    timerRef.current = callback;
  });

  React.useEffect(() => {
    function tick() {
      timerRef.current();
    }

    let id = setInterval(tick, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <Container>
      <Nav onClick={() => handleSlide("prev")}>
        <Chevron color="#0046F5" />
      </Nav>
      <Slider>
        {logos.map(
          ({ src, alt }, idx) =>
            idx < visibleItem && (
              <LogoContainer key={alt}>
                <img src={src} alt={alt} />
              </LogoContainer>
            )
        )}
      </Slider>
      <Nav onClick={() => handleSlide("next")}>
        <Rotate>
          <Chevron color="#0046F5" />
        </Rotate>
      </Nav>
    </Container>
  );
};

// const LogoSlider: React.FC = () => {
//   const [index, setIndex] = React.useState(0);
//   const [[containerWidth, wrapperWidth], setContainerWidth] = React.useState([0, 0]);
//   const containerRef = React.useRef(null);
//   const wrapperRef = React.useRef(null);

//   React.useEffect(() => {
//     if (containerRef.current && wrapperRef.current) {
//       setContainerWidth([containerRef.current.offsetWidth, wrapperRef.current.offsetWidth]);
//     }
//   }, [containerRef.current, wrapperRef.current]);

//   const handleClick = (direction: Direction) => {
//     if (direction === 'prev') {
//       if (index === 0 ) return;
//       setIndex(index-1);
//     }
//     if (direction === 'next') {
//       if (index === logos.length) return;
//       setIndex(index+1);
//     }
//   }

//   const handleMobileClick = (idx: number) => setIndex(idx);
//   console.log('x', 0.5 * containerWidth - 200 - 50 - index * 170, containerWidth);

//   const x = ((containerWidth - wrapperWidth) / 2) + 0.5 * wrapperWidth - 50 - index * 170;
//   return (
//     <>
//     <Container>
//       <Nav isDisabled={index === 0} onClick={() => handleClick('prev')}><Chevron color='#0046F5' /></Nav>
//       <Slider>
//         {logos.map(({src, alt}, idx) => idx >= index && idx < index+size && <LogoContainer key={alt}><img src={src} alt={alt} /></LogoContainer>)}
//       </Slider>
//       <Nav isDisabled={index === logos.length - 1 - size} onClick={() => handleClick('next')}><Rotate><Chevron color='#0046F5' /></Rotate></Nav>
//     </Container>
//     <MobileContainer ref={wrapperRef}>
//       <Container height={160} ref={containerRef} x={x}>
//         {logos.map(({src, alt}) => <LogoContainer key={alt}><img src={src} alt={alt} /></LogoContainer>)}
//       </Container>
//       <MobileNav>
//         {logos.map(({ alt }, idx) => <MobileNavItem key={`mobile-${alt}`} isActive={index === idx} onClick={() => handleMobileClick(idx)} />)}
//       </MobileNav>
//     </MobileContainer>
//     </>
//   );
// };

export { LogoSlider };
