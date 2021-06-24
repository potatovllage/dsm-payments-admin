import { createContext, FC, useContext, useState } from "react";
import User from "../../models/user";

type LogContextType = {
  users: User[];
  setUsers: (value: User[]) => void;
};

const dummyUser: User[] = [
  {
    id: 1,
    number: "3114",
    name: "오준상",
    point: 100,
  },
  {
    id: 2,
    number: "3114",
    name: "오준상",
    point: 100,
  },
  {
    id: 3,
    number: "3114",
    name: "오준상",
    point: 100,
  },
  {
    id: 4,
    number: "3114",
    name: "오준상",
    point: 100,
  },
  {
    id: 5,
    number: "3114",
    name: "오준상",
    point: 100,
  },
  {
    id: 7,
    number: "3114",
    name: "오준상",
    point: 100,
  },
];

const context = createContext<LogContextType | null>(null);

const UserContextProvider: FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>(dummyUser);
  return (
    <context.Provider value={{ users, setUsers }}>{children}</context.Provider>
  );
};

export default UserContextProvider;

export const useUserContext = () => {
  const users = useContext(context);
  if (!users) throw Error("modal error");
  return users;
};
