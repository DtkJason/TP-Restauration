import { Link } from "react-router-dom";

import "./index.css";
import logo from "../../assets/logo.png";
import Button from "../Button";

export const Header = () => {
  return (
    <header className="header-container">
      <img src={logo} alt="Logo" className="logo" />
      <Link to="/" className="navbar">
        Accueil
      </Link>
      <Link to="/Menu" className="navbar">
        Menu
      </Link>
      <Button.Primary label="Commander" />
    </header>
  );
};
