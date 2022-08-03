import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"

function App() {
  const  [stats, setStats]  = useState([])

  useEffect(() => {
    fetch("https://www.balldontlie.io/api/v1/stats?seasons[]=2020&player_ids[]=246&per_page=100")
    .then(response => response.json())
    .then(data => setStats(data))
  },[])

  return (
    <main>
      { stats.data  ? <p>{stats.data[0].ast}</p>: <p>loading</p>}
    </main>
  )
}

export default App;
