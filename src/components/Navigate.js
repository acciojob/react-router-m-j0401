import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigate = () => {
  return (
    <div>
      <NavLink exact to="/" activeStyle={{ color: "red" }}>
        Home
      </NavLink>

      <NavLink to="/about" activeStyle={{ color: "red", marginLeft: "10px" }}>
        About
      </NavLink>
    </div>
  );
};

export default Navigate;