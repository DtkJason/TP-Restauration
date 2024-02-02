import "./index.css";
import Button from "../../Button";
import { useState } from "react";
export const Primary = ({ title, label, details, Background }) => {
  const [texto, setColor] = useState("");
  return (
    <div className="card1">
      <div className="card-header">
        <img className="card-img " src={Background} alt="card"></img>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="detail">{label}</p>
        <div className="details">
          <p>{texto}</p>
        </div>

        <button
          className="buton"
          type="button"
          onClick={() => setColor(details)}
        >
          <Button.Primary label="details"></Button.Primary>
        </button>

        <button className="buton" type="button" onClick={() => setColor("")}>
          <Button.Primary label="Commander"></Button.Primary>
        </button>
      </div>
    </div>
  );
};
