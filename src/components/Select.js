const Select = ({ selected, setSelected }) => {
  return (
    <select
      value={selected}
      onChange={(event) => setSelected(event.target.value)}
    >
      <option value="21+22">'21-'22 and '21-'22 Seasons</option>
      <option value="20-21">2020-2021 Season</option>
      <option value="21-22">2021-2022 Season</option>
      <option value="random">Random Single Game Stat</option>
    </select>
  );
};

export default Select;
