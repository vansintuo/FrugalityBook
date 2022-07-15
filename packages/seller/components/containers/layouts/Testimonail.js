import { makeStyles } from "@mui/styles";
import BookSlide from "./BookSlide";
const Testimonail = () => {
  const img = "../../../../assets/mainBg.jpg";
  const useStyle = makeStyles({
    container: {
      width: "100%",
      height: "65vh",
      backgroundImage: `url(${img})`,
      backgroundRepeat: "no-repeat",
      position: "relative",
      marginTop: "5%",
      left: "0",
    },
    subContainer: {
      position: "absolute",
      width: "100%",
      top: "2%",
      textAlign: "center",
      "& h2": {
        marginBottom: "0",
        color: "white",
      },
      "& span": {
        color: "white",
        marginTop: "0",
      },
    },
    subBg: {
      position: "absolute",
      width: "100%",
      height: "50%",
      backgroundColor: "rgba(0,0,0,0.7)",
      left: "0",
    },
    slide: {
      marginTop: "15vh",
      zIndex: "3",
    },
  });
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.subBg}>
        <div className={classes.subContainer}>
          <h2>
            TESTI<span style={{ color: "#00bdd7" }}>MONAIL</span>
          </h2>
          <span>
            We have alot of user that appropriate our website. Read their speech
            below
          </span>
        </div>
        <div className={classes.slide}>
          <BookSlide />
        </div>
      </div>
    </div>
  );
};

export default Testimonail;
