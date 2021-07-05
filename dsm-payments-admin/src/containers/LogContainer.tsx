import { FC, useCallback, useEffect, useState } from "react";
import _ from "lodash";
import { getLogsRequest } from "../apis/logAPi";
import LogTable from "../components/log";
import { useLogContext } from "../hooks/context/logContext";
import { useHistory } from "react-router-dom";

const LogContainer: FC = () => {
  const { logs, setLogs } = useLogContext();
  const [query, setSearchQuery] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [maxPage, setMaxPage] = useState<number>(10);
  const history = useHistory();

  const initializeLogs = useCallback(async () => {
    if (maxPage <= page || page < 0) return;
    try {
      const response = await getLogsRequest(page, query);
      setLogs(response.logs);
      setMaxPage(response.maxPage);
    } catch (error) {
      history.push("/login");
    }
  }, [setLogs, query, page, maxPage, history]);

  const setSearchQueryWithResetPage = _.debounce((value: string) => {
    setSearchQuery(value);
    setPage(0);
  }, 1000);

  useEffect(() => {
    initializeLogs();
  }, [initializeLogs, page]);

  return (
    <div
      style={{
        height: "calc(100vh - 140px)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <LogTable
        setPage={setPage}
        logs={logs}
        setSearchQuery={setSearchQueryWithResetPage}
      />
    </div>
  );
};

export default LogContainer;
