import BestSellerCard from "../../presentations/cards/BestSellerCard";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import BestSellerCard2 from "../../presentations/cards/BestSellerCard2";
import React from "react";
import { convertPathToURL } from "../../../utils/functions/data/convertPathToURL";
const BestSeller = ({ data }) => {
  const [dataBook, setDataBook] = React.useState([]);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const fix = useMediaQuery(theme.breakpoints.down("sm"));
  React.useEffect(() => {
    convertPathToURL(data.data).then((res) => {
      setDataBook(res);
    });
  }, []);
  const useStyle = makeStyles({
    bestSellerDescription: {
      textAlign: "center",
      marginBottom: "12px",
    },
  });
  const classes = useStyle();
  return (
    <div>
      <div style={{ textAlign: "center", margin: "10px 0 5px 0" }}>
        <Typography
          style={{
            display: "inline-block",
            marginRight: "4px",
            color: "#00bdd7",
          }}
          variant="h5"
        >
          Best-Selling
        </Typography>
        <Typography
          style={{ display: "inline-block", marginLeft: "4px" }}
          variant="h5"
        >
          Books
        </Typography>
      </div>
      <div className={classes.bestSellerDescription}>
        <Typography
          style={{ display: "inline-block", marginRight: "4px" }}
          variant="subtitle1"
        >
          These are the best seller.
        </Typography>
        <Typography
          style={{ display: "inline-block", marginLeft: "4px" }}
          variant="subtitle1"
        >
          They have been purchased regularly.
        </Typography>
      </div>
      <Grid container rowSpacing={2} columnSpacing={1}>
        {console.log("data book :::::", dataBook)}
        {dataBook.map((item, index) => {
          if (index <= 1)
            return (
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: fix ? "center" : "flex-end",
                  }}
                >
                  <BestSellerCard
                    src={item.link}
                    author={item.author}
                    title={item.title}
                    description={item.desc}
                    href={`productDetail/${item._id}`}
                  />
                </div>
              </Grid>
            );
        })}
        {!isMatch ? (
          <Grid item md={4} lg={4} xl={4}>
            {dataBook.map((item, index) => {
              if (index <= 2)
                return (
                  <div style={{ margin: "10px 0 10px 0" }} key={index}>
                    <BestSellerCard2
                      src={item.link}
                      title={item.title}
                      description={item.desc}
                      href={`/productDetail/${item._id}`}
                    />
                  </div>
                );
            })}
          </Grid>
        ) : (
          <div style={{ display: "none" }}></div>
        )}
      </Grid>
    </div>
  );
};

export default BestSeller;
