import { FaPencilAlt } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import QrCode from "../../assets/image/qr-code.png";
import BtnWide from "../../components/Buttons/BtnWide";
import DeliveredIcon from "../../components/Icons/DeliveredIcon";
import DetainedIcon from "../../components/Icons/DetainedIcon";
import IncomingIcon from "../../components/Icons/IncomingIcon";
import ReadyIcon from "../../components/Icons/ReadyIcon";

const MyAccount = () => {
  return (
    <>
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
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex flex-col items-center">
                  <h2 className="text-3xl text-white font-medium">
                    My Account
                  </h2>
                  <div className="mt-5 flex">
                    <button className="btn btn-circle packages-circle-btn btn-xl border-0 hover:bg-white packages-icon-active">
                      <IncomingIcon stroke="#fff" strokeWidth="1" />
                    </button>

                    <button className="btn btn-circle packages-circle-btn btn-xl bg-orange border-0 hover:bg-white ml-4 flex items-center justify-center">
                      <ReadyIcon stroke="#fff" strokeWidth="1" />
                    </button>

                    <button className="btn btn-circle packages-circle-btn btn-xl bg-orange border-0 hover:bg-white ml-4">
                      <DeliveredIcon stroke="#fff" strokeWidth="1" />
                    </button>

                    <button className="btn btn-circle packages-circle-btn btn-xl bg-orange border-0 hover:bg-white ml-4">
                      <DetainedIcon stroke="#fff" strokeWidth="1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-wrap">
        <div className="flex justify-between">
          <h1 className="text-3xl">Main contact information</h1>

          <button class="btn btn-circle bg-orange border-0 mr-20">
            <FaPencilAlt className="text-xl" />
          </button>
        </div>

        <div class="grid grid-cols-3 gap-4 mt-10">
          <div>
            <div class="form-control w-full mt-3">
              <label class="label">
                <span class="label-text text-xl text-sky-dark">First Name</span>
              </label>
              <input
                type="text"
                placeholder="John"
                class="input input-bordered w-full"
              />
            </div>

            <div class="form-control w-full mt-3">
              <label class="label">
                <span class="label-text text-xl text-sky-dark">
                  Email Address
                </span>
              </label>
              <input
                type="text"
                placeholder="joe@company.com"
                class="input input-bordered w-full"
              />
            </div>

            <div class="form-control w-full mt-3">
              <label class="label">
                <span class="label-text text-xl text-sky-dark">
                  Primary Contact No.
                </span>
              </label>
              <input
                type="text"
                placeholder="1 868 336-5896"
                class="input input-bordered w-full"
              />
            </div>
          </div>

          <div>
            <div class="form-control w-full mt-3">
              <label class="label">
                <span class="label-text text-xl text-sky-dark">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Doe"
                class="input input-bordered w-full"
              />
            </div>

            <div class="form-control w-full mt-3">
              <label class="label">
                <span class="label-text text-xl text-sky-dark">
                  Identification No. and Type
                </span>
              </label>
              <select class="select select-bordered">
                <option disabled selected>
                  Type
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>

            <div class="form-control w-full mt-3">
              <label class="label">
                <span class="label-text text-xl text-sky-dark">
                  Secondary Contact No.
                </span>
              </label>
              <input
                type="text"
                placeholder="1 868 665-8954"
                class="input input-bordered w-full"
              />
            </div>
          </div>
          <div>
            <h2 className="text-base">QR Code</h2>
            <div className="mt-3">
              <img src={QrCode} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-light bottom-0 left-0 p-10 w-full">
        <BtnWide title="Cancel" classItem="ml-52 bg-orange" />
        <BtnWide title="Save" classItem="ml-5 bg-sky" />
      </div>
    </>
  );
};

export default MyAccount;
