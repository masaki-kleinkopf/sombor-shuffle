import { useState } from "react"
import PropTypes from "prop-types"

const SavedStat = ({ stat, deleteStat }) => {
    const { date, points, assists, rebounds, id } = stat
    const [gameNote, setGameNote] = useState(JSON.parse(localStorage.getItem(id)).gameNote)
    const [isSubmitted, setIsSubmitted] = useState(JSON.parse(localStorage.getItem(id)).isSubmitted)
    
    const handleSubmit= (event) => {
            event.preventDefault()
            setIsSubmitted(!isSubmitted)
            stat.gameNote = gameNote
            stat.isSubmitted = true
            const statAsString = JSON.stringify(stat)
            localStorage.setItem(id,statAsString)
    }

    const handleEdit = (event) => {
        event.preventDefault()
        setIsSubmitted(!isSubmitted)
    } 

    return (
        <div className="saved-stat">
        <p className="stat-date">{date}</p>
        <div className="stats-container">
            <div className="bubble">
                <p className="stat">{points}</p>
            </div>
            <div className="bubble">
                <p className="stat">{rebounds}</p>
            </div>
            <div className="bubble">
                <p className="stat">{assists}</p>
            </div>
        </div>
        <button onClick={() => deleteStat(id)}>delete</button>
        {isSubmitted && <p className="game-note">{gameNote}</p>}
        {
        !isSubmitted &&
            <form>
                <textarea placeholder="game notes" value={gameNote} onChange={(event) => setGameNote(event.target.value)} required/>
                <button 
                    type="submit" 
                    onClick={handleSubmit}>
                        add
                </button>
            </form>    
        }
        {isSubmitted && <button onClick={handleEdit}>edit</button>}
      
    </div>
    )
}

export default SavedStat

SavedStat.propTypes = {
    stat:PropTypes.object.isRequired,
    deleteStat: PropTypes.func.isRequired
}