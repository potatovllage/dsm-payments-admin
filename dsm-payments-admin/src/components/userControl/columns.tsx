import { Column } from "../../models/log";
import Button from "../default/button";

const buttonStyle = {
  width: 60,
  height: 40,
  color: "white",
  borderColor: "white",
};

const columns: Column[] = [
  { field: "id", headerName: "id", width: 150 },
  { field: "number", headerName: "학번", width: 180, sortable: false },
  { field: "name", headerName: "이름", width: 200, sortable: false },
  {
    field: "point",
    headerName: "소지금",
    type: "number",
    width: 200,
  },
];

export default columns;
