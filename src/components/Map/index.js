import Iframe from "react-iframe";
import "./index.css";

export const Map = () => {
  return (
    <div className="map-container">
      <h3>Où nous trouver ?</h3>
      <div className="map">
        <Iframe
          className="test"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.5036260294855!2d2.3860583156740183!3d48.84860607928655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6720ccc2ca7b1%3A0x45528eb90c108f61!2sIPSSI%20Paris!5e0!3m2!1sfr!2sfr!4v1678201217034!5m2!1sfr!2sfr"
        ></Iframe>
      </div>
      <br></br>
      <h3>Contact /Tel : xx xxxx xxxxx xx xxx</h3>
    </div>
  );
};
