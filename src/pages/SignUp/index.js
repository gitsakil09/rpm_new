import { MdArrowBack } from "react-icons/md";
import BtnWide from "../../components/Buttons/BtnWide";
import Input from "../../components/Input";
const SignUp = () => {
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
                    <div className="bg-green w-10 h-10 rounded-full font-bold text-2xl text-white flex items-center justify-center mx-2">
                      1
                    </div>
                    <div className="bg-white w-10 h-10 rounded-full font-bold text-2xl text-sky flex items-center justify-center mx-2">
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
        <h1 className="text-xl uppercase">SIGN UP FOR FREE</h1>
        <p className="w-1/2">
          Get started today with RPM Express Couriers. Once you complete the
          form below we will send you an email confirming your account creation.
          Check your spam folder if you do ot see our email in your inbox.
        </p>
        <h2 className="mt-10 text-base font-bold">Contact information</h2>

        <div class="grid grid-cols-3 gap-8 mt-10">
          <div>
            <Input
              title="First Name"
              textStyle="font-bold text-black-600 text-base"
            />
            <Input
              title="Last Name"
              wrapStyle="mt-2"
              textStyle="font-bold text-black-600 text-base"
            />
          </div>
          <div>
            <Input
              title="Email Address"
              textStyle="font-bold text-black-600 text-base"
            />
            <Input
              title="Confirm Email Address"
              wrapStyle="mt-2"
              textStyle="font-bold text-black-600 text-base"
            />
          </div>
          <div>
            <Input
              title="Primary Contact No."
              textStyle="font-bold text-black-600 text-base"
            />
            <Input
              title="Secondary Contact No."
              wrapStyle="mt-2"
              textStyle="font-bold text-black-600 text-base"
            />
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
          url="/create-new-account-steep-two"
          title="Next"
          classItem="ml-5 bg-sky"
        />
      </div>
    </>
  );
};
export default SignUp;
