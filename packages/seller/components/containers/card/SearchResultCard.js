import { makeStyles } from "@mui/styles";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import { Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import openSearch from "../../../states/openSearch";
const SearchResultCard = ({ title, author, id }) => {
  const [search, setSearch] = useRecoilState(openSearch);
  const router = useRouter();
  const [hoverColor, setHoverColor] = React.useState(false);
  const useStyle = makeStyles({
    Container: {
      display: "flex",
      padding: "15px",
      width: "100%",
      "&:hover": {
        border: "1px solid rgba(39, 155, 170, 0.98)",
        backgroundColor: "rgba(163, 220, 241, 0.10)",
        borderRadius: "10px",
      },
    },
    height: "10vh",
    alignItems: "center",
    marginBottom: "8px",
  });
  const classes = useStyle();
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        setSearch(false);
        router.push(`/productDetail/${id}`);
      }}
      className={classes.Container}
      onMouseEnter={() => {
        setHoverColor(true);
      }}
      onMouseLeave={() => {
        setHoverColor(false);
      }}
    >
      <BookOutlinedIcon
        style={{
          verticleAllign: "middle",
          fontSize: "1.5rem",
          color: hoverColor ? "rgba(39, 155, 170, 0.98)" : "",
        }}
      ></BookOutlinedIcon>
      <Typography
        className={classes.Typography}
        style={{
          marginLeft: "10px",
          flexBasis: "90%",
          color: hoverColor ? "rgba(39, 155, 170, 0.98)" : "",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        style={{
          fontSize: "0.6rem",
          display: "flex",
          alignItems: "center",
          color: hoverColor ? "rgba(39, 155, 170, 0.98)" : "",
          padding: "3px",
        }}
      >
        {author}
      </Typography>
    </div>
  );
};

export default SearchResultCard;
