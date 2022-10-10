import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "../styles/RandomStat.css"
import SavedStats from "./SavedStats"

const RandomStat = ({ randomStat, stats, setRandomStat, saveStat, savedStats, setIsSaved, isSaved }) => {
    const handleRandomClick = () => {
        setIsSaved(false)
        setRandomStat(stats[Math.floor(Math.random()*stats.length)])
    }
    
    return (
        <div className="random-stat">
            <button onClick={handleRandomClick}>get new random statline</button>
            <p className="stat-date">{randomStat.date}</p>
            <p className="opponent">DEN {randomStat.nuggets_score}<br></br>vs<br></br>{randomStat.opponent} {randomStat.opponent_score}</p>
            <div className="stats-container">
                <div className="bubble">
                    {randomStat.points > 9 ? <p className="stat stat-blue" >{randomStat.points}</p> : <p className="stat">{randomStat.points}</p>}
                </div>
                <div className="bubble">
                    {randomStat.rebounds > 9 ? <p className="stat stat-blue" >{randomStat.rebounds}</p> : <p className="stat">{randomStat.rebounds}</p>}
                </div>
                <div className="bubble">
                    {randomStat.assists > 9 ? <p className="stat stat-blue" >{randomStat.assists}</p> : <p className="stat">{randomStat.assists}</p>}
                </div>
            </div>
            <button onClick = {saveStat}>{isSaved ? "saved!" : "save this statline"}</button>
            {savedStats.length > 0 &&
                <Link to="/saved">
                    <button className="show-saved-button">show saved</button>
                </Link>
            }
        </div>
    )
}

export default RandomStat

RandomStat.propTypes = {
    randomStat: PropTypes.object.isRequired,
    stats: PropTypes.array.isRequired,
    setRandomStat: PropTypes.func.isRequired,
    saveStat: PropTypes.func.isRequired,
    savedStats:PropTypes.array.isRequired,
    setIsSaved:PropTypes.func.isRequired,
    isSaved:PropTypes.bool.isRequired
}