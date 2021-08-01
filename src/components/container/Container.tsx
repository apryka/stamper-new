import styled, { css } from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  padding: ${(props) => (props.theme.screens.lg ? "0 20px" : "0")};
  max-width: 1110px;

  ${(props) => (props.theme.screens.xl && css`overflow-x: clip`)};
`;

export { Container };
