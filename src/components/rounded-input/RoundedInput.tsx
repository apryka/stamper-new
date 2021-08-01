import styled from "styled-components";

const RoundedInput = styled.input`
  margin: 0;
  padding: 12px 23px;
  border: none;
  background-color: #fff;
  font-family: Nunito, sans-serif;
  font-size: 16px;
  line-height: 22px;
  color: #919191;
  min-width: 278px;
  border-radius: 30px;

  &:focus {
    outline: none;
  }
`;

export { RoundedInput };
