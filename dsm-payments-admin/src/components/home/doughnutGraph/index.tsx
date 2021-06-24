import React, { FC, useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import * as S from "../style";

interface Props {
  description: string;
  data: any;
}

const DoughnutGraph: FC<Props> = ({ description, data }) => {
  Chart.register(...registerables);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      new Chart(canvasRef.current, {
        type: "doughnut",
        data: data,
      });
    }
  }, [canvasRef, data]);

  return (
    <S.BigCard>
      <S.Description>{description}</S.Description>
      <div>
        <canvas id="doughnutGraph" ref={canvasRef} width="500" height="500" />
      </div>
    </S.BigCard>
  );
};

export default DoughnutGraph;
