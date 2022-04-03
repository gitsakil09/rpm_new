import { FaPlus } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import BtnWide from "../../components/Buttons/BtnWide";
import Input from "../../components/Input";
import Checkbox from "../../components/Input/Checkbox";
const SteepFour = () => {
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
                    <div className="bg-white w-10 h-10 rounded-full font-bold text-2xl text-sky flex items-center justify-center mx-2">
                      2
                    </div>
                    <div className="bg-white w-10 h-10 rounded-full font-bold text-2xl text-sky flex items-center justify-center mx-2">
                      3
                    </div>
                    <div className="bg-green w-10 h-10 rounded-full font-bold text-2xl text-white flex items-center justify-center mx-2">
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
        <div className="grid grid-cols-3 gap-8 mt-10">
          <div>
            <h2 className="mt-10 text-base font-bold">Authroised users</h2>
            <div className="mt-10 flex justify-between">
              <div>
                <div className="px-5 py-1 text-sm text-white rounded-sm bg-sky-300 inline-block opacity-50">
                  User 1
                </div>
                <div className="px-5 py-1 text-sm text-white rounded-sm bg-sky-300 inline-block ml-4">
                  User 1
                </div>
              </div>
              <div>
                <button className="btn btn-circle btn-sm bg-green border-0">
                  <FaPlus />
                </button>
              </div>
            </div>
            <Input
              title="First Name"
              textStyle="font-bold text-black-600 text-base"
              wrapStyle="mt-5"
            />
            <Input
              title="Last Name"
              wrapStyle="mt-2"
              textStyle="font-bold text-black-600 text-base"
            />
            <Input
              title="Contact No."
              wrapStyle="mt-2"
              textStyle="font-bold text-black-600 text-base"
            />
          </div>

          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-8">
              {/* Start Package Insurance */}
              <div>
                <h2 className="mt-10 text-base font-bold">Package Insurance</h2>

                <div className="form-control w-full mt-5">
                  <label className="label">
                    <span className="label-text text-base text-black-600">
                      Package Insurance
                    </span>
                  </label>
                  <select className="select select-bordered bg-sky-300 text-white">
                    <option disabled selected>
                      Select
                    </option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                  </select>
                </div>

                <div className="italic text-sm mt-4">
                  RPM Express Courier will cover your package(s) for the cost of
                  $1.00 USD per $100.00 USD value of goods.
                </div>
              </div>

              {/* Start How did you hear about us? */}
              <div>
                <h2 className="mt-10 text-base font-bold">
                  How did you hear about us?
                </h2>

                <div className="form-control w-full mt-5">
                  <label className="label">
                    <span className="label-text text-base text-black-600">
                      How did you hear about us?
                    </span>
                  </label>
                  <select className="select select-bordered bg-sky-300 text-white">
                    <option disabled selected>
                      Select
                    </option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="h-[1px] w-full bg-gray-200 my-5"></div>
            <div className="text-sm italic">
              RPM Express Courier is responsible for the confidential use of
              your personal information and it will not be given to third
              parties.
              <Link to="#" className="ml-1 not-italic text-sky underline">
                See Privacy Policy
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <Checkbox
                  title="I authorize RPM Express Couriers to ship and clear all packages on my behalf. I will accept and pay all 
                  relevant charges"
                  color="bg-sky"
                  wrapStyle="mt-5"
                />
              </div>
              <div>
                <Checkbox
                  title="I am aware globally that shipping networks seasonally 
                  are pushed to their limits and delays can occur"
                  color="bg-sky"
                  wrapStyle="mt-5"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <Checkbox
                  title="I authorize RPM Express Couriers to ship and clear all packages on my behalf. I will accept and pay all 
                  relevant charges"
                  color="bg-sky"
                  wrapStyle="mt-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-light bottom-0 left-0 p-10 w-full mt-10">
        <BtnWide
          url="create-new-account-steep-two"
          title="Cancel"
          classItem="ml-52 bg-orange"
        />
        <BtnWide
          url="/create-new-account-steep-two"
          title="Next"
          classItem="ml-5 bg-sky"
        />
      </div>
    </>
  );
};
export default SteepFour;
