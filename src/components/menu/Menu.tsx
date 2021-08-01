import React from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { Link } from "gatsby";

import { Button } from "../button";
import { Logo } from "../logo";

import Chevron from "../../images/icons/menu-dropdown-icon.svg";

const StyledNav = styled.nav`
  margin: 0;
  padding: 0;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  grid-column-gap: 20px;
`;

const StyledListItem = styled.li<SpaceProps>`
  display: inline-block;
  position: relative;
  ${space};
`;

const MenuLink = styled(Link)`
  font-family: Nunito, sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #fff;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  column-gap: 10px;
`;

const MenuContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    padding: 35px 0;
  }
`;

const SubmenuContainer = styled.div<{ isActive: boolean }>`
  padding: 16px 18px;
  background: #ffffff;
  box-shadow: 0px 15px 35px rgba(0, 70, 245, 0.1);
  border-radius: 15px;
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 100%;
  z-index: 10;
  transform: translateY(23px);

  display: ${(props) => (props.isActive ? "flex" : "none")};

  &:before {
    content: "";
    display: block;
    width: 14px;
    height: 14px;
    background-color: inherit;
    transform: rotate(45deg);
    position: absolute;
    left: 23px;
    top: -7px;
    z-index: -1;
  }
`;

const SubmenuLink = styled(Link)`
  color: #919191;
  font-family: Nunito, sans-serif;
  font-size: 16px;
  line-height: 32px;
  text-decoration: none;
  white-space: nowrap;
  transition: color 150ms ease-out;

  &:hover {
    color: #123075;
  }
`;

const Menu: React.FC = () => {
  const [isActive, setActive] = React.useState(false);

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setActive(!isActive);
  };

  return (
    <StyledNav>
      <StyledList>
        <StyledListItem marginRight="auto">
          <Link to="/">
            <Logo id='main-logo' />
          </Link>
        </StyledListItem>
        <StyledListItem>
          <MenuLink to="/" onClick={handleClick}>
            Branże
            <Chevron />
          </MenuLink>
          <SubmenuContainer isActive={isActive}>
            <SubmenuLink to="">gastronomia</SubmenuLink>
            <SubmenuLink to="">salon kosmetyczny/fryzjerski</SubmenuLink>
            <SubmenuLink to="">salon SPA</SubmenuLink>
            <SubmenuLink to="">producent</SubmenuLink>
            <SubmenuLink to="">sklep online</SubmenuLink>
          </SubmenuContainer>
        </StyledListItem>
        <StyledListItem>
          <MenuLink to="/">Case Study</MenuLink>
        </StyledListItem>
        <StyledListItem>
          <MenuLink to="/">Blog</MenuLink>
        </StyledListItem>
        <StyledListItem>
          <MenuLink to="/contact">Kontakt</MenuLink>
        </StyledListItem>
        <StyledListItem>
          <MenuLink to="/demo">
            <Button variant="secondary">DEMO</Button>
          </MenuLink>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
};

export { Menu, MenuContainer };
