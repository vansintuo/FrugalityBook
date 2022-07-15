import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import UserProfile from "../../presentations/cards/UserProfile";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { userState } from "../../../states/AuthGuardState/userState";
import { useRecoilValue } from "recoil";
import { AccountCircleRounded } from "@mui/icons-material";
const useStyle = makeStyles({
  avatar: {
    width: "40px",
    height: "40px",
    "&:hover": {
      border: "1px solid #00bdd7",
    },
  },
});
export default function UserProfileCard({user}) {
  const classes = useStyle();
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div style={{marginLeft: "-5px" }}>
          <Avatar
            sx={{ backgroundColor: "rgba(0,0,0,0.1)", color: "#00bdd7" }}
            className={classes.avatar}
            {...bindTrigger(popupState)}
            alt="profile"
          >
            {/* {fullname[0]} */}
            {}
          </Avatar>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <div style={{ width: "100%" }}>
              <UserProfile user={user}/>
            </div>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
