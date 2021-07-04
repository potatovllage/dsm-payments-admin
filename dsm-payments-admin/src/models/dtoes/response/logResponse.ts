import { UserResponseDtoType } from "./userResponseDto";
import { BoothResponseDtoType } from "./boothResponse";
import Log from "../../log";

export type LogResponseDtoType = {
  receipts: {
    id: number;
    user: UserResponseDtoType;
    booth: BoothResponseDtoType;
    requestValue: number;
    tax: number;
    finalValue: number;
    sender: string;
    createdAt: string;
  }[];
  totalPage: number;
};

export const logResponseDtoToLog = (
  logResponses: LogResponseDtoType
): { logs: Log[]; maxPage: number } => {
  return {
    maxPage: logResponses.totalPage,
    logs: logResponses.receipts.map((logResponse) => {
      const date = new Date(logResponse.createdAt);
      return {
        id: logResponse.id,
        name: logResponse.user ? logResponse.user.name : "",
        requestPoint: logResponse.requestValue,
        tax: logResponse.tax,
        point: logResponse.finalValue,
        number: logResponse.user ? logResponse.user.number.toString() : "",
        time: `${date.getHours()}시 ${date.getMinutes()}분`,
        place: logResponse.booth ? logResponse.booth.name : "",
        sender: logResponse.sender,
      };
    }),
  };
};
