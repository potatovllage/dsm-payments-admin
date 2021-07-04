import React, { ReactElement } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Column } from "../../../models/log";

interface Props<Row> {
  rows: Row[];
  columns: Column[];
  pageSize?: number;
  style?: object;
  disableColumnSelector?: boolean;
  checkboxSelection?: boolean;
  isRowSelectable?: boolean;
  onRowSelected?: (params: any) => void;
  onSelectionModelChange?: (params: any) => void;
}

const Table = <Row,>({
  rows,
  columns,
  style = {},
  pageSize = 9,
  checkboxSelection,
  disableColumnSelector,
  isRowSelectable,
  onRowSelected,
  onSelectionModelChange,
}: Props<Row>): ReactElement => {
  return (
    <div style={style}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        disableColumnSelector={!!disableColumnSelector}
        checkboxSelection={!!checkboxSelection}
        isRowSelectable={() => !!isRowSelectable}
        onRowSelected={onRowSelected ? onRowSelected : () => {}}
        onSelectionModelChange={onSelectionModelChange}
        disableColumnMenu
      />
    </div>
  );
};

export default Table;
