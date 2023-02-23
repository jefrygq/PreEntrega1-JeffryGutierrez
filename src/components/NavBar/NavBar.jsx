// import './NavBar.css';
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import SearchWidget from "../SearchWidget/SearchWidget";
import Sections from "../Sections/Sections";
import React from "react";
import DarkModeButton from "../DarkModeButton/DarkModeButton";

const NavBar = React.memo(() => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MyTech.com</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
              <Sections />
          </ul>
          <DarkModeButton />
          <SearchWidget />
          <CartWidget qty={5} />
        </div>
      </div>
    </nav>
  );
});

export default NavBar;
