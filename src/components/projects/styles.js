import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  pageContainer: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(5),
  },
  columnContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0 1rem",
    "& ul": {
      listStyleType: "circle",
      paddingLeft: "1rem",
    },
  },
  illustration: {
    height: theme.spacing(45),
    weight: "100%",
    marginTop: "1rem",
    [theme.breakpoints.down("sm")]: {
      height: theme.spacing(30),
    },
  },
  contributorsContainer: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(5),
    alignContent: "space-around",
  },
  contributorContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0 1rem",
    alignItems: "center",
    justifyContent: "center",
    filter: "grayscale(100%)",
    "&:hover": {
      filter: "grayscale(0%)",
      cursor: "pointer",
      color: "#3f50b5",
      transitionTimingFunction: "ease",
      transitionDuration: "1s",
    },
  },
}));
