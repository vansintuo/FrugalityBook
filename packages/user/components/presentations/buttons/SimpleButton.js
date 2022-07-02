import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  button: {
    textTransform: "none",
    border: "1px solid #00bdd7",
    backgroundColor: "#00bdd7",
    color: "white",
    height: "30px",
    width: "100px",
    borderRadius: "15px",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "white",
      color: "#00bdd7",
    },
  },
});
const SimpleButton = ({ label, onClick, style }) => {
  const classes = useStyle();
  return (
    <Button className={classes.button} onClick={onClick} style={{ ...style }}>
      {label}
    </Button>
  );
};
export default SimpleButton;
