import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home (To-Dos List)</Link>
        </li>
        <li>
          <Link to="/form">Form (Add New To-Do)</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
