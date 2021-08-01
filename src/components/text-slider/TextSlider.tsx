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

import { Slide as SlideType, Direction } from "./types";

const Navigation = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  column-gap: 9px;
  margin-top: 50px;
`;

const Container = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  ${(props) =>
    props.theme.screens.md &&
    css`
      display: none;
    `};
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const WrapperSection = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;

  ${layout};

  &:first-child {
    ${(props) =>
      props.theme.screens.md &&
      css`
        order: 20;
        margin-top: 40px;
      `};
  }
`;

const ImageContainer = styled(motion.div)`
  flex-shrink: 0;
`;

type Props = {
  slides: SlideType[];
  currentSlide?: number;
};

const TextSlider: React.FC<Props> = ({ slides, currentSlide = 0 }) => {
  const [activeSlide, setActiveSlide] = React.useState(currentSlide);

  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        filter: { extension: { eq: "png" }, name: { regex: "/slider-step/" } }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(width: 265, height: 480) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  `);

  // console.log(query);

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
      if (activeSlide === slides.length - 1) return;
      setActiveSlide(activeSlide + 1);
    }
  };

  return (
    <Container>
      <WrapperSection>
        <HeaderContainer>
          <Header>
            <strong>To tylko</strong>
            <br />3 kroki!
          </Header>
        </HeaderContainer>
        <Buttons>
          <SliderNav onClick={() => handleClick("prev")} />
          <SliderNav direction="right" onClick={() => handleClick("next")} />
        </Buttons>
      </WrapperSection>
      <ImageContainer
        key={activeSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.3 },
        }}
      >
        <Img fixed={allFile.edges[activeSlide].node.childImageSharp.fixed} />
      </ImageContainer>
      <WrapperSection maxWidth={410}>
        <AnimatePresence exitBeforeEnter>
          <Slide key={slides[activeSlide].title} {...slides[activeSlide]} />
        </AnimatePresence>
        {/* {slides.map((slide) => <Slide key={slide.title} {...slide} />)} */}

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
};

export { TextSlider };
