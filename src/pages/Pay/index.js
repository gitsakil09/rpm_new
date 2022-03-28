import BtnWide from "../../components/Buttons/BtnWide";
import Search from "../../components/Search";
import Title from "../../components/Title";

const Home = () => {
  return (
    <>
      <div className="flex justify-between">
        <Title title="Package list" />
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
                <label className="flex">
                  <input type="checkbox" class="checkbox" />

                  <div className="text-blue-dark text-base ml-2">
                    Select all
                  </div>
                </label>
              </th>
              <th className="bg-sky-light">
                <div className="text-blue-dark text-base">invoice no.</div>
              </th>
              <th className="bg-sky-light">
                <div className="text-blue-dark text-base">description</div>
              </th>
              <th className="bg-sky-light">
                <div className="text-blue-dark text-base">Status</div>
              </th>

              <th className="bg-sky-light">
                <div className="text-blue-dark text-base">Weight</div>
              </th>

              <th className="bg-sky-light">
                <div className="text-blue-dark text-base">cost</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="text-sky-blue">#0001</div>
                </div>
              </td>
              <td>Marbles</td>
              <td>Out for delivery</td>
              <td>Received at Miami</td>
              <td>3.00 Lbs </td>
            </tr>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="text-sky-blue">#0001</div>
                </div>
              </td>
              <td>Marbles</td>
              <td>Out for delivery</td>
              <td>Received at Miami</td>
              <td>3.00 Lbs </td>
            </tr>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="text-sky-blue">#0001</div>
                </div>
              </td>
              <td>Marbles</td>
              <td>Out for delivery</td>
              <td>Received at Miami</td>
              <td>3.00 Lbs </td>
            </tr>
          </tbody>
        </table>
        <div className="h-[1px] bg-gray w-full"></div>
        <div className="flex justify-between mt-3">
          <div>
            <p className="font-medium">Selected items: $10.00</p>
            <p className="font-medium">Transaction fee: $0.50 TTD</p>
          </div>
          <div className="text-2xl font-medium">Total :$10.50 TTD</div>
        </div>
      </div>
      <div className="bg-blue-light fixed bottom-0 left-0 p-10 w-full">
        <BtnWide title="Cancel" classItem="ml-52 bg-orange" />
        <BtnWide title="Pay Now" classItem="ml-5 bg-green" />
      </div>
    </>
  );
};

export default Home;
