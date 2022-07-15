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
const ProductCard = () => {
    return (<Card>
        <CardMedia
            component="img"
            height="350vh"
            src="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg"
        />

        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Title
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Desc:
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Price:
            </Typography>
        </CardContent>
        <CardActions style={{ marginLeft: "auto" }}>
            <Button
                size="small"
                color="error"
                onClick={() => handleUpdate(item)}
            >
                Edite
            </Button>
            <Button size="small">delete</Button>
        </CardActions>
    </Card>);
}

export default ProductCard;