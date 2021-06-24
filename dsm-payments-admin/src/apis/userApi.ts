import { request, USER_PAY_URI } from ".";

export const userPayRequest = (userId: string, value: number) => {
  try {
    request.post(`${USER_PAY_URI}/${userId}`, { value });
  } catch (error) {
    throw error;
  }
};
