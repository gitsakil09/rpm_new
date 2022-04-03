import Address from "../../assets/image/Address.png";
import Delivery from "../../assets/image/Delivery.png";
import IdentityIcon from "../../assets/image/IdentityIcon.png";
import OtherSettings from "../../assets/image/OtherSettings.png";
import QrCode from "../../assets/image/qr-code.png";
import BtnWide from "../../components/Buttons/BtnWide";
import HeaderGuest from "../../components/Header/HeaderGuest";
import EditIcon from "../../components/Icons/EditIcon";
import Input from "../../components/Input";

const MyAccount = () => {
  return (
    <>
      <HeaderGuest
        title="My Account"
        icon={true}
        IconOne={IdentityIcon}
        IconTwo={Address}
        IconThree={Delivery}
        IconFour={OtherSettings}
      />
      <div className="content-wrap">
        <div className="flex justify-between">
          <h1 className="text-3xl">Main contact information</h1>
          <div className="mr-20">
            <button class="btn btn-circle bg-orange border-0 flex items-center justify-center pt-1">
              <EditIcon stroke="#fff" strokeWidth="2" />
            </button>
            <p className="text-center text-xs text-gray mt-1">Edit</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-10">
          <div>
            <Input
              title="First Name"
              wrapStyle="mt-2"
              textStyle="label-text text-xl text-sky-dark"
            />
            <Input
              title="Email Address"
              wrapStyle="mt-2"
              textStyle="label-text text-xl text-sky-dark"
            />
            <Input
              title="Primary Contact No."
              wrapStyle="mt-2"
              textStyle="label-text text-xl text-sky-dark"
            />
          </div>

          <div>
            <Input
              title="Last Name"
              wrapStyle="mt-2"
              textStyle="label-text text-xl text-sky-dark"
            />

            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text text-base text-sky-dark">
                  Identification No. and Type
                </span>
              </label>
              <select className="select select-bordered">
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

            <Input
              title="Secondary Contact No."
              wrapStyle="mt-2"
              textStyle="label-text text-xl text-sky-dark"
            />
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
