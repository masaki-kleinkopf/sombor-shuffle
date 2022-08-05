import SavedStat from "./SavedStat"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const SavedStats = ({ savedStats, deleteStat }) => {
    const savedStatsComponents = savedStats.map(stat => {
        return <SavedStat stat={stat} date={stat.date} points={stat.points} assists={stat.assists} rebounds={stat.rebounds} deleteStat={deleteStat} key={stat.date}/>
    })
    return (
        <div className="saved-stats">
            <Link to = "/">
                <button>home</button>
            </Link>
            {savedStatsComponents}
        </div>
    )
}

export default SavedStats

SavedStats.propTypes = {
    savedStats: PropTypes.array,
    deleteStat: PropTypes.func.isRequired
}