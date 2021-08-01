import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
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
import { TextInput } from "../components/text-input";
import { Menu, MenuContainer } from "../components/menu";
import { MobileMenu } from "../components/mobile-menu";
import { Hero } from "../components/hero";
import { Checkbox } from "../components/checkbox";
import { ExpandableText } from "../components/expandable-text";

import ListItemIcon from "../images/icons/list-item-icon.svg";

import Arrow from "../images/icons/arrow-icon.svg";

const MainSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) => (props.theme.screens.xl ? "column" : "row")};
  padding-top: ${(props) => (props.theme.screens.xl ? "150px" : "180px")};
  gap: 36px;
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
  flex: 1 0 635px;
`;

const Section = styled.div`
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-template: ${(props) => (props.theme.screens.xl ? "auto" : "auto/repeat(2, 1fr)")};
  grid-gap: 20px;
  margin-bottom: 46px;
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
  margin-top: 55px;
  text-align: center;
`;

const DemoPage: React.FC<RouteComponentProps> = ({ location = {} }) => {
  const path = location.pathname;
  return (
    <Layout>
      <SEO title="Stamper - dla użytkowników" description="Lorem ipsum" />
      <Hero disabledWave>
        <Container>
          <MenuContainer>
            <Menu />
          </MenuContainer>
        </Container>
        <MobileMenu />
        <Container>
          <MainSection>
            <div>
              <Header>
                <strong>Zamów</strong>
                <br />
                prezentację Stamper!
              </Header>
              <SubHeader>Zapisz się na prezentację, podczas której: </SubHeader>
              <ContactList>
                <ContactListItem>
                  <ListItemIcon />
                  <span>
                    Odbędziesz 20-minutową rozmowę z naszym ekspertem programów
                    lojalnościowych.
                  </span>
                </ContactListItem>
                <ContactListItem>
                  <ListItemIcon />
                  <span>
                    Otrzymasz szczegółowe informację na temat korzyści aplikacji
                    Stamper dla Twojego biznesu.
                  </span>
                </ContactListItem>
                <ContactListItem>
                  <ListItemIcon />
                  <span>
                    Pomożemy Ci w konfiguracji pierwszej promocji w Stamper.
                  </span>
                </ContactListItem>
              </ContactList>
            </div>
            <StyledForm action="">
              <Section>
                <TextInput name="name" label="Imię..." />
                <TextInput name="surname" label="Nazwisko..." />
                <TextInput name="phone" label="Telefon..." />
                <TextInput name="email" label="Email..." />
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
                <ExpandableText height={60} text="wyrażam zgodę na: przetwarzanie moich danych osobowych podanych przy rejestracji w celu umożliwienia Administratorowi Danych Osobowych skontaktowania się ze mną drogą e-mailową oraz telefoniczną, a także wyrażam zgodę na przedstawienie mi przez Administratora Danych" />
              </StyledLabel>
              <ButtonContainer>
                <RoundedButton>
                  ZATWIERDŹ
                  <Arrow />
                </RoundedButton>
              </ButtonContainer>
            </StyledForm>
          </MainSection>
        </Container>
      </Hero>
    </Layout>
  );
};

export default DemoPage;
