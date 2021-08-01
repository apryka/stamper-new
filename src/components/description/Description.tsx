import styled from "styled-components";
import { color, ColorProps } from "styled-system";

const Description = styled.p<ColorProps>`
  margin: 0;
  font-family: Nunito, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  ${color};
`;

Description.defaultProps = {
  color: "#fff",
};

export { Description };
