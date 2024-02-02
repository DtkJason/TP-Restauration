import "./index.css";

export const Icon = ({ imagePath, title }) => {
  return <img src={imagePath} alt={title} className="icon" />;
};
