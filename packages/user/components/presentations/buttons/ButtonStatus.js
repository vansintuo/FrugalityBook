import { makeStyles } from "@mui/styles";
import { PropTypes } from "prop-types";
const ButtonStatus = ({ status, price, onClick, label }) => {
  const useStyle = makeStyles({
    button: {
      width: "100px",
      height: "45px",
      color: "black",
      border: "1px solid #006D5B",
      margin: "5px",
      borderRadius: "2px",
      fontWeight: "500",
    },
    buttonActive: {
      width: "100px",
      height: "45px",
      color: "black",
      border: "1px solid #006D5B",
      margin: "5px",
      borderRadius: "2px",
      fontWeight: "500",
      "&:hover": {
        backgroundColor: "grey",
      },
    },
  });
  const classes = useStyle();
  return (
    <button
      varian="outline"
      disabled={status ? false : true}
      className={status ? classes.buttonActive : classes.button}
      onClick={onClick}
    >
      {" "}
      {label} <br />
      <b style={{color:status?'black':'grey'}}>
        {status ? (
          "$" + price
        ) : (
           "available"
        )}
      </b>
    </button>
  );
};

export default ButtonStatus;

ButtonStatus.propTypes = {
  status: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  price: PropTypes.number,
}

ButtonStatus.defaultProps = {
  status:'New',
  label:'New',
  onClick:undefined,
  price:14,
}
