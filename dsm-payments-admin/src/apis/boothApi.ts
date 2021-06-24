import { BOOTH_PAY_URI, request } from ".";

export const boothPayRequest = (boothId: string, value: number) => {
  request.post(`${BOOTH_PAY_URI}/${boothId}`, { value });
};
