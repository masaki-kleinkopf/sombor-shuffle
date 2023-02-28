import { DarkModeContext } from "../context/DarkThemeProvider";
import { useContext } from "react";
import "../styles/DarkModeSwitch.css";

const DarkModeSwitch = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <div className="dark-mode-switch">
      <input
        name="dark-mode"
        type="checkbox"
        value={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      ></input>
      <label for="dark-mode">
        💡 {darkMode ? "light mode" : "dark mode"} 💡
      </label>
    </div>
  );
};

export default DarkModeSwitch;
