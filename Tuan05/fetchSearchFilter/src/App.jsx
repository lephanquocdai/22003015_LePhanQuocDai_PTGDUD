import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterData, setFilterData] = useState([]);

  var url = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    async function fetchData() {
      var res = await fetch(url);
      var data = await res.json();
      console.log(data);
      setData(data);
      setFilterData(data);
    }
    fetchData();
  }, [])

  function handleSearch(e) {
    setSearchValue(e.target.value);
    var filter = data.filter(item => {
      return item.title.includes(e.target.value);
    })
    setFilterData(filter);
  }
  return (
    <>
      <input type="text" value={searchValue} placeholder='Search...' onChange={handleSearch} />
      {
        filterData.map((item) => {
          return <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
          </div>
        })
      }
    </>
  )
}

export default App;
