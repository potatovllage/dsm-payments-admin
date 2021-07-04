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
  { field: "name", headerName: "부스 이름", width: 200, sortable: false },
  {
    field: "point",
    headerName: "소지금",
    type: "number",
    width: 150,
  },
  {
    field: "totalPoint",
    headerName: "누적 소지금",
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
