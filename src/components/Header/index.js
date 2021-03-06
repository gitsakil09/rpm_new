import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import flagOne from "../../assets/image/user-flag-one.png";
import flagTwo from "../../assets/image/user-flag-two.png";
import AccountMenu from "../Dropdown/AccountMenu";
import DeliveredIcon from "../Icons/DeliveredIcon";
import DetainedIcon from "../Icons/DetainedIcon";
import IncomingIcon from "../Icons/IncomingIcon";
import ReadyIcon from "../Icons/ReadyIcon";

const Header = ({ title, icon, url }) => {
  return (
    <div className="h-[188px] header">
      <div className="grid grid-cols-3 gap-4 px-14 items-center h-full">
        <div className="col-span-2">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex">
              {url ? (
                <Link
                  to={`${url}`}
                  className="btn absolute btn-circle custom-circle-btn bg-white border-2 border-sky-blue hover:bg-sky-blue hover:border-sky-blue btn-lg translate-y-[-6px]"
                >
                  <MdArrowBack className="text-sky-blue text-3xl" />
                </Link>
              ) : null}

              <div className="ml-20">
                <h5 className="text-sm text-white">Welcome {url}</h5>
                <h3 className="text-xl text-white">[Current User]</h3>
                <h6 className="text-sm text-black-500 flex">
                  Trinidad and Tobago
                  <div className="w-5 h-5 rounded-[100%] truncate bg-white ml-2 flex items-center justify-center">
                    <img src={flagOne} alt="" />
                  </div>
                  <div className="w-5 h-5 rounded-[100%] truncate bg-white ml-2 flex items-center justify-center">
                    <img src={flagTwo} alt="" />
                  </div>
                </h6>
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex flex-col items-center">
                <h2 className="text-3xl text-white font-medium">
                  {title} {icon}
                </h2>
                {icon ? (
                  <div className="mt-5 flex">
                    <Link
                      to="/"
                      className="btn btn-circle packages-circle-btn btn-xl border-0 hover:bg-white packages-icon-active"
                    >
                      <IncomingIcon stroke="#fff" strokeWidth="1" />
                    </Link>

                    <Link
                      to="/ready-for-collection"
                      className="btn btn-circle packages-circle-btn btn-xl bg-orange border-0 hover:bg-white ml-4 flex items-center justify-center"
                    >
                      <ReadyIcon stroke="#fff" strokeWidth="1" />
                    </Link>

                    <Link
                      to="/delivery-history"
                      className="btn btn-circle packages-circle-btn btn-xl bg-orange border-0 hover:bg-white ml-4"
                    >
                      <DeliveredIcon stroke="#fff" strokeWidth="1" />
                    </Link>

                    <Link
                      to="/detained-packages"
                      className="btn btn-circle packages-circle-btn btn-xl bg-orange border-0 hover:bg-white ml-4"
                    >
                      <DetainedIcon stroke="#fff" strokeWidth="1" />
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <AccountMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
