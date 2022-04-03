import { MdArrowBack } from "react-icons/md";
import BtnWide from "../../components/Buttons/BtnWide";
import Input from "../../components/Input";
import Checkbox from "../../components/Input/Checkbox";
const SteepThree = () => {
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
                    <div className="bg-green w-10 h-10 rounded-full font-bold text-2xl text-white flex items-center justify-center mx-2">
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
        <div className="grid grid-cols-3 gap-8 mt-10">
          <div>
            <h2 className="mt-10 text-base font-bold">Mailing Address</h2>
            <Input
              title="Address 1"
              textStyle="font-bold text-black-600 text-base"
              wrapStyle="mt-5"
            />
            <Input
              title="Address 2"
              wrapStyle="mt-2"
              textStyle="font-bold text-black-600 text-base"
            />
          </div>
          <div>
            <h2 className="mt-10 text-base font-bold">Delivery Preferences</h2>
            <Checkbox
              title="Don’t deliver (Keep at the Office)"
              color="bg-sky"
              wrapStyle="mt-5"
            />

            <h2 className="mt-10 text-base font-bold">Delivery Address</h2>
            <Checkbox
              title="Same as Mailing Address"
              color="bg-sky"
              wrapStyle="mt-5"
            />
          </div>

          <div>
            <Checkbox
              title="Deliver to the address below"
              color="bg-sky"
              wrapStyle="mt-20"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-10">
          <div>
            <div className="form-control w-full mt-5">
              <label className="label">
                <span className="label-text font-bold text-black-600 text-base">
                  City
                </span>
              </label>
              <select className="select select-bordered bg-sky-300 text-white">
                <option disabled selected>
                  Santa Cruz
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>

            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text font-bold text-black-600 text-base">
                  Country
                </span>
              </label>
              <select className="select select-bordered bg-sky-300 text-white">
                <option disabled selected>
                  Trinidad and Tobago
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>
          </div>
          <div>
            <Input
              title="Address 1"
              textStyle="font-bold text-black-600 text-base"
              wrapStyle="mt-5"
              inputStyle="bg-gray-100"
            />
            <Input
              title="Address 2"
              wrapStyle="mt-2"
              textStyle="font-bold text-black-600 text-base"
              inputStyle="bg-gray-100"
            />
          </div>
          <div>
            <div className="form-control w-full mt-5">
              <label className="label">
                <span className="label-text font-bold text-black-600 text-base">
                  City
                </span>
              </label>
              <select className="select select-bordered bg-gray-200 text-white">
                <option disabled selected>
                  Santa Cruz
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>

            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text font-bold text-black-600 text-base">
                  Country
                </span>
              </label>
              <select className="select select-bordered bg-gray-200 text-white">
                <option disabled selected>
                  Trinidad and Tobago
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
      </div>

      <div className="bg-blue-light bottom-0 left-0 p-10 w-full mt-10">
        <BtnWide
          url="create-new-account-steep-two"
          title="Cancel"
          classItem="ml-52 bg-orange"
        />
        <BtnWide
          url="/create-new-account-steep-four"
          title="Next"
          classItem="ml-5 bg-sky"
        />
      </div>
    </>
  );
};
export default SteepThree;
