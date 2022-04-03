import { Link } from "react-router-dom";

const BtnWide = ({ url, title, classItem }) => {
  return (
    <>
      <Link className={`btn btn-wide border-0 ${classItem}`} to={`${url}`}>
        {title}
      </Link>
    </>
  );
};
export default BtnWide;
