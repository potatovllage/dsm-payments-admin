import { createContext, FC, useContext, useState } from "react";
import { Log } from "../../models/log";

type LogContextType = {
  logs: Log[];
  setLogs: (value: Log[]) => void;
};

const dummyLog: Log[] = [
  {
    id: 1,
    number: "3114",
    name: "오준상",
    requestPoint: 120,
    tax: 20,
    point: 100,
    place: "거래 부스",
    time: "2021-07-19 11:11:11",
  },
];

const context = createContext<LogContextType | null>(null);

const LogsContextProvider: FC = ({ children }) => {
  const [logs, setLogs] = useState<Log[]>(dummyLog);
  return (
    <context.Provider value={{ logs, setLogs }}>{children}</context.Provider>
  );
};

export default LogsContextProvider;

export const useLogContext = () => {
  const logs = useContext(context);
  if (!logs) throw Error("modal error");
  return logs;
};
