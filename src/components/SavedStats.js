import SavedStat from "./SavedStat"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import "../styles/SavedStats.css"

const SavedStats = ({ savedStats, deleteStat }) => {
    const savedStatsComponents = savedStats.map(stat => {
        return <SavedStat stat={stat} key={stat.id} deleteStat={deleteStat}/>
    })
    
    return (
        <div className="saved-stats">
            <Link to = "/">
                <button>home</button>
            </Link>
            <div className="saved-stats-container">
                {savedStatsComponents}
            </div>
        </div>
    )
}

export default SavedStats

SavedStats.propTypes = {
    savedStats: PropTypes.array,
    deleteStat: PropTypes.func.isRequired
}