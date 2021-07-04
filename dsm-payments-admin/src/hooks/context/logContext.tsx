import { createContext, FC, useContext, useState } from "react";
import { Log } from "../../models/log";

type LogContextType = {
  logs: Log[];
  setLogs: (value: Log[]) => void;
};

const context = createContext<LogContextType | null>(null);

const LogsContextProvider: FC = ({ children }) => {
  const [logs, setLogs] = useState<Log[]>([]);
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
