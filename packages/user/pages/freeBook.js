import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { makeStyles } from "@mui/styles";
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container, Grid, Typography } from '@mui/material';
import CardFreeBook from '../components/presentations/cards/CardFreeBook';
import FreeNewArrival from '../components/containers/layouts/FreeNewArrival'
const FreeBook = () => {
  const imge = "../../assets/giveaways.jpg";
  const useStyles = makeStyles(theme => ({
    root: {
      postition:'relative',
      with: '100%',
      padding: theme.spacing(10, 4),
    },
    container: {
      postition:'absolute',
      width: "80%",
      height: "70vh",
      margin:'0 auto', 
      backgroundColor: 'rgba(235,236,240)',
    },
    image: {
      backgroundImage:  `url(${imge})`,
      backgroundSize: '100% 100%',
      width: "100%",
      height: "35vh",
      border: '1px solid black',
      
    },
    text: {
      position:'relative',
      textAlign: 'center',
      fontSize:'25px',
    }

  }));
  const classes = useStyles();
  return (
    <Container component="section"className={classes.root} style={{ marginTop:'5%'}} >
       <Grid container alignItems="stretch" spacing={2}>
       <Grid item xs={12} >
        <div className={classes.container}>
          <div className={classes.image}>
          </div>
          <div className={classes.text}>
            <h3 style={{color:'#00bdd7'}}>Hello Dear Students <SentimentVerySatisfiedIcon /></h3>
            <Typography sx={{fontSize:'20px'}}>We are very happy to announce that we got books from our
               donator to provide students who need the textBooks.
               We giveaways books for free to all students who need them.</Typography>
          </div>
        </div>
      </Grid>
      {/* <Grid item xs={6}>
        <CardFreeBook/>
      </Grid> */}
    </Grid> 
    <div>
     <FreeNewArrival/>
      </div>   
    </Container>

  );
}

export default FreeBook;