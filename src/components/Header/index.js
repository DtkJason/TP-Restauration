import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">Accueil</Link>
      <Link to="/Menu">Menu</Link>
    </header>
  );
};
