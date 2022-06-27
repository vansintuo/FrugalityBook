import React from "react";
import Link from "next/link";
import {
  Paper,
  Grid,
  Typography,
  FormControlLabel,
  Button,
  Checkbox,
  ThemeProvider,
  createTheme,
  Dialog,
} from "@mui/material";
import LoginStyle from "./../../../styles/login.module.css";
import { makeStyles } from "@mui/styles";
import { openSUState, openSIState } from "../../../states/SignInSignUp";
import { useRecoilState } from "recoil";
import {
  loadingState,
  userState,
} from "../../../states/AuthGuardState/userState";
import { signInUser, forgotPassword } from "../../../utils/functions/fireAuth";
import jsCookie from "js-cookie";
import axios from "axios";
import nookie from "nookies";
import { signIn } from "../../../utils/functions/auth/authUser";
const theme = createTheme({
  palette: {
    secondary: {
      main: "#f50057",
    },
  },
  shape: {
    borderRadius: 10,
  },
});
const useStyles = makeStyles({
  Button: {
    backgroundColor: "#00bdd7",
    width: "90%",
    marginLeft: "5%",
    marginTop: "3%",
    borderRadius: 20,
    border: "1px solid #00bdd7",
    fontSize: "17px",
    height: "30px",
    cursor: "pointer",
    color:"white"
  },
  Link: {
    color: "#157DEC",
    fontWeight: "bold",
    marginTop: "5%",
    display: "flex",
    justifyContent: "center",
    marginTop: "-15px",
  },
});
const LoginDialog = () => {
  const classes = useStyles();
  const [isForgotPassword, setIsForgotPassword] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [errorForgotPassword, setErrorForgotPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [openSU, setOpenSU] = useRecoilState(openSUState);
  const [openSI, setOpenSI] = useRecoilState(openSIState);
  // :::::::::::::::::::::: login ::::::::::::::::::::::::::::
  const handleLogin = async (event) => {
    setLoading(true);
    event.preventDefault();
    const { email, password } = event.target.elements;
    if (email.value == " " || password.value == " ") {
      setErrorMessage("Please enter value !!");
    } else {
      // sign in function
      await signIn(email.value, password.value, setErrorMessage, setLoading);
    }
  };
  // ::::::::::::::::::::::: reset password :::::::::::::::::::::::::::::::
  const handleForgotPassword = (event) => {
    event.preventDefault();
    setLoading1(true);
    const { ErrorEmail } = event.target.elements;
    forgotPassword(ErrorEmail.value)
      .then((res) => {
        alert(
          "We sent a link to your password.Please check it and follow it to reset your password!"
        );
        setIsForgotPassword(false);
        setLoading1(false);
      })
      .catch((err) => {
        setErrorForgotPassword(err.message);
      });
  };
  return (
    <div className={LoginStyle.loginContainer}>
      <ThemeProvider theme={theme}>
        <Dialog
          open={openSI}
          onClose={() => {
            setOpenSI(false);
            setLoading(false);
            setErrorMessage("");
          }}
        >
          <Paper color="primay" className={LoginStyle.loginPaper} elevation={5}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "white",
                  }}
                >
                  {!isForgotPassword ? (
                    <>
                      <Typography
                        style={{
                          fontWeight: "bold",
                          textAlign: "center",
                          color: "#36454F",
                          paddingTop: "20px",
                        }}
                        variant="h6"
                      >
                        Sign in to your account
                      </Typography>
                      <form onSubmit={handleLogin}>
                        <input
                          className={LoginStyle.form1}
                          type="email"
                          placeholder="Email"
                          name="email"
                          required
                        ></input>
                        <input
                          className={LoginStyle.form2}
                          type="password"
                          placeholder="Password"
                          name="password"
                          required
                        ></input>
                        <FormControlLabel
                          style={{ marginLeft: "5%", marginTop: "3%" ,color:"#36454F"}}
                          control={<Checkbox></Checkbox>}
                          label="Remember Me"
                        ></FormControlLabel>
                        <br />
                        <Typography
                          style={{ color: "red", textAlign: "center" }}
                        >
                          {errorMessage}
                        </Typography>
                        <button
                          color=""
                          className={classes.Button}
                          variant="contained"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? "Loading..." : "Sign In"}
                        </button>
                      </form>
                      <br />
                      <Link href="#">
                        <a
                          className={classes.Link}
                          onClick={() => setIsForgotPassword(true)}
                        >
                          Forgot Password?
                        </a>
                      </Link>
                      <Typography
                        style={{ textAlign: "center", color: "#36454F" }}
                      >
                        Don&apos;t you have an account?
                        <Link href="#">
                          <a
                            onClick={(event) => {
                              event.preventDefault();
                              setOpenSU(true);
                              setOpenSI(false);
                            }}
                            style={{ color: "green" }}
                          >
                            Sign Up
                          </a>
                        </Link>
                      </Typography>
                      <Typography
                        style={{
                          textAlign: "center",
                          marginTop: "2%",
                          color: "#36454F",
                        }}
                      >
                        or login with
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{
                          marginTop: "3%",
                          width: "30%",
                          marginLeft: "10%",
                        }}
                      >
                        Facebook
                      </Button>
                      <Button
                        variant="contained"
                        style={{
                          marginTop: "3%",
                          width: "30%",
                          marginLeft: "20%",
                          marginBottom: 10,
                        }}
                        color="secondary"
                      >
                        Google
                      </Button>
                      <Typography
                        style={{
                          textAlign: "center",
                          paddingBottom: "10px",
                          fontSize: "10px",
                          color: "grey",
                        }}
                      >
                        Copyright &copy; FrugalityBook2021
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Typography
                        style={{
                          fontWeight: "bold",
                          textAlign: "center",
                          color: "black",
                          paddingTop: "20px",
                        }}
                        variant="h6"
                      >
                        Enter your email to reset
                        <br /> password
                      </Typography>
                      <form
                        onSubmit={handleForgotPassword}
                        style={{
                          width: "300px",
                          height: "110px",
                        }}
                      >
                        <input
                          className={LoginStyle.form1}
                          required
                          type="email"
                          placeholder="Email"
                          name="ErrorEmail"
                        ></input>
                        <button
                          color="primary"
                          className={classes.Button}
                          variant="contained"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? "Loading..." : "Send"}
                        </button>
                      </form>
                      <p style={{ textAlign: "center", color: "red" }}>
                        {errorForgotPassword}
                      </p>
                      <Link href="#">
                        <a
                          className={classes.Link}
                          onClick={() => setIsForgotPassword(false)}
                        >
                          <a style={{ color: "black" }}>Back to&minus;&gt;</a>
                          Sing in{" "}
                        </a>
                      </Link>
                      <Typography style={{ textAlign: "center" }}>
                        Don&apos;t you have an account?
                        <Link href="#">
                          <a style={{ color: "green" }}>Sign Up</a>
                        </Link>
                      </Typography>
                      <br />

                      <Typography
                        style={{
                          textAlign: "center",
                          paddingBottom: "10px",
                          color: "grey",
                          fontSize: "10px",
                        }}
                      >
                        Copyright &copy; FrugalityBook2021
                      </Typography>
                    </>
                  )}
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Dialog>
      </ThemeProvider>
    </div>
  );
};
export default LoginDialog;
