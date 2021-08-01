import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { GithubIcon } from "../github-icon";
import { useTheme } from "../../styles";
// import 'fontsource-nunito';

import { Container } from "../container";

import Wave from "../../images/newsletter-wave.svg";
import MobileWave from "../../images/newsletter-mobile-wave.svg";
import NewsletterImg from "../../images/newsletter-img.png";
import NewsletterImg2 from "../../images/newsletter-img@2x.png";
import NewsletterImg3 from "../../images/newsletter-img@3x.png";
import Arrow from "../../images/icons/arrow-icon.svg";

const Title = styled.h6`
  margin: 0;
  padding: 0;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 50px;
  color: #fff;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0ce8f9;
`;

const Background = styled.div`
  background-color: #0147f5;
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 100;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: -60px;
    left: 0;
    right: 0;
    height: 120px;
    background-image: ${(props) =>
      props.theme.screens.md ? `url(${MobileWave})` : `url(${Wave})`};
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    z-index: -1;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const RoundedInput = styled.input`
  margin: 0;
  padding: 12px 23px;
  border: none;
  background-color: #fff;
  font-family: Nunito, sans-serif;
  font-size: 16px;
  line-height: 22px;
  color: #919191;
  min-width: 278px;
  border-radius: 30px;

  &:focus {
    outline: none;
  }
`;

const RoundedButton = styled.button`
  margin: 0;
  padding: 12px 23px;
  border: none;
  background-color: #001331;
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

const StyledForm = styled.form`
  display: flex;
  gap: 10px 20px;
  margin-top: 37px;
  margin-bottom: 78px;

  flex-direction: ${(props) => (props.theme.screens.md ? "column" : "row")};
  align-items: ${(props) => (props.theme.screens.md ? "stretch" : "center")};

  ${(props) =>
    props.theme.screens.md &&
    css`
      ${RoundedButton} {
        justify-content: center;
      }
    `};
`;

const ImageHolder = styled.div`
  display: ${(props) => (props.theme.screens.md ? "none" : "block")};
  position: relative;
  flex-basis: 370px;

  img {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
  }
`;

const TextHolder = styled.div`
  flex: 1;
`;

const Newsletter: React.FC = () => {
  return (
    <Wrapper>
      <Background>
        <Container>
          <FlexWrapper>
            <TextHolder>
              <Title>Newsletter</Title>
              <Text>
                Zapisz się do newslettera i bądź na bieżąco z nowościami od
                Stamper
              </Text>
              <StyledForm action="">
                <RoundedInput placeholder="Podaj adres email..." />
                <RoundedButton>
                  Zapisz się
                  <Arrow />
                </RoundedButton>
              </StyledForm>
            </TextHolder>
            <ImageHolder>
              <img
                src={NewsletterImg}
                alt=""
                srcSet={`${NewsletterImg2} 2x, ${NewsletterImg3} 3x`}
              />
            </ImageHolder>
          </FlexWrapper>
        </Container>
      </Background>
    </Wrapper>
  );
};

export { Newsletter };
