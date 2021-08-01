import styled from "styled-components";

const OutlineButton = styled.button`
  margin: 0;
  padding: 12px 20px;
  border: 2px solid #fff;
  font-family: Nunito, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #fff;
  border-radius: 53px;
  display: inline-flex;
  align-items: center;
  column-gap: 17px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  transition: background-color 150ms ease-out;

  svg {
    transform: translateX(0);
    transition: transform 150ms ease-out;
  }

  &:hover {
    background-color: #0147f5;
    border-color: #0147f5;

    svg {
      transform: translateX(6px);
    }
  }
`;

export { OutlineButton };
