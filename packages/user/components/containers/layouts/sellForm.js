import { makeStyles } from "@mui/styles";
import React from "react";
import { Divider, Paper } from "@mui/material";
import { Grid, MenuItem, TextField } from "@mui/material";
import InputImageForSelling from "../../presentations/images/InputImageForSelling";
import { useRouter } from "next/router";
import { categories, statuses } from "../../../utils/constant";
import { inputFile } from "../../../utils/functions/fireStorage";
import postData from "../../../utils/functions/api/postData";
import updateData from "../../../utils/functions/api/updateData";
import Toastify from "../../presentations/Toastify";
import updateState from "../../../states/updateState";
import {useRecoilState} from 'recoil'
import 'react-toastify/dist/ReactToastify.css';
const SellForm = ({ onOpen, dataUpdate, handleClose, openSellMore, user, style}) => {
  const useStyle = makeStyles({
    container: {
      marginTop:`${style?"0vh":"5vh"}`,
      display: "flex",
      width: `${style?"100%":"40%"}`,
      marginLeft: `${style?"0":"30%"}`,
      height: "auto",
      borderRadius: "5px",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      position: "relative",
    },
    subContainer: {
      position: "relative",
      width: "100%",
      paddingBottom: "25px",
      paddingLeft: "5%",
    },
    inputPicMore: {
      width: "90%",
      height: "auto",
      marginLeft: "5%",
    },
    buttonSell: {
      color: "black",
      backgroundColor: "#00bdd7",
      padding: "8px",
      border: "none",
      marginTop: "15px",
      fontSize: "15px",
      borderRadius: "5px",
      cursor: "pointer",
      "&:hover": {
        color: "white",
        backgroundColor: "rgba(00,00,00,0.2)",
      },
    },
    loading: {
      color: "black",
      backgroundColor: "rgba(00,00,00,0.2)",
      padding: "8px",
      border: "none",
      marginTop: "15px",
      fontSize: "15px",
      borderRadius: "5px",
    },
    list: {
      width: "100%",
    },
    inputField: {
      width: "230px",
      marginBottom: "15px",
    },
    selectField: {
      width: "230px",
      marginBottom: "15px",
      height: "50px",
      border: "none",
      backgroundColor: "rgba(0,0,0,0.2)",
      padding: "10px",
    },
  });

  const classes = useStyle();
  const [loading1, setLoading1] = React.useState(false);
  const [inputImageError, setInputImageError] = React.useState("");
  const [file, setFile] = React.useState(null);
  const [editState , setEditState] = useRecoilState(updateState)
  const router = useRouter();
  const handleSellProduct = (event) => {
    event.preventDefault();
    const { title, author, desc, price, src, status, category } =
      event.target.elements;
    setLoading1(false);
    // update image and text
    if (dataUpdate && src.files[0]) {
      setLoading1(true);
      setInputImageError("");
      let allImageNames = [];
      let allImagePaths = [];
      for (let i = 0; i < src.files.length; i++) {
        inputFile("sellerProduct", src.files[i].name, src.files[i])
          .then((res) => {
            let imgPath = res.metadata;
            allImageNames.push(imgPath.name);
            allImagePaths.push(imgPath.fullPath);
            if (src.files.length == allImageNames.length) {
              updateData(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/books/${dataUpdate._id}`,
                {
                  title: title.value,
                  author: author.value,
                  desc: desc.value,
                  price: parseInt(price.value),
                  status: status.value,
                  category: category.value,
                  allImageNames: allImageNames,
                  allImagePaths: allImagePaths,
                }
              )
                .then((res) => {
                  Toastify(res.statusCode, res.message)
                  setLoading1(false);
                  setEditState(!editState)
                  onOpen = !onOpen;
                  
                  // window.location.reload();
                })
                .catch((err) => {
                  console.log(err.message);
                  setLoading1(false);
                });
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    } else if (dataUpdate) {
      console.log('data update ::::::::::: ', dataUpdate)
      setLoading1(true)
      // update only text
      updateData(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/books/${dataUpdate._id}`, {
        title: title.value,
        author: author.value,
        desc: desc.value,
        price: parseInt(price.value),
        status: status.value,
        category: category.value,
      })
        .then((res) => {
          Toastify(res.statusCode, res.message)
          setLoading1(false);
          setEditState(!editState)
        })
        .catch((err) => {
          console.log(err.message);
          setLoading1(false);
        });
    } else {
      // block sell product not update any ( In case , it has no updateData )
      if (src.value == "" && dataUpdate?.link == null) {
        setInputImageError("Please input image!");
      } else {
        setLoading1(true);
        setInputImageError("");
        let allImageNames = [];
        let allImagePaths = [];
        for (let i = 0; i < src.files.length; i++) {
          inputFile("sellerProduct", src.files[i].name, src.files[i])
            .then((res) => {
              let imgPath = res.metadata;
              allImageNames.push(imgPath.name);
              allImagePaths.push(imgPath.fullPath);
              if (src.files.length == allImageNames.length) {
                postData(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/books`, {
                  title: title.value,
                  author: author.value,
                  desc: desc.value,
                  price: parseInt(price.value),
                  status: status.value,
                  category: category.value,
                  // userId: user._id,
                  allImageNames: allImageNames,
                  allImagePaths: allImagePaths,
                })
                  .then((res) => {
                    router.push("/productList");
                    setLoading1(false);
                    Toastify(res.statusCode, res.message)
                    setEditState(false)
                  })
                  .catch((err) => {
                    console.log(err.message);
                    setLoading1(false);
                  });
              }
            })
            .catch((err) => {
              console.log(err.message);
            });
        }
      }
    }
  };

  return (
    <div className={classes.container}>
      
        <Paper elevation={3} >
          <div style={{ marginLeft: "15px", marginBottom: "25px," }}>
            <h4 style={{ marginBottom: "-1px" }}>
              {dataUpdate || file
                ? "Update Product Informations : "
                : "Sell your product : "}
            </h4>
            <Divider />
          </div>
          <div className={classes.subContainer}>
            {/*********************  form Sell Product ***************************/}
            <form onSubmit={handleSellProduct}>
              <Grid container>
                <Grid
                  item
                  lg={12}
                  style={{
                    width: "100%",
                    marginLeft: "5%",
                    marginBottom: "15px",
                  }}
                >
                  <InputImageForSelling
                    name="src"
                    defaultImageURL={dataUpdate?.link}
                  />
                </Grid>
                <Grid item lg={6} md={12} sm={12}>
                  <TextField
                    className={classes.inputField}
                    style={{ marginRight: "28px" }}
                    required
                    id="filled-required"
                    label="Title"
                    variant="outlined"
                    type="text"
                    name="title"
                    defaultValue={dataUpdate?.title}
                  />
                  <TextField
                    className={classes.inputField}
                    style={{ marginRight: "28px" }}
                    required
                    id="filled-required"
                    label="Author"
                    variant="outlined"
                    type="text"
                    name="author"
                    defaultValue={dataUpdate?.author}
                  />
                  <br />
                  <TextField
                    size="small"
                    className={classes.inputField}
                    id="outlined-select-currency-native"
                    select
                    required
                    label="Select category"
                    name="category"
                    variant="outlined"
                    defaultValue={dataUpdate?.category} // value follow by value in categories.map ....
                  >
                    {categories.map((item, index) => (
                      <MenuItem value={item.name} key={index}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item lg={6} md={4} sm={12}>
                  <TextField
                    size="small"
                    className={classes.inputField}
                    id="outlined-select-currency-native"
                    select
                    required
                    label="Select status"
                    name="status"
                    variant="outlined"
                    defaultValue={dataUpdate?.status}
                  >
                    {statuses.map((item, index) => (
                      <MenuItem value={item.name} key={index}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    className={classes.inputField}
                    style={{ marginRight: "28px" }}
                    required
                    id="filled-required"
                    label="Price($)"
                    variant="outlined"
                    type="number"
                    name="price"
                    defaultValue={dataUpdate?.price}
                  />
                  <TextField
                    className={classes.inputField}
                    style={{ marginRight: "25px" }}
                    id="outlined-multiline-flexible"
                    label="Description"
                    multiline
                    maxRows={4}
                    name="desc"
                    defaultValue={dataUpdate?.desc}
                  />
                  <br />
                  <p style={{ color: "red" }}>{inputImageError}</p>
                  <button
                    className={loading1 ? classes.loading : classes.buttonSell}
                    type="submit"
                  >
                    {dataUpdate
                      ? loading1 && dataUpdate
                        ? "Saving..."
                        : "Save change"
                      : loading1 && !dataUpdate
                      ? "Uploading..."
                      : "Sell Your Product"}
                  </button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Paper>

    </div>
  );
};

export default SellForm;
