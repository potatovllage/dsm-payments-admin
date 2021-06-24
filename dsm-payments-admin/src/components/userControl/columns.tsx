import { Column } from "../../models/log";
import Button from "../default/button";

const buttonStyle = {
  width: 60,
  height: 40,
  color: "white",
  borderColor: "white",
};

const columns: Column[] = [
  { field: "id", headerName: "id", width: 100 },
  { field: "number", headerName: "학번", width: 130, sortable: false },
  { field: "name", headerName: "이름", width: 150, sortable: false },
  {
    field: "point",
    headerName: "소지금",
    type: "number",
    width: 150,
  },
  {
    field: "log",
    headerName: "로그 확인",
    width: 150,
    sortable: false,
    renderCell: () => (
      <Button {...buttonStyle} backgroundColor="" color="black">
        로그 보기
      </Button>
    ),
  },
];

export default columns;
