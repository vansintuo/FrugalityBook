import Avatar from "@mui/material/Avatar";
import { makeStyles } from "@mui/styles";
import { Paper } from "@mui/material";
const useStyle = makeStyles({
  bigContainer: {
    height: "180px",
    width: "300px",
    position: "relative",
  },
  container: {
    width: "300px",
    height: "160px",
    backgroundColor: "white",
    position: "absolute",
    paddingLeft: "25px",
    paddingRight: "15px",
    borderRadius: "5px",
    marginTop: "7%",
  },
  headCard: {
    display: "flex",
    position: "absolute",
  },
  name: {
    marginTop: "-30px",
    padding: "15px",
    "& h3": {
      marginBottom: "-20px",
    },
    "& p": { color: "grey" },
  },
  speech: {
    position: "absolute",
    marginTop: "20%",
    color: "grey",
    padding: "5px",
  },
});
const StudentSpeech = () => {
  const classes = useStyle();

  return (
    <div className={classes.bigContainer}>
      <div className={classes.container}>
        <div className={classes.headCard}>
          <Avatar
            alt="JonhSon"
            src="https://www.compass-insurance-agency.com/wp-content/uploads/2016/09/girl-education.jpg"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              outline: "2px solid white",
              marginTop: "-9%",
              zIndex: "1000",
            }}
          />
          <div className={classes.name}>
            <h3 style={{color:'#00bdd7'}}>Mr.JonhSon</h3>
            <p>Takeo,Cambodia</p>
          </div>
        </div>
        <div className={classes.speech}>
          <span>
            I think this website is good for me . I can share my old book to
            next young generation and I&apos;m so glad that I did like this.
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudentSpeech;
