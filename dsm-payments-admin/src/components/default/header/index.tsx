import React from "react";
import { AppBar, Typography } from "@material-ui/core";

import useStyle from "./style";

const Header = () => {
  const classes = useStyle();
  return (
    <AppBar position="fixed" className={classes.Header}>
      <Typography variant="h5">어드민 서비스</Typography>
    </AppBar>
  );
};

export default Header;
