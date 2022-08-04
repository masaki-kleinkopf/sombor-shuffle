import SavedStat from "./SavedStat"

const SavedStats = ({ savedStats }) => {
    const savedStatsComponents = savedStats.map(stat => {
        return <SavedStat date={stat.date} points={stat.points} assists={stat.assists} rebounds={stat.rebounds}/>
    })
    return (
        <div className="saved-stats">
            {savedStatsComponents}
        </div>
    )
}

export default SavedStats