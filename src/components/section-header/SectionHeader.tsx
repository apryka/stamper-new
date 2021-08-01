import styled from "styled-components";
import { space, SpaceProps, typography, TypographyProps } from "styled-system";

const SectionHeader = styled.h5<
  { color?: string } & SpaceProps & TypographyProps
>`
  margin: 0 0 15px 0;
  padding: 0;
  display: block;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 50px;
  text-align: center;
  color: ${(props) => props.color};
  overflow-wrap: break-word;

  ${space};
  ${typography};

  strong {
    font-weight: 700;
  }
`;

SectionHeader.defaultProps = {
  color: "#001331",
};

const SectionSubtitle = styled.div<
  { color?: string } & SpaceProps & TypographyProps
>`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${(props) => props.color};

  ${space};
  ${typography};
`;

SectionSubtitle.defaultProps = {
  color: "#919191",
};

export { SectionHeader, SectionSubtitle };
