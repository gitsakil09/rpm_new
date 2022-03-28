// MdArrowBack
import { FaUserAlt } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import flagTwo from "../../assets/image/user-flag-one-two.png";
import flagOne from "../../assets/image/user-flag-one.png";
import BeautyHealth from "../../components/Icons/BeautyHealth";

const Header = () => {
  return (
    <div className="h-[188px] header">
      <div className="grid grid-cols-3 gap-4 px-14 items-center h-full">
        <div className="col-span-2">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex">
              <button className="btn btn-circle custom-circle-btn bg-white border-2 border-sky-blue hover:bg-sky-blue hover:border-sky-blue btn-lg translate-y-[-6px]">
                <MdArrowBack className="text-sky-blue text-3xl" />
              </button>
              <div className="ml-6">
                <h5 className="text-sm text-white">Welcome</h5>
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
                <h2 className="text-3xl text-white font-medium">My Packages</h2>
                <div className="mt-5">
                  <button className="btn btn-circle packages-circle-btn btn-xl border-0 hover:bg-white packages-icon-active">
                    <BeautyHealth stroke="red" />
                  </button>

                  <button className="btn btn-circle packages-circle-btn btn-xl bg-orange border-0 hover:bg-white ml-4">
                    <MdArrowBack className="text-white  text-2xl" />
                  </button>

                  <button className="btn btn-circle packages-circle-btn btn-xl bg-orange border-0 hover:bg-white ml-4">
                    <MdArrowBack className="text-white  text-2xl" />
                  </button>

                  <button className="btn btn-circle packages-circle-btn btn-xl bg-orange border-0 hover:bg-white ml-4">
                    <MdArrowBack className="text-white  text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="btn btn-circle custom-circle-btn bg-white border-2 border-sky-blue hover:bg-sky-blue hover:border-sky-blue btn-lg translate-y-[-6px]">
            <FaUserAlt className="text-sky-blue text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
