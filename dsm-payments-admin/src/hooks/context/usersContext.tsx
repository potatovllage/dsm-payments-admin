import { createContext, FC, useContext, useState } from "react";
import User from "../../models/user";

type LogContextType = {
  users: User[];
  setUsers: (value: User[]) => void;
};

const context = createContext<LogContextType | null>(null);

const UserContextProvider: FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
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
