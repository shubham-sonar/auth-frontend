import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  let navLinks = (
    <ul className="nav-ul alignLeft">
      <li>
        <Link to="/">Products</Link>
      </li>
      <li>
        <Link to="/add">Add Product</Link>
      </li>
      <li>
        <Link to="/update">Update Product</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/" onClick={logout}>
          Logout
        </Link>
      </li>
    </ul>
  );

  let login = (
    <ul className="nav-ul alignRight">
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">SignUp</Link>
      </li>
    </ul>
  );

  return <div>{auth ? navLinks : login}</div>;
};

export default Nav;
