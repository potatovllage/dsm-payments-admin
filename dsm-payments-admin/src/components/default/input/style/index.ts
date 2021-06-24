import styled from "styled-components";

export const Input = styled.input<{
  width: number;
  height: number;
  margin?: string;
}>`
  ${(props) => `
    width: ${props.width}px;
    height: ${props.height}px;
    margin: ${props.margin};
    `}
  border: 1px solid black;
  border-radius: 5px;
  padding-left: 5px;
  box-sizing: border-box;
`;
