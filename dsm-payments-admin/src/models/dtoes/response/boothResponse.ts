import Booth from "../../booth";

export type BoothResponseDtoType = {
  id: string;
  name: string;
  coin: number;
  totalCoin: number;
};

export const boothResponseToBooth = (
  response: BoothResponseDtoType[]
): Booth[] => {
  return response.map((booth) => ({
    id: booth.id,
    name: booth.name,
    point: booth.coin,
    totalPoint: booth.totalCoin,
  }));
};
