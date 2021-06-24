import React from "react";
import BarGraph from "./barGraph";
import Counter from "./counter";
import DoughnutGraph from "./doughnutGraph";
import LineGraph from "./lineGraph";
import * as S from "./style";

const backgroundColor = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(255, 159, 64, 0.2)",
  "rgba(255, 205, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(201, 203, 207, 0.2)",
];

const borderColor = [
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)",
];

const borderWidth = 1;

const boothSellData = {
  labels: [
    "잔은 높게 우리 사이는 깊게",
    "쫄리면 죽으시던가",
    "테스트 부스1",
    "테스트 부스2",
    "테스트 부스3",
  ],
  datasets: [
    {
      label: "부스 판매량",
      data: [65, 100, 12, 30, 60],
      backgroundColor,
      borderColor,
      borderWidth,
    },
  ],
};

const timeSellData = {
  labels: [
    "8시",
    "9시",
    "10시",
    "11시",
    "12시",
    "1시",
    "2시",
    "3시",
    "4시",
    "5시",
    "6시",
    "7시",
  ],
  datasets: [
    {
      label: "시간별 부스 판매량",
      data: [65, 100, 12, 30, 60, 100, 50, 70, 80],
      backgroundColor,
      borderColor,
      borderWidth,
    },
  ],
};

const Home = () => {
  return (
    <S.Home>
      <S.HomeBody>
        <div>
          <LineGraph data={timeSellData} description="시간별 부스 판매량" />
          <Counter
            number={5}
            description="유저 평균 코인 보유량"
            unit="point"
          />
          <Counter
            number={100}
            description="부스 평균 코인 보유량"
            unit="point"
          />
          <LineGraph description="시간당 유저 사용량" data={boothSellData} />
          <DoughnutGraph description="부스별 판매량" data={boothSellData} />
        </div>
      </S.HomeBody>
    </S.Home>
  );
};

export default Home;
