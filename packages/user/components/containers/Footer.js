import React from "react";
import { Box } from "@mui/system";
import { Grid, IconButton } from "@mui/material";
import Link from "next/link";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import Image from "next/image"
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  LinkClass: {
    color: "black",
    "&:hover": {
      color: "red",
    },
  },
  container1:{
    textAlign:'center'
  }
});
export default function Footer() {
  const classes = useStyles();
  return (
    <footer
      style={{
        //  background:'rgba(0,0,0,0.2)',
        backgroundColor: "#00bdd7",
        color: "white",
        height: "auto",
        marginTop: "19vh",
        height: "auto",
        textDecoration: "none",
        borderTopLeftRadius: "5px",
        width: "100%",
        paddingBottom: "15px",
        position: "relative",
        top: "auto",
      }}
    >
      <Box fontSize="30">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography
                style={{
                  borderBottom: "1px solid red",
                  fontSize: "20px",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                About Us
              </Typography>

              <Box>
                <Link href="/homePage" color="inherit">
                  <a
                    className={classes.LinkClass}
                    style={{ textDecoration: "none" }}
                  >
                    Service
                  </a>
                </Link>
              </Box>
              <Box>
                <Link href="/aboutUs" color="inherit">
                  <a
                    className={classes.LinkClass}
                    style={{ textDecoration: "none" }}
                  >
                    Member
                  </a>
                </Link>
              </Box>
              <Box>
                <Link href="/homePage" color="inherit">
                  <a className={classes.LinkClass}>Website</a>
                </Link>
              </Box>
              <Box>
                <Link href="/homePage" color="inherit">
                  <a
                    className={classes.LinkClass}
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    FAQs
                  </a>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                style={{
                  borderBottom: "1px solid red",
                  fontSize: "20px",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Categories
              </Typography>

              <Box>
                <Link href="/homePage" color="inherit">
                  <a
                    className={classes.LinkClass}
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    Economic
                  </a>
                </Link>
              </Box>
              <Box>
                <Link href="/homePage" color="inherit">
                  <a
                    className={classes.LinkClass}
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    Math
                  </a>
                </Link>
              </Box>
              <Box>
                <Link href="/homePage" color="inherit">
                  <a
                    className={classes.LinkClass}
                    style={{ textDecoration: "none" }}
                  >
                    Khmer
                  </a>
                </Link>
              </Box>
              <Box>
                <Link href="/homePage" color="inherit">
                  <a
                    className={classes.LinkClass}
                    style={{ textDecoration: "none" }}
                  >
                    Law
                  </a>
                </Link>
              </Box>
              <Box>
                <Link href="/homePage" color="inherit">
                  <a
                    className={classes.LinkClass}
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    Programming
                  </a>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                style={{
                  borderBottom: "1px solid red",
                  fontSize: "20px",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Contact
              </Typography>
              <Box>
                <Link href="/homePage" color="inherit">
                  <a
                    className={classes.LinkClass}
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    Help
                  </a>
                </Link>
              </Box>
              <Box>
                <Link href="/contact" color="inherit">
                  <a
                    className={classes.LinkClass}
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    contact us
                  </a>
                </Link>
              </Box>
              <Box>
                <Link href="/homePage" color="inherit">
                  <a
                    className={classes.LinkClass}
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    Donate
                  </a>
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "35px" }}>
            {/* <hr style={{ border: "none", backgroundColor: "white", height: 2 }} /> */}
            <Typography
              style={{ fontSize: "20px", textAlign: "center", color: "black" }}
            >
              Follow Us
            </Typography>
              <Box className={classes.container1}>
                <Fab size="medium">
                  <Image
                    width={32}
                    height={32}
                    src="/assets/icons/media/youtube.png"
                    alt="youtube"
                  />
                </Fab>
                <Fab size="medium">
                  {/* <Image
                    width={32}
                    height={32}
                    src="/assets/icons/media/twitter.png"
                  /> */}
                    <Image
                    width={32}
                    height={32}
                    src="/assets/icons/media/twitter.png"
                    alt="facebook"
                  />
                </Fab>
                <Fab size="medium">
                  <Image
                    width={32}
                    height={32}
                    src="/assets/icons/media/facebook.png"
                    alt="facebook"
                  />
                </Fab>
                <Fab size="medium">
                  <Image
                    width={32}
                    height={32}
                    src="/assets/icons/media/instagram.png"
                    alt="instagram"
                  />
                </Fab>
              </Box>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
