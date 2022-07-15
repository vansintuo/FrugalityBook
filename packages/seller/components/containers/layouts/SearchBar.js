import React from "react";
import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AppBar } from "@mui/material";
import { SearchBar } from ".";
import { useTheme } from "@mui/styles";
import openSearch from "../../../states/openSearch";
import { useRecoilState } from "recoil";
// import SearchBar from '../SearchBar';
const SearchBarLayout = () => {
  const theme = useTheme();
  // const [openSearch, setOpenSearch] = React.useState()
  const [openS, setOpenS] = useRecoilState(openSearch);

  const useStyle = makeStyles({
    searchBlock: {
      display: `${openS ? "block" : "none"}`,
      color: "red",
      width: "100%",
      height: "auto",
      animation: `$myEffect 500ms ${theme.transitions.easing.easeInOut}`,
      zIndex: 1000,
      position: "absolute",
      top: 90,
    },
    container: {
      color: "red",
    },
    "@keyframes myEffect": {
      "0%": {
        top: 90,
        opacity: 0,
        transform: "translateY(-20%)",
      },
      "100%": {
        top: 90,
        opacity: 1,
        transform: "translateY(0)",
      },
    },
  });
  const classes = useStyle();

  return (
    <div>
      <Box className={classes.searchBlock}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "white",
            height: "90px",
            justifyContent: "center",
          }}
        >
          <Typography>
            <SearchBar />
          </Typography>
          <Typography variant="h4">
            <CloseIcon
              onClick={() => setOpenS(false)}
              sx={{
                color: "red",
                "&:hover": { color: "#00bdd7", cursor: "pointer" },
              }}
            />
          </Typography>
        </AppBar>
      </Box>
    </div>
  );
};

export default SearchBarLayout;
