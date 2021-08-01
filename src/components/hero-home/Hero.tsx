import styled, { css } from "styled-components";

import HeroSmall from "../../images/hero-small.svg";
import HeroSmallMobile from "../../images/hero-small-mobile.svg";
import HeroBig from "../../images/hero-big.svg";
import HeroBg from "../../images/hero-home-bg.svg";
import HeroSmallBg from '../../images/hero-home-small-bg.svg';

const HeroHome = styled.div`
  padding-bottom: ${(props) => props.theme.screens.md ? 70 : 140}px;
  max-width: 1920px;
  margin: 0 auto;
  margin-bottom: ${(props) => props.theme.screens.md ? 48 : 0}px;

  ${(props) =>
    props.theme.screens.md
      ? css`
          background-image: url(${HeroSmallMobile}), url(${HeroSmallBg});
          background-repeat: no-repeat, no-repeat;
          background-position: 0 250px, 0 100%;
          background-size: 320px 429px, cover;
        `
      : css`
          background-image: url(${HeroSmall}), url(${HeroBig}), url(${HeroBg});
          background-repeat: no-repeat, no-repeat, no-repeat;
          background-position: -164px -184px, 100% -310px, 0 100%;
          background-size: 675px 906px, 880px 1180px, cover;
        `};
`;

export { HeroHome };
