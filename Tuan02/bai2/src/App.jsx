import React from 'react'
import './App.css'

import Button from "./components/Button";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button type="success">Success</Button>
    </div>
  );
}

export default App;
