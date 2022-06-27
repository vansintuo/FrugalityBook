import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
const BookCard = ({ src, title, description, price, href }) => {
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
      // backgroundColor: "rgba(255,255,255,0.6)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backdropFilter: "blur(4px)",
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
        height: "35px",
        width: "300px",
        overflow: "hidden",
      },
      "& p": {
        marginTop: "0px",
        marginBottom: "0px",
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
              <Grid xs={8}>
                <div className={classes.Title}>
                  <Typography
                    variant="h4"
                    fontSize="1.3rem"
                    style={{ marginLeft: "15px", color: "#36454F" }}
                  >
                    {title}
                  </Typography>
                  <div
                    style={{
                      color: "#36454F",
                      marginLeft: "15px",
                      height: "45px",
                      // verticalAlign: "middle",
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{ maxHeight: "45px", overflow: "hidden" }}
                    >
                      {description}
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid
                xs={4}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    color: "white",
                  }}
                >
                  <Typography variant="body2" fontSize="0.9rem">
                    Price: {price}$
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Paper>
    </a>
  );
};

export default BookCard;

BookCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  price: PropTypes.number,
  href: PropTypes.string,
};
BookCard.defaultProps = {
  title: "Writing Book",
  description: "This book is good for you to read.",
  src: "https://th.bing.com/th/id/R.e5c4280b62848eee1fd82ef9f9a64934?rik=AcJi%2ftTkIm7eFA&pid=ImgRaw&r=0",
  price: 15,
  href: "/",
};
