import { useState } from "react"
import { Link  } from "react-router-dom"

const SavedStat = ({date, points, rebounds, assists}) => {
    const [gameNote, setGameNote] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const handleClick= (event) => {
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
        {isSubmitted && <p className="game-note">{gameNote}</p>}
        {
        !isSubmitted &&
            <form>
                <textarea placeholder="game notes" value={gameNote} onChange={(event) => setGameNote(event.target.value)} required/>
                <button 
                    type="submit" 
                    onClick={handleClick}>
                        add
                </button>
            </form>    
        }
        {isSubmitted && <button onClick={handleClick}>edit</button>}
      
    </div>
    )
    
}

export default SavedStat