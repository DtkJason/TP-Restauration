import "./App.css";
import burger from "./assets/burger.png";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <p></p>
      fjdrtyghkkfuy
      <Card.Primary
        title="Simple Burger"
        label="Something cool here"
        details="Savourez l'explosion de saveurs avec notre burger signature, le 'Délice du Ranch'. 
        Un tendre steak de bœuf grillé à la perfection, garni 
        de fromage cheddar affiné, de bacon croustillant et 
        de notre sauce secrète au barbecue maison. Cet assemblage 
        irrésistible est délicatement enveloppé dans un pain brioché 
        moelleux et légèrement toasté, apportant une texture 
        parfaite à chaque bouchée. Accompagné de frites fraîches ou 
        d'une salade croquante, le 'Délice du Ranch' promet une 
        expérience gastronomique inoubliable pour les amateurs de 
        burgers gourmands. Un mélange de goûts qui vous transportera 
        directement dans l'ambiance chaleureuse d 'un ranch texan. 
        Laissez-vous tenter par cette création unique qui réveillera vos 
        papilles "
        icon={burger}
        iconPosition="right"
        Background={burger}
      ></Card.Primary>
    </div>
  );
}

export default App;
