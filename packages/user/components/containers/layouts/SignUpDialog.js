import React from "react";
import {
  Paper,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  IconButton,
} from "@mui/material";
import registerStyles from "./../../../styles/register.module.css";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material";
import { Dialog } from "@mui/material";
import { useRouter } from "next/router";
import firebase from "../../../services/firebase-config";
import { openSUState, openSIState } from "../../../states/SignInSignUp";
import { useRecoilState } from "recoil";
import { signUp } from "../../../utils/functions/auth/authUser";

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
  Typography: {
    textAlign: "center",
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    paddingTop: "20px",
  },
  FormControlLabel: {
    marginTop: "1%",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
  },
  Button: {
    backgroundColor: "#00bdd7",
    width: "90%",
    marginLeft: "5%",
    marginTop: "1%",
    borderRadius: 20,
    height: "30px",
    border: "1px solid #00bdd7",
    fontSize: "17px",
    cursor: "pointer",
    color: "white",
  },
});

const SignUPDialog = () => {
  //  ::::::::::::::::: create hook :::::::::::::::::
  const router = useRouter();
  const [loading1, setLoading1] = React.useState(false);
  const [openSU, setOpenSU] = useRecoilState(openSUState);
  const [openSI, setOpenSI] = useRecoilState(openSIState);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = React.useState("");
  const [type, setType] = React.useState("password");
  const [type1, setType1] = React.useState("password");
  const [userRole, setUserRole] = React.useState("user");
  const classes = useStyles();
  // :::::::::::::::::::: sing up with google and password ::::::::::::::::::::::::
  const socialMediaAuth = (provider) => {
    return firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then((res) => {
        setOpenSU(false);
        return res.user;
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleOnClick = (provider) => {
    const res = socialMediaAuth(provider);
    console.log(res);
  };

  // :::::::::::::::::::::::::::: create user ::::::::::::::::::::::::::::::::::
  const handleCreateUser = async (event) => {
    let user;
    event.preventDefault();
    setLoading1(true);
    // catch value from text field
    const el_value = event.target.elements;
    const { confirmPassword, fName, lName } = event.target.elements;
    const fullName = fName.value + " " + lName.value;
    const email = el_value.email.value;
    const password = el_value.password.value;
    if (confirmPassword.value === password) {
      console.log("called");
      // function post data
      await signUp(
        fullName,
        email,
        password,
        userRole,
        setErrorMessage,
        setOpenSI,
        setOpenSU
      );

      setLoading1(false);
      setErrorConfirmPassword("");
    } else {
      setErrorConfirmPassword("Password not match!!");
      setErrorMessage("");
      setLoading1(false);
    }
  };
  return (
    <div style={{ position: "absolute" }}>
      <ThemeProvider theme={theme}>
        <Dialog
          open={openSU}
          onClose={() => {
            setOpenSU(false);
            setLoading1(false);
            setErrorConfirmPassword("");
            setErrorMessage("");
          }}
        >
          <Paper className={registerStyles.registerPaper} elevation={5}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography
                  className={classes.Typography}
                  variant="h6"
                  style={{ color: "#36454F" }}
                >
                  Sign Up an account
                </Typography>
                <form onSubmit={handleCreateUser}>
                  <input
                    placeholder="First Name"
                    required
                    type="text"
                    name="fName"
                    className={registerStyles.input1}
                  ></input>
                  <input
                    type="text"
                    name="lName"
                    placeholder="Last Name"
                    required
                    className={registerStyles.input2}
                  ></input>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    className={registerStyles.form11}
                  ></input>
                  <div
                    style={{
                      border: "1px solid paleturquoise",
                      borderRadius: "20px",
                      width: "90%",
                      marginTop: "3%",
                      marginLeft: "5%",
                      marginTop: "3%",
                    }}
                  >
                    <input
                      type={type}
                      placeholder="Password"
                      required
                      name="password"
                      className={registerStyles.form1}
                    ></input>
                    <IconButton
                      style={{
                        padding: 0,
                      }}
                      onClick={() => {
                        type == "password"
                          ? setType("text")
                          : setType("password");
                      }}
                    >
                      {type == "password" ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </div>
                  <div
                    style={{
                      border: "1px solid paleturquoise",
                      borderRadius: "20px",
                      width: "90%",
                      marginTop: "3%",
                      marginLeft: "5%",
                      marginTop: "3%",
                    }}
                  >
                    <input
                      type={type1}
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      required
                      className={registerStyles.form1}
                    ></input>
                    <IconButton
                      style={{
                        padding: 0,
                      }}
                      onClick={() => {
                        type1 == "password"
                          ? setType1("text")
                          : setType1("password");
                      }}
                    >
                      {type1 == "password" ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </div>
                  <label className={registerStyles.formSelectLabel}>
                    Sign Up as :
                  </label>
                  <select
                    id="role"
                    className={registerStyles.formSelect}
                    onChange={(e) => setUserRole(e.target.value)}
                  >
                    <option value="user">user</option>
                    <option value="seller">seller</option>
                  </select>
                  <Typography style={{ color: "red", textAlign: "center" }}>
                    {errorMessage}
                  </Typography>
                  <FormControlLabel
                    className={classes.FormControlLabel}
                    control={<Checkbox required></Checkbox>}
                    style={{ color: "#36454F" }}
                    label="I accept Term of Use"
                  ></FormControlLabel>
                  <p style={{ color: "red", textAlign: "center" }}>
                    {errorConfirmPassword}
                  </p>
                  <button
                    color="primary"
                    className={classes.Button}
                    variant="contained"
                    type="submit"
                    disabled={loading1}
                  >
                    {loading1 ? "Loading..." : "Sign Up"}
                  </button>
                </form>

                {/* <Typography
                  style={{
                    textAlign: "center",
                    marginTop: "1%",
                  }}
                >
                  or signup with
                </Typography> */}
                {/* <Button
                  variant="contained"
                  color="primary"
                  onClick={()=>handleOnClick(facebookProvider)}
                  style={{
                    marginTop: "3%",
                    width: "30%",
                    marginLeft: "10%",
                    marginBottom: "10px",
                  }}
                >
                  Facebook
                </Button>
                <Button
                  variant="contained"
                  onClick={()=>handleOnClick(googleProvider)}
                  style={{
                    marginTop: "3%",
                    width: "30%",
                    marginLeft: "20%",
                    marginBottom: "10px",
                  }}
                  color="secondary"
                >
                  Google
                </Button> */}
              </Grid>
            </Grid>
          </Paper>
        </Dialog>
      </ThemeProvider>
    </div>
  );
};

export default SignUPDialog;
