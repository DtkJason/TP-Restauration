import "./index.css";
import Button from "../../Button";

export const Black = ({
  imagePath,
  title,
  content,
  imagePosition,
  textButton,
}) => {
  return (
    <div className="banner-container-black">
      {imagePosition === "left" && (
        <div>
          <img src={imagePath} alt={title} className="banner-image-black" />
        </div>
      )}
      <div className="banner-card-black">
        <h2>{title}</h2>
        <p>{content}</p>
        <Button.Secondary label={textButton} />
      </div>
      {imagePosition === "right" && (
        <div>
          <img src={imagePath} alt={title} className="banner-image-black" />
        </div>
      )}
    </div>
  );
};
