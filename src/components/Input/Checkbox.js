const Checkbox = ({ title, wrapStyle, color }) => {
  return (
    <div className={`form-control ${wrapStyle}`}>
      <label className="label cursor-pointer justify-start items-start">
        <input type="checkbox" className={`checkbox ${color}`} />
        <span className="label-text ml-2">{title}</span>
      </label>
    </div>
  );
};

export default Checkbox;
