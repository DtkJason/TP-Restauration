import Banner from "../../components/Banner";
import { Map } from "../../components/Map";
import img from "../../assets/burger.png";
import "./index.css";

const Accueil = () => {
  return (
    <div className="accueil-container">
      <Banner.Red
        title="Bienvenue chez Ipssi Burger"
        content="Découvrez une expérience gustative incomparable 
        chez IPSSI BURGER, le rendez-vous incontournable des passionnés de burgers ! 
        Notre site célèbre l'art de créer des menus exceptionnels, 
        où chaque bouchée est une explosion de saveurs."
        imagePath={img}
        imagePosition="right"
        textButton="Voir Carte"
      />
      <Map />
    </div>
  );
};

export default Accueil;
