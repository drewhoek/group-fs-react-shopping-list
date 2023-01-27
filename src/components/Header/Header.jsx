import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="banner-header">
      <h1>Grocery List</h1>
      <div className="nav">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
