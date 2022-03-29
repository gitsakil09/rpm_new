import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import BtnWide from "../../components/Buttons/BtnWide";

const OrderSuccess = () => {
  return (
    <>
      <div className="fixed z-[5000] w-full h-full bg-[#f3f5fc] left-0 top-0">
        <div className="flex justify-end">
          <Link
            to="/order-unsuccessful"
            className="btn btn-sm bg-white text-sky-dark hover:text-white capitalize border-0 mt-6 mr-10"
          >
            switch result
          </Link>
        </div>
        <div className="flex justify-center items-center h-full flex-col">
          <FaRegCheckCircle className="text-9xl text-green" />
          <h3 className="text-green text-3xl font-bold mt-3">Success</h3>
          <div className="w-[346px] mt-10 bg-white rounded-md">
            <ul className="p-5">
              <li>
                <span className="text-sm text-sky-300">Order Number:</span>
                <span className="text-sm text-sky-300 ml-5">999</span>
              </li>
              <li>
                <span className="text-sm text-sky-300">Amount Paid:</span>
                <span className="text-sm text-sky-300 ml-5">$15.00</span>
              </li>
              <li>
                <span className="text-sm text-sky-300">Transaction ID:</span>
                <span className="text-sm text-sky-300 ml-5">123987</span>
              </li>
              <li>
                <span className="text-sm text-sky-300">Card Number:</span>
                <span className="text-sm text-sky-300 ml-5">
                  ************1111
                </span>
              </li>
              <li>
                <span className="text-sm text-sky-300">Date:</span>
                <span className="text-sm text-sky-300 ml-5">
                  Thursday 6th January, 2022 11:11 PM
                </span>
              </li>
            </ul>
          </div>
          <BtnWide url="/" title="ok" classItem="w-[346px] bg-sky mt-3" />
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
