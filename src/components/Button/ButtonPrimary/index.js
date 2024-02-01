import "./index.css";

export const Primary = ({ label }) => {
  return (
    <button className="primary-button">
      <span className="text-primary">{label}</span>
    </button>
  );
};
