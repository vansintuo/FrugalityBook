import { Dialog, useTheme, Input, Paper, useMediaQuery } from "@mui/material";
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import SearchIcon from "@mui/icons-material/Search";

const searchBarDialog = () => {
  const theme = useTheme();
  const fullscreen = useMediaQuery(theme.breakpoints.down("sm"));
  const styles = makeStyles({
    Container: {
      height: fullscreen ? "100vh" : "80vh",
    },
    Bar: {
      width: "100%",
      height: "10%",
      // backgroundColor: "red",
      borderBottom: "1px solid cyan",
    },
    Input: {
      marginLeft: "3%",
      width: "87%",
      height: "100%",
    },
    Icon: {
      color: "black",
      height: "100%",
      verticalAlign: "middle",
      width: "8%",
    },
  });
  const classes = styles();
  return (
    <div>
      <Dialog
        open={true}
        fullWidth={true}
        maxWidth={"md"}
        fullScreen={fullscreen}
      >
        <Paper elevation={4} sx={{ border: "1px solid cyan" }}>
          <div className={classes.Container}>
            <div className={classes.Bar}>
              <SearchIcon className={classes.Icon}></SearchIcon>
              <Input
                className={classes.Input}
                placeholder="Search..."
                disableUnderline
              ></Input>
            </div>
          </div>
        </Paper>
      </Dialog>
    </div>
  );
};

export default searchBarDialog;
