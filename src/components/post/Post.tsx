import React from "react";
import styled from "styled-components";

import { RoundedButton } from "../rounded-button";

import Arrow from "../../images/icons/arrow-icon.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CoverContainer = styled.div`
  margin-bottom: 30px;
  border-radius: 30px;
  overflow: hidden;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 46px;
  color: #fff;
  margin-bottom: 16px;
`;

const Date = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #709be7;
  margin-bottom: 14px;
`;

const Excerpt = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #709be7;
  margin-bottom: 28px;
`;

type Props = {
  cover: React.ReactNode;
  date: string;
  time: string;
  title: string;
  excerpt?: string;
  url?: string;
};

const Post: React.FC<Props> = ({ cover, date, time, title, excerpt, url }) => {
  return (
    <Container>
      <CoverContainer>{cover}</CoverContainer>
      <Date>
        {date}
        {" | "}
        {time}
      </Date>
      <Title>{title}</Title>
      {excerpt && <Excerpt>{excerpt}</Excerpt>}
      {url && (
        <RoundedButton backgroundColor="#0147F5">
          Czytaj artykuł
          <Arrow />
        </RoundedButton>
      )}
    </Container>
  );
};

export { Post };
