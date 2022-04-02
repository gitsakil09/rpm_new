import { FaQuestion } from "react-icons/fa";
import ProtectedIcon from "../../assets/image/protected.png";
import VisaIcon from "../../assets/image/visa.png";
import BtnWide from "../../components/Buttons/BtnWide";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Input from "../../components/Input";

const PaymentInformation = () => {
  return (
    <>
      <Header url="/pay" title="Payment Information" icon={false} />
      <div className="content-wrap mt-10">
        <div className="flex items-center">
          <h2 className="text-2xl font-medium">Amount to pay</h2>
          <h1 className="text-3xl font-bold ml-3">$15.00</h1>
          <div className="ml-16">
            <img src={VisaIcon} alt="" />
          </div>
        </div>

        <div className=" mt-20">
          <Form>
            <h3 className="text-xl font-bold">Payment Details</h3>
            <div className="flex items-center mt-6">
              <Input
                title="Card Number"
                type="text"
                wrapStyle="w-[405px]"
                textStyle="font-bold"
              />
              <Input
                title="Expiration Date"
                type="text"
                wrapStyle="ml-5 w-[185px]"
                textStyle="font-bold"
              />
              <Input
                title="CVV"
                type="text"
                wrapStyle="ml-5 w-[75px]"
                textStyle="font-bold"
              />
              <button className="btn btn-circle btn-md bg-gray border-0 mt-10 ml-6">
                <FaQuestion className="text-2xl" />
              </button>
            </div>

            <h3 className="text-xl font-bold mt-12">Billing Details</h3>
            <div className="flex items-center mt-6">
              <Input
                title="First Name"
                placeholder="First Name"
                type="text"
                wrapStyle="w-[287px]"
                textStyle="font-bold"
              />
              <Input
                title="Last Name"
                placeholder="Last Name"
                type="text"
                wrapStyle="ml-5 w-[287px]"
                textStyle="font-bold"
              />
            </div>

            <div className="flex items-center mt-6">
              <Input
                title="Address 1"
                placeholder="Address 1"
                type="text"
                wrapStyle="w-[597px]"
                textStyle="font-bold"
              />
            </div>

            <div className="flex items-center mt-6">
              <Input
                title="Address 2"
                placeholder="Address 2"
                type="text"
                wrapStyle="w-[597px]"
                textStyle="font-bold"
              />
            </div>

            <div className="flex items-center mt-6">
              <Input
                title="City"
                placeholder="City"
                type="text"
                wrapStyle="w-[287px]"
                textStyle="font-bold"
              />

              <div className="form-control w-[287px] ml-6">
                <label className="label">
                  <span className="label-text text-base font-medium">
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

              <Input
                title="ZIP Code"
                type="text"
                wrapStyle="w-[177px] ml-10"
                textStyle="font-bold"
              />
            </div>
          </Form>
        </div>
      </div>
      <div className="bg-blue-light bottom-0 left-0 p-10 w-full flex justify-between">
        <div>
          <BtnWide title="Cancel" classItem="ml-52 bg-orange" />
          <BtnWide
            url="/payment-review"
            title="Submit"
            classItem="ml-5 bg-green"
          />
        </div>
        <div className="flex">
          <img className="w-[45px] h-[45px]" src={ProtectedIcon} alt="" />
          <p className="w-96 ml-3">
            The data you enter during the process is secured, protected and will
            not be shared.
          </p>
        </div>
      </div>
    </>
  );
};

export default PaymentInformation;
