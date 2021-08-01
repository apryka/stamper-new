import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import ChevronIcon from "../../images/icons/chevron-bottom-icon.svg";
import EmailIcon from "../../images/icons/email-icon.svg";
import PhoneIcon from "../../images/icons/phone-icon.svg";

const iconVariants = {
  inactive: {
    backgroundColor: "#fff",
    rotate: 0,
  },
  active: {
    backgroundColor: "#0046F5",
    rotate: -180,
  },
};

const detailsVariants = {
  inactive: {
    height: 0,
  },
  active: {
    height: "auto",
  },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Summary = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Nunito, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #001331;
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    css`
      margin-bottom: 10px;
      font-weight: 700;

      path {
        fill: #fff;
      }
    `};
`;

const Icon = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: 2px solid #0046f5;
  cursor: pointer;
`;

const Item = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-bottom: 26px;
  padding-top: 22px;
  border-bottom: 1px solid #e3eafb;

  &:last-child {
    border: none;
  }
`;

const Details = styled(motion.div)`
  font-family: Nunito, sans-serif;
  font-weight: 400;
  color: #909090;
  overflow: hidden;
`;

const List = styled.ul`
  margin: 10px 0 0 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-family: Nunito, sans-serif;
  font-weight: 400;
  color: #909090;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

type Cities = "krakow" | "katowice" | "opole";

const ContactAccordion: React.FC = () => {
  const [activeItem, setActiveItem] = React.useState<Cities>("krakow");

  return (
    <Container>
      <Item animate={activeItem === "krakow" ? "active" : "inactive"}>
        <Summary
          onClick={() => setActiveItem("krakow")}
          isActive={activeItem === "krakow"}
        >
          Kraków
          <Icon variants={iconVariants}>
            <ChevronIcon />
          </Icon>
        </Summary>
        <Details variants={detailsVariants}>
          Kraków
          <br />
          ul. Nazwa 00,
          <br />
          00-000 Kraków
          <List>
            <ListItem>
              <EmailIcon />
              <a href="mailto:mail@stamper.pl">mail@stamper.pl</a>
            </ListItem>
            <ListItem>
              <PhoneIcon />
              <a href="tel:+48700200300">700 200 300</a>
            </ListItem>
          </List>
        </Details>
      </Item>
      <Item animate={activeItem === "opole" ? "active" : "inactive"}>
        <Summary
          onClick={() => setActiveItem("opole")}
          isActive={activeItem === "opole"}
        >
          Opole
          <Icon variants={iconVariants}>
            <ChevronIcon />
          </Icon>
        </Summary>
        <Details variants={detailsVariants}>
          Kraków
          <br />
          ul. Nazwa 00,
          <br />
          00-000 Kraków
          <List>
            <ListItem>
              <EmailIcon />
              <a href="mailto:mail@stamper.pl">mail@stamper.pl</a>
            </ListItem>
            <ListItem>
              <PhoneIcon />
              <a href="tel:+48700200300">700 200 300</a>
            </ListItem>
          </List>
        </Details>
      </Item>
      <Item animate={activeItem === "katowice" ? "active" : "inactive"}>
        <Summary
          onClick={() => setActiveItem("katowice")}
          isActive={activeItem === "katowice"}
        >
          Katowice
          <Icon variants={iconVariants}>
            <ChevronIcon />
          </Icon>
        </Summary>
        <Details variants={detailsVariants}>
          Kraków
          <br />
          ul. Nazwa 00,
          <br />
          00-000 Kraków
          <List>
            <ListItem>
              <EmailIcon />
              <a href="mailto:mail@stamper.pl">mail@stamper.pl</a>
            </ListItem>
            <ListItem>
              <PhoneIcon />
              <a href="tel:+48700200300">700 200 300</a>
            </ListItem>
          </List>
        </Details>
      </Item>
    </Container>
  );
};

export { ContactAccordion };
