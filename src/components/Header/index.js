import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import "./index.css";

export const Header = () => {
  return (
    <header className="header-container">
      <Link to="/" className="navbar">
        Accueil
      </Link>
      <img src={logo} alt="Logo" className="logo" />
      <Link to="/Menu" className="navbar">
        Menu
      </Link>
    </header>
  );
};
