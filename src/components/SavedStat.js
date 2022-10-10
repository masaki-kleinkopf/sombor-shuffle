import { useState } from "react"
import PropTypes from "prop-types"
import "../styles/SavedStat.css"

const SavedStat = ({ stat, deleteStat }) => {
    const { date, points, assists, rebounds, id, opponent, nuggets_score, opponent_score } = stat
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
            <p className="opponent">DEN {nuggets_score}<br></br>vs<br></br>{opponent} {opponent_score}</p>
            <div className="stats-container">
                <div className="bubble">
                    {points > 9 ? <p className="stat stat-blue" >{points}</p> : <p className="stat">{points}</p>}
                </div>
                <div className="bubble">
                    {rebounds > 9 ? <p className="stat stat-blue" >{rebounds}</p> : <p className="stat">{rebounds}</p>}
                </div>
                <div className="bubble">
                    {assists > 9 ? <p className="stat stat-blue" >{assists}</p> : <p className="stat">{assists}</p>}
                </div>
            </div>
            {isSubmitted && <p className="game-note">{gameNote}</p>}
            {
            !isSubmitted &&
                <form>
                    <textarea placeholder="game notes" value={gameNote} onChange={(event) => setGameNote(event.target.value)} required/>
                    <br></br>
                    <button 
                        type="submit" 
                        onClick={handleSubmit}>
                            add game note
                    </button>
                </form>    
            }
            {isSubmitted && <button onClick={handleEdit}>edit game note</button>}
            <div className="delete-button-container">
                <button className="delete-button" onClick={() => deleteStat(id)}>delete stat</button>
            </div>
        </div>
    )
}

export default SavedStat

SavedStat.propTypes = {
    stat:PropTypes.object.isRequired,
    deleteStat: PropTypes.func.isRequired
}