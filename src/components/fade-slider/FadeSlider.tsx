import React from "react";
import styled, { css } from "styled-components";
import { layout, LayoutProps } from "styled-system";
import { motion, AnimatePresence } from "framer-motion";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Slide from "./Slide";
import { Dot } from "../dot";
import { SliderNav } from "../slider-nav";
// import { Rotate } from "../rotate";

import { Direction } from "./types";

import { slides } from "./slides";

const Navigation = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  column-gap: 9px;
  /* margin-top: 140px; */
  margin-top: ${(props) => (props.theme.screens.md ? "40px" : "140px")};
`;

const Container = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 42px;

  flex-direction: ${(props) => (props.theme.screens.md ? "column" : "row")};
`;

const Header = styled.h4`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 50px;
  color: #709be7;

  strong {
    font-weight: 700;
    color: #fff;
  }
`;

const HeaderContainer = styled.div`
  margin-bottom: 120px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-bottom: 54px;

  ${(props) =>
    props.theme.screens.md &&
    css`
      margin-top: 54px;
      margin-bottom: 0;
      justify-content: center;
      order: 10;
    `};
`;

const WrapperSection = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;

  ${layout};
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  ${(props) =>
    props.theme.screens.md &&
    css`
      width: 100%;
    `};
`;

const Image = styled(motion.div)<{ isActive: boolean }>`
  filter: ${({ isActive }) => (isActive ? "blur(0)" : "blur(5px)")};

  ${(props) =>
    props.theme.screens.md &&
    css`
      min-width: 0;
    `};
`;

const variants = {
  active: {
    scale: 1,
    // filter: "blur(0)",
  },
  inactive: {
    scale: 0.8,
    // filter: "blur(5px)",
  },
};

const FadeSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "png" }
          relativePath: { regex: "/fade-slider/" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(width: 245, height: 444) {
                ...GatsbyImageSharpFixed_withWebp
                width
                height
              }
            }
          }
        }
      }
    }
  `);

  // const dots = [];
  // for (let idx = 0; idx < slides.length; idx++) {
  //   const isActive = idx === activeSlide;
  //   dots.push(
  //     <Dot
  //       isActive={isActive}
  //       onClick={() => (isActive ? null : setActiveSlide(idx))}
  //     ></Dot>
  //   );
  // }

  const handleClick = (direction: Direction) => {
    if (direction === "prev") {
      if (activeSlide === 0) return;
      setActiveSlide(activeSlide - 1);
    }

    if (direction === "next") {
      if (activeSlide === edges.length - 1) return;
      setActiveSlide(activeSlide + 1);
    }
  };

  return (
    <Container>
      <ImageContainer>
        {edges.map(
          (
            {
              node: {
                childImageSharp: { fixed },
              },
            }: any,
            idx: number
          ) => (
            <Image
              key={fixed.src}
              variants={variants}
              animate={idx === activeSlide ? "active" : "inactive"}
              isActive={idx === activeSlide}
            >
              <Img fixed={fixed} />
            </Image>
          )
        )}
      </ImageContainer>
      <WrapperSection maxWidth={410}>
        <Buttons>
          <SliderNav onClick={() => handleClick("prev")} />
          <SliderNav direction="right" onClick={() => handleClick("next")} />
        </Buttons>
        <AnimatePresence exitBeforeEnter>
          <Slide key={slides[activeSlide].title} {...slides[activeSlide]} />
        </AnimatePresence>
        {/* <Navigation>{dots}</Navigation> */}
        <Navigation>
          {slides.map((_slide, idx) => (
            <Dot
              isActive={idx === activeSlide}
              onClick={() => (idx === activeSlide ? null : setActiveSlide(idx))}
            />
          ))}
        </Navigation>
      </WrapperSection>
    </Container>
  );

  // return (
  //   <Container>
  //     <WrapperSection>
  //       <HeaderContainer>
  //         <Header>
  //           <strong>To tylko</strong>
  //           <br />3 kroki!
  //         </Header>
  //       </HeaderContainer>
  //       <Buttons>
  //         <SliderNav onClick={() => handleClick("prev")} />
  //         <Rotate>
  //           <SliderNav onClick={() => handleClick("next")} />
  //         </Rotate>
  //       </Buttons>
  //     </WrapperSection>
  //     <ImageContainer>
  //       <Img fixed={file.childImageSharp.fixed} />
  //     </ImageContainer>
  //     <WrapperSection maxWidth={410}>
  //       <AnimatePresence exitBeforeEnter>
  //         <Slide key={slides[activeSlide].title} {...slides[activeSlide]} />
  //       </AnimatePresence>
  //       {/* {slides.map((slide) => <Slide key={slide.title} {...slide} />)} */}

  //       <Navigation>{dots}</Navigation>
  //     </WrapperSection>
  //   </Container>
  // );
};

export { FadeSlider };
