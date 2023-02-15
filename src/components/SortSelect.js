const SortSelect = ({ sortTypeSelected, setSortTypeSelected }) => {
  return (
    <select
      value={sortTypeSelected}
      onChange={(event) => setSortTypeSelected(event.target.value)}
    >
      <option value="date">date</option>
      <option value="points">points</option>
      <option value="rebounds">rebounds</option>
      <option value="assists">assists</option>
    </select>
  );
};

export default SortSelect;
