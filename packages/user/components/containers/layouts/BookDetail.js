import { Button, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const BookDetail = ({
  src,
  title,
  price,
  status,
  category,
  description,
  onClick,
}) => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.only("sm"));
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const matching = useMediaQuery(theme.breakpoints.only("md"));
  const same = useMediaQuery(theme.breakpoints.up("md"));
  const useStyle = makeStyles({
    container: {
      width: match ? "60vw" : "80vw",
    },
    ImageContainer: {
      width: "60%",
    },
    content: {
      width: matching ? "97%" : isMatch ? "60%" : "85%",
      paddingTop: matching ? "15%" : same ? "5%" : "",
      margin: isMatch ? "0 0 0 20%" : "",
    },
    title: {
      display: "inline-block",
      padding: "2px",
    },
  });
  const classes = useStyle();
  return (
    <div style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
      <Paper>
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "5% 0 4% 0",
                }}
              >
                <div className={classes.ImageContainer}>
                  <Image
                    src={src}
                    alt={"Book"}
                    width={550}
                    height={750}
                  ></Image>
                </div>
              </div>
            </Grid>
            <Grid item container xs={12} sm={12} md={6} lg={8} xl={8}>
              <div className={classes.content}>
                <Grid item>
                  <div
                    style={{
                      width: "70px",
                      height: "5px",
                      backgroundColor: "#00bdd7",
                    }}
                  ></div>
                  <div className={classes.title}>
                    <Typography
                      style={{
                        fontSize: isMatch ? "1.6em" : "2em",
                      }}
                      variant="h4"
                    >
                      {title}
                    </Typography>
                  </div>
                </Grid>
                <Grid item>
                  <div style={{ marginTop: isMatch ? "3px" : "10px" }}>
                    <Typography
                      variant="body1"
                      style={{
                        color: "#00bdd7",
                        fontSize: isMatch ? "1.3em" : "1.5em",
                      }}
                    >
                      {`Price : $${price}`}
                    </Typography>
                  </div>
                </Grid>
                <Grid item>
                  <div style={{ marginTop: isMatch ? "3px" : "10px" }}>
                    <Typography
                      variant="body1"
                      style={{ fontSize: isMatch ? "1.1em" : "1.2em" }}
                    >
                      {description}
                    </Typography>
                  </div>
                </Grid>
                <Grid
                  item
                  container
                  style={{ marginTop: isMatch ? "3px" : "13px" }}
                >
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div>
                      <Typography
                        variant="body1"
                        style={{
                          fontSize: isMatch ? "1.1em" : "1.2em",
                          display: "inline-block",
                        }}
                      >
                        Status :
                      </Typography>
                      <Typography
                        style={{
                          fontSize: isMatch ? "1.1em" : "1.2em",
                          display: "inline-block",
                          color: "#00bdd7",
                          marginLeft: "7px",
                        }}
                      >
                        {status}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div>
                      <Typography
                        variant="body1"
                        style={{
                          fontSize: isMatch ? "1.1em" : "1.2em",
                          display: "inline-block",
                        }}
                      >
                        Category :
                      </Typography>
                      <Typography
                        style={{
                          fontSize: isMatch ? "1.1em" : "1.2em",
                          display: "inline-block",
                          color: "#00bdd7",
                          marginLeft: "7px",
                        }}
                      >
                        {category}
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
                <Grid
                  item
                  style={{
                    marginTop: isMatch ? "9px" : "15px",
                    marginBottom: isMatch ? "15px" : "",
                  }}
                >
                  <Button
                    onClick={onClick}
                    variant="contained"
                    style={{
                      marginTop: isMatch ? "" : "10%",
                      backgroundColor: "#00bdd7",
                      width: isMatch ? "100%" : "",
                    }}
                  >
                    ADD TO CART
                  </Button>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

export default BookDetail;
