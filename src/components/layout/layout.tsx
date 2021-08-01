import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { theme, GlobalStyles } from "../../styles";
// Components
import { CSSDebugger } from "../css-debugger";
import { Link } from "../link";
import { Footer } from "../footer";
import { NavigationBar } from "../navigation-bar";
import { Menu, MenuContainer } from "../menu";
import { Container } from "../container";
import { MobileMenu } from "../mobile-menu";

import background from "../../images/main-bg.svg";

const MainSection = styled.section`
  margin: 0;
  background: url(${background}) 0 0 no-repeat;
`;

const Title = styled.h1`
  font-size: ${(props) => (props.theme.screens.sm ? "1.8rem" : "2.2rem")};
  margin: 20px 0px;
  color: white;
`;

const Tagline = styled.h2`
  font-size: 1.1rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.blue};
`;

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const { title, description } = data.site.siteMetadata;

  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyles />
      <NavigationBar />
      <CSSDebugger />
      {/* <MainSection> */}
      <main>{children}</main>
      {/* </MainSection> */}
      <Footer />
    </ThemeProvider>
  );
};

export { Layout };
