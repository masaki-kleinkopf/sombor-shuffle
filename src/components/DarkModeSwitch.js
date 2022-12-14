import { DarkModeContext } from "../context/DarkThemeProvider"
import { useContext } from "react"

const DarkModeSwitch = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      <input name="dark-mode" type="checkbox" value={darkMode} onChange={() => setDarkMode(!darkMode)}></input>
      <label for="dark-mode">💡 toggle dark mode 💡</label>
    </div>
  )
}

export default DarkModeSwitch