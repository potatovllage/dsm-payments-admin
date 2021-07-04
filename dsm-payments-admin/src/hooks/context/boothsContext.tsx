import { createContext, FC, useContext, useState } from "react";
import Booth from "../../models/booth";

type LogContextType = {
  booths: Booth[];
  setBooths: (value: Booth[]) => void;
};
const context = createContext<LogContextType | null>(null);

const BoothsContextProvider: FC = ({ children }) => {
  const [booths, setBooths] = useState<Booth[]>([]);
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
