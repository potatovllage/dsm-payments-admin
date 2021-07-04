import styled from "styled-components";

export const Input = styled.input<{
  width: number | string;
  height: number | string;
  margin?: string;
  fontSize?: string;
}>`
  ${(props) => `
    width: ${
      typeof props.width === "string" ? props.width : `${props.width}px`
    };
    height: ${
      typeof props.height === "string" ? props.height : `${props.height}px`
    };
    margin: ${props.margin};
    font-size: ${props.fontSize};
    `}
  border: 1px solid black;
  border-radius: 5px;
  padding-left: 5px;
  box-sizing: border-box;
`;
