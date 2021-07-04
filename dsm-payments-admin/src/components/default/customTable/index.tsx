import React, { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import * as S from "./style";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Log from "../../../models/log";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
}

const headCells: HeadCell[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "id",
  },
  { id: "number", numeric: true, disablePadding: false, label: "학번" },
  { id: "name", numeric: true, disablePadding: false, label: "이름" },
  {
    id: "requestPoint",
    numeric: true,
    disablePadding: false,
    label: "요청 금액",
  },
  { id: "tax", numeric: true, disablePadding: false, label: "수수료" },
  { id: "booth", numeric: true, disablePadding: false, label: "거래 부스" },
  { id: "sender", numeric: true, disablePadding: false, label: "요청자" },
  { id: "time", numeric: true, disablePadding: false, label: "시간" },
];

interface EnhancedTableProps {
  classes: ReturnType<typeof useStyles>;
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy } = props;

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding="default"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "calc(100% - 250px)",
      marginLeft: 250,
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1,
    },
  })
);

interface Props {
  logs: Log[];
  setPage: (value: number | ((value: number) => number)) => void;
}

const CustomTable: FC<Props> = ({ logs, setPage }) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<string>("id");

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={logs.length}
            />
            <TableBody>
              {stableSort(logs, getComparator(order, orderBy)).map(
                (row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        align="left"
                      >
                        {row.id}
                      </TableCell>
                      <TableCell align="left">{row.number}</TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.requestPoint}</TableCell>
                      <TableCell align="left">{row.tax}</TableCell>
                      <TableCell align="left">{row.place}</TableCell>
                      <TableCell align="left">{row.sender}</TableCell>
                      <TableCell align="left">{row.time}</TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <S.TablePagination>
          <S.PagenationButtonWrapper>
            <button
              className="back"
              onClick={() => setPage((page) => page - 1)}
            />
            <button
              className="front"
              onClick={() => setPage((page) => page + 1)}
            />
          </S.PagenationButtonWrapper>
        </S.TablePagination>
      </Paper>
    </div>
  );
};

export default CustomTable;
