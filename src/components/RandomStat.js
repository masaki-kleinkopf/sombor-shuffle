import React from "react"

const RandomStat = ({randomStat, getRandom}) => {
    return (
        <div className="random-stat">
            <p>{randomStat.pts}</p>
            <p>{randomStat.ast}</p>
            <p> {randomStat.reb +randomStat.oreb}</p>
            <button onClick={getRandom}>get new random statline</button>
        </div>
    )
}

export default RandomStat