import { motion } from "framer-motion";
import styled from "styled-components";

const Background = styled(motion.div)`
  background: linear-gradient(
    102deg,
    #042e6f,
    #022d6b,
    #002962,
    #002456,
    #001e49,
    #00193d,
    #001634,
    #001431
  );
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 200;
`;

export { Background };
