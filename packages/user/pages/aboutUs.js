import React from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box, color } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  Titile: {
    textAlign: "center",
  },
  Header: {
    // position: "relative",
    backgroundColor: "lightblue",
    height: "100vh",
  },
  CardMem: {
    display: "flex",
    marginLeft: "80px",
    marginTop: "30px",
  },

  Member: {
    position: "relative",
  
    marginTop: "70px",
  },
  Profile: {
    position: "relative",
  },

  Dese: {
    position: "absolute",
    marginTop: "-140px",
    marginLeft: "30px",
    width: "170px",
    height: "130px",   
    backgroundColor: "rgba(40,200,200,0.4)",
 
  },
});
const AboutUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.Header}>
      <div className={classes.Titile}>
        <Typography style={{fontSize:"40px",fontWeight:"bold", }}>Meet our team</Typography>
        <Typography style={{marginTop:40,fontSize:20,}}>
         we are so excited when you like our website. i hope it can help you alots and make you better than before and here  is the members of our team whose create this website. 
        </Typography>
      </div>
      <Grid contaner spacing={1} className={classes.CardMem}>
        <Grid item xs={12} sm={3} className={classes.Member}>
          <div className={classes.Profile}>
            <img
              src="/assets/Tuo.jpg"
              alt="Photo"
              width={220}
              height={320}
            ></img>
          </div>
          <div className={classes.Dese} style={{ pading: "10px" }}>
            <div></div>
            <div>
              <Typography style={{ fontSize: "20px",marginLeft:40,fontWeight:"bold" ,color:"#fff" ,fontFamily:"Roboto" }}>VansinTuo</Typography>
              <Typography style={{fontSize:"20px",marginLeft:10 ,color:"#fff"}}>deverlop and desing</Typography>
            </div>
            <div style={{marginLeft:10,color:"#fff"}}>
              <Box>
                <InstagramIcon />
                <FacebookIcon />
                <TwitterIcon />
              </Box>
            </div>
          </div>
        </Grid>
        
        <Grid item xs={12} sm={3} className={classes.Member}>
          <div className={classes.Profile}>
            <img
              src="/assets/Tykeaboyloy.jpg"
              alt="Photo"
              width={220}
              height={320}
            ></img>
          </div>
          <div className={classes.Dese} style={{ pading: "10px" }}>
            <div></div>
            <div>
              <Typography style={{ fontSize: "20px",marginLeft:40,fontWeight:"bold" ,color:"#fff" ,fontFamily:"Roboto" }}>Ly Tykea</Typography>
              <Typography style={{fontSize:"20px",marginLeft:10 ,color:"#fff"}}>deverlop and desing</Typography>
            </div>
            <div style={{marginLeft:10,color:"#fff"}}>
              <Box>
                <InstagramIcon />
                <FacebookIcon />
                <TwitterIcon />
              </Box>
            </div>
          </div>
        </Grid><Grid item xs={12} sm={3} className={classes.Member}>
          <div className={classes.Profile}>
            <img
              src="/assets/Sievmey.jpg"
              alt="Photo"
              width={220}
              height={320}
            ></img>
          </div>
          <div className={classes.Dese} style={{ pading: "10px" }}>
            <div></div>
            <div>
              <Typography style={{ fontSize: "20px",marginLeft:30,fontWeight:"bold" ,color:"#fff" ,fontFamily:"Roboto" }}>Touch Sievmy</Typography>
              <Typography style={{fontSize:"20px",marginLeft:10 ,color:"#fff"}}>deverlop and desing</Typography>
            </div>
            <div style={{marginLeft:10,color:"#fff"}}>
              <Box>
                <InstagramIcon />
                <FacebookIcon />
                <TwitterIcon />
              </Box>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={3} className={classes.Member}>
          <div className={classes.Profile}>
            <img
              src="/assets/Phirun.jpg"
              alt="Photo"
              width={220}
              height={320}
            ></img>
          </div>
          <div className={classes.Dese} style={{ pading: "10px" }}>
            <div></div>
            <div>
              <Typography style={{ fontSize: "20px",marginLeft:40,fontWeight:"bold" ,color:"#fff" ,fontFamily:"Roboto" }}>Oem Phirun</Typography>
              <Typography style={{fontSize:"20px",marginLeft:10 ,color:"#fff"}}>deverlop and desing</Typography>
            </div>
            <div style={{marginLeft:10,color:"#fff"}}>
              <Box>
                <InstagramIcon />
                <FacebookIcon />
                <TwitterIcon />
              </Box>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutUs;