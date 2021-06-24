import React, { FC } from "react";
import * as S from "../style";

interface Props {
  number: number;
  description: string;
  unit?: string;
}

const Counter: FC<Props> = ({ number, description, unit }) => {
  return (
    <S.SmallCard>
      <S.Description>{description}</S.Description>
      <S.SmallCount>
        {number}
        <span>{unit}</span>
      </S.SmallCount>
    </S.SmallCard>
  );
};

export default Counter;
