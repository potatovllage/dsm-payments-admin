type Status = {
  allBoothCoinAverage: number;
  allUserCoinAverage: number;
  userCoinUseOfHour: number[] | null;
  boothCoinIncomeOfHour: number[] | null;
  boothCoinExpensesOfHour: number[] | null;
  totalCoinOfBooths: {
    labels: string[];
    datas: number[];
  };
};

export default Status;
