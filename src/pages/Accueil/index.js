import Banner from "../../components/Banner";
import { Map } from "../../components/Map";
import img from "../../assets/burger.png";
import "./index.css";

const Accueil = () => {
  return (
    <div className="accueil-container">
      <Banner.Red
        title="Bienvenue chez Ipssi Burger"
        content="Ceci est une description"
        imagePath={img}
        imagePosition="right"
        textButton="Voir Carte"
      />
      <Map />
    </div>
  );
};

export default Accueil;
