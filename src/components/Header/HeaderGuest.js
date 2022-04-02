import { MdArrowBack } from "react-icons/md";

const HeaderGuest = ({
  title,
  icon,
  IconOne,
  IconTwo,
  IconThree,
  IconFour,
}) => {
  return (
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
                <h2 className="text-3xl text-white font-medium">{title}</h2>
                {icon ? (
                  <div className="mt-5 flex">
                    <button className="btn btn-circle packages-circle-btn btn-xl border-0 bg-orange ">
                      <img src={IconOne} alt="" />
                    </button>

                    <button className="btn btn-circle packages-circle-btn btn-xl bg-orange border-0 ml-4 flex items-center justify-center">
                      <img src={IconTwo} alt="" />
                    </button>

                    <button className="btn btn-circle packages-circle-btn btn-xl bg-orange border-0 ml-4">
                      <img src={IconThree} alt="" />
                    </button>

                    <button className="btn btn-circle packages-circle-btn btn-xl border-0 ml-4 packages-icon-active">
                      <img src={IconFour} alt="" />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderGuest;
