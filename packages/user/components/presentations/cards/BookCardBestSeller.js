import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from 'next/link';
import { useRouter } from "next/router";
import productInformationsState from "../../../states/productInforState";
import { useRecoilState } from "recoil";
export default function BookCardBestSeller({title,description,src,data}) {
  const router = useRouter()
  const [productInformations,setProductInformations] = useRecoilState(productInformationsState)
  const handleSeeDetail = (data)=>{
    setProductInformations(data)
    console.log(productInformations)
    router.push('/addToCard')
  }
  return (
    <div>
      <Card sx={{ maxWidth: 600 }} style={{marginBottom:'15px',}}>
        <CardMedia>
          <div
            style={{
              width: "600px",
              height: "300px",
              background: "#158ca1",
              textAlign: "center",
              paddingTop: "2%",
            }}
          >
            <img
              width="170px"
              height='280px'
            //   marginTop="20%"
              marginLeft="12.5%"
              src={src}
            ></img>
          </div>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{height:'30px'}}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
         <Button onClick={()=>handleSeeDetail(data)}>More Detail</Button>
        </CardActions>
      </Card>
    </div>
  );
}
