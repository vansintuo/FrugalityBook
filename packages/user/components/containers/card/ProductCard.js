import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Paper } from "@mui/material";
import { Box, Container, Grid } from "@mui/material";
import {updateState} from "../../../states/updateState"
import { useRecoilState } from "recoil";
import ProductCard from "../../presentations/cards/ProductCard";
import CardProduct from "../../presentations/cards/CardProduct";

const useStyle = makeStyles({
  Header: {
    marginTop: "30px",
  },
 
  Paper: {
    height: "50px",
  },
  Sellmor: {
    marginLeft: "90%",
    textDecoration: "none",
    cursor: "pointer",
  },
});
export default function MediaCard() {
  const classes = useStyle();
  
  return (
    <Box className={classes.Header}>
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.Paper}>
              <Typography style={{ textAlign: "center", fontSize: "35px" }}>
                Product List
              </Typography>     
              <Button className={classes.Sellmor}>Sellmor</Button>    
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardProduct
            url="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg"
            Title="English"
            Dese="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
            Price="25$"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardProduct
            url="https://tienganhedu.com/wp-content/uploads/2017/05/Check-Your-English-Vocabulary-for-TOEFL-4th-Edition-e1495891655951.jpg"
            Title="English"
            Dese="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
            Price="25$"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardProduct
            url="http://img.picturequotes.com/1/284/follow-your-heart-but-take-your-brain-with-you-quote-1.jpg"
            Title="English"
            Dese="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
            Price="25$"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardProduct
            url="https://images-na.ssl-images-amazon.com/images/I/51HZUo0x9ZL.jpg"
            Title="English"
            Dese="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
            Price="25$"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardProduct
            url="https://pictures.abebooks.com/isbn/9780446693219-us.jpg"
            Title="English"
            Dese="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
            Price="25$"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardProduct
            url="https://pictures.abebooks.com/isbn/9780446693219-us.jpg"
            Title="English"
            Dese="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
            Price="25$"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardProduct
            url="https://pictures.abebooks.com/isbn/9780446693219-us.jpg"
            Title="English"
            Dese="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
            Price="25$"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardProduct
            url="https://pictures.abebooks.com/isbn/9780446693219-us.jpg"
            Title="English"
            Dese="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
            Price="25$"
            />
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
}
