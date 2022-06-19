import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { openSUState } from "../../../states/SignInSignUp";
import { useRecoilState } from "recoil";
import React from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const NewMainBg = ({ user }) => {
  const img = "http://pngimg.com/uploads/student/student_PNG5.png";
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("md"));
  const useStyle = makeStyles({
    textPart: {
      width: "100%",
      "& span": {
        fontSize: "30px",
        color: "white",
        fontWeight: "bold",
      },
      marginTop: match ? "1%" : "10%",
    },
    singUp: {
      marginLeft: "50px",
      "& p": {
        backgroundColor: "none",
        width: "200px",
        height: "30px",
        border: "1px solid #00bdd7",
        textAlign: "center",
        lineHeight: "25px",
        backgroundColor: "#00bdd7",
        borderRadius: "20px",
        color: "white",
        "&:hover": {
          color: "grey",
          cursor: "pointer",
        },
      },
    },
  });
  const [openSI, setOpenSU] = useRecoilState(openSUState);
  const classes = useStyle();
  return (
    <div
      style={{ height: "auto", backgroundColor: "#5ae0f7", maxHeight: "425px" }}
    >
      <Grid container>
        <Grid container item xl={6} lg={6} sm={12} md={6} xs={12}>
          <div className={classes.textPart}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div
                style={{
                  marginTop: "15vh",
                  width: "87%",
                  marginLeft: "5%",
                  fontSize: "30px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <span style={{ fontWeight: "100" }}>SAVE </span>YOUR{" "}
                <span style={{ color: "#0bbdd7" }}>BOOKS!</span>
              </div>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div
                style={{
                  width: "100%",
                  marginTop: "5px",
                  paddingLeft: "5%",
                  color: "white",
                }}
              >
                <li
                  style={{
                    margin: "0",
                    listStyleType: "none",
                    width: "90%",
                  }}
                >
                  REUSE BOOKS ARE GOOD BOOKS FOR ALL STUDENTS
                </li>
                <p style={{ width: "90%" }}>
                  Save time save money save book for next young generations ,
                  don&apos;t waste your books and keep them in safe!
                </p>
              </div>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              {!user ? (
                <div className={classes.singUp} onClick={() => setOpenSU(true)}>
                  <p>Sign up</p>
                </div>
              ) : (
                <div className={classes.singUp}>
                  <p>
                    <a href="/termOfUse">Term of using</a>
                  </p>
                </div>
              )}
            </Grid>
          </div>
        </Grid>
        <Grid item xl={6} lg={6} sm={12} md={6} xs={12}>
          {match ? (
            <div style={{ display: "none" }}></div>
          ) : (
            <div
              // className={classes.backgroundContainer}
              style={{
                height: "63vh",
                backgroundImage: `url(${img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "auto",
                maxHeight: "425px",
              }}
            >
              {/* <div style={{backgroundImage:`url(${img})`,zIndex:"5"}}></div> */}
              {/* <Image
                width={100}
                height={"60vh"}
                // sizes="60vh"
                layout="responsive"
                alt="people"
                src={"http://pngimg.com/uploads/student/student_PNG5.png"}
              ></Image> */}
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default NewMainBg;
