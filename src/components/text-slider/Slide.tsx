import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import { Slide as Props } from "./types";

const SlideTitle = styled.div`
  margin-bottom: 8px;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 50px;
  color: #709be7;
`;

const SlideSubtitle = styled.div`
  margin-bottom: 8px;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  color: #ffffff;
`;

const SlideText = styled.p`
  margin: 0;
  padding: 0;
  font-family: Nunito, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #7d9ae4;
`;

const Slide: React.FC<Props> = ({ title, subtitle, text }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
    }}
  >
    <SlideTitle>{title}</SlideTitle>
    <SlideSubtitle>{subtitle}</SlideSubtitle>
    <SlideText>{text}</SlideText>
  </motion.div>
);

export default Slide;
