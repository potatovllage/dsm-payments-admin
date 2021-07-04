import React, { FC } from "react";
import * as S from "../style";

interface Props {
  description: string;
  size: "big" | "middle";
}

const EmptyGraph: FC<Props> = ({ description, size }) => {
  if (size === "big")
    return (
      <S.BigCard>
        <S.Description>{description}</S.Description>
        <p>데이터가 부족합니다.</p>
      </S.BigCard>
    );
  return (
    <S.MiddleCard>
      <S.Description>{description}</S.Description>
      <p>데이터가 부족합니다.</p>
    </S.MiddleCard>
  );
};

export default EmptyGraph;
