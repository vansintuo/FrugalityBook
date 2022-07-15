import axios from "axios";
import Cookies from "js-cookie";
import jsCookie from "js-cookie";
import { setCookie } from "nookies";
import { useRouter } from "next/router";
//:::::::::::::: sign up ::::::::::::::::::
const signUp = async (
  fullname,
  email,
  password,
  role,
  setError,
  setOpenSI,
  setOpenSU
) => {
  try {
    console.log("called sign up ");
    await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/signUp`, {
      fullname,
      email,
      password,
      role,
    });
    setOpenSI(true);
    setOpenSU(false);
    setError("");
  } catch (error) {
    if (error.response?.data.error) {
      const err = error.response.data.error;
      setError(err);
      setOpenSI(false);
    }
  }
};

// ::::::::::::::::::::::::: sign in :::::::::::::::::::::::
const signIn = async (email, password, setError, setLoading) => {
  setLoading(false);
  setError(null);
  try {
    const res = await axios.post(`http://localhost:5555/api/v1/author/signIn`, {
      email,
      password,
    });
    setLoading(true);
    setError("");
    if (res.data.message) {
      setError(res.data.message);
      setLoading(false);
    } else {
      if (res.data?.data.role == "user" || res.data?.data.role == "seller") {
        setToken(res.data);
      } else {
        setError("You are not normal user");
        setLoading(false);
      }
    }
  } catch (error) {
    console.log("error ::::::::::", error.message);
    const err = error.response?.data.message;
    setError(err);
    setLoading(false);
  }
};
// ::::::::::::::::: update user :::::::::::::::::::::::
const updateUser = async (url, body) => {
  const token = jsCookie.get("seller_token");
  if (token) {
    const author = JSON.parse(token || {});
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "x-access-token": author.accessToken,
        "Content-Type": "application/json ; charset=UTF-8",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
  }
};
// :::::::::::::::::: redirect user :::::::::::::::::::::
const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    if (typeof window !== "undefined") {
      window.location.href = location;
    }
  }
};
// ::::::::::::::::::: set token ::::::::::::::::::::::::::::::::::
const setToken = (token) => {
  setCookie(null, "seller_token", token);
  jsCookie.set("seller_token", JSON.stringify(token));
  if (typeof window !== "undefined") {
    window.location.href = "/home";
  }
};
// :::::::::::::::: sign out ::::::::::::::::::::
const logOut = () => {
  // console.log('called')
  jsCookie.remove("seller_token");
  window.location.href = "/";
};

export { signUp, signIn, logOut, redirectUser, updateUser };
