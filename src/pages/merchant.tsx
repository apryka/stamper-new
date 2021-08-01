import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import styled, { css, createGlobalStyle } from "styled-components";
import {
  background,
  BackgroundProps,
  color,
  ColorProps,
  space,
  SpaceProps,
} from "styled-system";
import { motion } from "framer-motion";
import { RouteComponentProps } from "@reach/router";
import ReactPlayer from "react-player/youtube";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

import { Container } from "../components/container";
import { Headline, Bold } from "../components/headline";
import { Description } from "../components/description";
import { Button, IconContainer } from "../components/button";
import {
  ContentGrid,
  Title,
  TitleBold,
  TextContainer as ContentGridTextContainer,
  Description as ContentGridDescription,
} from "../components/content-grid";
import { Newsletter } from "../components/newsletter";
import { TextSlider } from "../components/text-slider";
import { FadeSlider } from "../components/fade-slider";
import { SectionHeader, SectionSubtitle } from "../components/section-header";
import { Menu, MenuContainer } from "../components/menu";
import { MobileMenu } from "../components/mobile-menu";
import { Hero } from "../components/hero";
import { Map } from "../components/map";
import { VideoSlider } from "../components/video-slider";
import { OutlineButton } from "../components/outline-button";

import { CircleButton } from "../components/circle-button";
import { Checkbox } from "../components/checkbox";
import { MotionBackground } from "../components/motion-background";
import { Post } from "../components/post";
import { LogoSlider } from "../components/logo-slider";

import Android from "../images/icons/android-icon.svg";
import Apple from "../images/icons/apple-icon.svg";
import Arrow from "../images/icons/arrow-icon.svg";
import MerchantVideoApp from "../images/icons/merchant-video-app.svg";
import MerchantVideoCards from "../images/icons/merchant-video-cards.svg";
import MerchantVideoIcons from "../images/icons/merchant-video-icons.svg";
import Range from "../images/icons/range-icon.svg";
import Comfort from "../images/icons/comfort-icon.svg";
import Control from "../images/icons/control-icon.svg";
import Reward from "../images/icons/reward-icon.svg";
import StampApp from "../images/icons/stamp-app-icon.svg";
import Qr from "../images/icons/qr-icon.svg";
import Package from "../images/icons/package-icon.svg";
import Hand from "../images/icons/hand-icon.svg";
import Cards from "../images/icons/cards-icon.svg";
import AddStamp from "../images/icons/add-stamp-icon.svg";
import CollectPrize from "../images/icons/collect-prize-icon.svg";
import SubtractPoints from "../images/icons/subtract-points-icon.svg";
import Person from "../images/icons/person-icon.svg";
import CircleCheckbox from "../images/icons/circle-checkbox-icon.svg";

import CardContainerBg from "../images/card-container-bg.svg";

// import Bg from '../images/user-main-bg.svg';

import SectionImage from "../images/user-section-image.jpg";
import SliderBg from "../images/slider-section-bg.svg";
import UserGrid1 from "../images/user-grid-1.svg";
import UserGrid2 from "../images/user-grid-2.svg";
import UserGrid3 from "../images/user-grid-3.svg";
import MerchantVideoPoster from "../images/merchant-video-poster.png";
import WorkSectionBg from "../images/merchant-section-work-bg.svg";
import WorkSectionBgSmall from "../images/slider-section-bg-small.svg";
import WorkSectionItem from "../images/merchant-section-work-item.svg";
import WorkSectionItemSmall from "../images/merchant-section-work-item-small.svg";
import DifferenceSectionBg from "../images/merchant-section-difference-bg.svg";
import GreySectionTop from "../images/grey-section-top-bg.svg";
import GreySectionBottom from "../images/grey-section-bottom-bg.svg";

import { slides } from "../pages-config/user-config";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #F8FAFF;
  }

  .react-player__preview {
    background-size: auto;
    background-repeat: no-repeat;
  }
`;

const HeadlineContainer = styled.div`
  margin-bottom: 20px;
`;

const DescriptionContainer = styled.div`
  margin-bottom: 40px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: ${(props) => (props.theme.screens.md ? "column" : "row")};
  align-items: ${(props) => (props.theme.screens.md ? "stretch" : "center")};

  ${(props) =>
    props.theme.screens.md &&
    css`
      ${Button} {
        justify-content: center;
      }
    `};
`;

const MainSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) => (props.theme.screens.md ? "column" : "row")};
  padding-top: ${(props) => (props.theme.screens.md ? "126px" : "130px")};
  margin-bottom: 50px;
`;

const TextContainer = styled.div`
  flex-basis: ${(props) => (props.theme.screens.md ? "100%" : "480px")};
  margin-right: ${(props) => (props.theme.screens.md ? "0" : "150px")};
`;

const SectionBackground = styled.section<BackgroundProps>`
  position: relative;
  margin-top: -150px;
  z-index: -1;
  padding-top: 350px;
  padding-bottom: 234px;
  background-image: linear-gradient(
      180deg,
      rgba(196, 196, 196, 0) 0%,
      #000000 100%
    ),
    url(${SectionImage});
  background-repeat: no-repeat, no-repeat;
  background-position: 0 0, 50%;
  background-size: 100%, cover;

  ${background};
`;

const SectionTitle = styled.h5`
  margin: 0;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  line-height: 50px;
  text-align: center;
  color: #fff;

  font-size: ${(props) => (props.theme.screens.md ? "28px" : "36px")};
`;

const SectionDescription = styled.p`
  margin: 0;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

const SliderSection = styled.div`
  background: url(${SliderBg}) 0 0 no-repeat;
  background-size: cover;
  padding: 164px 0 126px 0;
`;

/***************************************************************
  Below are some examples of using styled-components with the
  theme and framer-motion.
/***************************************************************

/*
  1. A basic styled component using the theme.
*/
const StyledComponent1 = styled.p`
  color: ${(props) => props.theme.colors.orange};
  font-size: 1.2rem;
`;

/*
  2. A styled component that changes color based on the screen size
  using the theme.
*/
const StyledComponent2 = styled.p`
  color: ${({ theme }) =>
    theme.screens.sm ? theme.colors.blue : theme.colors.orange};
  font-size: 1.2rem;
`;

/*
  3. A styled component that extends a framer-motion component.
  (animation props applied in the component instance)
*/

const OrangeBlock = styled(motion.div)`
  background: ${(props) => props.theme.colors.orange};
  height: 100px;
  width: 100px;
  border-radius: 10px;
  margin: 10px;
`;

/*
  4. A styled component that extends a framer-motion component.
  (animation props applied in the styled-component definition
  via the attrs method)
*/
const BlueBlock = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 2 },
  whileHover: { scale: 0.8 },
}))`
  background: ${(props) => props.theme.colors.blue};
  height: 100px;
  width: 100px;
  border-radius: 10px;
  margin: 10px;
`;

const BlocksWrapper = styled.section`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const RoundedButton = styled.button`
  margin: 0;
  padding: 12px 23px;
  border: none;
  background-color: #0147f5;
  font-family: Nunito, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #fff;
  border-radius: 30px;
  display: inline-flex;
  align-items: center;
  column-gap: 17px;
  cursor: pointer;
  outline: none;

  svg {
    transform: translateX(0);
    transition: transform 150ms ease-out;
  }

  &:hover {
    svg {
      transform: translateX(6px);
    }
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  margin-top: ${(props) => (props.theme.screens.md ? "100px" : 0)};
`;

const VideoWrapperIcons = styled.div<{ type: "card" | "app" | "icons" }>`
  position: absolute;

  ${({ type }) =>
    type === "card" &&
    css`
      top: -30px;
      left: 0;
      z-index: 2;
    `};

  ${({ type }) =>
    type === "app" &&
    css`
      top: -50px;
      right: -117px;
    `};

  ${({ type }) =>
    type === "icons" &&
    css`
      top: -140px;
      right: 0;
    `};
`;

const CardContainer = styled.div`
  display: flex;
  gap: 40px 30px;
  justify-content: center;
  flex-direction: ${(props) => (props.theme.screens.md ? "column" : "row")};
`;

const Card = styled.div`
  background: #fff;
  /* width: 350px; */
  width: ${(props) => (props.theme.screens.md ? "100%" : "350px")};
  border-radius: 30px;
  padding: 40px 25px;
  text-align: center;
`;

const CardIcon = styled.div`
  margin-bottom: 36px;
`;

const CardTitle = styled.h6`
  margin: 0 0 8px 0;
  padding: 0;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #0147f5;
`;

const CardText = styled.p`
  margin: 0;
  padding: 0;
  font-family: Nunito, sans-serif;
  color: #909090;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;

const SubTitleCenter = styled.div`
  width: 100%;
  max-width: 540px;
  margin: auto;
  text-align: center;
`;

const SectionGrid = styled.section<SpaceProps>`
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: ${(props) =>
    props.theme.screens.md ? "1fr" : "repeat(3, 1fr)"};
  grid-auto-flow: row;
  grid-gap: 74px 34px;
  /* grid-column-gap: 34px; */
  /* margin-bottom: 140px; */
  margin-bottom: ${(props) => (props.theme.screens.md ? "65px" : "140px")};

  ${space};
`;

const SectionGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionGridImage = styled.div`
  position: relative;
`;

const SectionGridImageIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 40px;
  z-index: 1;
`;

const SectionGridTitle = styled.h6<ColorProps & SpaceProps>`
  margin: 49px 0 10px 0;
  padding: 0;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  color: #001331;

  ${space};
  ${color};
`;

const SectionGridNumber = styled.span<ColorProps>`
  color: #0046f5;

  ${color};
`;

const SectionGridText = styled.p<ColorProps>`
  margin: 0;
  padding: 0;
  font-family: Nunito, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #919191;

  ${color};
`;

const WorkSection = styled.section`
  /* background-image: url(${WorkSectionItem}), url(${WorkSectionBg}); */
  background-image: ${(props) =>
    props.theme.screens.md
      ? `url(${WorkSectionItemSmall}), url(${WorkSectionBgSmall})`
      : `url(${WorkSectionItem}), url(${WorkSectionBg})`};
  background-repeat: no-repeat, repeat-y;
  background-position: 100% 0, 50% 0;
  background-size: auto, cover;
  padding-bottom: 150px;
  position: relative;
  margin-top: -170px;
`;

const WorkSectionHeader = styled.h4<SpaceProps>`
  font-family: Nunito, sans-serif;
  font-weight: 700;
  color: #709be7;
  font-size: 30px;
  line-height: 40px;
  text-align: center;

  ${space};
`;

const WorkSectionList = styled.section`
  display: flex;
  align-items: center;
  column-gap: 35px;
  flex-direction: ${(props) =>
    props.theme.screens.md ? "column-reverse" : "row"};
`;

const WorkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: workListCounter;
  display: flex;
  flex-direction: column;
  row-gap: 54px;
  margin-top: ${(props) => (props.theme.screens.md ? "75px" : 0)};
`;

const WorkListItem = styled.li`
  display: flex;
  align-items: center;
  counter-increment: workListCounter;
  column-gap: 45px;
`;

const WorkListText = styled.span`
  font-family: Poppins, sans-serif;
  font-weight: 700;
  color: #fff;
  font-size: 18px;
  line-height: 27px;
  display: inline-flex;
  column-gap: 0.25em;

  &:before {
    content: counter(workListCounter) ".";
    color: #0ce8f9;
  }
`;

const WorkListIcon = styled.div`
  width: 70px;
`;

const WorkSectionImage = styled.div`
  position: relative;
`;

const DifferenceSection = styled.section`
  /* background: url(${DifferenceSectionBg}) 50% 0% no-repeat; */
  background: ${(props) =>
    props.theme.screens.md
      ? `url(${WorkSectionBgSmall}) 50% 0% no-repeat`
      : `url(${DifferenceSectionBg}) 50% 0% no-repeat`};
  background-size: cover;
  padding-bottom: 150px;
  position: relative;

  ${(props) =>
    props.theme.screens.md &&
    css`
      margin-bottom: -70px;
    `};
`;

const DifferenceList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 35px;
  margin-top: ${(props) => (props.theme.screens.md ? "48px" : 0)};
`;

const DifferenceListItem = styled.li`
  display: flex;
  column-gap: 32px;
  align-items: center;
  font-family: Nunito, sans-serif;
  font-weight: 700;
  color: #fff;
  font-size: 18px;
  line-height: 24px;
`;

const DifferenceSectionList = styled.div`
  display: flex;
  column-gap: 125px;
  align-items: center;
  flex-direction: ${(props) => (props.theme.screens.md ? "column" : "row")};
`;

const ButtonRow = styled.div`
  /* margin-bottom: 90px; */
  margin-bottom: ${(props) => (props.theme.screens.lg ? "40px" : "90px")};
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-template-columns: ${(props) =>
    props.theme.screens.lg ? "1fr" : "repeat(2, 1fr)"};
  grid-gap: 30px;
  width: 100%;
  align-items: center;
  justify-items: flex-start;

  ${OutlineButton} {
    flex-shrink: 0;
    /* margin-left: auto; */
    margin-left: ${(props) => (props.theme.screens.lg ? "0" : "auto")};
  }
`;

const Grid = styled.div`
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-template-columns: ${(props) =>
    props.theme.screens.lg ? "1fr" : "repeat(2, 1fr)"};
  grid-auto-flow: row;
  grid-gap: 30px;
`;

const CaseStudiesCardName = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 700;
  color: #001331;
  font-size: 20px;
  line-height: 46px;
`;

const CaseStudiesCardText = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  color: #909090;
  font-size: 16px;
  line-height: 24px;
`;

const CaseStudiesCardCategory = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 700;
  color: #001331;
  font-size: 14px;
  line-height: 20px;
`;

const CaseStudiesCardCategories = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  color: #7d9ae4;
  font-size: 14px;
  line-height: 20px;
`;

const StyledLink = styled(Link)`
  font-family: Nunito, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #0147f5;
  text-decoration: none;
  display: inline-flex;
  column-gap: 15px;
  align-items: center;
  margin-top: 44px;

  svg {
    transform: translateX(0);
    transition: transform 150ms ease-out;
  }

  path {
    fill: currentColor;
  }

  &:hover {
    svg {
      transform: translateX(6px);
    }
  }
`;

const CaseStudiesCard = styled.div`
  background-color: #fff;
  padding: 45px 30px;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
`;

const CaseStudiesCardRow = styled.div`
  display: flex;
  align-items: center;
  column-gap: 45px;
`;

const CaseStudiesCardContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
`;

const GreySection = styled.section`
  background-image: url(${GreySectionTop}), url(${GreySectionBottom});
  background-position: 50% 0%, 50% 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  /* padding-top: 192px; */
  padding-top: ${(props) => (props.theme.screens.md ? "90px" : "192px")};
  padding-bottom: 140px;
  margin-top: -50px;
`;

const LogoSliderContainer = styled.div`
  margin-bottom: 102px;
`;

const MerchantPage: React.FC<RouteComponentProps> = ({ location = {} }) => {
  const path = location.pathname;
  const breakpoints = useBreakpoint();

  const query = useStaticQuery(graphql`
    query {
      bgImage: file(name: { eq: "merchant-bg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      merchantSection: file(name: { eq: "merchant-section" }) {
        childImageSharp {
          fixed(width: 635, pngQuality: 90, webpQuality: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      merchantGrid: allFile(
        filter: {
          extension: { eq: "png" }
          name: { regex: "/merchant-section-grid/" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(width: 218, height: 259, pngQuality: 90, webpQuality: 90) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
      merchantOrder: allFile(
        filter: {
          extension: { eq: "png" }
          name: { regex: "/merchant-section-order/" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(width: 286, pngQuality: 90, webpQuality: 90) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
      workSection: file(name: { eq: "work-section" }) {
        childImageSharp {
          fixed(width: 267, pngQuality: 90, webpQuality: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      logoSushiro: file(name: { eq: "logo-sushiro" }) {
        childImageSharp {
          fixed(width: 65, pngQuality: 90, webpQuality: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      postCover: file(name: { eq: "blog-cover" }) {
        childImageSharp {
          fixed(width: 540, pngQuality: 340, webpQuality: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      videoCover: file(name: { eq: "video-cover" }) {
        childImageSharp {
          fixed(width: 540, pngQuality: 300, webpQuality: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      mainImage: file(name: { eq: "user-main" }) {
        childImageSharp {
          fixed(width: 474, pngQuality: 90, webpQuality: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      userGridVideo: file(name: { eq: "user-video-bg" }) {
        childImageSharp {
          fixed(width: 457, pngQuality: 90, webpQuality: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      userGrid: allFile(
        filter: { extension: { eq: "png" }, name: { regex: "/user-grid/" } }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(width: 560, height: 560, pngQuality: 90, webpQuality: 90) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
            name
          }
        }
      }
    }
  `);

  console.log(query);

  return (
    <>
      <GlobalStyles />
      <Layout>
        <SEO title="Stamper - dla przedsiębiorców" description="Lorem ipsum" />
        <Hero>
          <Container>
            <MenuContainer>
              <Menu />
            </MenuContainer>
          </Container>
          <MobileMenu />
          <Container>
            <MainSection>
              <TextContainer>
                <HeadlineContainer>
                  <Headline>
                    <Bold>Program lojalnościowy</Bold>
                    <br />
                    dla Twojego biznesu
                  </Headline>
                </HeadlineContainer>
                <DescriptionContainer>
                  <DescriptionWrapper>
                    <Description color="#709BE7">
                      Stamper to o wygodne narzędzie umożliwiające stworzenie
                      programów lojalnościowych, które trafią do klientów i
                      które z nimi zostaną. 
                    </Description>
                    <Description>
                      Stamper wykorzystuje zgromadzone dane o odbiorcach i używa
                      geofencingu, by skutecznie trafiać do klientów i budować
                      ich lojalność.
                    </Description>
                  </DescriptionWrapper>
                </DescriptionContainer>
                <RoundedButton>
                  Więcej
                  <Arrow />
                </RoundedButton>
              </TextContainer>
              <VideoWrapper>
                <VideoWrapperIcons type="card">
                  <MerchantVideoCards />
                </VideoWrapperIcons>
                <VideoWrapperIcons type="app">
                  <MerchantVideoApp />
                </VideoWrapperIcons>
                <VideoWrapperIcons type="icons">
                  <MerchantVideoIcons />
                </VideoWrapperIcons>
                <ReactPlayer
                  url="https://youtu.be/MhtitC4vwNA"
                  light={MerchantVideoPoster}
                  playIcon={<CircleButton />}
                  style={{
                    position: "relative",
                    zIndex: 1,
                  }}
                  width={457}
                  height={257}
                />
              </VideoWrapper>
            </MainSection>
          </Container>
        </Hero>
        <BackgroundImage
          Tag="section"
          fluid={query.bgImage.childImageSharp.fluid}
          backgroundColor={`#040e18`}
          style={{
            marginTop: "-140px",
            paddingTop: breakpoints.md ? "550px" : "200px",
            paddingBottom: "80px",
            zIndex: -1,
          }}
        >
          <Container>
            <SectionHeader color="#fff" marginBottom={87}>
              <strong>Poznaj</strong> zalety!
            </SectionHeader>
            <CardContainer>
              <Card>
                <CardIcon>
                  <Range />
                </CardIcon>
                <CardTitle>Większy zasięg</CardTitle>
                <CardText>
                  W Stamperze zawsze jesteś dla klientów "po drodze". W łatwy
                  sposób docieraj do nowych klientów którzy są w Twojej okolicy.
                </CardText>
              </Card>
              <Card>
                <CardIcon>
                  <Comfort />
                </CardIcon>
                <CardTitle>Wygoda</CardTitle>
                <CardText>
                  Bez papierowych kart, bez brudzących pieczątek; bez potrzeby
                  ściągania i instalowania kolejnej aplikacji. Twój program
                  lojalnościowy w znajomej i lubianej przez klientów aplikacji.
                </CardText>
              </Card>
              <Card>
                <CardIcon>
                  <Control />
                </CardIcon>
                <CardTitle>Kontrola i analityka</CardTitle>
                <CardText>
                  Czy zastanawiałeś się w których godzinach publikować reklamy?
                  Teraz nie musisz! Dzięki Stamperowi masz dostęp do danych o
                  zachowaniach Twoich klientów.{" "}
                </CardText>
              </Card>
            </CardContainer>
          </Container>
        </BackgroundImage>
        <GreySection>
          <Container>
            <ContentGrid>
              <ContentGridTextContainer>
                <Title>
                  <TitleBold>Szybkość, wygoda</TitleBold>
                  <br />
                  pełna kontrola
                </Title>
                <ContentGridDescription>
                  W łatwy sposób twórz kampanie lojalnościowe i mierz ich
                  skuteczność dzięki wygodnej analityce. Stamper to aplikacja
                  która zrzesza bardziej lojalnych klientów lubiących korzystać
                  z kart lojalnościowych. Jest to rozwiązanie które klienci
                  znają i lubią, a dołączenie do Twojego planu lojalnościowego
                  wiąże się jednie z jednym kliknięciem.
                </ContentGridDescription>
              </ContentGridTextContainer>
              <Img fixed={query.merchantSection.childImageSharp.fixed} alt="" />
            </ContentGrid>
          </Container>
          <Container>
            <SectionHeader marginTop={152}>
              <strong>Podnieś efektywność</strong> Twojej marki
            </SectionHeader>
            <SectionSubtitle marginBottom={115}>
              <SubTitleCenter>
                Stamper wykorzystuje lokalizację i zgromadzone dane by wpłynąć
                na ścieżkę zakupową.
              </SubTitleCenter>
            </SectionSubtitle>
          </Container>
          <Container>
            <SectionGrid>
              <SectionGridItem>
                <Img
                  fixed={query.merchantGrid.edges[0].node.childImageSharp.fixed}
                  alt=""
                />
                <SectionGridTitle>
                  <SectionGridNumber>1.</SectionGridNumber> Remarketing
                </SectionGridTitle>
                <SectionGridText>
                  Targetujemy odbiorcę ponownie i kierujemy komunikaty mające na
                  celu ciągły dialog i utrzymanie więzi z użytkownikiem.
                  Przypominamy o Twoim miejscu, brakujących pieczątkach do
                  otrzymania nagrody czy zachęcamy do ponownego odwiedzenia.
                </SectionGridText>
              </SectionGridItem>
              <SectionGridItem>
                <Img
                  fixed={query.merchantGrid.edges[1].node.childImageSharp.fixed}
                  alt=""
                />
                <SectionGridTitle>
                  <SectionGridNumber>2.</SectionGridNumber> Bliskość
                </SectionGridTitle>
                <SectionGridText>
                  Stamper aktywnie używa geofencingu w celu zwiększenia liczby
                  klientów odwiedzających i powracających do danego miejsca.
                  Powiadamia użytkowników o bliskości Twojej marki i możliwych
                  korzyści z programu lojalnościowego, gdy użytkownik znajdzie
                  się w obrębie założonej przez nas lokalizacji.
                </SectionGridText>
              </SectionGridItem>
              <SectionGridItem>
                <Img
                  fixed={query.merchantGrid.edges[2].node.childImageSharp.fixed}
                  alt=""
                />
                <SectionGridTitle>
                  <SectionGridNumber>3.</SectionGridNumber> Segmentacja
                </SectionGridTitle>
                <SectionGridText>
                  Monitorujemy zwyczaje zakupowe klientów, wiemy co najczęściej
                  kupują, w jakich godzinach i w jakiej lokalizacji. Pozwala to
                  na dostosowanie powiadomień o promocjach - wysyłamy
                  powiadomienia o nowych dostępnych usługach czy restauracjach z
                  podobnego segmentu, które odpowiadają profilowi użytkownika.
                </SectionGridText>
              </SectionGridItem>
            </SectionGrid>
          </Container>
        </GreySection>
        <WorkSection>
          <Container>
            <SectionHeader paddingTop={147} marginBottom={18} color="#fff">
              <strong>Jak to działa</strong>
            </SectionHeader>
            <SectionSubtitle marginBottom={100} color="#7D9AE4">
              <SubTitleCenter>
                Stamper działa w przypadku zamówień z dostawą, jak i
                stacjonarnie w lokalu.
              </SubTitleCenter>
            </SectionSubtitle>
            <WorkSectionHeader marginBottom={48}>
              Zamówienia z dostawą:
            </WorkSectionHeader>
            <WorkSectionList>
              <WorkList>
                <WorkListItem>
                  <WorkListIcon>
                    <Package />
                  </WorkListIcon>
                  <WorkListText>
                    Dołącz papierową kartę do zamówienia z dostawą.
                  </WorkListText>
                </WorkListItem>
                <WorkListItem>
                  <WorkListIcon>
                    <Qr />
                  </WorkListIcon>
                  <WorkListText>Klient skanuje kod QR.</WorkListText>
                </WorkListItem>
                <WorkListItem>
                  <WorkListIcon>
                    <StampApp />
                  </WorkListIcon>
                  <WorkListText>
                    Pieczątka zostaje dodana do karty w aplikacji.
                  </WorkListText>
                </WorkListItem>
                <WorkListItem>
                  <WorkListIcon>
                    <Reward />
                  </WorkListIcon>
                  <WorkListText>
                    Zebrana wymagana ilość pieczątek wymienia się na nagrody do
                    odebrania.
                  </WorkListText>
                </WorkListItem>
              </WorkList>
              <WorkSectionImage>
                <Hand
                  style={{ position: "absolute", left: "150px", top: "30%" }}
                />
                <Cards
                  style={{ position: "absolute", left: "-50px", top: 0 }}
                />
                <Img fixed={query.workSection.childImageSharp.fixed} alt="" />
              </WorkSectionImage>
            </WorkSectionList>
            <WorkSectionHeader marginBottom={48} marginTop={86}>
              Zamówienia stacjonarne:
            </WorkSectionHeader>
            <SectionGrid>
              <SectionGridItem>
                <SectionGridImage>
                  <SectionGridImageIcon>
                    <AddStamp />
                  </SectionGridImageIcon>
                  <Img
                    fixed={
                      query.merchantOrder.edges[0].node.childImageSharp.fixed
                    }
                    alt=""
                  />
                </SectionGridImage>
                <SectionGridTitle marginTop={10} marginBottom={2} color="#fff">
                  <SectionGridNumber color="#0CE8F9">1.</SectionGridNumber>{" "}
                  Dodawanie pieczątek
                </SectionGridTitle>
                <SectionGridText color="#7D9AE4">
                  Po zakupie produktu objętego promocją karta niebieska jest
                  pokazywana klientowi, w celu dodania pieczątki do aplikacji.
                </SectionGridText>
              </SectionGridItem>
              <SectionGridItem>
                <SectionGridImage>
                  <SectionGridImageIcon>
                    <CollectPrize />
                  </SectionGridImageIcon>
                  <Img
                    fixed={
                      query.merchantOrder.edges[1].node.childImageSharp.fixed
                    }
                    alt=""
                  />
                </SectionGridImage>
                <SectionGridTitle marginTop={10} marginBottom={2} color="#fff">
                  <SectionGridNumber color="#0CE8F9">2.</SectionGridNumber>{" "}
                  Odbieranie nagród
                </SectionGridTitle>
                <SectionGridText color="#7D9AE4">
                  Po zebraniu przez użytkownika pełnej puli pieczątek, klient
                  skanuje kartę zieloną
                </SectionGridText>
              </SectionGridItem>
              <SectionGridItem>
                <SectionGridImage>
                  <SectionGridImageIcon>
                    <SubtractPoints />
                  </SectionGridImageIcon>
                  <Img
                    fixed={
                      query.merchantOrder.edges[2].node.childImageSharp.fixed
                    }
                    alt=""
                  />
                </SectionGridImage>
                <SectionGridTitle marginTop={10} marginBottom={2} color="#fff">
                  <SectionGridNumber color="#0CE8F9">3.</SectionGridNumber>{" "}
                  Odejmowanie punktów
                </SectionGridTitle>
                <SectionGridText color="#7D9AE4">
                  Jeżeli klient przez przypadek zeskanował kartę niebieską dwa
                  razy, zeskanowanie karty czerwonej odejmie nadprogramowe
                  pieczątki.
                </SectionGridText>
              </SectionGridItem>
            </SectionGrid>
          </Container>
        </WorkSection>
        <Container>
          <SectionHeader marginTop={86} marginBottom={94}>
            <strong>Marki korzystające</strong> ze Stampera
          </SectionHeader>
          <LogoSliderContainer>
            <LogoSlider />
          </LogoSliderContainer>
        </Container>
        <Map height={530} />
        <Container>
          <SectionHeader marginTop={123}>
            <strong>Klienci o nas</strong>
          </SectionHeader>
          <SectionSubtitle marginBottom={10} color="#709BE7">
            <SubTitleCenter>
              Pomagamy firmom w rozwoju ich biznesu poprzez plany lojalnościowe
              dla ich klientów.
            </SubTitleCenter>
          </SectionSubtitle>
          <VideoSlider />
        </Container>
        <DifferenceSection>
          <Container>
            <SectionHeader paddingTop={175} color="#fff">
              <strong>Co wyróżnia</strong> Stamper?
            </SectionHeader>
            <SectionSubtitle marginBottom={135} color="#709BE7">
              <SubTitleCenter>
                Stamper wychodzi naprzeciw oczekiwaniom użytkowników i czyni
                programy przyjemnymi w obsłudze poprzez:
              </SubTitleCenter>
            </SectionSubtitle>
            <DifferenceSectionList>
              <Person style={{ flexShrink: 0 }} />
              <DifferenceList>
                <DifferenceListItem>
                  <CircleCheckbox />
                  <span>
                    Wymiana tradycyjnych kart papierowych na aplikację
                  </span>
                </DifferenceListItem>
                <DifferenceListItem>
                  <CircleCheckbox />
                  <span>Jedna aplikacja, przyjemna i szybka w obsłudze</span>
                </DifferenceListItem>
                <DifferenceListItem>
                  <CircleCheckbox />
                  <span>
                    Możliwość zbierania pieczątek przy zakupach również online
                  </span>
                </DifferenceListItem>
                <DifferenceListItem>
                  <CircleCheckbox />
                  <span>
                    Otrzymywanie użytecznych nagród - brak przestarzałych
                    gadżetów
                  </span>
                </DifferenceListItem>
              </DifferenceList>
            </DifferenceSectionList>
            <SectionHeader
              marginTop={breakpoints.md ? 88 : 210}
              color="#fff"
              textAlign="left"
            >
              <strong>Case Studies</strong>
            </SectionHeader>
            <ButtonRow>
              <SectionSubtitle color="#709BE7" textAlign="left">
                Efekty działań ze Stamperem są mierzalne i w pełni odczuwalne.
              </SectionSubtitle>
              <OutlineButton>
                Przejdź do Case Studies
                <Arrow />
              </OutlineButton>
            </ButtonRow>
            <Grid>
              <CaseStudiesCard>
                <CaseStudiesCardContent>
                  <CaseStudiesCardRow>
                    <Img
                      fixed={query.logoSushiro.childImageSharp.fixed}
                      alt=""
                    />
                    <CaseStudiesCardName>
                      Chili Chili Kraków
                    </CaseStudiesCardName>
                  </CaseStudiesCardRow>
                  <CaseStudiesCardText>
                    Lo rem ipsum dolor sit amet, consectetur adipisicing elit.
                  </CaseStudiesCardText>
                  <div>
                    <CaseStudiesCardCategory>
                      ZASTOSOWANE ROZWIĄZANIA
                    </CaseStudiesCardCategory>
                    <CaseStudiesCardCategories>
                      STAMPCARDGO | TABLET | KARTY PLASTIKOWE
                    </CaseStudiesCardCategories>
                  </div>
                </CaseStudiesCardContent>
                <StyledLink to="">
                  Czytaj więcej
                  <Arrow />
                </StyledLink>
              </CaseStudiesCard>
              <CaseStudiesCard>
                <CaseStudiesCardContent>
                  <CaseStudiesCardRow>
                    <Img
                      fixed={query.logoSushiro.childImageSharp.fixed}
                      alt=""
                    />
                    <CaseStudiesCardName>
                      Chili Chili Kraków
                    </CaseStudiesCardName>
                  </CaseStudiesCardRow>
                  <CaseStudiesCardText>
                    Lo rem ipsum dolor sit amet, consectetur adipisicing elit.
                  </CaseStudiesCardText>
                  <div>
                    <CaseStudiesCardCategory>
                      ZASTOSOWANE ROZWIĄZANIA
                    </CaseStudiesCardCategory>
                    <CaseStudiesCardCategories>
                      STAMPCARDGO | TABLET | KARTY PLASTIKOWE
                    </CaseStudiesCardCategories>
                  </div>
                </CaseStudiesCardContent>
                <StyledLink to="">
                  Czytaj więcej
                  <Arrow />
                </StyledLink>
              </CaseStudiesCard>
            </Grid>
          </Container>
          <Container>
            <div style={{ marginTop: breakpoints.md ? 80 : 158 }}>
              <ButtonRow>
                <SectionHeader color="#fff" textAlign="left">
                  <strong>Najnowsze wpisy</strong> na blogu
                </SectionHeader>
                <OutlineButton>
                  Przejdź na blog
                  <Arrow />
                </OutlineButton>
              </ButtonRow>
            </div>
            <Grid>
              <Post
                cover={
                  <Img fixed={query.postCover.childImageSharp.fixed} alt="" />
                }
                date="4 MAJA 2020"
                time="7 min czytania"
                title="Dołącz do akcji #PomóżNamZnaleźćLekarstwo"
                excerpt="Uzyskaj wsparcie, pomagaj i dołącz się do akcji Stamper, w której szukamy lekarstwa na kryzys gospodarczy i nie tylko..."
                url="/"
              />
              <Post
                cover={
                  <Img fixed={query.postCover.childImageSharp.fixed} alt="" />
                }
                date="4 MAJA 2020"
                time="7 min czytania"
                title="Dołącz do akcji #PomóżNamZnaleźćLekarstwo"
                excerpt="Uzyskaj wsparcie, pomagaj i dołącz się do akcji Stamper, w której szukamy lekarstwa na kryzys gospodarczy i nie tylko..."
                url="/"
              />
              <Post
                cover={
                  <Img fixed={query.postCover.childImageSharp.fixed} alt="" />
                }
                date="4 MAJA 2020"
                time="7 min czytania"
                title="Dołącz do akcji #PomóżNamZnaleźćLekarstwo"
                excerpt="Uzyskaj wsparcie, pomagaj i dołącz się do akcji Stamper, w której szukamy lekarstwa na kryzys gospodarczy i nie tylko..."
                url="/"
              />
            </Grid>
          </Container>
          <Container>
            <SectionHeader
              marginTop={breakpoints.md ? 80 : 158}
              color="#fff"
              textAlign="left"
            >
              <strong>#PomóżNamZnaleźćLekarstwo</strong>
            </SectionHeader>
            <ButtonRow>
              <SectionSubtitle color="#709BE7" textAlign="left">
                Uzyskaj wsparcie, pomagaj i dołącz się do akcji Stamper, w
                której szukamy lekarstwa na kryzys gospodarczy i nie tylko...
              </SectionSubtitle>
              <OutlineButton>
                Przejdź na YouTube
                <Arrow />
              </OutlineButton>
            </ButtonRow>
            <Grid>
              <Post
                cover={
                  <Img fixed={query.videoCover.childImageSharp.fixed} alt="" />
                }
                date="4 MAJA 2020"
                time="7 min oglądania"
                title="Lorem ipsum dolor sit amet susqence liquor"
              />
              <Post
                cover={
                  <Img fixed={query.videoCover.childImageSharp.fixed} alt="" />
                }
                date="4 MAJA 2020"
                time="7 min oglądania"
                title="Lorem ipsum dolor sit amet susqence liquor"
              />
              <Post
                cover={
                  <Img fixed={query.videoCover.childImageSharp.fixed} alt="" />
                }
                date="4 MAJA 2020"
                time="7 min oglądania"
                title="Lorem ipsum dolor sit amet susqence liquor"
              />
            </Grid>
          </Container>
        </DifferenceSection>
        <Newsletter />
      </Layout>
    </>
  );
};

export default MerchantPage;
