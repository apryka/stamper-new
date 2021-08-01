import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { RouteComponentProps } from "@reach/router";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

import { Container } from "../components/container";
import { TextInput } from "../components/text-input";
import { TextArea } from "../components/text-area";
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
// import { Hero } from '../components/hero';
import { Map } from "../components/map";
import { ContactAccordion } from "../components/contact-accordion";

import { CircleButton } from "../components/circle-button";
import { Checkbox } from "../components/checkbox";
import { ExpandableText } from "../components/expandable-text";

import Android from "../images/icons/android-icon.svg";
import Apple from "../images/icons/apple-icon.svg";
import ListItemIcon from "../images/icons/list-item-icon.svg";

import Arrow from "../images/icons/arrow-icon.svg";
import CardContainerBg from "../images/card-container-bg.svg";
import Cards from '../images/icons/contact-form-cards.svg';

// import Bg from '../images/user-main-bg.svg';

import MainImage from "../images/user-main.png";
import MainImage2 from "../images/user-main@2x.png";
import MainImage3 from "../images/user-main@3x.png";
import SectionImage from "../images/user-section-image.jpg";
import UserGrid1 from "../images/user-grid.png";
import UserGrid12 from "../images/user-grid@2x.png";
import UserGrid13 from "../images/user-grid@3x.png";
import UserGrid2 from "../images/user-grid-2.png";
import UserGrid22 from "../images/user-grid-2@2x.png";
import UserGrid23 from "../images/user-grid-2@3x.png";
import UserGrid3 from "../images/user-grid-3.png";
import UserGrid32 from "../images/user-grid-3@2x.png";
import UserGrid33 from "../images/user-grid-3@3x.png";
import SliderBg from "../images/slider-section-bg.svg";
import Bg from "../images/contact-page-bg.svg";
import BgMobile from "../images/contact-page-small-bg.svg";
import BgItem from "../images/contact-page-item.svg";
import BgItemSmall from "../images/contact-page-small-item.svg";

import { slides } from "../pages-config/user-config";

const Hero = styled.section`
  background-image: ${(props) => props.theme.screens.lg ? `url(${BgItemSmall}), url(${BgMobile})` : `url(${BgItem}), url(${Bg})`};
  background-position: ${(props) => props.theme.screens.lg ? '100% 0%, 50% 100%' : '100% 0%, 50% 0%'};
  background-repeat: no-repeat, no-repeat;
  background-size: ${(props) => props.theme.screens.lg ? 'auto, cover' : 'auto, 100%'};
  background-color: #fff;
  padding-bottom: 94px;
`;

const Header = styled.h2`
  margin: 0 0 10px 0;
  padding: 0;
  font-family: Poppins, sans-serif;
  font-size: 32px;
  line-height: 42px;
  font-weight: 400;

  strong {
    font-weight: 700;
  }
`;

const SubHeader = styled.h3`
  margin: 0 0 60px 0;
  font-family: Nunito, sans-serif;
  font-size: 16px;
  line-height: 22px;
  color: #709be7;
  font-weight: 700;
`;

const ContactList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ContactListItem = styled.li`
  font-family: Nunito, sans-serif;
  font-size: 16px;
  line-height: 22px;
  color: #709be7;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  column-gap: 20px;

  svg {
    flex-shrink: 0;
  }
`;

const StyledForm = styled.form`
  background-color: #0147f5;
  border-radius: 30px;
  padding: 43px 30px;
  width: ${(props) => props.theme.screens.lg ? '100%' : '635px'};
  position: ${(props) => props.theme.screens.lg ? 'relative' : 'absolute'};
  right: 0;
  bottom: 0;
  margin-bottom: ${(props) => props.theme.screens.lg ? '80px' : 0};
`;

const FormHeader = styled.h6`
  margin: 0 0 20px 0;
  font-family: Poppins, sans-serif;
  font-size: 36px;
  line-height: 54px;
  font-weight: 400;
  color: #fff;

  strong {
    font-weight: 700;
  }
`;

const FormSubheader = styled.p`
  margin: 0 0 50px 0;
  font-family: Nunito, sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  color: #fff;
`;

const Section = styled.div`
  display: grid;
  grid-template: ${(props) => props.theme.screens.lg ? 'auto' : 'auto/repeat(2, 1fr)'};
  grid-gap: 20px;
  margin-bottom: 24px;
`;

const SectionTextArea = styled.div`
  display: flex;
  grid-area: ${(props) => props.theme.screens.lg ? '3/1/10/-1' : '2/1/10/-1'};
`;

const RoundedButton = styled.button`
  margin: 0;
  padding: 12px 23px;
  border: none;
  background-color: #0ce8f9;
  font-family: Nunito, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #0147f5;
  border-radius: 30px;
  display: inline-flex;
  align-items: center;
  column-gap: 17px;
  cursor: pointer;
  outline: none;
  transition: background-color 150ms ease-out;

  &:active,
  &:focus {
    background-color: #77f5ff;
  }

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

const StyledLink = styled(Link)`
  color: #0ce8f9;
`;

const StyledPara = styled.p`
  margin: 0 0 8px 0;
  font-size: 14px;
  line-height: 19px;
`;

const StyledLabel = styled.label`
  margin: 0;
  display: flex;
  column-gap: 10px;
  cursor: pointer;
`;

const CheckboxContainer = styled.div`
  flex-shrink: 0;
`;

const ButtonContainer = styled.div`
  margin-top: 37px;
  text-align: right;
`;

const AccordionContainer = styled.div`
  height: 400px;
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
`;

const TextContent = styled.div`
  width: ${(props) => props.theme.screens.lg ? '100%' : '350px'};
`;

const CardsContainer = styled.div`
  position: absolute;
  right: -50px;
  top: -60px;
`;

const ContactPage: React.FC<RouteComponentProps> = ({ location = {} }) => {
  const path = location.pathname;
  const breakpoints = useBreakpoint();
  return (
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
          <Content>
            <TextContent>
              <SectionHeader paddingTop={breakpoints.lg ? 148 : 80} color="#fff" textAlign="left">
                <strong>Kontakt</strong>
              </SectionHeader>
              <SectionSubtitle
                paddingBottom={breakpoints.lg ? 93 : 160}
                color="#7D9AE4"
                textAlign="left"
              >
                Znajdziesz nas już w kilku miastach w Polsce. Wybierz
                interesującą Cię lokalizacje i zacznijmy wspólnie działać!
              </SectionSubtitle>
              {!breakpoints.lg &&
                <AccordionContainer>
                  <ContactAccordion />
                </AccordionContainer>
              }
            </TextContent>
            {!breakpoints.lg &&
              <StyledForm action="">
                <CardsContainer>
                  <Cards />
                </CardsContainer>
                <FormHeader>
                  <strong>Formularz</strong> kontaktowy
                </FormHeader>
                <FormSubheader>
                  Masz pytania? Wypełnij poniższy formularz, a my odpowiemy tak
                  szybko, jak to możliwe!
                </FormSubheader>
                <Section>
                  <TextInput name="name" label="Imię..." />
                  <TextInput name="email" label="Email..." />
                  <SectionTextArea>
                    <TextArea name="message" label="Treść wiadomości..." />
                  </SectionTextArea>
                </Section>
                <StyledPara>
                  Zapoznałem się z{" "}
                  <StyledLink to="/">
                    obowiązkiem informacyjnym wynikającym z RODO
                  </StyledLink>{" "}
                  oraz
                </StyledPara>
                <StyledLabel>
                  <CheckboxContainer>
                    <Checkbox />
                  </CheckboxContainer>
                  <ExpandableText text="wyrażam zgodę na: przetwarzanie moich danych osobowych podanych przy rejestracji w celu umożliwienia Administratorowi Danych Osobowych skontaktowania się ze mną drogą e-mailową oraz telefoniczną, a także wyrażam zgodę na przedstawienie mi przez Administratora Danych" />
                </StyledLabel>
                <ButtonContainer>
                  <RoundedButton>
                    Wyślij wiadomość
                    <Arrow />
                  </RoundedButton>
                </ButtonContainer>
              </StyledForm>
            }
          </Content>
        </Container>
      </Hero>
      {breakpoints.lg &&
      <Container>
        <AccordionContainer>
          <ContactAccordion />
        </AccordionContainer>
        <StyledForm action="">
          <CardsContainer>
            <Cards />
          </CardsContainer>
          <FormHeader>
            <strong>Formularz</strong> kontaktowy
          </FormHeader>
          <FormSubheader>
            Masz pytania? Wypełnij poniższy formularz, a my odpowiemy tak
            szybko, jak to możliwe!
          </FormSubheader>
          <Section>
            <TextInput name="name" label="Imię..." />
            <TextInput name="email" label="Email..." />
            <SectionTextArea>
              <TextArea name="message" label="Treść wiadomości..." />
            </SectionTextArea>
          </Section>
          <StyledPara>
            Zapoznałem się z{" "}
            <StyledLink to="/">
              obowiązkiem informacyjnym wynikającym z RODO
            </StyledLink>{" "}
            oraz
          </StyledPara>
          <StyledLabel>
            <CheckboxContainer>
              <Checkbox />
            </CheckboxContainer>
            <ExpandableText text="wyrażam zgodę na: przetwarzanie moich danych osobowych podanych przy rejestracji w celu umożliwienia Administratorowi Danych Osobowych skontaktowania się ze mną drogą e-mailową oraz telefoniczną, a także wyrażam zgodę na przedstawienie mi przez Administratora Danych" />
          </StyledLabel>
          <ButtonContainer>
            <RoundedButton>
              Wyślij wiadomość
              <Arrow />
            </RoundedButton>
          </ButtonContainer>
        </StyledForm>
        </Container>
      }
    </Layout>
  );
};

export default ContactPage;
