import User from "../../user";

export type UserResponseDtoType = {
  uuid: string;
  name: string;
  number: number;
  coin: number;
};

export const userResponseDtoToUser = (
  response: UserResponseDtoType[]
): User[] => {
  return response.map((user) => ({
    id: user.uuid,
    name: user.name,
    number: user.number.toString(),
    point: user.coin,
  }));
};
