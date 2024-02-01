import "./index.css";
import Button from "../../components/Button";

export const Banner = ({
  imagePath,
  title,
  content,
  imagePosition,
  textButton,
}) => {
  return (
    <div className="banner-container">
      {imagePosition === "left" && (
        <div className="image-container">
          <img src={imagePath} alt={title} className="banner-image" />
        </div>
      )}
      <div className="banner-card">
        <h2>{title}</h2>
        <p>{content}</p>
        <Button.Secondary label={textButton} />
      </div>
      {imagePosition === "right" && (
        <div className="image-container">
          <img src={imagePath} alt={title} className="banner-image" />
        </div>
      )}
    </div>
  );
};
