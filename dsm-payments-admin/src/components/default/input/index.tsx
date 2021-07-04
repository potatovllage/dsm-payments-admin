import React, { FC, ChangeEvent } from "react";
import * as S from "./style";
interface Props {
  width: number | string;
  height: number | string;
  onChange: (value: string) => void;
  margin?: string;
  placeholder?: string;
  fontSize?: string;
}

const Input: FC<Props> = ({
  width,
  height,
  onChange,
  margin,
  placeholder,
  fontSize,
}) => {
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
      fontSize={fontSize}
    />
  );
};

export default Input;
