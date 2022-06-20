import * as React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const CartWidget = () => {
  const {orderLength} = useContext(CartContext)
  return (
    <div>
      <Badge badgeContent={orderLength} color="primary">
        <ShoppingCartIcon color="action" />
      </Badge>
    </div>
  );
};

export default CartWidget;
