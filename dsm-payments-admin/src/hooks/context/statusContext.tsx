import { createContext, FC, useContext, useState } from "react";
import Status from "../../models/status";

type StatusContextType = {
  status: Status;
  setStatus: (value: Status) => void;
};
const context = createContext<StatusContextType | null>(null);

const StatusContextProvider: FC = ({ children }) => {
  const [status, setStatus] = useState<Status>({
    allBoothCoinAverage: 0,
    allUserCoinAverage: 0,
    userCoinUseOfHour: null,
    boothCoinIncomeOfHour: null,
    boothCoinExpensesOfHour: null,
    totalCoinOfBooths: {
      labels: [],
      datas: [],
    },
  });
  return (
    <context.Provider value={{ status, setStatus }}>
      {children}
    </context.Provider>
  );
};

export default StatusContextProvider;

export const useStatusContext = () => {
  const status = useContext(context);
  if (!status) throw Error("modal error");
  return status;
};
