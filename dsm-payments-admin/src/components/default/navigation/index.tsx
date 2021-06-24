import React, { FC, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { Drawer, List, ListItem } from "@material-ui/core";
import useStyle from "./style";

const pageList: { name: string; uri: string }[] = [
  {
    name: "홈",
    uri: "/",
  },
  {
    name: "유저 관리",
    uri: "/user/control",
  },
  {
    name: "부스 관리",
    uri: "/booth/control",
  },
  {
    name: "로그",
    uri: "/log",
  },
];

const Navigation: FC = () => {
  const history = useHistory();
  const classes = useStyle();
  const [path, setPath] = useState(history.location.pathname);
  const renderedPageList = useMemo(
    () =>
      pageList.map((page) => (
        <ListItem
          button
          key={page.name}
          className={classes.Item}
          onClick={() => {
            setPath(page.uri);
            history.push(page.uri);
          }}
          selected={path === page.uri}
        >
          {page.name}
        </ListItem>
      )),
    [path, classes]
  );
  return (
    <Drawer variant="permanent" classes={{ paper: classes.Navigation }}>
      <div className={classes.Logo}></div>
      <List>{renderedPageList}</List>
    </Drawer>
  );
};

export default Navigation;
