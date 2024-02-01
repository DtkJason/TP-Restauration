import "./index.css";
export const Primary = ({
  title,
  label,
  details,
  icon,
  iconPosition,
  Background,
}) => {
  return (
    <div className="card1">
      <div className="card-header">
        <img className="card-img " src={Background} alt="card"></img>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{label}</p>
        <p>{details}</p>
      </div>
    </div>
  );
};
