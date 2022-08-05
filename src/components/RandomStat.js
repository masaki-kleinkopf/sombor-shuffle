import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "../styles/RandomStat.css"
import SavedStats from "./SavedStats"

const RandomStat = ({randomStat, stats, setRandomStat, saveStat ,savedStats}) => {
    return (
        <div className="random-stat">
            <button onClick={() => setRandomStat(stats[Math.floor(Math.random()*stats.length)])}>get new random statline</button>
            <p className="stat-date">{randomStat.date}</p>
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
            <button onClick = {saveStat}>save this statline</button>
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
}