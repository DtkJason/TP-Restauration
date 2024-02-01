import { Banner } from "../../components/Banner";
import img from "../../assets/burger.png";

const Accueil = () => {
  return (
    <Banner
      title="Titre"
      content="Ceci est une description"
      imagePath={img}
      imagePosition="right"
      textButton="Voir Carte"
    />
  );
};

export default Accueil;
