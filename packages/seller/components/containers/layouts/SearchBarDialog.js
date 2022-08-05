import {
  Dialog,
  useTheme,
  Input,
  Paper,
  useMediaQuery,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import SearchIcon from "@mui/icons-material/Search";
import unauthorFetch from "../../../utils/functions/api/unauthorFetch";
import SearchResultCard from "../card/SearchResultCard";
import { useRecoilState } from "recoil";
import openSearch from "../../../states/openSearch";
import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";
import { baseApiUrl } from "../../../utils/constant/baseUrls";
const SearchBarDialog = () => {
  const [search, setSearch] = useRecoilState(openSearch);
  const [hover, setHover] = React.useState(false);
  const [data, setData] = React.useState();
  const [searchData, setSearchData] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  useEffect(async () => {
    const res = await unauthorFetch(`${baseApiUrl}/api/v1/books`);
    setData(res.data);
  }, []);
  const handleOnChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    const result = data.filter((search) => {
      return search.title.toLowerCase().includes(value.toLowerCase());
    });
    setSearchData(result);
    if (value == "") {
      setSearchData([]);
    }
  };
  const theme = useTheme();
  const fullscreen = useMediaQuery(theme.breakpoints.down("sm"));
  const styles = makeStyles({
    Container: {
      height: fullscreen ? "100vh" : "80vh",
    },
    Bar: {
      width: "100%",
      height: fullscreen ? "8%" : "10%",
      borderBottom: "1px solid rgb(224, 227, 231)",
      marginBottom: "10px",
    },
    Input: {
      marginLeft: "3%",
      width: "78%",
      height: "100%",
    },
    Icon: {
      color: "#00bdd7",
      height: "100%",
      verticalAlign: "middle",
      width: "8%",
      padding: fullscreen ? "" : "7px",
      marginLeft: "1%",
    },
    ResultCard: {
      padding: "10px",
    },
    Cache: {
      textAlign: "center",
    },
  });
  const classes = styles();
  return (
    <div>
      <Dialog
        open={search}
        onClose={() => {
          setSearch(false);
        }}
        fullWidth={true}
        maxWidth={"sm"}
        fullScreen={fullscreen}
      >
        <Paper elevation={4}>
          <div className={classes.Container}>
            <div className={classes.Bar}>
              <SearchIcon className={classes.Icon}></SearchIcon>
              <Input
                className={classes.Input}
                placeholder="Search..."
                disableUnderline
                onChange={handleOnChange}
                value={searchValue}
              ></Input>
              <IconButton
                sx={{
                  width: "8%",
                  color: "#00bdd7",
                  borderRadius: "0",
                }}
                onClick={() => {
                  setSearch(false);
                }}
              >
                <CancelPresentationOutlinedIcon fontSize="medium" />
              </IconButton>
            </div>
            <div style={{ marginLeft: "10px" }}>
              {searchValue != "" && (
                <Typography
                  color="#3E505F"
                  variant="subtitle1"
                  style={{ fontSize: "0.9rem" }}
                >
                  Result
                </Typography>
              )}
            </div>
            <div className={classes.ResultCard}>
              {searchValue == "" ? (
                <div className={classes.Cache}>
                  <Typography>Trying searching your favorite book.</Typography>
                </div>
              ) : searchData.length == 0 ? (
                <div className={classes.Cache}>
                  <Typography>Not Found</Typography>
                </div>
              ) : (
                searchData.map((item, index) => {
                  console.log(item, index);
                  return (
                    <SearchResultCard
                      id={item._id}
                      hoverColor={hover}
                      title={item.title}
                      author={item.author}
                      key={index}
                    ></SearchResultCard>
                  );
                })
              )}
            </div>
          </div>
        </Paper>
      </Dialog>
    </div>
  );
};

export default SearchBarDialog;
