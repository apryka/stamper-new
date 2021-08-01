import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLi = styled(motion.li)`
  display: block;
  text-align: center;
`;

const StyledLink = styled(Link)`
  font-family: Nunito, sans-serif;
  font-size: 18px;
  line-height: 70px;
  color: #ffffff;
  text-decoration: none;
`;

const variants = {
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

type Props = {
  href: string;
  label: string;
};

const MenuItem: React.FC<Props> = ({ href, label }) => (
  <StyledLi variants={variants}>
    <StyledLink to={href}>{label}</StyledLink>
  </StyledLi>
);

export { MenuItem };
