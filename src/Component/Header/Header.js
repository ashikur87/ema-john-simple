import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
const Header = () => {
  return (
    <nav className="header">
      <img className="logo" src={logo} alt="" href="" />
      <div className="button">
        <a href="/Shop">Shop</a>
        <a href="/orders">Order</a>
        <a href="/Inventory">Manage Inventory</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
};

export default Header;
