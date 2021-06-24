import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  Navigation: {
    width: 240,
    height: "calc(100% - 70px)",
    paddingTop: 20,
    marginTop: 70,
  },
  Item: {
    height: 50,
    paddingLeft: 20,
    boxSizing: "border-box",
  },
  Logo: {
    width: 70,
    height: 70,
    margin: "0 auto",
    border: "1px black solid",
  },
});

export default useStyle;
