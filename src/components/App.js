import "../styles/App.css";
import { useEffect, useState, useContext } from "react";
import getData from "../apiCalls";
import RandomStat from "./RandomStat";
import SavedStats from "./SavedStats";
import Chart from "./Chart";
import Select from "./Select";
import SortSelect from "./SortSelect";
import { mapData, mapTeams } from "../utils";
import { Route } from "react-router-dom";
import { DarkModeContext } from "../context/DarkThemeProvider";
import DarkModeSwitch from "./DarkModeSwitch";

function App() {
  const [stats2020, setStats2020] = useState([]);
  const [stats2021, setStats2021] = useState([]);
  const [randomStat, setRandomStat] = useState({});
  const [savedStats, setSavedStats] = useState(
    Object.values(localStorage).map((object) => JSON.parse(object))
  );
  const [error, setError] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [selected, setSelected] = useState("21-22");
  const [sortTypeSelected, setSortTypeSelected] = useState("date");

  useEffect(() => {
    const getStats = () => {
      Promise.all([
        getData(
          "https://www.balldontlie.io/api/v1/stats?seasons[]=2020&player_ids[]=246&per_page=82"
        ),
        getData(
          "https://www.balldontlie.io/api/v1/stats?seasons[]=2021&player_ids[]=246&per_page=82"
        ),
        getData("https://www.balldontlie.io/api/v1/teams"),
      ])
        .then((data) => {
          const data2020 = mapData(data[0].data);
          const data2021 = mapData(data[1].data);
          const teams = mapTeams(data[2].data);
          const statsWithTeams2020 = data2020.map((stat) => {
            const foundTeam = teams.find((team) => team.id === stat.opponent);
            return { ...stat, opponent: foundTeam.team };
          });
          const statsWithTeams2021 = data2021.map((stat) => {
            const foundTeam = teams.find((team) => team.id === stat.opponent);
            return { ...stat, opponent: foundTeam.team };
          });
          setStats2020(statsWithTeams2020);
          setStats2021(statsWithTeams2021);
        })
        .catch((err) => setError(err.message));
    };
    getStats();
  }, []);

  useEffect(() => {
    let allData = [...stats2020, ...stats2021];
    setRandomStat(allData[Math.floor(Math.random() * allData.length)]);
  }, [stats2020, stats2021]);

  const saveStat = () => {
    const foundStat = savedStats.indexOf(randomStat);
    if (foundStat === -1) {
      const statAsString = JSON.stringify(randomStat);
      localStorage.setItem(randomStat.id, statAsString);
      savedStats.length > 0
        ? setSavedStats([...savedStats, randomStat])
        : setSavedStats([randomStat]);
      setIsSaved(true);
    }
  };

  const sortedSavedStats = [...savedStats].sort((a, b) => a.id - b.id);

  const deleteStat = (id) => {
    const filteredStats = savedStats.filter((stat) => {
      return stat.id !== id;
    });
    localStorage.removeItem(id);
    setSavedStats(filteredStats);
  };

  const { darkMode } = useContext(DarkModeContext);

  return (
    <main className={darkMode && "dark-mode"}>
      <header>
        sombor <span className="shuffle">shuffle</span>
        <h1>stats from Nikola Jokic's MVP seasons</h1>
      </header>
      <Select selected={selected} setSelected={setSelected} />
      <SortSelect
        sortTypeSelected={sortTypeSelected}
        setSortTypeSelected={setSortTypeSelected}
      />
      <Route exact path="/">
        {error && <p>something went wrong!!</p>}
        {selected === "20-21" && (
          <Chart
            sortTypeSelected={sortTypeSelected}
            stats={stats2020}
            selected={selected}
          />
        )}
        {selected === "21-22" && (
          <Chart
            sortTypeSelected={sortTypeSelected}
            stats={stats2021}
            selected={selected}
          />
        )}
        {selected === "21+22" && (
          <Chart
            sortTypeSelected={sortTypeSelected}
            stats={[...stats2020, ...stats2021]}
            selected={selected}
          />
        )}
        {randomStat && selected === "random" && (
          <RandomStat
            isSaved={isSaved}
            setIsSaved={setIsSaved}
            stats={[...stats2020, ...stats2021]}
            randomStat={randomStat}
            setRandomStat={setRandomStat}
            saveStat={saveStat}
            savedStats={savedStats}
          />
        )}
      </Route>
      <Route exact path="/saved">
        <SavedStats savedStats={sortedSavedStats} deleteStat={deleteStat} />
      </Route>
      <DarkModeSwitch />
    </main>
  );
}

export default App;
