
import React from "react";
import Link from "next/link";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles({
  cardContainer: {
    width: "250px",
    marginBottom: "15px",
    marginTop: "5px",
    height:'450px',
  },
  img1:{
    position: "relative",
    width: "290px",
    height: "260px",
    backgroundColor: "#00bdd7",
   "& img":{
      position: "absolute",
      width: "160px",
      height: "240px",
      objectFit: "cover",
      left:'23%',
      top:"10px"
    },
  },
 
  texttitle: {
    height: "5px",
    position: "relative",
  },

  buttonClick:{
      position:'relative',
      '& p':{
        width:'200px',
        height:'30px',
        border:'1px solid #00bdd7',
          position:'absolute',
          lineHeight:'30px',
          textAlign:'center',
          color:'grey',
          cursor:'pointer',
          '&:hover':{
              color:'#00bdd7',
          }
      }
  }
});
export default function CardNewArrival({
  src,
  title,
  author,
  price,
  href ,
}) {
  const classes = useStyle();
  return (
    <div
      className={classes.cardContainer}
    >
     <Link href={href!==undefined?href:""}>
     <a>
     <div>
        <div className={classes.img1}>
          <img src={src} alt="img"/>
        </div>
        <div className={classes.textTitle}>
          <h4
            style={{
              paddingBottom: "1px",
              height:'25px',
              marginTop: "3px",
            }}
          >
            {title}
          </h4>
          <p
            style={{
              paddingBottom: "15px",
              color: "grey",
              marginTop: "-19px",
              color: "#00bdd7",
              fontSize:'17px',
              height:'20px',
              width:'270px',
            }}
          >
            {author}
            <span> is book&apos;s author</span>
          </p>
        </div>
        <p>Price : <span style={{color:'#00bdd7'}}>${price}</span></p>
        <div className={classes.buttonClick} ><p>SEE DETAIL</p></div>
      </div>
     </a>
     </Link>
    </div>
  );
}