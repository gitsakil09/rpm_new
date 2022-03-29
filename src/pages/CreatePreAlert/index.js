import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import BtnWide from "../../components/Buttons/BtnWide";
import Header from "../../components/Header";
import Input from "../../components/Input";

const CreatePreAlert = () => {
  return (
    <>
      <Header title="Pre-Alert" icon={false} />
      <div className="content-wrap mt-10">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <p>
              Use this service to alert us of your incoming shipments prior to
              them arriving in Miami. Please note Pre-Alerts should be sent at
              least 48 hours before your items are delivered to us
            </p>

            <div className="grid grid-cols-2 gap-40 mt-6">
              <div>
                <Input
                  title="Supplier"
                  type="text"
                  placeholder="Amazon, Macys, eBay"
                  wrapStyle="w-[405px]"
                  textStyle="font-bold"
                />

                <Input
                  title="Tracking No."
                  type="text"
                  placeholder="XXXXXXXXXXX"
                  wrapStyle="w-[405px] mt-4"
                  textStyle="font-bold"
                />

                <div className="form-control w-[405px] mt-4">
                  <label className="label flex flex-col items-start">
                    <span className="label-text text-base font-bold">
                      Cost of shipment in $USD
                    </span>
                    <span className="label-text text-gray">
                      (including shipping)
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="$USD"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>

              <div>
                <div className="form-control w-[287px] mt-4">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Courier Company
                    </span>
                  </label>
                  <select className="select select-bordered bg-sky-300 text-white">
                    <option disabled selected>
                      Select Courier
                    </option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                  </select>
                </div>

                <div className="form-control w-[287px]">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Description
                    </span>
                  </label>
                  <select className="select select-bordered bg-sky-300 text-white">
                    <option disabled selected>
                      Select Category
                    </option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                  </select>
                </div>

                <div className="form-control w-[287px] mt-4">
                  <textarea
                    className="textarea border-sky-dark h-[140px]"
                    placeholder=" You are responsible for listing the correct and true amount of
                  your shipment. This information is given to customs."
                  ></textarea>
                </div>

                {/* <div className="text-sky-dark text-sm border-[1px] border-sky-dark p-5 rounded-md mt-4 w-[287px]">
                  You are responsible for listing the correct and true amount of
                  your shipment. This information is given to customs.
                </div> */}
              </div>
            </div>

            <div className="flex justify-between mt-10">
              <h3 className="text-base mt-6">Attachments [3]</h3>
              <div className="flex items-center mr-10">
                <span className="text-3xl leading-none">...</span>
                <Link
                  to="/create-pre-alert"
                  className="btn btn-circle bg-green border-0 ml-2 mt-3"
                >
                  <FaPlus className="text-white text-3xl cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="bg-blue-light bottom-0 left-0 p-10 w-full">
        <BtnWide url="/pre-alert" title="Cancel" classItem="ml-52 bg-orange" />
        <BtnWide url="#" title="Submit" classItem="ml-5 bg-sky" />
      </div>
    </>
  );
};

export default CreatePreAlert;
