import "./index.css";

export const Secondary = ({ label }) => {
  return (
    <button className="secondary-button">
      <span className="text-secondary">{label}</span>
    </button>
  );
};
