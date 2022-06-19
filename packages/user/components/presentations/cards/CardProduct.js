import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  Media: {
    height: "270px",
    width: "200px",
    marginTop:"10px",
  },
});
const CardProduct = ({ url, Title, Desc, Price, onClickDelete, onClickEdit, status, cat, edit=true}) => {
  const classes = useStyle();

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia >
         <Typography style={{textAlign:"center"}}>
         <img src={url} alt="img" className={classes.Media} />
         </Typography>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{width:200,height:'auto'}}>
          {Title}
        </Typography>
        <Typography 
        variant="body2" 
        color="text.secondary" 
        gutterBottom
        sx={{width:200}}
        >
         {Desc}
        </Typography>
        <Typography 
        variant="body2" 
        color="text.secondary" 
        gutterBottom
        >
           Status : {status}
        </Typography>
        <Typography 
        variant="body2" 
        color="text.secondary" 
        gutterBottom
        >
          Category : {cat}
        </Typography>
        <Typography variant="h6 " color="#00bdd7" component="h3">
          ${Price}
        </Typography>
      </CardContent>
      <CardActions style={{ marginLeft: "auto" }}>
        {edit?<Button size="small"  onClick={onClickEdit}>
          {" "}
          Edit
        </Button>:""}
        <Button size="small" onClick={onClickDelete} color="error">delete</Button>
      </CardActions>
    </Card>
  );
};

export default CardProduct;
