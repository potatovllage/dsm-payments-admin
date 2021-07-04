import { FC } from "react";
import LogsContextProvider from "./logContext";
import UserContextProvider from "./usersContext";
import ModalContextProvider from "./modalContext";
import BoothsContentProvider from "./boothsContext";
import StatusContextProvider from "./statusContext";

const RootContextProvider: FC = ({ children }) => {
  const CombinedRootProvider = [
    () => <ModalContextProvider>{children}</ModalContextProvider>,
    LogsContextProvider,
    UserContextProvider,
    BoothsContentProvider,
    StatusContextProvider,
  ].reduce((PrevValue, CurrentValue) => () => (
    <CurrentValue>
      <PrevValue />
    </CurrentValue>
  ));
  return <CombinedRootProvider />;
};

export default RootContextProvider;
