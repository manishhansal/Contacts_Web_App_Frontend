import React from "react";
import { Link } from "react-router-dom";

const myDiv = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "aqua",
};

const head = {
  fontSize: "30px",
};

const Navbar = () => {
  return (
    <div style={myDiv}>
      <Link style={{ textDecoration: "none" }} to="/">
        <h1 style={head}>Home</h1>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/contacts">
        <h1 style={head}>Contacts</h1>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/messages">
        <h1 style={head}>Messages</h1>
      </Link>
    </div>
  );
};

export default Navbar;
