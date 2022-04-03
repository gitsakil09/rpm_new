import { Link } from "react-router-dom";
import logoColor from "../../assets/image/logoColor.png";
import flagOne from "../../assets/image/user-flag-one.png";
import flagTwo from "../../assets/image/user-flag-two.png";
import Input from "../../components/Input";
const Login = () => {
  return (
    <div className="body-img">
      <div className="flex justify-end">
        <div className="flex flex-col  mt-20 mr-16">
          <div className="text-base text-black-500 flex">
            <div> Trinidad and Tobago</div>
            <div className="w-5 h-5 rounded-[100%] truncate bg-white ml-2 flex items-center justify-center">
              <img src={flagOne} alt="" />
            </div>
            <div className="w-5 h-5 rounded-[100%] truncate bg-white ml-2 flex items-center justify-center">
              <img src={flagTwo} alt="" />
            </div>
          </div>
          <Link to="/territory-listing" className="text-white text-base">
            Change Territory & Company
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col">
        <div className="bg-white rounded-full w-[140px] h-[140px] flex justify-center items-center">
          <img src={logoColor} alt="" />
        </div>
        <div className="w-[288px]">
          <h1 className="text-4xl font-bold mt-10">Welcome</h1>
          <h3 className="text-xl font-bold mt-4">Good Day [Current User]</h3>
          <div className="w-full h-[1px] bg-[#fff] mt-4"></div>
          <h5 className="text-base mt-2">Please sign in</h5>
          <Input
            type="text"
            placeholder="username"
            wrapStyle="mt-4"
            textStyle="font-bold"
          />
          <Input type="text" placeholder="username" textStyle="font-bold" />
          <button class="btn w-full bg-orange border-0 mt-4">Sign In</button>
          <div className="flex justify-between mt-6">
            <Link
              to="/create-new-account"
              className="text-sm text-white hover:underline"
            >
              Create a new account
            </Link>
            <Link to="#" className="text-sm text-white hover:underline">
              Create a new account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
