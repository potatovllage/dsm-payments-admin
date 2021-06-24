import React, { FC, useMemo } from "react";
import { Column, Log } from "../../models/log";
import Table from "../default/table";

const columns: Column[] = [
  { field: "id", headerName: "id", width: 100 },
  { field: "number", headerName: "학번", width: 130, sortable: false },
  { field: "name", headerName: "이름", width: 130, sortable: false },
  {
    field: "requestPoint",
    headerName: "요청 금액",
    width: 200,
    sortable: false,
    renderCell: (params) => {
      return params.row.point > 0 ? (
        <p style={{ color: "green" }}>+{params.row.requestPoint}</p>
      ) : (
        <p style={{ color: "red" }}>{params.row.requestPoint}</p>
      );
    },
  },
  {
    field: "tax",
    headerName: "수수료",
    width: 100,
    sortable: false,
  },
  {
    field: "point",
    headerName: "최종 금액",
    width: 150,
    renderCell: (params) => {
      return params.row.point > 0 ? (
        <p style={{ color: "green" }}>+{params.row.point}</p>
      ) : (
        <p style={{ color: "red" }}>{params.row.point}</p>
      );
    },
  },
  {
    field: "place",
    headerName: "거래 부스",
    width: 200,
    sortable: false,
  },
  {
    field: "time",
    headerName: "시간",
    width: 200,
    sortable: false,
  },
];

interface Props {
  logs: Log[];
}

const LogTable: FC<Props> = ({ logs }) => {
  const rows = useMemo(
    () =>
      logs.map((log) => ({
        ...log,
      })),
    [logs]
  );
  return (
    <Table<Log>
      rows={rows}
      columns={columns}
      style={{ height: 600, marginLeft: 250, width: "100%", marginTop: 90 }}
    />
  );
};

export default LogTable;
