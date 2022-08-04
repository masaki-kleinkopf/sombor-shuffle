import React from "react"
import PropTypes from "prop-types"
import "../styles/RandomStat.css"

const RandomStat = ({randomStat, stats,setRandomStat}) => {
    return (
        <div className="random-stat">
            <button onClick={() => setRandomStat(stats[Math.floor(Math.random()*stats.length)])}>get new random statline</button>
            <p className="stat-date">{randomStat.date}</p>
            <div className="stats-container">
                <div className="bubble">
                    <p className="stat">{randomStat.points}</p>
                </div>
                <div className="bubble">
                    <p className="stat">{randomStat.rebounds}</p>
                </div>
                <div className="bubble">
                    <p className="stat">{randomStat.assists}</p>
                </div>
            </div>
            <button>save this statline</button>
            <button>show saved</button>
        </div>
    )
}

export default RandomStat

RandomStat.propTypes = {
    date: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    assists: PropTypes.number.isRequired,
    rebounds: PropTypes.number.isRequired,
}