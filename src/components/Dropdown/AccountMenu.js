import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const AccountMenu = () => {
  return (
    <>
      <button className="dropdown dropdown-end btn btn-circle custom-circle-btn bg-white border-2 border-sky-blue hover:bg-sky-blue hover:border-sky-blue btn-lg cursor-pointer">
        <label
          tabindex="0"
          className="w-full h-full flex items-center justify-center cursor-pointer"
        >
          <FaUserAlt className="text-sky-blue text-2xl" />
        </label>
        <ul
          tabindex="0"
          className="dropdown-content menu mt-5 p-2 shadow bg-base-100 rounded-box w-52 text-black-600 py-6 px-0"
        >
          <li className="px-5">
            <Link
              to="/my-account"
              className="btn bg-sky border-0 text-white capitalize"
            >
              My Account
            </Link>
          </li>
          <div className="w-full h-[1px] bg-blue my-6"></div>
          <li className="px-5">
            <Link to="/" className="btn bg-sky border-0 text-white capitalize">
              Log Out
            </Link>
          </li>
        </ul>
      </button>
    </>
  );
};

export default AccountMenu;
