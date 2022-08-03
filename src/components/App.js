
import '../styles/App.css';
import { useEffect, useState } from "react"
import getData from "../apiCalls"
import RandomStat from "./RandomStat"

function App() {
  const  [stats, setStats]  = useState([])
  const [randomStat, setRandomStat] = useState([])

  useEffect(() => {
    const getStats =  () => {
      Promise.all([
      getData("https://www.balldontlie.io/api/v1/stats?seasons[]=2020&player_ids[]=246&per_page=82"),
      getData("https://www.balldontlie.io/api/v1/stats?seasons[]=2021&player_ids[]=246&per_page=82")
    ])
      .then((data) => {
      setStats([...data[0].data,...data[0].data])
    })
  }
    getStats();
  },[])

  useEffect(() => {
    getRandom()
  },[stats])

  const getRandom = () => {
    setRandomStat(stats[Math.floor(Math.random()*stats.length)])
  }




  return (
    <main>
      <header>sombor shuffle</header>
      <h1>get a random triple slash from Nikola Jokic's MVP seasons</h1>
      <h4>points / rebounds / assists</h4>
      {randomStat && <RandomStat randomStat = {randomStat} getRandom ={getRandom} />}
    </main>
  )
}

export default App;
