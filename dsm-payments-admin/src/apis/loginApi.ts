import { LOGIN_URI, request } from ".";

export const loginRequest = async () => {
  try {
    await request.post(LOGIN_URI);
  } catch (error) {
    throw error;
  }
};
