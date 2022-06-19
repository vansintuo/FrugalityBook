import { useRouter } from "next/dist/client/router";
import { makeStyles } from "@mui/styles";
import { listDocuments, createCollection } from "../../utils/functions/fireStore";
import React from "react";
import Slide from "../../components/presentations/Slide";
import CardNewArrival from "../../components/presentations/cards/CardNewArrival";
import { DialogContent, Grid } from "@mui/material";
import { Dialog } from "@mui/material";
import { convertPathToURL } from "../../utils/functions/data/convertPathToURL";
import { openSIState } from "../../states/SignInSignUp";
import { useRecoilState, useRecoilValue } from "recoil";
import postData from "../../utils/functions/api/postData";
import unauthorFetch from "../../utils/functions/api/unauthorFetch";
import { userState } from "../../states/AuthGuardState/userState";
import CircularProgress from '@mui/material/CircularProgress';
import BookDetail from "../../components/containers/layouts/BookDetail";
import BestSellerCard from "../../components/presentations/cards/BestSellerCard";
import Navbar from "../../components/containers/layouts/Navbar";
const useStyle = makeStyles({
  h4: {
    color: "red",
  },
  eachBook: {
    position: "relative",
    width: "98%",
    left: "22%",
    top: "50%",
    "& h2": {
      textAlign: "center",
    },
  },
});
const NavTest = ({ user }) => {
  // if(!user){
  //   if (typeof window !== "undefined") {
  //   window.location.reload()    }
  // }
  const router = useRouter();
  const [data, setData] = React.useState([]);
  const [totalData, setTotalData] = React.useState([]);
  const [allUrl, setAllUrl] = React.useState([]);
  const [urlDialog, setUrlDialog] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [afterClick, setAfterClick] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [openSI, setOpenSI] = useRecoilState(openSIState)
  const userStateValue = useRecoilValue(userState)
  // :::::::::::::::::::::::::: Match book id with route and display book ::::::::::::::::::::::::::
  // const a = await unauthorFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/books/${router.query.id}`)
  // console.log('a :::::::: ', a)
  React.useEffect(async () => {
    const data = await unauthorFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/books`)
    if (data) {
      convertPathToURL(data.data).then((res) => {
        setTotalData(res)

      })
    }
    const result = await unauthorFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/books/${router.query.id}`)
    if (router.query.id) {
      convertPathToURL(result.data).then((res) => {
        console.log('res :::::: ', res)
        setData(res[0])
      })
    }
  }, [router.query.id, userStateValue]);


  // ::::::::::::::::::: add to cart function :::::::::::::::::::::::::::::
  const handleAddToCart = async (data) => {
    user ?
      await postData(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/checkouts`, {
        userId: user._id,
        bookId: data._id,
        qty: 1,
        totalPrice: data.price
      }).then((res) => {
        router.push("/usersBasket")
      }).catch((error) => {
        console.log('error ::: ',)
      }) : setOpenSI(true)
  };

  return (
    <div>
      <Navbar user={user}/>
      <div style={{ top: '15%', position: 'absolute', margin: '0 auto', right: '0%', left: '0%', paddingBottom: '30px', alignItems: 'center' }}>
        {/* {console.log('data :::::: ', data[0].status)} */}
        {data.length != 0 ? (
          <BookDetail
            src={data?.link}
            price={data.price}
            status={data.status}
            category={data.category}
            description={data.desc}
            onClick={() => handleAddToCart(data)}
            title={data.title}
          />
        ) : (
          <div style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
            <CircularProgress sx={{ color: '#00bdd7' }} />
          </div>
        )}
        {
          data.length != 0 && (<div style={{ width:'80%',marginLeft:'10%'}}>
            <h3 style={{ marginBottom: "0px", }}>
              <span style={{
                color: "#00bdd7",
              }}>
                Similar{" "}
              </span>
              product in our catalog
            </h3>
            <p style={{ marginTop: 0 }}>These products maybe you like . Find your satisfactory products.</p>
          </div>)
        }
        <Grid container
          spacing={5}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          {totalData
            .filter((item) => {
              return item.category.toLowerCase().includes(
                data.category?.toLowerCase()
              );
            })
            .map((element, index) => {
              if (element.id !== router.query.id) {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <CardNewArrival
                      src={element.link}
                      price={element.price}
                      author={element.author}
                      href={`/productDetail/${element._id}`}
                      title={element.title}
                      description={element.desc}
                    />
                  </Grid>
                );
              } else return <h2>No more product</h2>;
            })}
        </Grid>
      </div>
    </div>
  );
};

export default NavTest;
