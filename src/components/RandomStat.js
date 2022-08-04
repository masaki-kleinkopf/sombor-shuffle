import React from "react"
import PropTypes from "prop-types"

const RandomStat = ({randomStat, getRandom}) => {
    return (
        <div className="random-stat">
            <p>{randomStat.date}</p>
            <p>{randomStat.points}</p>
            <p>{randomStat.assists}</p>
            <p>{randomStat.rebounds}</p>
            <button onClick={getRandom}>get new random statline</button>
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