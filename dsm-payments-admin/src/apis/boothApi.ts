import { BOOTH_PAY_URI, GET_BOOTHES_URI, getRequest } from ".";
import Booth from "../models/booth";
import {
  BoothResponseDtoType,
  boothResponseToBooth,
} from "../models/dtoes/response/boothResponse";

export const boothPayRequest = async (boothId: string, value: number) => {
  await getRequest().post(`${BOOTH_PAY_URI}/${boothId}`, { value });
};

export const getBoothesRequest = async (
  query: string = ""
): Promise<Booth[]> => {
  const response = await getRequest().get<BoothResponseDtoType[]>(
    `${GET_BOOTHES_URI}?search=${query}`
  );
  return boothResponseToBooth(response.data);
};
