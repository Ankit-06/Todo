import React from "react";
import logo from "../assests/images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src={logo} alt="TodoList" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
