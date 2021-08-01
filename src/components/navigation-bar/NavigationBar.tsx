import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
import { Link } from "gatsby";

import { LanguageSwitcher } from "../language-switcher";
import { Container } from "../container";

import { Links, LanguageOptions } from "./constants";

const Bar = styled.div`
  display: ${(props) => (props.theme.screens.md ? "none" : "block")};
  background-color: #fff;
`;

const BarContent = styled.div`
  display: flex;
  grid-column-gap: 20px;
  justify-content: flex-start;
  height: 70px;
`;

const NavLink = styled(Link)`
  min-width: 155px;
  font-size: 18px;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  color: #123075;
  text-decoration: none;
  position: relative;
  display: flex;
  place-items: center;
  transition: color 150ms ease-in;
  &:hover {
    font-weight: 700;
    color: #0147f5;
  }

  &.active-navigation-link {
    font-weight: 700;
    color: #0147f5;

    &::before {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 7px 7px 7px;
      border-color: transparent transparent #042d65 transparent;
      transform: translateX(-50%);
    }
  }
`;

const NavigationBar: React.FC = () => {
  return (
    <ThemeProvider theme={theme()}>
      <Bar>
        <Container>
          <BarContent>
            {Links.map((link) => (
              <NavLink
                to={link.href}
                key={link.label}
                activeClassName="active-navigation-link"
              >
                {link.label}
              </NavLink>
            ))}
            <LanguageSwitcher options={LanguageOptions} />
          </BarContent>
        </Container>
      </Bar>
    </ThemeProvider>
  );
};

export { NavigationBar };
