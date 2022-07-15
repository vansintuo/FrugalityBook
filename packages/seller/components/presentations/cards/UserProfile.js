import { Avatar, Divider, IconButton, } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { signOutUser } from "../../../utils/functions/fireAuth";
import {logOut} from '../../../utils/functions/auth/authUser';
import { updateUser } from "../../../utils/functions/auth/authUser";
import { useRouter } from "next/router";
const useStyle = makeStyles({
  container: {
    width: "100%",
    // marginLeft: "100%",
    backgroundColor: "rgba(3,91,98,0.5)",
    height: "350px",
    borderRadius: "5px",
    position: "relative",
    color: "white",
    fontSize:'15px',
  },
  subcontainer: {
    width: "100%",
    height: "70px",
    backgroundColor: "#00bdd7",
    borderTopRightRadius: "5px",
    borderTopLeftRadius: "5px",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  },
  profile: {
    width: "90px",
    height: "90px",
    position: "absolute",
    marginLeft: "34%",
    marginTop: "5%",
  },
  email: {
    position: "absolute",
    width:'80%',
    marginLeft: "10%",
    marginTop: "35%",
    textAlign:'center',
    "& h4": {
      textAlign:'center',
      lineHeight: "1px",
    },
    "& p": {
      textAlign:'center',
      lineHeight: "1px",
    },
  },
  edit: {
    marginTop: "45%",
  },
  link: {
    marginTop: "13%",
    // '& a':{
    //     marginLeft:'30px',
    // },
  },
});
const UserProfile = ({user}) => {
  const classes = useStyle();
  const router = useRouter()
  React.useEffect(()=>{
    // updateUser(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/user/${user._id}`,
    // {role: 'seller'}).then((res)=>{
    //   console.log('res ::::::::::', res)
    // })
  })
 const handleUpdateUser = ()=>{
  updateUser(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/user/${user._id}`,
    {role: 'seller'}).then((res)=>{
      router.push('localhost:3001')
    })
 }
  return (
    <div className={classes.container}>
      <div className={classes.subcontainer}>
        <Avatar
          className={classes.profile}
          // alt={user.user.profile}
          style={{color:'#00bdd7',fontSize:'60px'}}
        >
         {/* {user.user.fullname} */}
        </Avatar>
        <div className={classes.email}>
          <h4>{user.fullname}</h4>
          <p style={{color:'rgba(255,255,255,0.6)'}}>{user.email}</p>
        </div>
      </div>
      <div className={classes.edit}>
        <Link href="#">
          <a>
            <IconButton style={{ verticalAlign: "sub", color: "black" }}>
              <EditIcon />
            </IconButton>
            Edit your profile
          </a>
        </Link>
        <br />
        <Link href="#">
          <a>
            <IconButton style={{ verticalAlign: "sub", color: "black" }}>
              <ShoppingCart/>
            </IconButton>
            Your card
          </a>
        </Link>
        <br />
      </div>
      <Divider></Divider>
      <div className={classes.link}>
      <button style={{
              color:'rgb(3,91,98)',
              border:'none',
              height:'25px',
              width:'100px',
              marginRight:'30px',
              fontWeight:'bold',
              cursor:'pointer',
              marginLeft:'15px',
              borderRadius:'2px',
              }}
              onClick={logOut}
              >Sign out</button>
        <span >
          <a style={{marginRight:'10px',}}>
            {
              Boolean(user?.fullname) && user?.role=='seller'?<Link href="/productList"><a>View your product</a></Link>:
              <a onClick={()=>handleUpdateUser()} style={{marginRight:'12px',cursor:'pointer'}}>Sign in as a seller</a>
            }
          </a>
        </span>
      </div>
    </div>
  );
};
export default UserProfile;
