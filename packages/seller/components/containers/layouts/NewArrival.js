import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography, Button } from "@mui/material";
import BookCard from "../../presentations/cards/BookCard";
import { convertPathToURL } from "../../../utils/functions/data/convertPathToURL";
const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4, 0),
    backgroundColor: "rgba(242, 242, 240,0.2)",
  },
}));
const NewArrival = ({ data }) => {
  const [dataBook, setDataBook] = React.useState([]);
  React.useEffect(() => {
    convertPathToURL(data?.data).then((res) => {
      setDataBook(res);
    });
  }, []);
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <Grid container style={{ marginBottom: "50px" }}>
        <Grid item xs={12}>
          <div id="under5">
            <div style={{ textAlign: "center" }}>
              <Typography
                variant="h5"
                style={{
                  display: "inline-block",
                  marginRight: "4px",
                  color: "#00bdd7",
                  fontSize: "30px",
                }}
              >
                New Arrival
              </Typography>
              <Typography
                style={{
                  display: "inline-block",
                  marginLeft: "4px",
                  fontSize: "30px",
                }}
                variant="h5"
              >
                Book
              </Typography>
            </div>
            <div style={{ textAlign: "center" }}>
              <Typography variant="subtitle1">
                Our website has alot of books that come from different school
                that you can buy or sell as well.
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "5px",
            }}
          >
            <Button
              variant="outlined"
              style={{
                color: "#5ae0f7",
                borderColor: "#5ae0f7",
                width: "40%",
                marginTop: "20px",
              }}
            >
              SEE MORE
            </Button>
          </div>
        </Grid>
      </Grid>
      <div style={{ marginTop: "20px", marginBottom: "10px" }}>
        <Grid container rowSpacing={2}>
          {dataBook.map((item, index) => {
            if (index <= 2) {
              return (
                <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={index}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <BookCard
                      title={item.title}
                      src={item.link}
                      description={item.desc}
                      price={item.price}
                      href={`/productDetail/${item._id}`}
                    />
                  </div>
                </Grid>
              );
            }
          })}
        </Grid>
      </div>
    </div>
  );
};
export default NewArrival;
