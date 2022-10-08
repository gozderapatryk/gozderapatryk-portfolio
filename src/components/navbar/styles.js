import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "2rem 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 1rem",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },
  imageLeft: {
    marginLeft: "1rem",
    transform: "scaleX(-1)",
  },
  imageRight: {
    marginRight: "1rem",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
    justifyContent: "start",
    marginRight: theme.spacing(2),
  },
  logo: {
    flexGrow: 1,
    cursor: "pointer",
  },
  link: {
    color: "#000",
    textDecoration: "none",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginLeft: theme.spacing(2),
    "&:hover": {
      color: "#0277BD",
      borderBottom: "1px solid #0277BD",
      transition: "all 0.35s ease",
    },
  },
  icon: {
    color: "#000",
  },
}));
