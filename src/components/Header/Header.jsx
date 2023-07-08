import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import "./Header.css";
import Logo from "../../assets/gymLogo.png";
import Bars from "../../assets/bars.png";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Comprueba si el clic ocurrió fuera del área del menú y cierra el menú si está abierto
      if (menu && !event.target.closest(".menu")) {
        setMenu(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [menu]);
  return (
    <div className="header">
      <div>
        <img src={Logo} alt="GymLogo" className="logo" />
        {/* <h3>Imperium fitness</h3> */}
      </div>
      {menu === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenu(true)}
          className="menu"
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="home"
              spy={true}
              smooth={true}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="programs"
              spy={true}
              smooth={true}
            >
              Programas
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="reasons"
              spy={true}
              smooth={true}
            >
              Porque Nosotros?
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="plans"
              spy={true}
              smooth={true}
            >
              Planes
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="Testimonials"
              spy={true}
              smooth={true}
            >
              Testimonios
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
