import CardWithoutContent from "../components/presentations/cards/CardWithoutContent";
import { makeStyles } from "@mui/styles";
import { Grid, Paper, Typography } from "@mui/material";
import HelpDonate from "../components/containers/layouts/HelpDonate";
import SomeFact from "../components/containers/layouts/SomeFact";
import Testimonail from "../components/containers/layouts/Testimonail";
import React, { useState } from "react";
import { convertPathToURL } from "../utils/functions/data/convertPathToURL";
import Navbar from "../components/containers/layouts/Navbar";
import NewMainBg from "../components/containers/layouts/NewMainBg";
import NewArrival from "../components/containers/layouts/NewArrival";
import { userState } from "../states/AuthGuardState/userState";
import { useRecoilState } from "recoil";
import BookUnder5 from "../components/containers/layouts/BookUnder5";
import BestSeller from "../components/containers/layouts/BestSeller";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const useStyle = makeStyles({
  bigContainer: {
    position: "relative",
    boxSizing: "border-box",
    margin: "0",
  },
  textMoreBook: {
    alignItems: "center",
    textAlign: "center",
    marginTop: "45px",
    height: "100px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    marginTop: "32px",
    "& span": {
      fontSize: "30px",
      color: "#00bdd7",
    },
    "& h3": {
      marginBottom: "0",
      marginTop: "10px",
    },
    "& p": {
      marginBottom: "2px",
      // marginTop: "10px",
    },
  },
  Header: {
    marginTop: "30px",
  },
  textArrival: {
    marginTop: "45px",
    height: "100px",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    marginLeft: "5.5%",
    width: "100%",
    "& h3": {
      lineHeight: "30px",
    },
    "& p": {
      marginTop: "10px",
    },
  },
  seeMore: {
    width: "90%",
    marginLeft: "30%",
    marginTop: "2%",
    "& span": {
      width: "200px",
      height: "30px",
      border: "1px solid #00bdd7",
      position: "absolute",
      lineHeight: "30px",
      textAlign: "center",
      color: "grey",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0.3)",
        color: "#00bdd7",
      },
    },
  },
  newArrival: {
    justifyContent: "center",
    width: "100%",
    marginLeft: "4%",
    justifyItems: "center",
    justifyContent: "center",
  },
  bestSeller: {
    width: "90%",
    marginLeft: "5%",
    "& h3": {
      marginBottom: "-10px",
    },
  },
});
// ::::::::::::::::: use getServersideProps to get data (it's not loading) :::::::::::::::
export async function getServerSideProps(ctx) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/books`);
  const dataProps = await res.json();
  return {
    props: {
      dataProps,
    },
  };
}
const Home = ({ user, dataProps }) => {
  const theme = useTheme();
  const Match = useMediaQuery(theme.breakpoints.down("md"));
  const [data, setData] = useState([]);
  const classes = useStyle();
  const [userStateValue, setUserStateValue] = useRecoilState(userState);
  if (user) {
    setUserStateValue(user);
  }

  // ::::::::::::: called function convertPathToURL ::::::::::::::::
  React.useEffect(() => {
    convertPathToURL(dataProps.data).then((res) => {
      setData(res);
    });
  }, []);
  return (
    <div className={classes.bigContainer}>
      <Navbar user={user} />
      <div style={{ width: "100%" }}>
        <NewMainBg user={user} />
      </div>
      <div className={classes.textMoreBook}>
        <span>1000+</span>
        <h3>BOOKS SELL IN OUR WEBSITE</h3>
        <Typography style={{ marginTop: "20px" }}>
          Our website has alot of books that come from different school that you
          can buy or sell as well.
        </Typography>
      </div>
      <div className={classes.Header}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="space-around"
          direction="row"
        >
          {Match ? (
            <>
              <Grid item xs={12} lg={3} sm={6} md={3}>
                <Paper elevation={0} style={{ textAlign: "center" }}>
                  <CardWithoutContent src="https://www.gannett-cdn.com/-mm-/22212976ebafcf5f2c30e55526085cc9f0cae3a2/c=85-0-424-339&r=x233&c=210x230/local/-/media/2017/05/25/Louisville/Louisville/636313252324286257-649149229.jpg" />
                </Paper>
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12} lg={3} sm={6} md={3}>
                <Paper elevation={0} style={{ textAlign: "center" }}>
                  <CardWithoutContent src="https://i0.wp.com/northforker.com/files/2021/02/8E708912-4A5A-4183-B83D-5D6ED1F42496.jpeg?resize=640%2C633&ssl=1" />
                </Paper>
              </Grid>
              <Grid item xs={12} lg={3} sm={6} md={3}>
                <Paper elevation={0} style={{ textAlign: "center" }}>
                  <CardWithoutContent src="https://neatplaces.co.nz/media/thumbs/uploads/places/place/dead_souls_bookshop/Dead_Souls_Bookshop_Dunedin_9.jpg.650x425_q80_crop-smart_upscale.jpg" />
                </Paper>
              </Grid>
              <Grid item xs={12} lg={3} sm={6} md={3}>
                <Paper elevation={0} style={{ textAlign: "center" }}>
                  <CardWithoutContent src="https://i.pinimg.com/736x/58/f2/f6/58f2f61e1be6b900a5b0ceb32c48a417.jpg" />
                </Paper>
              </Grid>
              <Grid item xs={12} lg={3} sm={6} md={3}>
                <Paper elevation={0} style={{ textAlign: "center" }}>
                  <CardWithoutContent src="https://i.pinimg.com/736x/58/f2/f6/58f2f61e1be6b900a5b0ceb32c48a417.jpg" />
                </Paper>
              </Grid>
            </>
          )}
        </Grid>
      </div>
      <div>
        <SomeFact />
      </div>
      <div>
        <NewArrival data={dataProps} />
      </div>
      <div>
        <HelpDonate />
      </div>
      <div>
        <BestSeller data={dataProps} />
      </div>
      <div>
        <Testimonail />
      </div>
      <div>
        <BookUnder5 data={dataProps} />
      </div>
    </div>
  );
};

export default Home;
