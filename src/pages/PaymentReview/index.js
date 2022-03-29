import BtnWide from "../../components/Buttons/BtnWide";
import Header from "../../components/Header";
import Search from "../../components/Search";
import Title from "../../components/Title";

const Home = () => {
  return (
    <>
      <Header title="Payment Review" icon={false} />
      <div className="content-wrap mt-10">
        <div className="flex justify-between">
          <Title title="Order Summary" />
          <Search
            classItem="form-control custom-search mr-16"
            iconColor="#999999"
          />
        </div>
        <div className="overflow-x-auto w-[90%]">
          <table className="table w-full custom-table mt-10">
            <thead>
              <tr>
                <th className="bg-sky-light">
                  <div className="text-blue-dark text-base">invoice no.</div>
                </th>
                <th className="bg-sky-light">
                  <div className="text-blue-dark text-base">description</div>
                </th>

                <th className="bg-sky-light text-right">
                  <div className="text-blue-dark text-base">cost</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="text-sky-blue">#0001</div>
                  </div>
                </td>
                <td>Marbles</td>
                <td className="text-right">3.00 Lbs </td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="text-sky-blue">#0001</div>
                  </div>
                </td>
                <td>Marbles</td>
                <td className="text-right">3.00 Lbs </td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="text-sky-blue">#0001</div>
                  </div>
                </td>
                <td>Marbles</td>
                <td className="text-right">3.00 Lbs </td>
              </tr>
            </tbody>
          </table>
          <div className="h-[1px] bg-gray w-full"></div>
          <div className="flex justify-between mt-3">
            <div>
              <p className="font-medium">Transaction fee: $0.50 TTD</p>
            </div>
            <div className="text-2xl font-medium">Order Total: $15.50 TTD</div>
          </div>
        </div>
      </div>
      <div className="bg-blue-light bottom-0 left-0 p-10 w-full">
        <BtnWide title="Cancel" classItem="ml-52 bg-orange" />
        <BtnWide
          url="/Order-success"
          title="Pay Now"
          classItem="ml-5 bg-green"
        />
      </div>
    </>
  );
};

export default Home;
