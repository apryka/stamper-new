import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled, { css, createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import { RouteComponentProps } from "@reach/router";
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
import { Card, CardTitle, CardText } from "../components/card";
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

import { CircleButton } from "../components/circle-button";
import { Checkbox } from "../components/checkbox";
import { MotionBackground } from "../components/motion-background";

import Android from "../images/icons/android-icon.svg";
import Apple from "../images/icons/apple-icon.svg";

import CardContainerBg from "../images/card-container-bg.svg";

// import Bg from '../images/user-main-bg.svg';

import SectionImage from "../images/user-section-image.jpg";
import SliderBg from "../images/slider-section-bg.svg";
import SliderBgSmall from "../images/slider-section-bg-small.svg";
import UserGrid1 from "../images/user-grid-1.svg";
import UserGrid2 from "../images/user-grid-2.svg";
import UserGrid3 from "../images/user-grid-3.svg";

import { slides } from "../pages-config/user-config";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #F8FAFF;
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
  padding-top: ${(props) => (props.theme.screens.md ? "126px" : "0")};
`;

const TextContainer = styled.div`
  flex-basis: ${(props) => (props.theme.screens.md ? "100%" : "480px")};
  margin-right: ${(props) => (props.theme.screens.md ? "0" : "150px")};
`;

const SectionBackground = styled.section`
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

  /* &:before {
    content: '';
    width: 100%;
    height: 150px;
    display: block;
    background-color: #fff;
    position: absolute;
    bottom: 0;
  } */
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

const CardContainer = styled.div`
  display: flex;
  gap: 30px 40px;
  ${Card} {
    flex: 1;
  }

  flex-direction: ${(props) => (props.theme.screens.md ? "column" : "row")};
`;

const CardHolder = styled.div`
  position: relative;
  /* margin-bottom: 200px; */
  margin-bottom: ${(props) => (props.theme.screens.md ? "0" : "200px")};

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: -100px;
    left: 0;
    right: 0;
    height: 100px;
    background: url(${CardContainerBg}) 0 0 no-repeat;
    background-size: cover;
  }
`;

const CardPosition = styled.div`
  /* position: absolute; */
  position: ${(props) => (props.theme.screens.md ? "static" : "absolute")};
  top: 0;
  left: 0;
  right: 0;
  /* transform: translate(0px, -60%); */
  transform: ${(props) =>
    props.theme.screens.md ? "translate(0px, -150px)" : "translate(0px, -60%)"};
`;

const SliderSection = styled.div`
  /* background: url(${SliderBg}) 0 0 no-repeat; */
  background: ${(props) =>
    props.theme.screens.md
      ? `url(${SliderBgSmall}) 0 0 no-repeat`
      : `url(${SliderBg}) 0 0 no-repeat`};
  background-size: cover;
  padding: 164px 0 126px 0;
  /* min-height: 1692px; */
  min-height: ${(props) => (props.theme.screens.md ? "1880px" : "1692px")};
  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 126px;
    background-color: #fff;
  }
`;

const SectionWhite = styled.div`
  background-color: #fff;
`;

const UserPage: React.FC<RouteComponentProps> = ({ location = {} }) => {
  const path = location.pathname;

  const query = useStaticQuery(graphql`
    query {
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
        <SEO title="Stamper - dla użytkowników" description="Lorem ipsum" />
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
                    <Bold>Zbieraj pieczątki,</Bold>
                    <br />
                    odbieraj nagrody
                  </Headline>
                </HeadlineContainer>
                <DescriptionContainer>
                  <Description>
                    Przenieś się w świat, gdzie papierowe karty lojalnościowe
                    nie zalegają Ci w portfelu, a do wzięcia udziału w promocji
                    dzieli Cię tylko kilka kliknięć. Witaj w świecie aplikacji
                    Stamper!
                  </Description>
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
              <Img fixed={query.mainImage.childImageSharp.fixed} alt="" />
            </MainSection>
          </Container>
        </Hero>
        <SectionBackground>
          <SectionTitle>Korzystaj jak inni</SectionTitle>
          <SectionDescription>
            Co miesiąc użytkownicy odbierają nowe nagrody
            <br />i korzystają z okazji! W tym miesiącu aż:{" "}
          </SectionDescription>
        </SectionBackground>
        <CardHolder>
          <CardPosition>
            <Container>
              <CardContainer>
                <Card>
                  <div>
                    <CardTitle>200</CardTitle>
                    <CardText>osób odebrało nagrody w aplikacji</CardText>
                  </div>
                </Card>
                <Card>
                  <div>
                    <CardTitle>10 000zł</CardTitle>
                    <CardText>były warte odebrane nagrody</CardText>
                  </div>
                </Card>
                <Card>
                  <div>
                    <CardTitle>200</CardTitle>
                    <CardText>nowych miejsc dołączyło do Stampera</CardText>
                  </div>
                </Card>
              </CardContainer>
            </Container>
          </CardPosition>
        </CardHolder>
        <Container>
          <ContentGrid>
            <ContentGridTextContainer>
              <Title>
                <TitleBold>Nie przegapisz</TitleBold>
                <br />
                żadnej okazji
              </Title>
              <ContentGridDescription>
                Już nigdy nie przepadną Ci nagrody. Gdy wypełnisz kartę
                określoną ilością pieczątek - automatycznie dostaniesz
                powiadomienie że nagroda czeka do odebrania! Wybierając się na
                miasto w łatwy sposób sprawdzisz gdzie zahaczyć by odebrać
                benefity, dzięki sprytnej opcji "okolica".
              </ContentGridDescription>
            </ContentGridTextContainer>
            <MotionBackground variant={0}>
              <Img
                fixed={query.userGrid.edges[0].node.childImageSharp.fixed}
                alt=""
              />
            </MotionBackground>
          </ContentGrid>
          <ContentGrid>
            <MotionBackground variant={1}>
              <Img
                fixed={query.userGrid.edges[1].node.childImageSharp.fixed}
                alt=""
              />
            </MotionBackground>
            <ContentGridTextContainer>
              <Title>
                <TitleBold>Koniec z zapomnianymi</TitleBold>
                <br />
                kartami
              </Title>
              <ContentGridDescription>
                Łatwo dodawaj karty do wirtualnego portfela, by zawsze mieć je
                pod ręką. Zbieraj karty - skanuj pieczątki i śledź swoje
                promocje. Stamper mówi "stop!" niewykorzystanym kartom
                lojalnościowym. Łap smartfon, po zakupie skanuj kod QR od
                sprzedawcy lub z karty StampCardGo i korzystaj bez limitu z
                nagród!
              </ContentGridDescription>
            </ContentGridTextContainer>
          </ContentGrid>
          <ContentGrid>
            <ContentGridTextContainer>
              <Title>
                <TitleBold>Jak to działa</TitleBold>
              </Title>
              <ContentGridDescription>
                Aplikacja Stamper działa do zarówno zamówień czy usług na
                miejscu, jak i zamówień na wynos. Niezależnie od tego jak i co
                zamawiasz, zawsze zostaniesz nagrodzony.
              </ContentGridDescription>
            </ContentGridTextContainer>
            <MotionBackground variant={2}>
              <Img fixed={query.userGridVideo.childImageSharp.fixed} alt="" />
            </MotionBackground>
          </ContentGrid>
        </Container>
        <SliderSection>
          <Container>
            <SectionHeader color="#fff" marginBottom={75}>
              <strong>Dodawanie pieczątek:</strong>
            </SectionHeader>
            <TextSlider slides={slides} />
          </Container>
          <Container>
            <SectionHeader color="#fff" marginTop={118} marginBottom={28}>
              <strong>Odbieranie nagrody</strong>
            </SectionHeader>
            <FadeSlider />
          </Container>
        </SliderSection>
        <SectionWhite>
          <SectionHeader paddingTop={86} marginBottom={15}>
            <strong>Gdzie możesz korzystać</strong> ze Stampera?
          </SectionHeader>
          <SectionSubtitle paddingBottom={67}>
            Sprawdź, które miejsca oferują programy lojalnościowe w aplikacji{" "}
          </SectionSubtitle>
        </SectionWhite>
        <Map />
        <Newsletter />
      </Layout>
    </>
  );
};

export default UserPage;
