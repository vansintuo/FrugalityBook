import React from 'react';
import { makeStyles } from "@mui/styles";
import { Grid, useMediaQuery } from '@mui/material';
import { Container } from '@mui/material';
import { AddShoppingCartOutlined, PersonPinCircleOutlined, VolunteerActivismOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const SomeFact = () => {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
  const imge = "../../assets/fact.jpg";
  const img = "../../assets/fact1.jpg";
  const useStyles = makeStyles(theme => ({
    root: {
      with:'100%',
      padding: theme.spacing(12, 4),
    },
    container1: {
      width: "100%",
      height: "120%",
      backgroundImage: ` url(${img})`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    backg: {
      width: "100%",
      height: "120%",
      backgroundColor: "rgba(255,255,255,0.9)",
    },
    container2: {
      backgroundImage: ` url(${imge})`,
      height: '120%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    child: {
      width: "100%",
      height: '120%',
      backgroundColor: "rgba(0,0,0,0.7)",
      "& h4": {
        color: "white",
      },
    },
    title: {
      color: 'white',
    },
    title1: {
      color: 'black',
      textAlign: 'center',
    },
    featureList: {
      color: 'white',
    },
    p:{
      marginTop:'0',
      marginBottom:'0',
      color:'red'
    }
  }));

  const classes = useStyles();
  return (
    <Container component="section" maxWidth="xl" className={classes.root} >
      <Grid container alignItems="stretch" spacing={isMatch?10:0}>
        <Grid item xs={12} sm={6} >
          <div className={classes.container1}>
            <div className={classes.backg}>
              <Typography variant="h5" component="h3" className={classes.title1}>
                  SOME<span style={{ color: "#00bdd7" }}>FACT</span>
              </Typography>
                <p> Are you a students or graduation?</p>
                <p style={{marginTop:'0', marginBottom:'0'}}>If you are !!</p>
                <p  style={{marginTop:'0', marginBottom:'0'}}>Here is the right place for you, looking the academic textbooks.{" "}</p>
              
              <div>
                <Grid container alignItems="stretch">
                  <Grid item xs={4}>
                  <AddShoppingCartOutlined
                  style={{
                    width: "70px",
                    height: "50px",
                    color: "#00bdd7",
                    marginTop:"40px"
                    
                  }}
                  />
                  <div style={{borderRight: "3px dotted green",}}>3,000</div>
                  <div style={{borderRight: "3px dotted green",}}>SOLDOUT</div>
                  </Grid>
                  <Grid item xs={4}>
                  <VolunteerActivismOutlined
                  style={{
                    width: "70px",
                    height: "50px",
                    color: "#00bdd7",
                    marginTop:"40px"
                    
                  }}/>
                  <div style={{borderRight: "3px dotted green",}}>3,000</div>
                  <div style={{borderRight: "3px dotted green",}}>DONATE</div>
                  </Grid>
                  <Grid item xs={4}>
                  <PersonPinCircleOutlined
                  style={{
                    width: "70px",
                    height: "50px",
                    color: "#00bdd7",
                    marginTop:"40px"
                   
                  }}
                  
                  />
                  <div>3,000</div>
                  <div>USERS</div>
                  </Grid>

                </Grid>
              </div>
            
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} >
          <div className={classes.container2}>
            <div className={classes.child}>
              <Typography variant="h5" component="h3" className={classes.title}>
                OUR QUATATION
              </Typography>
              <h4>If you believe in yourself, nothing is impossible.</h4>
              <Typography className={classes.featureList}>
                We believe strongly that all thing is possible when we always have confidence in ourselves.
                While we have confidence , we will fight all the obstacles that come up into our lives and overcome them with our best.
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SomeFact;
