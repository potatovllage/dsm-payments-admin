import { createContext, FC, useContext, useState } from "react";

export type ModalType =
  | "userPlus"
  | "userMinus"
  | "boothPlus"
  | "boothMinus"
  | "";

type ModalContextType = {
  type: ModalType;
  setType: (value: ModalType) => void;
  modalInfo: any;
  setModalInfo: (value: any) => void;
};

const context = createContext<ModalContextType | null>(null);

const ModalContextProvider: FC = ({ children }) => {
  const [type, setType] = useState<ModalType>("");
  const [modalInfo, setModalInfo] = useState<any>({});
  return (
    <context.Provider
      value={{
        type,
        setType,
        modalInfo,
        setModalInfo,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ModalContextProvider;

export const useModalContext = () => {
  const modal = useContext(context);
  if (!modal) throw Error("modal error");
  return modal;
};
