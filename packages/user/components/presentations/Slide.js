import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import { makeStyles } from "@mui/styles";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
const useStyles = makeStyles({
  eachBook:{
    marginLeft:'15%',
  },
  next: {
    position: "absolute",
    zIndex: "0",
    left: "0%",
    top: "110%",
    marginLeft: "51%",
    "& p": {
      width: "40px",
      height: "30px",
      backgroundColor: "#00bdd7",
      lineHeight: "20px",
      color: "white",
    },
  },
  prev: {
    position: "absolute",
    zIndex: "2",
    marginLeft: "48%",
    top: "110%",
    float: "left",
    marginRight: "15px",
    "& p": {
      width: "40px",
      height: "30px",
      backgroundColor: "rgba(0, 189, 215,0.9)",
      lineHeight: "20px",
      color: "white",
    },
  },
});
const BookSlide = ({children,className=false}) => {
  const [imageIndex, setImageIndex] = React.useState(0);
  const NextArrow = ({ onClick }) => {
    return (
      <div style={{ zIndex: "2" }} className={classes.next} onClick={onClick}>
        <p>
          {" "}
          <ArrowRightIcon
            style={{
              marginTop: "-10px",
              marginRight: "-5px",
              fontSize: "50px",
            }}
          />
        </p>
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div style={{ zIndex: "2" }} className={classes.prev} onClick={onClick}>
        <p>
          <ArrowLeftIcon
            style={{
              marginTop: "-10px",
              marginLeft: "-10px",
              fontSize: "50px",
            }}
          />
        </p>
      </div>
    );
  };
  const settings = {
    dot: true,
    infinite: true,
    lazyLoad: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 5,
    //  centerMode: true,
    centerPadding: 0,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          // infinite: true,
          dots: true,
        },
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          // infinite: true,
          // dots: true
        },
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Slider {...settings} >
        {children}
      </Slider>
    </div>
  );
};

export default BookSlide;
