import React from "react";
import logoImg from "../assets/logo1.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <h1 className="logo">
        <Link to="/">
          <img src={logoImg} alt="logo" />
          <span>WearU</span>
        </Link>
      </h1>

      <nav className="gnb">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/meals">STYLE</NavLink>
        <NavLink to="/tips">BOOK</NavLink>
        <NavLink to="/about">CATALOG</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
