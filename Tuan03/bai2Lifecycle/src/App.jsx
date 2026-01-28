import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("vi-VN");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Digital Clock</h1>
      <h2>{formatTime(time)}</h2>
    </div>
  );
}

export default App;
