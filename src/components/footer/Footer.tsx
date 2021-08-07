import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { GithubIcon } from "../github-icon";
import { useTheme } from "../../styles";

import { Container } from "../container";
import Twitter from "../../images/icons/twitter-icon.svg";
import Facebook from "../../images/icons/facebook-icon.svg";
import Instagram from "../../images/icons/instagram-icon.svg";

const StyledFooter = styled.footer`
  background: linear-gradient(102.8deg, #042e6f -1.12%, #001431 100.98%);
  border-top: 1px solid #709be7;
  margin-left: auto;
  margin-right: auto;
  max-width: 1920px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.theme.screens.md ? "auto" : "repeat(4, 1fr)"};
  text-align: ${(props) => (props.theme.screens.md ? "center" : "left")};
`;

const FooterContent = styled.div`
  padding: 66px 0;
`;

const FooterTitle = styled.h6`
  margin: 0 0 15px 0;
  font-size: 16px;
  line-height: 22px;
  text-transform: uppercase;

  color: #709be7;
  font-weight: 700;
  font-family: "Nunito", sans-serif;
`;

const FooterList = styled.ul`
  padding: 0;
  list-style: none;
  margin: ${(props) => (props.theme.screens.md ? "0 0 60px 0" : "0 0 15px 0")};
`;

const FooterListItem = styled.li``;

const FooterLink = styled(Link)`
  font-size: ${(props) => (props.theme.screens.md ? "16px" : "14px")};
  line-height: 22px;

  color: #fff;
  font-weight: 400;
  font-family: "Nunito", sans-serif;

  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const FooterCopyright = styled.div`
  background-color: #0147f5;
`;

const FooterCopyrightContent = styled.div`
  color: #fff;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: ${(props) => (props.theme.screens.md ? "column" : "row")};
  height: ${(props) => (props.theme.screens.md ? "auto" : "60px")};
  padding: ${(props) => (props.theme.screens.md ? "20px" : "0")};
`;

const SocialBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.theme.screens.md ? "center" : "flex-end"};
`;

const IconLink = styled(Link)`
  display: inline-block;
  text-decoration: none;

  & + & {
    margin-left: 17px;
  }
`;

const SocialBarTitle = styled.div`
  display: ${(props) => (props.theme.screens.md ? "none" : "block")};
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: "#fff";
  text-transform: uppercase;
  margin-right: 34px;
`;

const Footer: React.FC = () => {
  // const { blue } = useTheme().colors;
  // https://getwaves.io/
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <FooterGrid>
            <FooterList>
              <FooterListItem>
                <FooterTitle>Dla użytkownika</FooterTitle>
              </FooterListItem>
              <FooterListItem>
                <FooterLink to="/">Dla użytkownika</FooterLink>
              </FooterListItem>
            </FooterList>
            <FooterList>
              <FooterListItem>
                <FooterTitle>Dla przedsiębiorcy</FooterTitle>
              </FooterListItem>
              <FooterListItem>
                <FooterLink to="/">Branże</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink to="/">Case study</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink to="/">Blog</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink to="/demo">Demo</FooterLink>
              </FooterListItem>
            </FooterList>
            <FooterList>
              <FooterListItem>
                <FooterTitle>Dokumenty</FooterTitle>
              </FooterListItem>
              <FooterListItem>
                <FooterLink to="/">Polityka prywatności</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink to="/">Regulamin aplikacji</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink to="/">RODO</FooterLink>
              </FooterListItem>
            </FooterList>
            <FooterList>
              <FooterListItem>
                <FooterTitle>Kontakt</FooterTitle>
              </FooterListItem>
            </FooterList>
          </FooterGrid>
          <SocialBar>
            <SocialBarTitle>Obserwuj nas:</SocialBarTitle>
            <IconLink to="/">
              <Twitter />
            </IconLink>
            <IconLink to="/">
              <Facebook />
            </IconLink>
            <IconLink to="/">
              <Instagram />
            </IconLink>
          </SocialBar>
        </FooterContent>
      </Container>
      <FooterCopyright>
        <Container>
          <FooterCopyrightContent>
            <span>{`Copyright @${new Date().getFullYear()} by getstamper.pl`}</span>
            <span>All rights reserved.</span>
          </FooterCopyrightContent>
        </Container>
      </FooterCopyright>
    </StyledFooter>
  );
};

export { Footer };
