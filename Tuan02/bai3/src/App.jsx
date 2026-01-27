import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [alertType, setAlertType] = useState("");

  return (
    <div style={{ padding: 650 }}>
      <button onClick={() => setAlertType("success")}>Success</button>
      <button onClick={() => setAlertType("warning")}>Warning</button>
      <button onClick={() => setAlertType("error")}>Error</button>

      <Alert type={alertType} onClose={() => setAlertType("")} />
    </div>
  );
}

export default App;
