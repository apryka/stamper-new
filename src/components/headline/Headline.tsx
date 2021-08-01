import styled from "styled-components";
import { color, ColorProps } from "styled-system";

const Headline = styled.h2<ColorProps>`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 56px;

  ${color};
`;

Headline.defaultProps = {
  color: "#fff",
};

const Bold = styled.strong`
  margin: 0;
  color: inherit;
  font-weight: 700;
`;

export { Headline, Bold };
