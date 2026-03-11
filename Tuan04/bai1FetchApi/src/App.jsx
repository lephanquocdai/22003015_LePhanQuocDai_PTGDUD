import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h2>Danh sách item</h2>
        {data.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.email}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
