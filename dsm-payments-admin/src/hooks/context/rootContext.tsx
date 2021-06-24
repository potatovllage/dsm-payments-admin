import { FC } from "react";
import LogsContextProvider from "./logContext";
import UserContextProvider from "./usersContext";
import ModalContextProvider from "./modalContext";
import BoothsContentProvider from "./boothsContext";

const RootContextProvider: FC = ({ children }) => {
  const CombinedRootProvider = [
    () => <ModalContextProvider>{children}</ModalContextProvider>,
    LogsContextProvider,
    UserContextProvider,
    BoothsContentProvider,
  ].reduce((PrevValue, CurrentValue) => () => (
    <CurrentValue>
      <PrevValue />
    </CurrentValue>
  ));
  return <CombinedRootProvider />;
};

export default RootContextProvider;
