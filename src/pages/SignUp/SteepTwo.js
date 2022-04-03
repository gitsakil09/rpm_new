import { MdArrowBack } from "react-icons/md";
import CalendarIcon from "../../assets/image/calendar.png";
import BtnWide from "../../components/Buttons/BtnWide";
import Input from "../../components/Input";

const SteepTwo = () => {
  return (
    <>
      {/* Start Header */}
      <div className="h-[188px] header relative">
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
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex flex-col items-center">
                  <h2 className="text-3xl text-white font-medium">
                    Create an Account
                  </h2>
                  <div className="mt-5 flex">
                    <div className="bg-white w-10 h-10 rounded-full font-bold text-2xl text-sky flex items-center justify-center mx-2">
                      1
                    </div>
                    <div className="bg-green w-10 h-10 rounded-full font-bold text-2xl text-white flex items-center justify-center mx-2">
                      2
                    </div>
                    <div className="bg-white w-10 h-10 rounded-full font-bold text-2xl text-sky flex items-center justify-center mx-2">
                      3
                    </div>
                    <div className="bg-white w-10 h-10 rounded-full font-bold text-2xl text-sky flex items-center justify-center mx-2">
                      4
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Header */}
      <div className="pl-[250px] mt-10 w-[96%]">
        <div className="grid grid-cols-5 gap-8 mt-10">
          <div className="col-span-2">
            <h2 className="mt-10 text-base font-bold">Personal Information</h2>
            <div className="flex flex-col mt-4">
              <label className="label">
                <span className="label-text font-bold text-black-600 text-base">
                  Date of birth
                </span>
              </label>
              <div className="input-group w-full">
                <input
                  type="text"
                  placeholder="MM | DD | YYY"
                  className="input input-bordered w-full"
                />
                <button className="btn btn-square bg-white border-l-0 border-[#d2d4d7]">
                  <img src={CalendarIcon} alt="" />
                </button>
              </div>
            </div>

            <div class="form-control w-full mt-4">
              <label class="label">
                <span class="label-text font-bold text-black-600 text-base">
                  Identification No. and Type
                </span>
              </label>
              <select class="select">
                <option disabled selected>
                  Pick one
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[1px] h-full bg-gray-200"></div>
          </div>
          <div className="col-span-2">
            <h2 className="mt-10 text-base font-bold">Password</h2>
            <Input
              title="Create Account Password "
              wrapStyle="mt-4"
              placeholder="***********"
              textStyle="font-bold text-black-600 text-base"
            />
            <Input
              title="Confirm Account Password"
              wrapStyle="mt-4"
              textStyle="font-bold text-black-600 text-base"
            />
            <div className="mt-4">
              <h3 className="text-xl italic">Complexity Requirements</h3>
              <h5>
                Password must be a minimum of eight (8) characters in length
                Must contain at least one (1) Uppercase letter and one (1)
                number
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-light absolute bottom-0 left-0 p-10 w-full">
        <BtnWide
          url="create-new-account-steep-two"
          title="Cancel"
          classItem="ml-52 bg-orange"
        />
        <BtnWide
          url="/create-new-account-steep-three"
          title="Next"
          classItem="ml-5 bg-sky"
        />
      </div>
    </>
  );
};
export default SteepTwo;
