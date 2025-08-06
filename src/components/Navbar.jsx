import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f4f4f4" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/results" style={{ marginRight: "15px" }}>Results</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
}

export default Navbar;

