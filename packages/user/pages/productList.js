import { makeStyles } from "@mui/styles";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Box, DialogTitle, Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Dialog, DialogActions, Paper } from "@mui/material";
import SellForm from "../components/containers/layouts/sellForm";
import deleteData from "../utils/functions/api/deleteData";
import updateState from "../states/updateState";
import { useRecoilState } from "recoil";
import Toastify from "../components/presentations/Toastify";
import { convertPathToURL } from "../utils/functions/data/convertPathToURL";
import useSocket from "../sockets/useSocket";
import CardProduct from "../components/presentations/cards/CardProduct";
import SimpleButton from "../components/presentations/buttons/SimpleButton";
import fetcher from "../utils/functions/api/fetcher";
const useStyle = makeStyles({
  subContainer: {
    textAlign: "center",
    marginTop: "15vh",
    height: "70px",
    position: "relative",
    borderRadius: "5px",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    margin: "0 auto",
    "& h3": {
      position: "absolute",
      width: "100%",
      marginTop: "1%",
    },
  },
});

export async function getServerSideProps(ctx) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/books`);
  console.log("res :::::::>>>", res);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
const ProductList = ({ user, data }) => {
  const classes = useStyle();
  // set states
  const [products, setProducts] = React.useState(data.data);
  const [finalProducts, setFinalProducts] = React.useState(data.data);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [dataDelete, setDataDelete] = React.useState([]);
  const [dataUpdate, setDataUpdate] = React.useState();
  const [editState, setEditState] = useRecoilState(updateState);
  const socket = useSocket(process.env.NEXT_PUBLIC_BASE_URL); //TODO

  React.useEffect(() => {
    convertPathToURL(data?.data).then((res) => {
      setProducts(res);
    });
  }, [data]);
  React.useEffect(() => {
    // catch data from socket and put to function to display real time
    if (socket) {
      socket.on("book", async (data) => {
        convertPathToURL(data).then((res) => {
          setProducts(res);
        });
      });
    }
  }, [socket]);

  // open update dialog
  const handleUpdate = (item) => {
    console.log("item ::::::::: ", item);
    setEditState(!editState);
    setDataUpdate(item);
  }; // :::::::::::: delete data :::::::::::::::::::::::
  const handleDelete = (data) => {
    deleteData(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/books/${data._id}`
    )
      .then((res) => {
        setOpenDelete(false);
        Toastify(res.statusCode, res.message);
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
  function openSellMoreFunc() {
    setEditState(!editState);
    setDataUpdate(null);
  }
  return (
    <Box>
      <Paper elevation={1} className={classes.subContainer}>
        {products.length == 0 ? (
          <h3>Loading...</h3>
        ) : (
          <h3 style={{ marginBottom: 0 }}>
            Your Product List{" "}
            <p style={{ marginTop: 0, color: "#00bdd7" }}>
              ({products?.length} {products?.length >= 2 ? "items" : "item"})
            </p>
          </h3>
        )}
      </Paper>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <SimpleButton
          label={"Sell More"}
          onClick={openSellMoreFunc}
          style={{
            borderRadius: "5px",
            float: "right",
            top: "2vh",
            fontSixe: "12px",
          }}
        />
      </div>
      <Grid
        container
        className={classes.container}
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {products?.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={index}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <CardProduct
                  Title={item.title}
                  Desc={item.desc}
                  Price={item.price}
                  url={item.link}
                  cat={item.category}
                  status={item.status}
                  onClickEdit={() => handleUpdate(item)}
                  onClickDelete={() => handleDeleteDialog(item)}
                />
              </div>
            </Grid>
          );
        })}
      </Grid>
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

      {/* call sellform to update  */}
      <Dialog open={editState} onClose={() => setEditState(!editState)}>
        <SellForm style={true} dataUpdate={dataUpdate} />
      </Dialog>
      {/* <AlertDialog openDialog={openDelete} /> */}
    </Box>
  );
};

export default ProductList;
