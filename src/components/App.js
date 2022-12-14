
import '../styles/App.css';
import { useEffect, useState, useContext } from "react"
import getData from "../apiCalls"
import RandomStat from "./RandomStat"
import SavedStats from "./SavedStats"
import { mapData, mapTeams } from "../utils"
import { Route } from "react-router-dom"
import { DarkModeContext } from "../context/DarkThemeProvider"
import DarkModeSwitch from "./DarkModeSwitch"

function App() {
  const  [stats, setStats]  = useState([])
  const [randomStat, setRandomStat] = useState({})
  const [savedStats, setSavedStats] = useState(Object.values(localStorage).map(object => JSON.parse(object)))
  const [error, setError] = useState("")
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    const getStats = () => {
      Promise.all([
      getData("https://www.balldontlie.io/api/v1/stats?seasons[]=2020&player_ids[]=246&per_page=82"),
      getData("https://www.balldontlie.io/api/v1/stats?seasons[]=2021&player_ids[]=246&per_page=82"),
      getData("https://www.balldontlie.io/api/v1/teams")
    ])
      .then((data) => {
        const data2020 = mapData(data[0].data)
        const data2021 = mapData(data[1].data)
        const teams = mapTeams(data[2].data)
        let allData = [...data2020,...data2021]
        const statsWithTeams = allData.map(stat => {
          const foundTeam = teams.find(team => team.id === stat.opponent) 
          return {...stat, opponent: foundTeam.team }
        })
        setStats(statsWithTeams)
    })
    .catch(err => setError(err.message))
  }
    getStats();
  },[])

  useEffect(() => {
    setRandomStat(stats[Math.floor(Math.random()*stats.length)])
  },[stats])

  const saveStat = () => {
    const foundStat = savedStats.indexOf(randomStat)
    if (foundStat === -1) {
      const statAsString = JSON.stringify(randomStat)
      localStorage.setItem(randomStat.id,statAsString)
      savedStats.length > 0 ? setSavedStats([...savedStats, randomStat]) : setSavedStats([randomStat])
      setIsSaved(true)
    }
  }

  const sortedSavedStats = [...savedStats].sort((a,b) => a.id - b.id)

  const deleteStat = (id) => {
    const filteredStats = savedStats.filter(stat => {
      return stat.id !== id
    })
    localStorage.removeItem(id)
    setSavedStats(filteredStats)
  }

  const { darkMode } = useContext(DarkModeContext);
  
  return (
      <main className={darkMode && "dark-mode"}>
        <header>
          sombor <span className="shuffle">shuffle</span>
          <h1>get a random statline from Nikola Jokic's MVP seasons</h1>
          <h4>points / rebounds / assists</h4>
        </header>
        <Route exact path = "/">
          {error && <p>something went wrong!!</p>}
          {randomStat && !error ? <RandomStat isSaved = {isSaved} setIsSaved = {setIsSaved} stats={stats} randomStat = {randomStat} setRandomStat ={setRandomStat} saveStat = {saveStat} savedStats = {savedStats}/> : <p>loading</p>}
        </Route>
        <Route exact path = "/saved">
          <SavedStats savedStats = {sortedSavedStats} deleteStat = {deleteStat}/>
        </Route>
        <DarkModeSwitch />
      </main>
  )
}

export default App;
