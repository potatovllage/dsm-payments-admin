import { createContext, FC, useContext, useState } from "react";
import Booth from "../../models/booth";

type LogContextType = {
  booths: Booth[];
  setBooths: (value: Booth[]) => void;
};

const dummyBooth: Booth[] = [
  {
    id: 1,
    name: "오준상",
    point: 100,
    totalPoint: 300,
  },
];

const context = createContext<LogContextType | null>(null);

const BoothsContextProvider: FC = ({ children }) => {
  const [booths, setBooths] = useState<Booth[]>(dummyBooth);
  return (
    <context.Provider value={{ booths, setBooths }}>
      {children}
    </context.Provider>
  );
};

export default BoothsContextProvider;

export const useBoothContext = () => {
  const booths = useContext(context);
  if (!booths) throw Error("modal error");
  return booths;
};
