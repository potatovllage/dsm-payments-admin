import Status from "../../status";

export type StatusResponseDtoType = {
  allBoothCoinAverage: number;
  allUserCoinAverage: number;
  userCoinUseOfHour: number[] | null;
  boothCoinIncomeOfHour: number[] | null;
  boothCoinExpensesOfHour: number[] | null;
  totalCoinOfBooths: {
    id: string;
    name: string;
    coin: number;
    totalCoin: number;
  }[];
};

export const statusResponseDtoToStatus = (
  response: StatusResponseDtoType
): Status => {
  return {
    ...response,
    totalCoinOfBooths: {
      labels: response.totalCoinOfBooths.map((booth) => booth.name),
      datas: response.totalCoinOfBooths.map((booth) => booth.coin),
    },
  };
};
