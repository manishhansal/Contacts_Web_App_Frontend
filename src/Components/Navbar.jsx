import React from "react";
import { Link } from "react-router-dom";

const myDiv = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "aqua",
};

const Navbar = () => {
  return (
    <div style={myDiv}>
      <Link style={{ textDecoration: "none" }} to="/contacts">
        <h2>Contacts</h2>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/messages">
        <h2>Messages</h2>
      </Link>
    </div>
  );
};

export default Navbar;
