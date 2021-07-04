import { ReactElement } from "react";

export type Log = {
  id: number;
  name: string;
  requestPoint: number;
  tax: number;
  point: number;
  place: string;
  number: string;
  time: string;
  sender: string;
};

export type Column = {
  field: string;
  headerName: string;
  width: number;
  type?: string;
  sortable?: false;
  renderCell?: (params: any) => ReactElement;
};

export default Log;
