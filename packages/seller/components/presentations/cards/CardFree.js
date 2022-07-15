import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Grid } from "@mui/material";
import PropTypes from "prop-types";
const CardFree = ({ src, title, description, price, href }) => {
  const useStyle = makeStyles((theme) => ({
    container: {
      width: "320px",
      height: "340px",
      borderRadius: "3px",
      backgroundImage: `url(${src})`,
      backgroundSize: "400px 400px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    blur: {
      width: "320px",
      height: "340px",
      backgroundColor: "rgba(255,255,255,0.6)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    img: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      border: "1px solid white",
      marginTop: " 30px",
    },
    text: {
      width: "320px",
      height: "90px",
      backgroundColor: "#00bdd7",
      borderBottomLeftRadius: "2px",
      borderBottomRightRadius: "2px",
    },
    Title: {
      "& h4": {
        marginTop: "0px",
        marginBottom: "0px",
      },
      "& p": {
        marginTop: "0px",
        marginBottom: "0px",
      },
    },

    Price: {
      marginLeft: "70px",
      "$ h4": {
        marginTop: "5px",
      },
    },
  }));
  const classes = useStyle();
  return (
    <a href={href} className={classes.root}>
      <Paper elevation={1} className={classes.container}>
        <div className={classes.blur}>
          <div className={classes.img}>
            <img src={src} height={230} objectFit="cover"></img>
          </div>
          <div className={classes.text}>
            <Grid container alignItems="stretch">
              <Grid xs={6}>
                <div className={classes.Title}>
                  <h4 style={{ marginLeft: "15px" }}>{title}</h4>
                  <p style={{ marginLeft: "15px", fontWeight: "500" }}>
                    {" "}
                    {description}
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Paper>
    </a>
  );
};

export default CardFree;

CardFree.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  price: PropTypes.number,
  href: PropTypes.string,
};
CardFree.defaultProps = {
  title: "Writing Book",
  description: "This book is good for you to read.",
  src: "https://th.bing.com/th/id/R.e5c4280b62848eee1fd82ef9f9a64934?rik=AcJi%2ftTkIm7eFA&pid=ImgRaw&r=0",
  price: 15,
  href: "/",
};
