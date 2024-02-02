import "./index.css";

import { Icon } from "../../components/Icon";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import twitter from "../../assets/icons/twitter.png";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="icon-container">
        <Icon imagePath={facebook} title="Facebook" />
        <Icon imagePath={instagram} title="Instagram" />
        <Icon imagePath={twitter} title="Twitter" />
      </div>
      <p>Copyright © 2024 MonFastFood - Tous droits réservés.</p>
    </footer>
  );
};
