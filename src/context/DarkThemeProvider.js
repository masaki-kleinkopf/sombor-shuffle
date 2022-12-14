
import {createContext, useState} from "react"

const DarkModeContext = createContext();

const DarkModeProvider = (props) => {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <div>
            <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
                {props.children}
            </DarkModeContext.Provider>
        </div>
    )
}

export {DarkModeContext, DarkModeProvider }