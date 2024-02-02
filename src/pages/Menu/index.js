import Banner from "../../components/Banner";
import img from "../../assets/burger.png";

const Menu = () => {
  return (
    <Banner.Black
      title="Titre"
      content="Ceci est une description"
      imagePath={img}
      imagePosition="left"
      textButton="Commander"
    />
  );
};

export default Menu;
