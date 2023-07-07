import React from "react";
import "./Header.css";
import Logo from "../../assets/gymLogo.png";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={Logo} alt="GymLogo" className="logo" />
        {/* <h3>Imperium fitness</h3> */}
      </div>
      <ul className="header-menu">
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};

export default Header;
