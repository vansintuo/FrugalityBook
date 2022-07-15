import "../styles/globals.css";
import Header from "../components/containers/Header";
import { createTheme, ThemeProvider } from "@mui/material";
import LoginDialog from "../components/containers/layouts/LoginDialog";
import SignUPDialog from "../components/containers/layouts/SignUpDialog";
import { useRouter } from "next/router";
import { RecoilRoot, useRecoilState, useResetRecoilState } from "recoil";
import { makeStyles } from "@mui/styles";
import Footer from "../components/containers/Footer";
import { redirectUser } from "../utils/functions/auth/authUser";
import { destroyCookie, parseCookies } from "nookies";
import { ToastContainer } from "react-toastify";
import SearchBarLayout from "../components/containers/layouts/SearchBar";
import Navbar from "../components/containers/layouts/Navbar";
import axios from "axios";
const useStyle = makeStyles({
  container: {
    fontWeight: "bold",
    boxSizing: "border-box",
  },
});
const theme = createTheme({
  palette: {
    secondary: {
      main: "#f50057",
    },
  },
});
function MyApp({ Component, pageProps, token }) {
  const classes = useStyle();
  const router = useRouter();
  return (
    <div className={classes.container}>
      <Header />
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <RecoilRoot>
          {router.pathname == "/" ||
          router.pathname == "/home" ||
          router.pathname == "/freeBook" ||
          router.pathname == "/tryTest/button" ||
          router.pathname == "/tryTest/fetchData" ||
          router.pathname == "/tryTest/button1" ||
          router.pathname == "/productList" ||
          router.pathname == "/donate" ||
          // router.pathname=="/contact"||
          router.pathname == "tryTest/status" ||
          // router.pathname ==='/productDetail/[id]' ||
          // router.pathname == "/sellProduct"||
          router.pathname === "/tryTest/dropdown" ||
          // router.pathname === "/bookCategories/[category]"||
          router.pathname == "/tryTest/toastify" ? (
            <>
              <Navbar user={pageProps?.user} />
              <SearchBarLayout />
              <SignUPDialog />
              <LoginDialog />
              <Component {...pageProps} user={pageProps?.user} />
              <Footer />
            </>
          ) : (
            <>
              {/* <Navbar/> */}
              <SearchBarLayout />
              <SignUPDialog />
              <LoginDialog />
              <Component {...pageProps} user={pageProps?.user} />
              {/* <Footer /> */}
            </>
          )}
        </RecoilRoot>
      </ThemeProvider>
    </div>
  );
}

// protected routes
MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  let authorize = {};
  const token = parseCookies(ctx)?.seller_token;
  const publicRoutes =
    ctx.pathname === "/productDetail/[id]" ||
    ctx.pathname === "/bookCategories/[category]" ||
    ctx.pathname === "/donate" ||
    ctx.pathname === "/freeBook" ||
    ctx.pathname === "/contact";

  const protectedRoutes =
    ctx.pathname === "/usersBasket" || ctx.pathname === "/sellProduct";
  // ctx.pathname ===token?"/productDetail/[id]":"" ||
  // ctx.pathname === "/bookCategories/[category]";
  // check token
  if (!token) {
    if (publicRoutes) {
      return <Component {...pageProps} />;
    }
    protectedRoutes && redirectUser(ctx, "/");
  } else {
    if (publicRoutes) {
      <Component {...pageProps} user={pageProps?.user} />;
    }
    try {
      authorize = JSON.parse(token);
    } catch (error) {
      destroyCookie(ctx, "seller_token");
      redirectUser("/");
    }
  }
  // start init pages
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  // check if it has token
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/currentUser`,
      {
        headers: {
          "x-access-token": authorize.accessToken,
        },
      }
    );
    const user = res.data.data;
    if (user) {
      ctx.pathname == "/" && redirectUser(ctx, "/home");
    }
    pageProps.user = user;
  } catch (error) {
    destroyCookie(ctx, "seller_token");
    redirectUser("/");
  }
  return { pageProps, token };
};
export default MyApp;
