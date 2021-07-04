import { LOGIN_URI, getRequest } from ".";

export const loginRequest = async (value: string) => {
  await getRequest().post(
    LOGIN_URI,
    {},
    {
      headers: {
        Authorization: value,
      },
    }
  );
};
