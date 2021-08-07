import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Link } from "../components/link";
import { Container } from "../components/container";
import { LogoSlider } from "../components/logo-slider";
import { HeroHome } from "../components/hero-home";
import { Menu, MenuContainer } from "../components/menu";
import { MobileMenu } from "../components/mobile-menu";
import {
  ContentGrid,
  Title,
  TitleBold,
  TextContainer as ContentGridTextContainer,
  Description as ContentGridDescription,
} from "../components/content-grid";
import { Button, IconContainer } from "../components/button";
import { Headline, Bold } from "../components/headline";
import { Description } from "../components/description";
import { MotionBackground } from "../components/motion-background";
import { SectionHeader } from "../components/section-header";
import { Map } from "../components/map";

import Android from "../images/icons/android-icon.svg";
import Apple from "../images/icons/apple-icon.svg";

import BottomBg from "../images/home-bottom-bg.svg";
import BottomSmallBg from "../images/home-bottom-small-bg.svg";
import MapOverlay from "../images/home-bottom-map-overlay.svg";
import { Logo } from "../components/logo";

const MainSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) => (props.theme.screens.md ? "column" : "row")};
  padding-top: ${(props) => (props.theme.screens.md ? "346px" : "120px")};
  margin-bottom: ${(props) => (props.theme.screens.md ? 0 : "100px")};
  position: relative;
`;

const HeadlineContainer = styled.div`
  margin-bottom: 20px;
`;

const TextContainer = styled.div`
  flex-basis: ${(props) => (props.theme.screens.md ? "100%" : "480px")};
  margin-right: ${(props) => (props.theme.screens.md ? "0" : "150px")};
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

const DescriptionBold = styled.span`
  font-weight: 700;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const MainImageContainer = styled.div`
  position: relative;
`;

const MainImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: ${(props) => (props.theme.screens.md ? 405 : 827)}px;
`;

const BottomSection = styled.div`
  background-image: url(${(props) => props.theme.screens.md ? BottomSmallBg : BottomBg});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  position: relative;
  padding-bottom: 60px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1920px;

  ${(props) => !props.theme.screens.md && css`
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 142px;
      background: url(${MapOverlay}) no-repeat 0 0;
      background-size: cover;
      position: absolute;
      left: 0;
      bottom: -142px;
      z-index: 1;
    }
  `};
`;

const MobileLogoSlider = styled.div`
  display: ${(props) => (props.theme.screens.md ? "block" : "none")};
  max-width: 100%;
  min-height: 200px;
  overflow: hidden;
`;

const DesktopLogoSlider = styled.div`
  display: ${(props) => (props.theme.screens.md ? "none" : "block")};
`;

const MotionBackgroundImageContainer = styled.div`
  margin: auto;
  max-width: ${(props) => (props.theme.screens.md ? 300 : 365)}px;
`;

const App = () => {
  const query = useStaticQuery(graphql`
    query {
      mainImage: file(name: { eq: "home-main" }) {
        childImageSharp {
          fluid(pngQuality: 90, webpQuality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      homeGrid1: file(name: { eq: "home-grid-01" }) {
        childImageSharp {
          fluid(pngQuality: 90, webpQuality: 90, maxWidth: 365) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      homeGrid2: file(name: { eq: "home-grid-02" }) {
        childImageSharp {
          fluid(pngQuality: 90, webpQuality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      # userGridVideo: file(name: {eq: "user-video-bg"}) {
      #   childImageSharp {
      #     fixed(width: 457, pngQuality: 90, webpQuality: 90) {
      #       ...GatsbyImageSharpFixed_withWebp
      #     }
      #   }
      # },
      # homeGrid: allFile(filter: {extension: {eq: "png"}, name: {regex: "/home-grid/"}}) {
      #   edges {
      #     node {
      #       childImageSharp {
      #         fixed(width: 560, height: 560,  pngQuality: 90, webpQuality: 90) {
      #           ...GatsbyImageSharpFixed_withWebp
      #         }
      #       }
      #       name
      #     }
      #   }
      # }
    }
  `);

  const breakpoints = useBreakpoint();
  console.log(query);

  return (
    <Layout>
      <SEO title="Stamper - strona główna" description="Lorem ipsum" />
      <HeroHome>
        <MainImageContainer>
          <MainImage>
            <Img fluid={query.mainImage.childImageSharp.fluid} alt="" />
          </MainImage>
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
                    <br />z pieczątką na wynos
                  </Headline>
                </HeadlineContainer>
                <DescriptionContainer>
                  <DescriptionWrapper>
                    <Description>
                      Stamper pozwala użytkownikowi zbierać pieczątki z wielu
                      programów lojalnościowych w jednym miejscu. Niezależnie od
                      tego czy dokonujesz zakupu na miejscu czy na wynos.
                    </Description>
                    <Description>
                      Dla przedsiębiorcy jest to narzędzie, które w łatwy sposób
                      pozwala tworzyć promocje w wielu lokalach i kontrolować
                      ich wyniki.
                    </Description>
                    <Description color="#709BE7">
                      <DescriptionBold>
                        Ze Stamperem wszyscy są wygranymi!
                      </DescriptionBold>
                    </Description>
                  </DescriptionWrapper>
                </DescriptionContainer>
                <ButtonsContainer>
                  <Button variant="primary">
                    Pobierz aplikację{" "}
                    <IconContainer>
                      <Android />
                    </IconContainer>
                  </Button>
                  <Button variant="primary">
                    Pobierz aplikację{" "}
                    <IconContainer>
                      <Apple />
                    </IconContainer>
                  </Button>
                </ButtonsContainer>
              </TextContainer>
            </MainSection>
          </Container>
        </MainImageContainer>
      </HeroHome>
      <Container>
        <ContentGrid>
          <ContentGridTextContainer>
            <Title>
              <TitleBold>Proste</TitleBold> zasady
            </Title>
            <ContentGridDescription>
              Jedna aplikacja - nielimitowana ilość okazji na nagrody! Zbieraj
              pieczątki i odbieraj nagrody - wszystko w Twoim telefonie!
              <br />
              <br />
              Twórz różne programy lojalnościowe i nagradzaj swoich klientów!.
            </ContentGridDescription>
          </ContentGridTextContainer>
          <MotionBackground variant={0}>
            <MotionBackgroundImageContainer>
              <Img fluid={query.homeGrid1.childImageSharp.fluid} alt="" />
            </MotionBackgroundImageContainer>
          </MotionBackground>
        </ContentGrid>
        <ContentGrid>
          <MotionBackground variant={1}>
            <Img fluid={query.homeGrid2.childImageSharp.fluid} alt="" />
          </MotionBackground>
          <ContentGridTextContainer>
            <Title>
              <TitleBold>Wygoda</TitleBold>
            </Title>
            <ContentGridDescription>
              Zapomnij o wielu aplikacjach i papierowych kartach
              lojalnościowych. Miej wszystko pod ręką i oszczędzaj przy każdym
              zakupie.
              <br />
              <br />
              Przedsiębiorco - kontroluj wyniki promocji i w szybki sposób
              twórz, modyfikuj i baw się promocjami, które pokochają Twoi stali
              i nowi klienci!
            </ContentGridDescription>
          </ContentGridTextContainer>
        </ContentGrid>
      </Container>
      <BottomSection>
        <Container>
          <SectionHeader color="#001331" marginBottom={94} paddingTop={breakpoints.lg ? 67 : 176}>
            <strong>Placówki korzystające</strong> ze Stampera
          </SectionHeader>
          <DesktopLogoSlider>
            <LogoSlider />
          </DesktopLogoSlider>
        </Container>
        <MobileLogoSlider>
          <LogoSlider />
        </MobileLogoSlider>
      </BottomSection>
      <Map />

      <Container></Container>
    </Layout>
  );
};

export default App;
