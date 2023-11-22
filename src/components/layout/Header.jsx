// Write all the code here
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import DropdownMenu from "./DropdownMenu";
import { useContext } from "react";
import { CartContext } from "../../context/cart";
import IconBurger from '../../assets/IconBurger'


const Header = () => {
  const {cartItems, getItemTotal} = useContext(CartContext)

  return (
    <>
      <nav>
        <div>
          <Link to="/"><IconBurger /></Link>
          <Link to="/">Home</Link> 
          <Link to='/menu' >Menu</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/carts">Cart ({getItemTotal()})</Link>
          <Link to="/login"><DropdownMenu/> </Link>
        </div>
        
      </nav>
    </>
  );
};

export default Header;
