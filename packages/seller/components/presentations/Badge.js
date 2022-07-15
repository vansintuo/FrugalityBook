import {Stack,Badge} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
const Badges = ({icon,colorBadgeContent,badgeContent}) => {
    return ( 
        <Stack
        spacing={0}
        direction="row"
        style={{
          cursor: "pointer",
        }}
      >
        <Badge badgeContent={badgeContent} color={colorBadgeContent} sx={{color:'#00bdd7'}}>
          {icon}
        </Badge>
      </Stack>
     );
}
 
export default Badges;