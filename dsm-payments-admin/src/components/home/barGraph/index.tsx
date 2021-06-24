import React, { FC, useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import * as S from "../style";

interface Props {
  description: string;
  data: any;
}

const BarGraph: FC<Props> = ({ description, data }) => {
  Chart.register(...registerables);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      new Chart(canvasRef.current, {
        type: "bar",
        data: data,
      });
    }
  }, [canvasRef, data]);

  return (
    <S.MiddleCard>
      <S.Description>{description}</S.Description>
      <canvas id="barGraph" ref={canvasRef} width="770" height="250" />
    </S.MiddleCard>
  );
};

export default BarGraph;
