import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    marginBottom: "1rem",
  },
  socialMediaContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-around",
    alignItems: "center",
    justifyContent: "center",
    "& a": {
      padding: "0 0.2rem",
      color: "#000",
    },
    "& a:hover": {
      color: "#3f50b5",
      cursor: "pointer",
      transitionTimingFunction: "ease",
      transitionDuration: "1s",
    },
    "& svg": {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  },
}));
