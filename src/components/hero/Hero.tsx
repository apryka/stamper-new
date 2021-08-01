import styled, { css } from "styled-components";

import HeroSmall from "../../images/hero-small.svg";
import HeroBig from "../../images/hero-big.svg";
import HeroBg from "../../images/hero.svg";
import HeroBgSmall from "../../images/hero-small-bg.svg";

type Props = {
  disabledWave?: boolean;
};

const Hero = styled.div<Props>`
  padding-bottom: 140px;
  /* padding-bottom: ${(props) => props.theme.screen.lg ? '80px' : '140px'}; */
  background-image: url(${HeroSmall}), url(${HeroBig}),
    ${({ disabledWave }) =>
      disabledWave
        ? "linear-gradient(102.8deg, #042E6F -1.12%, #001431 100.98%)"
        : `url(${HeroBg})`};
  background-repeat: no-repeat;
  background-position: -164px -184px, 100% -310px, 0 100%;
  background-size: 675px 906px, 880px 1180px, cover;
  max-width: 1920px;
  margin: 0 auto;

  ${(props) => props.theme.screens.lg && css`
    padding-bottom: 80px;
    background-image: url(${HeroSmall}), ${props.disabledWave ? "linear-gradient(102.8deg, #042E6F -1.12%, #001431 100.98%)" : `url(${HeroBgSmall})`};
    background-size: 675px 906px, cover;
    background-position: -164px -184px, 0 100%;
  `};
`;

export { Hero };
