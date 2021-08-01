import styled, { css } from "styled-components";

const ContentGrid = styled.section`
  display: flex;
  align-items: center;
  gap: 40px;

  flex-direction: ${(props) => (props.theme.screens.md ? "column" : "row")};

  & + & {
    margin-top: 50px;
  }
`;

const Title = styled.h3`
  margin: 0 0 18px 0;
  padding: 0;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  color: #001331;

  font-size: ${(props) => (props.theme.screens.md ? "28px" : "36px")};
  line-height: ${(props) => (props.theme.screens.md ? "42px" : "50px")};
`;

const TitleBold = styled.strong`
  font-weight: 700;
`;

const Description = styled.p`
  margin: 0;
  padding: 0;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #919191;
`;

const TextContainer = styled.div`
  flex-basis: ${(props) => (props.theme.screens.md ? "auto" : "450px")};

  ${(props) =>
    props.theme.screens.md &&
    css`
      order: -1;
    `};
`;

export { ContentGrid, Title, TitleBold, TextContainer, Description };
