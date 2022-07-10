import React from "react";
import CardNewArrival from "../../components/presentations/cards/CardNewArrival";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import { convertPathToURL } from "../../utils/functions/data/convertPathToURL";
import useSWR from "swr";
import unauthorFetch from "../../utils/functions/api/unauthorFetch";
import ErrorPage from "../../components/containers/layouts/ErrorPage";
import BestSellerCard from "../../components/presentations/cards/BestSellerCard";
import { CircularProgress } from "@mui/material";
import Footer from "../../components/containers/Footer";
const Category = ({ user }) => {
  const [dataDetail, setDataDetail] = React.useState([]);
  const router = useRouter();
  const [haveData, setHaveData] = React.useState(true);
  const linkRouter = router.query.category;
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/books?category=${linkRouter}`,
    unauthorFetch
  );
  React.useEffect(async () => {
    console.log("data lenght ::::::", data);
    if (data?.data.length == 0) {
      setHaveData(false);
    } else {
      setHaveData(true);
    }
    convertPathToURL(data?.data).then((res) => {
      setDataDetail(res);
    });
  }, [data, linkRouter]);
  if (!data && haveData)
    return (
      <div>
        <h2
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            color: "#00bdd7",
            transform: "translate(-50%, -50%)",
          }}
        >
          Loading...
        </h2>
      </div>
    );
  if (error) return `${error}`;
  return dataDetail.length == 0 && !haveData ? (
    <div>
      {console.log(":::::", dataDetail, haveData)}
      <ErrorPage />
    </div>
  ) : (
    <div>
      {console.log(":::::", dataDetail, haveData)}

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "90px",
          textAlign: "center",
          color: "white",
          backgroundColor: "#00bdd7",
          marginTop: "-2%",
          paddingTop: "20px",
          // position: "fixed",
          // zIndex: "1000",
        }}
      >
        <h2>{linkRouter} Books</h2>
      </div>
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ marginTop: "5%", position: "relative" }}
      >
        {dataDetail
          .filter((item) => {
            return item.category
              .toLowerCase()
              .includes(linkRouter.toLowerCase());
          })
          .map((element, ind) => {
            if (ind <= 3) {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={ind}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <BestSellerCard
                      src={element.link}
                      author={element.author}
                      title={element.title}
                      price={element.price}
                      description="This book is good for you to read when you're free and read with the best mood."
                      href={`/productDetail/${element._id}`}
                    />
                  </div>
                </Grid>
              );
            }
          })}
      </Grid>
      <Footer />
    </div>
  );
};

export default Category;
