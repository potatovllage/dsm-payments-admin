import React, { FC } from "react";
import { Log } from "../../models/log";
import CustomTable from "../default/customTable";
import Input from "../default/input";

interface Props {
  logs: Log[];
  setSearchQuery: (value: string) => void;
  setPage: (value: number | ((value: number) => number)) => void;
}

const LogTable: FC<Props> = ({ logs, setSearchQuery, setPage }) => {
  return (
    <div
      style={{
        height: "calc(100vh - 140px)",
        width: "100%",
      }}
    >
      <Input
        width="calc(100% - 250px)"
        height={50}
        onChange={setSearchQuery}
        margin="90px 0px 30px 250px"
        placeholder="검색할 로그를 입력해 주세요."
        fontSize="15px"
      />
      <CustomTable logs={logs} setPage={setPage} />
    </div>
  );
};

export default LogTable;
