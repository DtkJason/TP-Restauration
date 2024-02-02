import "./index.css";
import Button from "../../Button";

export const Red = ({
  imagePath,
  title,
  content,
  imagePosition,
  textButton,
}) => {
  return (
    <div className="banner-container-red">
      {imagePosition === "left" && (
        <div>
          <img src={imagePath} alt={title} className="banner-image-red" />
        </div>
      )}
      <div className="banner-card-red">
        <h2>{title}</h2>
        <p>{content}</p>
        <Button.Secondary label={textButton} />
      </div>
      {imagePosition === "right" && (
        <div>
          <img src={imagePath} alt={title} className="banner-image-red" />
        </div>
      )}
    </div>
  );
};
