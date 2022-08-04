import SavedStat from "./SavedStat"
import { Link } from "react-router-dom"
const SavedStats = ({ savedStats }) => {
    const savedStatsComponents = savedStats.map(stat => {
        return <SavedStat date={stat.date} points={stat.points} assists={stat.assists} rebounds={stat.rebounds}/>
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