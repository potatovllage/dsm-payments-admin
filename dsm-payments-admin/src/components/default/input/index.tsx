import React, { FC } from "react";
import { ChangeEvent } from "react-transition-group/node_modules/@types/react";
import * as S from "./style";
interface Props {
  width: number;
  height: number;
  onChange: (value: string) => void;
  margin?: string;
  placeholder?: string;
}

const Input: FC<Props> = ({ width, height, onChange, margin, placeholder }) => {
  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <S.Input
      width={width}
      height={height}
      margin={margin}
      onChange={inputChangeHandler}
      placeholder={placeholder}
    />
  );
};

export default Input;
