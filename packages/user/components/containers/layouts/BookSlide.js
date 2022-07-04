import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import { makeStyles } from "@mui/styles";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import StudentSpeech from "../card/StudentSpeech";
import style from "../../../styles/BookSlide.module.css";
const BookSlide = () => {
  const useStyles = makeStyles({
    next: {
      position: "absolute",
      zIndex: "0",
      left: "0%",
      top: "110%",
      marginLeft: "45%",
      "@media(max-width:1200px)": {
        display: "none",
      },
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
      marginLeft: "42.5%",
      top: "110%",
      float: "left",
      marginRight: "15px",
      "@media(max-width:1200px)": {
        display: "none",
      },
      "& p": {
        width: "40px",
        height: "30px",
        backgroundColor: "rgba(0, 189, 215,0.9)",
        lineHeight: "20px",
        color: "white",
      },
    },
  });
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
              cursor: "pointer",
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
              cursor: "pointer",
            }}
          />
        </p>
      </div>
    );
  };
  const settings = {
    dot: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    // autoplay:true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className={style.container}>
      <Slider {...settings}>
        <div>
          <StudentSpeech />
        </div>
        <div>
          <StudentSpeech />
        </div>
        <div>
          <StudentSpeech />
        </div>
        <div>
          <StudentSpeech />
        </div>
        <div>
          <StudentSpeech />
        </div>
        <div>
          <StudentSpeech />
        </div>
      </Slider>
    </div>
  );
};

export default BookSlide;
