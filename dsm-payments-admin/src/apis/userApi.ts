import { GET_USERS_URI, getRequest, USER_PAY_URI } from ".";
import {
  userResponseDtoToUser,
  UserResponseDtoType,
} from "../models/dtoes/response/userResponseDto";
import User from "../models/user";

export const userPayRequest = async (userId: string, value: number) => {
  await getRequest().post(`${USER_PAY_URI}/${userId}`, { value });
};

export const getUsersRequest = async (query: string = ""): Promise<User[]> => {
  const response = await getRequest().get<UserResponseDtoType[]>(
    `${GET_USERS_URI}?search=${query}`
  );
  return userResponseDtoToUser(response.data);
};
