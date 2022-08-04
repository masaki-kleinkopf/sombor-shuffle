
import '../styles/App.css';
import { useEffect, useState } from "react"
import getData from "../apiCalls"
import RandomStat from "./RandomStat"
import SavedStats from "./SavedStats"
import { mapData } from "../utils"
import { Route } from "react-router-dom"

function App() {
  const  [stats, setStats]  = useState([])
  const [randomStat, setRandomStat] = useState({})
  const [savedStats, setSavedStats] = useState([])

  useEffect(() => {
    const getStats = () => {
      Promise.all([
      getData("https://www.balldontlie.io/api/v1/stats?seasons[]=2020&player_ids[]=246&per_page=82"),
      getData("https://www.balldontlie.io/api/v1/stats?seasons[]=2021&player_ids[]=246&per_page=82")
    ])
      .then((data) => {
        const data2020 = mapData(data[0].data)
        const data2021 = mapData(data[1].data)
      setStats([...data2020,...data2021])
    })
  }
    getStats();
  },[])

  useEffect(() => {
    setRandomStat(stats[Math.floor(Math.random()*stats.length)])
  },[stats])

  const saveStat = () => {
    const foundStat = savedStats.indexOf(randomStat)
    if (foundStat === -1) {
      savedStats.length > 0 ? setSavedStats([...savedStats, randomStat]) : setSavedStats([randomStat])
    }
  }
  return (
    <main>
      <header>
        sombor <span className="shuffle">shuffle</span>
        <h1>get a random statline from Nikola Jokic's MVP seasons</h1>
        <h4>points / rebounds / assists</h4>
      </header>
      
      <Route exact path = "/">
        {randomStat ? <RandomStat stats={stats} randomStat = {randomStat} setRandomStat ={setRandomStat} saveStat = {saveStat} savedStats = {savedStats}/> : <p>loading</p>}
      </Route>
      <Route exact path = "/saved">
        <SavedStats savedStats = {savedStats}/>
      </Route>
    </main>
  )
}

export default App;
