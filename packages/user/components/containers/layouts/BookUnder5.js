
import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import BookCard from "../../presentations/cards/BookCard";
import { convertPathToURL } from "../../../utils/functions/data/convertPathToURL";
const BookUnder5 = ({ data }) => {
  const [dataBook, setDataBook] = React.useState([])
  React.useEffect(() => {
    convertPathToURL(data?.data).then((res) => {
      setDataBook(res)
    })
  })
  return (
    <div style={{ backgroundColor: "rgba(242, 242, 240,0.2)", marginTop: '3vh' }}>
      <Grid container>
        <Grid item xs={12}>
          <div id="under5">
            <div style={{ textAlign: "center" }}>
              <Typography
                style={{ display: "inline-block", marginRight: "4px" }}
                variant="h5"
              >
                Book
              </Typography>
              <Typography
                variant="h5"
                style={{
                  display: "inline-block",
                  marginRight: "4px",
                  color: "#00bdd7",
                }}
              >
                Under 5$
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
              }}
            >
              SEE MORE
            </Button>
          </div>
        </Grid>
      </Grid>
      <div style={{ marginTop: "20px", marginBottom: "10px" }}>
      <Grid container rowSpacing={2}>
        {
          // check price book under 5$
          dataBook
            ?.filter((item) => {
              return item.price < 50;
            })
            .map((el, index) => {
              if (index <= 2) {
                return (<Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={index}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <BookCard
                      src={el.link}
                      description={el.desc}
                      price={el.price}
                      href={`/productDetail/${el._id}`}
                    />
                  </div>
                </Grid>
                );
              }
            })
        }
        </Grid>
      </div>
    </div>
  );
};
export default BookUnder5;