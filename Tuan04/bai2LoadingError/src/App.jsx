import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!res.ok) {
          throw new Error('API lỗi...!');
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  } 

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
