import { CircularProgress } from "@material-ui/core";
import React, { FC } from "react";
import Status from "../../models/status";
import BarGraph from "./barGraph";
import Counter from "./counter";
import DoughnutGraph from "./doughnutGraph";
import EmptyGraph from "./empty";
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

const getboothSellData = ({
  labels,
  datas,
}: {
  labels: string[];
  datas: number[];
}) => ({
  labels,
  datasets: [
    {
      label: "부스 판매량",
      data: datas,
      backgroundColor,
      borderColor,
      borderWidth,
    },
  ],
});

const getTimeSellData = (datas: number[], label: string) => ({
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
  ],
  datasets: [
    {
      label,
      data: datas,
      backgroundColor,
      borderColor,
      borderWidth,
    },
  ],
});

const getBoothTimeSellData = (
  plusDatas: number[],
  minusDatas: number[],
  label: string
) => ({
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
  ],
  datasets: [
    {
      label: "증가량",
      data: plusDatas,
      backgroundColor: "#ffb0c1",
      borderColor: "#ffb0c1",
      borderWidth,
    },
    {
      label: "감소량",
      data: minusDatas,
      backgroundColor: "#9bcff5",
      borderColor: "#9bcff5",
      borderWidth,
    },
  ],
});

interface Props {
  status: Status;
  loading: boolean;
}

const Home: FC<Props> = ({ status, loading }) => {
  if (loading)
    return (
      <S.Home>
        <S.HomeBody>
          <CircularProgress />
        </S.HomeBody>
      </S.Home>
    );
  return (
    <S.Home>
      <S.HomeBody>
        <div>
          {status.boothCoinIncomeOfHour || status.boothCoinExpensesOfHour ? (
            <BarGraph
              data={getBoothTimeSellData(
                status.boothCoinIncomeOfHour || [],
                status.boothCoinExpensesOfHour || [],
                "시간별 부스 판매량"
              )}
              description="시간별 부스 판매량"
            />
          ) : (
            <EmptyGraph size="middle" description="시간별 부스 판매량" />
          )}
          <Counter
            number={status.allUserCoinAverage}
            description="유저 평균 코인 보유량"
            unit="point"
          />
          <Counter
            number={status.allBoothCoinAverage}
            description="부스 평균 코인 보유량"
            unit="point"
          />
          {status.userCoinUseOfHour ? (
            <LineGraph
              description="시간당 유저 사용량"
              data={getTimeSellData(
                status.userCoinUseOfHour,
                "시간당 유저 사용량"
              )}
            />
          ) : (
            <EmptyGraph size="middle" description="시간당 유저 사용량" />
          )}
          {status.totalCoinOfBooths &&
          status.totalCoinOfBooths.datas.length > 0 ? (
            <DoughnutGraph
              description="부스별 판매량"
              data={getboothSellData(status.totalCoinOfBooths)}
            />
          ) : (
            <EmptyGraph size="big" description="부스별 판매량" />
          )}
        </div>
      </S.HomeBody>
    </S.Home>
  );
};

export default Home;
