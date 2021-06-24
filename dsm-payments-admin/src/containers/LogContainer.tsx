import { FC } from "react";
import LogTable from "../components/log";
import { useLogContext } from "../hooks/context/logContext";

const LogContainer: FC = () => {
  const { logs, setLogs } = useLogContext();
  return (
    <div
      style={{
        height: "calc(100vh - 140px)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <LogTable logs={logs} />
    </div>
  );
};

export default LogContainer;
