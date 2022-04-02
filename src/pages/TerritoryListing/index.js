import ImgOne from "../../assets/image/client-logo-1.png";
import ImgTwo from "../../assets/image/client-logo-2.png";
import ImgThree from "../../assets/image/client-logo-3.png";
import FlagOne from "../../assets/image/flag-1.png";
import FlagTwo from "../../assets/image/flag-2.png";
import HeaderGuest from "../../components/Header/HeaderGuest";

const TerritoryListing = () => {
  return (
    <>
      <HeaderGuest title="Territory Listing" icon={false} />
      <div className="content-wrap  w-[76%]">
        <h3 className="text-base mt-10 ">Please select your territory</h3>
        <div className="territory">
          <div className="w-[256px] h-[123px] bg-white rounded-md mr-4 territory-item ">
            <div className="flex items-center h-1/2  ml-3">
              <img src={FlagOne} alt="" />
              <h4 className="font-bold ml-2">Trinidad and Tobago</h4>
            </div>
            <div className="flex justify-center items-center border-t-[1px] border-gray-100 mt-2 h-1/2">
              <img src={ImgOne} alt="" />
            </div>
          </div>
          {/* End Item */}
          <div className="w-[256px] h-[123px] bg-white rounded-md mr-4 territory-item">
            <div className="flex items-center h-1/2 ml-3">
              <img className="mr-2" src={FlagTwo} alt="" />
              <h4 className="font-bold ml-2">St. Lucia</h4>
            </div>
            <div className="flex justify-center items-center border-t-[1px] border-gray-100 mt-2 h-1/2">
              <img className="mr-2" src={ImgTwo} alt="" />
              <img className="mr-2" src={ImgThree} alt="" />
            </div>
          </div>
          {/* End Item */}
          <div className="w-[256px] h-[123px] bg-white rounded-md mr-4 territory-item ">
            <div className="flex items-center h-1/2  ml-3">
              <img src={FlagOne} alt="" />
              <h4 className="font-bold ml-2">Trinidad and Tobago</h4>
            </div>
            <div className="flex justify-center items-center border-t-[1px] border-gray-100 mt-2 h-1/2">
              <img src={ImgOne} alt="" />
            </div>
          </div>
          {/* End Item */}
          <div className="w-[256px] h-[123px] bg-white rounded-md mr-4 territory-item">
            <div className="flex items-center h-1/2 ml-3">
              <img className="mr-2" src={FlagTwo} alt="" />
              <h4 className="font-bold ml-2">St. Lucia</h4>
            </div>
            <div className="flex justify-center items-center border-t-[1px] border-gray-100 mt-2 h-1/2">
              <img className="mr-2" src={ImgTwo} alt="" />
              <img className="mr-2" src={ImgThree} alt="" />
            </div>
          </div>
          {/* End Item */}
          <div className="w-[256px] h-[123px] bg-white rounded-md mr-4 territory-item ">
            <div className="flex items-center h-1/2  ml-3">
              <img src={FlagOne} alt="" />
              <h4 className="font-bold ml-2">Trinidad and Tobago</h4>
            </div>
            <div className="flex justify-center items-center border-t-[1px] border-gray-100 mt-2 h-1/2">
              <img src={ImgOne} alt="" />
            </div>
          </div>
          {/* End Item */}
          <div className="w-[256px] h-[123px] bg-white rounded-md mr-4 territory-item">
            <div className="flex items-center h-1/2 ml-3">
              <img className="mr-2" src={FlagTwo} alt="" />
              <h4 className="font-bold ml-2">St. Lucia</h4>
            </div>
            <div className="flex justify-center items-center border-t-[1px] border-gray-100 mt-2 h-1/2">
              <img className="mr-2" src={ImgTwo} alt="" />
              <img className="mr-2" src={ImgThree} alt="" />
            </div>
          </div>
          {/* End Item */}
          <div className="w-[256px] h-[123px] bg-white rounded-md mr-4 territory-item ">
            <div className="flex items-center h-1/2  ml-3">
              <img src={FlagOne} alt="" />
              <h4 className="font-bold ml-2">Trinidad and Tobago</h4>
            </div>
            <div className="flex justify-center items-center border-t-[1px] border-gray-100 mt-2 h-1/2">
              <img src={ImgOne} alt="" />
            </div>
          </div>
          {/* End Item */}
          <div className="w-[256px] h-[123px] bg-white rounded-md mr-4 territory-item">
            <div className="flex items-center h-1/2 ml-3">
              <img className="mr-2" src={FlagTwo} alt="" />
              <h4 className="font-bold ml-2">St. Lucia</h4>
            </div>
            <div className="flex justify-center items-center border-t-[1px] border-gray-100 mt-2 h-1/2">
              <img className="mr-2" src={ImgTwo} alt="" />
              <img className="mr-2" src={ImgThree} alt="" />
            </div>
          </div>
          {/* End Item */}
        </div>
      </div>
    </>
  );
};

export default TerritoryListing;
