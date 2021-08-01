import React from "react";
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import ReactPlayer from "react-player";
import { transparentize } from "polished";

import { SliderNav } from "../slider-nav";
import { CircleButton } from "../circle-button";

import VideoBg from "../../images/video-bg.svg";
import { data } from "./constants";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: ${(props) => props.theme.screens.md ? 'wrap' : 'nowrap'};
  gap: 20px 10px;
  justify-content: center;
`;

const Nav = styled.div`
  flex-shrink: 0;
`;

const Main = styled.div`
  flex: 1;
  overflow: hidden;
  background: url(${VideoBg}) 50% 0% no-repeat;
  position: relative;
  height: 460px;

  ${(props) => props.theme.screens.md && css`flex-basis: 100%; order: -1`};
`;

const Player = styled.div`
  width: 640px;
  height: 360px;
  border-radius: 30px;
  overflow: hidden;
  background-color: lightgray;
`;

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  row-gap: 34px;
  margin: auto;
  width: 640px;
  height: 460px;
  position: absolute;
  left: 50%;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
`;

const Name = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 700;
  color: #0046f5;
  font-size: 16px;
  line-height: 24px;
`;

const Position = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  color: #909090;
  font-size: 14px;
  line-height: 24px;
`;

const Avatar = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: ${transparentize(0.9, "#709BE7")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
`;

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    zIndex: 0,
  }),
  center: {
    zIndex: 1,
    x: "-50%",
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const VideoSlider: React.FC = () => {
  const { avatar } = useStaticQuery(graphql`
    query {
      avatar: allFile(
        filter: { extension: { eq: "png" }, name: { regex: "/avatar/" } }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(width: 51, height: 51, pngQuality: 90, webpQuality: 90) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const [[activeSlide, direction], setActiveSlide] = React.useState([0, 0]);

  const paginate = (direction: number) => {
    const index = activeSlide + direction;
    if (index < 0 || index > data.length - 1) return;
    setActiveSlide([index, direction]);
  };

  return (
    <Container>
      <Nav>
        {activeSlide > 0 && <SliderNav inverse onClick={() => paginate(-1)} />}
      </Nav>
      <Main>
        <AnimatePresence initial={false} custom={direction}>
          <Wrapper
            key={activeSlide}
            variants={variants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            <Player>
              <ReactPlayer
                url={data[activeSlide].videoUrl}
                playIcon={<CircleButton />}
                light
                width={640}
              />
            </Player>
            <Info>
              <Avatar>
                <Img
                  fixed={
                    avatar.edges[data[activeSlide].avatarId].node
                      .childImageSharp.fixed
                  }
                  alt=""
                />
              </Avatar>
              <div>
                <Name>{data[activeSlide].name}</Name>
                <Position>{data[activeSlide].position}</Position>
              </div>
            </Info>
          </Wrapper>
        </AnimatePresence>
      </Main>
      <Nav>
        {activeSlide < data.length - 1 && (
          <SliderNav inverse direction="right" onClick={() => paginate(1)} />
        )}
      </Nav>
    </Container>
  );
};

export { VideoSlider };
