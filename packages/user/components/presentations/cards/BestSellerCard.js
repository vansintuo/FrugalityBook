import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Link from "next/link";
const BestSellerCard = ({ src, title, author, description, href='' }) => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up("md"));
  const useStyle = makeStyles({
    container: {
      width: match ? "30vw" : "85vw",
      cursor:'pointer'
    },
    imageContainer: {
      width: "60%",
      opacity: "1",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "flex-start",
    },
    backgroundImage: {
      // backgroundImage: `url(${src})`,
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#ebe9e6",
    },
  });
  const classes = useStyle();
  return (
    <Link href={href} >
    <div className={classes.container}>
      <div className={classes.backgroundImage}>
        <div className={classes.imageContainer}>
          <Image
            src={src}
            alt="book"
            width={400}
            height={500}
            layout={"responsive"}
          ></Image>
        </div>
      </div>

      <div>
        <Typography variant="h6" fontSize={"1.2rem"}>
          {title}
        </Typography>
      </div>
      {/* <Typography variant="caption">Tykea is very fucking handsome. Damn this guy is hialrious damn damndafksdfjsdf</Typography> */}
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography
            fontSize={"1em"}
            variant="body2"
            style={{ color: "#00bdd7", lineHeight: "1" }}
          >
            {author}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div
            style={{
              margin: "5px 0px 5px 0px",
              height: "40px",
              verticalAlign: "middle",
            }}
          >
            <Typography
              style={{ maxHeight: "40px", overflow: "hidden" }}
              variant="body2"
            >
              {description}
            </Typography>
          </div>
        </Grid>
      </Grid>
      <div className={classes.buttonContainer}>
        <Button
          variant="outlined"
          style={{ color: "#5ae0f7", borderColor: "#5ae0f7", width: "50%" }}
        >
          See Detail
        </Button>
      </div>
    </div>
    </Link>
  );
};

export default BestSellerCard;
