import "./index.css";
import Banner from "../../components/Banner";
import img9 from "../../assets/burger.png";
import img from "../../assets/menuu.png";
import img2 from "../../assets/bigmac.png";
import img3 from "../../assets/blackburger.png";
import img4 from "../../assets/chiken.png";
import img5 from "../../assets/fries.png";
import img6 from "../../assets/doublebacon.png";
import img7 from "../../assets/chikenytos.png";
import img8 from "../../assets/fishyburger.png";
import Card from "../../components/Card";

const Menu = () => {
  return (
    <div>
      <Banner.Black
        title="NOTRE MENU"
        content="Preparer votre commande nous nous occuppons de tout le reste ."
        imagePath={img}
        imagePosition="left"
        textButton="Commander"
      />
      <br></br>

      <div className="menu">
        <Card.Primary
          title="Simple Burger"
          label="Something cool here"
          details="Cet assemblage
    irrésistible est délicatement enveloppé dans un pain brioché
      moelleux et légèrement toasté, apportant une texture
      parfaite à chaque bouchée. "
          icon={img9}
          iconPosition="right"
          Background={img9}
        ></Card.Primary>
        <Card.Primary
          title="Chikenytos"
          label="Something cool here"
          // details="Cet assemblage
          // irrésistible est délicatement enveloppé dans un pain brioché
          // moelleux et légèrement toasté, apportant une texture
          // parfaite à chaque bouchée. "
          icon={img7}
          iconPosition="right"
          Background={img7}
        ></Card.Primary>
        <Card.Primary
          title="Bigmac"
          label="Something cool here"
          // details="Cet assemblage
          // irrésistible est délicatement enveloppé dans un pain brioché
          // moelleux et légèrement toasté, apportant une texture
          // parfaite à chaque bouchée. "
          icon={img2}
          iconPosition="right"
          Background={img2}
        ></Card.Primary>
        <Card.Primary
          title="hunger black"
          label="Something cool here"
          // details="Cet assemblage
          // irrésistible est délicatement enveloppé dans un pain brioché
          // moelleux et légèrement toasté, apportant une texture
          // parfaite à chaque bouchée. "
          icon={img3}
          iconPosition="right"
          Background={img3}
        ></Card.Primary>
        <Card.Primary
          title="chick chiken"
          label="Something cool here"
          // details="Cet assemblage
          // irrésistible est délicatement enveloppé dans un pain brioché
          // moelleux et légèrement toasté, apportant une texture
          // parfaite à chaque bouchée. "
          icon={img4}
          iconPosition="right"
          Background={img4}
        ></Card.Primary>
        <Card.Primary
          title="double-bacon"
          label="Something cool here"
          // details="Cet assemblage
          // irrésistible est délicatement enveloppé dans un pain brioché
          // moelleux et légèrement toasté, apportant une texture
          // parfaite à chaque bouchée. "
          icon={img6}
          iconPosition="right"
          Background={img6}
        ></Card.Primary>
        <Card.Primary
          title="just fishy"
          label="Something cool here"
          // details="Cet assemblage
          // irrésistible est délicatement enveloppé dans un pain brioché
          // moelleux et légèrement toasté, apportant une texture
          // parfaite à chaque bouchée. "
          icon={img8}
          iconPosition="right"
          Background={img8}
        ></Card.Primary>
        <Card.Primary
          title="best basic fries"
          label="Something cool here"
          // details="Cet assemblage
          // irrésistible est délicatement enveloppé dans un pain brioché
          // moelleux et légèrement toasté, apportant une texture
          // parfaite à chaque bouchée. "
          icon={img5}
          iconPosition="right"
          Background={img5}
        ></Card.Primary>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Menu;
