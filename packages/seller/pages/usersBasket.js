import { makeStyles } from "@mui/styles";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { DialogTitle, Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Dialog, DialogActions, Paper } from "@mui/material";
import deleteData from "../utils/functions/api/deleteData";
import { convertPathToURL } from "../utils/functions/data/convertPathToURL";
import { useRouter } from "next/router";
import useSocket from "../sockets/useSocket";
import Toastify from "../components/presentations/Toastify";
import CheckoutButton from "../components/presentations/buttons/CheckoutButton";
import CardProduct from "../components/presentations/cards/CardProduct";
import fetcher from "../utils/functions/api/fetcher";
import { baseApiUrl } from "../utils/constant/baseUrls";
import CenterItem from "../components/presentations/CenterItem";
const useStyle = makeStyles({
  container: {
    width: "80%",
    height: "auto",
    backgroundColor: "rgba(196,196,196,0.2)",
    marginTop: "15px",
    borderRadius: "5px",
    padding: "10px",
    marginLeft: "10%",
  },
  head: {
    display: "flex",
    width: "100%",
    height: "270px",
    //   border:'1px solid black',
    padding: "30px",
    marginTop: "30px",
    // '@media (max-width:1200px)':{
    //   display:'block',
    // }
  },
  text: {
    marginLeft: "20px",
    lineHeight: "10px",
    marginLeft: "-400px",
    marginRight: "25%",
    marginTop: "15px",
  },
  img: {
    width: "160px",
    height: "230px",
    padding: "15px",
    borderRadius: "5px",
  },
  subContainer: {
    textAlign: "center",
    marginTop: "2%",
    height: "50px",
    position: "relative",
    borderRadius: "5px",
    // backgroundColor:'#87BBD2',
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    marginLeft: "10%",
    "& h3": {
      position: "absolute",
      width: "100%",
      marginTop: "1%",
    },
  },
  buttonSell: {
    color: "black",
    backgroundColor: "green",
    padding: "8px",
    border: "none",
    marginTop: "15px",
    fontSize: "15px",
    borderRadius: "5px",
    "&:hover": {
      color: "white",
      backgroundColor: "rgba(00,00,00,0.2)",
    },
  },
  formContainer: {
    display: "flex",
    width: "100%",
    // marginLeft: "30%",
    height: "auto",
    borderRadius: "5px",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: "100%",
  },
  formSubContainer: {
    width: "100%",
    marginLeft: "0%",
    paddingBottom: "25px",
    paddingLeft: "5%",
    height: "100%",
  },
  inputField: {
    width: "230px",
    marginBottom: "15px",
  },
});
const UsersBasket = () => {
  const router = useRouter();
  const socket = useSocket(baseApiUrl);
  const classes = useStyle();
  const [products, setProducts] = React.useState([]);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [dataDelete, setDataDelete] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [haveData, setHaveData] = React.useState(true);
  React.useEffect(async () => {
    await fetcher(`${baseApiUrl}/api/v1/checkouts`)
      .then((res) => {
        if (res.data.length == 0) setHaveData(false);
        else setHaveData(true);
        setTotalPrice(res.totalPrice);
        convertPathToURL(res.data).then((result) => {
          console.log("res ::::::", result);
          setProducts(result);
        });
      })
      .catch((error) => {
        setHaveData(false);
        console.log("error:::", error);
      });
  }, []);
  React.useEffect(() => {
    if (socket) {
      socket.on("getCheckouts", async (data) => {
        if (data.length == 0) setHaveData(false);
        else setHaveData(true);
        console.log("data:::", data);
        convertPathToURL(data).then((result) => {
          console.log("res ::::::", result);
          setProducts(result);
        });
      });
    }
  }, [socket]);
  // :::::::::::: delete data :::::::::::::::::::::::
  const handleDelete = (data) => {
    deleteData(`${baseApiUrl}/api/v1/checkouts/${data.checkoutId}`)
      .then((res) => {
        setTotalPrice(res.totalPrice);
        Toastify(res.statusCode, res.message);
        setOpenDelete(false);
      })
      .catch((err) => {
        setOpenDelete(false);
        console.log("error :: ", err);
      });
  };
  // fucntion click open delete dialog
  const handleDeleteDialog = (data) => {
    setDataDelete(data);
    setOpenDelete(true);
  };
  // function sell more
  return (
    <div>
      {products.length == 0 && haveData ? (
        <CenterItem label={"Loading..."} />
      ) : products.length == 0 && !haveData ? (
        <CenterItem label={"Cart is empty!"} />
      ) : (
        <>
          <Paper elevation={1} className={classes.subContainer}>
            <h3>
              Your Baskets{" "}
              <span style={{ color: "#00bdd7" }}>
                ({products?.length} {products?.length >= 2 ? "items" : "item"} =
                ${totalPrice} )
              </span>
            </h3>
          </Paper>
          <div style={{ width: "80%", margin: "0 auto" }}>
            {console.log("have data:::", haveData)}
            <CheckoutButton
              onClick={() =>
                router.push(
                  "https://www.facebook.com/FrugalityBook-104791435445732"
                )
              }
              style={{ float: "right", top: "2vh" }}
            >
              Checkout
            </CheckoutButton>
            {/* <SimpleButton
          label={'Add More'}
          onClick={() => router.push('/')}
          style={{ 
            borderRadius: '5px', 
            float: 'right', top: '2vh' , 
            marginRight:'8px',
            height:'37px',
            color:'black'
            }} /> */}
          </div>
          <div style={{ marginTop: "20px", marginBottom: "10px" }}>
            {console.log("map:::::::", products)}
            <Grid container rowSpacing={2}>
              {products?.map((item, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={index}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <CardProduct
                        url={item.link}
                        Desc={item.desc}
                        Title={item.title}
                        edit={false}
                        Price={item.price}
                        status={item.status}
                        cat={item.category}
                        onClickDelete={() => handleDeleteDialog(item)}
                      />
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </>
      )}
      {/* Dialog to delete Product */}
      <Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
        <DialogTitle>Are you sure to delete this item?</DialogTitle>
        <div style={{ display: "flex", marginLeft: "135px" }}>
          <DialogActions>
            <Button onClick={() => setOpenDelete(false)} color="error">
              No
            </Button>
            <Button onClick={() => handleDelete(dataDelete)}>Yes</Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default UsersBasket;
