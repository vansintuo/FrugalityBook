import { Button } from "@mui/material";
import React, { Children } from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const CheckoutButton = ({ onClick, children, style }) => {
  return (
    <Button
      sx={{ backgroundColor: "#00BDD7", color: "white",'&:hover':{color:'#00bdd7'} }}
      variant="outline"
      onClick={onClick}
      startIcon={<ShoppingCartCheckoutIcon />}
      style={{...style}}
    >
      {children}
    </Button>
  );
};

export default CheckoutButton;
