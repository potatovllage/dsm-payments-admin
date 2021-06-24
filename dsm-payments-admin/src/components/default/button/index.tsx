import React, { FC } from "react";
import * as S from "./style";

interface Props {
  width: number;
  height: number;
  fontSize?: number;
  color: string;
  backgroundColor: string;
  borderColor: string;
  margin?: string;
  onClick?: () => void;
}

const Button: FC<Props> = (props) => {
  return (
    <S.Button {...props} onClick={props.onClick}>
      {props.children}
    </S.Button>
  );
};

export default Button;
