const Select = ({ selected, setSelected }) => {
  return (
    <select
      value={selected}
      onChange={(event) => setSelected(event.target.value)}
    >
      <option value="2021+2022">2021 and 2022 Seasons</option>
      <option value="2021">2021 Season</option>
      <option value="2022">2022 Season</option>
      <option value="random">Random Single Game Stat</option>
    </select>
  );
};

export default Select;
