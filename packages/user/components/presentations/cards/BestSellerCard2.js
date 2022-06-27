import React from "react";
import { Grid } from "@mui/material";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";
import Link from "next/link";
const BestSellerCard2 = ({ src, title, description, href = "" }) => {
  const theme = useTheme();
  const matching = useMediaQuery(theme.breakpoints.up("md"));
  const useStyle = makeStyles({
    container: {
      width: "100%",
      maxHeight: "120px",
      cursor: "pointer",
    },
    imageContainer: {
      maxWidth: "120px",
    },
  });
  const classes = useStyle();
  return (
    <Link href={href}>
      <div className={classes.container}>
        <Grid container>
          <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
            <div className={classes.imageContainer}>
              <Image
                src={src}
                alt="The story of my life"
                width={600}
                height={600}
                layout="responsive"
              />
            </div>
          </Grid>
          <Grid
            item
            container
            xs={9}
            sm={9}
            md={9}
            lg={9}
            xl={9}
            rowSpacing={1}
          >
            <div style={{ marginLeft: "10px", width: "100%" }}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography
                  style={{ margin: "1% 0 2% 0" }}
                  variant="h6"
                  fontSize={"1.2rem"}
                  noWrap
                >
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography
                  variant="body2"
                  style={{
                    overflow: "hidden",
                    maxHeight: "50px",
                    lineHeight: "1.2",
                  }}
                >
                  {description}
                </Typography>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </Link>
  );
};

export default BestSellerCard2;
