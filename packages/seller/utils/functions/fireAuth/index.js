import { fireAuth } from "../../../services/firebase";
import axios from "axios";

//******************* Create User ************************** */
export const createUser = async (
  fullname,
  email,
  password,
  role,
  setError,
  setOpenSU
) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/signUp`,
      {
        fullname,
        email,
        password,
        role,
      }
    );
    console.log("res :::::::::::::::::::: ", res.response);
    // setError(res.data.data)
    setOpenSU(true);
  } catch (error) {
    console.log("errror ::: ", error.response.data.error);
    setOpenSU(true);
    setError(error.response.data.error);
  }

  // return ;
};

//***************** Sign In User  *******************************/
async function signInUser(email, password) {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/author/signIn`,
      {
        email,
        password,
      }
    );
    console.log("res log in :::::::::::::::::::: ", res.data.data);
  } catch (error) {
    console.log(error);
  }
}

//***********************  Forgot Password ****************** */
async function forgotPassword(email) {
  try {
    await fireAuth.sendPasswordResetEmail(email);
  } catch (err) {
    console.log(err.message);
  }
}
//**************************  Update User ******************** */
async function updateUser(name, photo, role) {
  if (fireAuth.currentUser !== null) {
    try {
      await fireAuth.currentUser.updateProfile({
        displayName: name + " " + role,
        photoURL: photo,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
}

//*************************** Sign Up User ********************* */
async function signOutUser() {
  try {
    await fireAuth.signOut();
  } catch (err) {
    console.log(err.message);
  }
}
export {
  // createUser,
  signInUser,
  updateUser,
  signOutUser,
  forgotPassword,
};
