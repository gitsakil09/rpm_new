export default function Input({
  title,
  textStyle,
  inputStyle,
  wrapStyle,
  ...rest
}) {
  return (
    <div className={`form-control ${wrapStyle}`}>
      <label className="label">
        <span className={`label-text text-base ${textStyle}`}>{title}</span>
      </label>
      <input {...rest} className={`input input-bordered ${inputStyle}`} />
    </div>
  );
}
