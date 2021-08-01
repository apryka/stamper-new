import React from "react";
import styled from "styled-components";

type Props = {
  length?: number;
  text: string;
  height: number;
};

const StyledText = styled.p<{ height: number }>`
  margin: 0;
  padding: 0;
  color: #fff;
  font-family: Nunito, sans-serif;
  font-size: 12px;
  line-height: 16px;
  height: ${({ height }) => height}px;
`;

const ExpandLink = styled.span`
  color: #0ce8f9;
  font-family: Nunito, sans-serif;
  font-size: 12px;
  line-height: 16px;
  cursor: pointer;
  margin-left: 5px;
`;

const ExpandableText: React.FC<Props> = ({ length = 100, text, height }) => {
  const [expand, setExpand] = React.useState(false);

  return (
    <StyledText height={height}>
      {expand ? text : `${text.slice(0, length)}...`}
      <ExpandLink
        onClick={(e) => {
          e.preventDefault();
          setExpand(!expand);
        }}
      >
        {expand ? "zwiń «" : "rozwiń »"}
      </ExpandLink>
    </StyledText>
  );
};

export { ExpandableText };
