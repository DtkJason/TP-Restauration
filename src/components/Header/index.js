import { Link } from "react-router-dom";

import "./index.css";

export const Header = () => {
  return (
    <header className="header-container">
      <img href="" alt="Logo" />
      <Link to="/" className="navbar">
        Accueil
      </Link>
      <Link to="/Menu" className="navbar">
        Menu
      </Link>
    </header>
  );
};
