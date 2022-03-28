import SearchIcon from "../Icons/SearchIcon";
const Search = ({ classItem, iconColor }) => {
  return (
    <div className={classItem}>
      <div className="input-group">
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered"
        />
        <button className="btn btn-square">
          <SearchIcon stroke={iconColor} />
        </button>
      </div>
    </div>
  );
};
export default Search;
