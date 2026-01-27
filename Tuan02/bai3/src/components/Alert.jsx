import "../components/Alert.css";

function Alert({ type, onClose }) {
  if (!type) return null;

  return (
    <div className={`alert alert-${type}`}>
      {type.toUpperCase()}
      <span className="close" onClick={onClose}>×</span>
    </div>
  );
}

export default Alert;
