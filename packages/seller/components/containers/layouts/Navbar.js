import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DropDown from "./DropDown";
import Link from "next/link";
import { Avatar, Button } from "@mui/material";
import SimpleButton from "../../presentations/buttons/SimpleButton";
import UserProfileCard from "../card/UserProfileCard";
import { styled, useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { openSIState } from "../../../states/SignInSignUp";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Search } from "@mui/icons-material";
import openSearch from "../../../states/openSearch";
import Image from "next/image";
import NewSearchBar from "./NewSearchBar";
import Drawerv1 from "./Drawerv1";
const Navbar = ({ user }) => {
  console.log("user :::::::", user);
  const [openSI, setOpenSI] = useRecoilState(openSIState);
  const theme = useTheme();
  const isMacth = useMediaQuery(theme.breakpoints.down("md"));
  const [responsiveAndHoverSearch, setResponsiveAndHoverSearch] =
    React.useState(false);
  const setOpenSearch = useSetRecoilState(openSearch);
  return (
    <Box sx={{ flex: 1 }}>
      <AppBar
        sx={{
          backgroundColor: "white",
          height: "70px",
          justifyContent: "center",
          marginBottom: "4vh",
        }}
      >
        <Toolbar>
          {isMacth ? (
            <>
              <Link href="/">
                <Typography
                  sx={{
                    paddingRight: "30px",
                    display: responsiveAndHoverSearch ? "none" : "",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    width={80}
                    height={40}
                    src="/assets/books/bookLogo.png"
                  />
                </Typography>
              </Link>
              <Typography
                sx={{
                  display: responsiveAndHoverSearch ? "none" : "",
                  marginLeft: "auto",
                }}
              >
                <Drawerv1 user={user} />
              </Typography>
            </>
          ) : (
            <>
              <Link href="/">
                <Typography sx={{ paddingRight: "50px", cursor: "pointer" }}>
                  <img
                    width={100}
                    height={43}
                    src="/assets/books/bookLogo.png"
                  ></img>
                </Typography>
              </Link>
              <Typography variant="h6" sx={{ marginRight: "20px" }}>
                <DropDown />
              </Typography>
              <Typography
                variant="h6"
                color="#00bdd7"
                sx={{
                  cursor: "pointer",
                  "&:hover": { color: "#dae6dd" },
                  fontSize: "16px",
                }}
              >
                <Link href="/donate">Donate</Link>
              </Typography>
              <Typography
                variant="h6"
                color="#00bdd7"
                sx={{
                  cursor: "pointer",
                  "&:hover": { color: "#dae6dd" },
                  fontSize: "16px",
                  marginLeft: 5,
                }}
              >
                <Link href="/freeBook">FreeBook</Link>
              </Typography>
              <Typography
                variant="h6"
                color="#00bdd7"
                sx={{
                  cursor: "pointer",
                  "&:hover": { color: "#dae6dd" },
                  fontSize: "16px",
                  marginLeft: 5,
                }}
              >
                <Link href="contact">Contact</Link>
              </Typography>
              {user && (
                <Typography
                  variant="h6"
                  color="#00bdd7"
                  sx={{
                    cursor: "pointer",
                    "&:hover": { color: "#dae6dd" },
                    fontSize: "18px",
                    marginLeft: 5,
                  }}
                >
                  <Link href="sellProduct">
                    <SimpleButton label="Sell" style={{ fontSize: "16px" }} />
                  </Link>
                </Typography>
              )}
              {isMacth ? (
                ""
              ) : !user ? (
                <Typography sx={{ marginLeft: "auto" }}>
                  <SimpleButton label="Login" onClick={() => setOpenSI(true)} />
                </Typography>
              ) : (
                ""
              )}
              <Typography
                sx={{
                  paddingLeft: user ? "0px" : "30px",
                  marginLeft: user || isMacth ? "auto" : "0px",
                }}
                onMouseOver={() => setResponsiveAndHoverSearch(true)}
                onMouseOut={() => setResponsiveAndHoverSearch(false)}
              >
                {/* <NewSearchBar /> */}
              </Typography>
              {user ? (
                <>
                  {/* <Typography sx={{ paddingLeft: '30px' }}>
                                    <Link href='/usersBasket' >
                                        <Badges icon={<ShoppingCartIcon />} colorBadgeContent='error' badgeContent={5} />
                                    </Link>
                                </Typography> */}
                  <Typography sx={{ paddingLeft: "30px" }}>
                    <UserProfileCard user={user} />
                  </Typography>
                </>
              ) : (
                ""
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
