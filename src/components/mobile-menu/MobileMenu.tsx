import React from "react";
import { Link } from "gatsby";
import { motion, useCycle } from "framer-motion";
import styled from "styled-components";

import { MenuToggle } from "./MenuToggle";

import { Logo } from "../logo";
import { Background } from "./Background";
import { Navigation } from "./Navigation";
import { MenuItem } from "./MenuItem";
import { Button, IconContainer } from "../button";
import { Container } from "../container";

import Android from "../../images/icons/android-icon.svg";
import Apple from "../../images/icons/apple-icon.svg";

const links = [
  {
    label: "Strona główna",
    href: "/",
  },
  {
    label: "Dla użytkownika",
    href: "/user",
  },
  {
    label: "Dla przedsiębiorcy",
    href: "/merchant",
  },
  {
    label: "Kontakt",
    href: "/contact",
  },
];

const Wrapper = styled(motion.nav)`
  display: ${(props) => (props.theme.screens.md ? "block" : "none")};
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: normal;
`;

const AbsoluteContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  z-index: 300;
`;

const BorderLine = styled(motion.div)`
  height: 1px;
  background-color: #709be7;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  margin-top: 30px;
`;

const backgroundVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: "100%",
    transition: { delay: 0.5 + links.length * 0.05 },
  },
};

const navigationVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const borderLineVariants = {
  open: {
    scale: 1,
    transition: { delay: links.length * 0.2 },
  },
  closed: {
    scale: 0,
    transition: { delay: links.length * 0.05 },
  },
};

const buttonContainerVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const buttonVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MobileMenu: React.FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = React.useRef(null);

  return (
    <Wrapper
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
    >
      <AbsoluteContainer>
        <Container>
          <Nav>
            <Link to="/">
              <Logo id='mobile-logo' />
            </Link>
            <MenuToggle toggle={() => toggleOpen()} />
          </Nav>
        </Container>
        {isOpen && (
          <>
            <Navigation variants={navigationVariants}>
              {links.map((link) => (
                <MenuItem
                  key={link.label}
                  label={link.label}
                  href={link.href}
                />
              ))}
            </Navigation>
            <BorderLine variants={borderLineVariants} />
            <ButtonContainer variants={buttonContainerVariants}>
              <motion.div variants={buttonVariants}>
                <Button variant="primary">
                  Pobierz aplikację{" "}
                  <IconContainer>
                    <Android />
                  </IconContainer>
                </Button>
              </motion.div>
              <motion.div variants={buttonVariants}>
                <Button variant="primary">
                  Pobierz aplikację{" "}
                  <IconContainer>
                    <Apple />
                  </IconContainer>
                </Button>
              </motion.div>
            </ButtonContainer>
          </>
        )}
      </AbsoluteContainer>
      <Background
        variants={backgroundVariants}
        transition={{ x: { type: "spring", stiffness: 300, damping: 30 } }}
      />
    </Wrapper>
  );
};

export { MobileMenu };
