import styled from "styled-components";
import { color, ColorProps } from "styled-system";

const RoundedButton = styled.button<ColorProps>`
  margin: 0;
  padding: 12px 23px;
  border: none;
  font-family: Nunito, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  border-radius: 30px;
  display: inline-flex;
  align-items: center;
  column-gap: 17px;
  cursor: pointer;
  outline: none;

  ${color};

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

RoundedButton.defaultProps = {
  color: "#fff",
  backgroundColor: "#001331",
};

export { RoundedButton };
