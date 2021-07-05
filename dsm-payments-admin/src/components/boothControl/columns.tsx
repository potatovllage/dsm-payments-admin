import { Column } from "../../models/log";

const columns: Column[] = [
  { field: "id", headerName: "id", width: 150 },
  { field: "name", headerName: "부스 이름", width: 250, sortable: false },
  {
    field: "point",
    headerName: "소지금",
    type: "number",
    width: 200,
  },
  {
    field: "totalPoint",
    headerName: "누적 소지금",
    type: "number",
    width: 200,
  },
];

export default columns;
