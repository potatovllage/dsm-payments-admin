import styled from "styled-components";

export const Button = styled.button<{
  width: number;
  height: number;
  fontSize?: number;
  color: string;
  backgroundColor: string;
  borderColor: string;
  margin?: string;
}>`
  ${(props) => `
    width: ${props.width}px;
    height: ${props.height}px;
    color: ${props.color};
    background-color: ${props.backgroundColor};
    border: 1px solid ${props.borderColor};
    font-size: ${props.fontSize ? props.fontSize : 12}px;
    margin: ${props.margin ? props.margin : "auto"};
  `}
  border-radius: 5px;
`;
