import styled from "styled-components";

const Card = styled.div`
  /* min-height: 250px; */
  /* padding: 15px; */
  padding: ${(props) => props.theme.screens.md ? '60px 15px' : '15px'};
  min-height: ${(props) => props.theme.screens.md ? '0' : '250px'};
  background: #ffffff;
  box-shadow: 0px 15px 35px rgba(0, 70, 245, 0.1);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
`;

const CardTitle = styled.h6`
  margin: 0 0 6px 0;
  padding: 0;
  font-weight: 700;
  font-size: 42px;
  line-height: 63px;
  text-align: center;
  color: #0147f5;
`;

const CardText = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #001331;
`;

export { Card, CardTitle, CardText };
