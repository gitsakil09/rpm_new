import Header from "../../components/Header";
import Search from "../../components/Search";
import Title from "../../components/Title";

const Home = () => {
  return (
    <>
      <Header title="Pre-Alert" icon={false} />
      <div className="content-wrap mt-10">
        <div className="flex justify-between">
          <Title title="Pre-Alert packages" />
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
                  <div className="text-blue-dark text-base">TRACKING NO.</div>
                </th>
                <th className="bg-sky-light">
                  <div className="text-blue-dark text-base">description</div>
                </th>
                <th className="bg-sky-light">
                  <div className="text-blue-dark text-base">WEIGHT</div>
                </th>

                <th className="bg-sky-light">
                  <div className="text-blue-dark text-base">SHIPPER</div>
                </th>

                <th className="bg-sky-light">
                  <div className="text-blue-dark text-base">COUIER</div>
                </th>
                <th className="bg-sky-light">
                  <div className="text-blue-dark text-base">VALUE USD</div>
                </th>
                <th className="bg-sky-light"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TBA0011223344</td>
                <td>Hair Dryer</td>
                <td>3lbs</td>
                <td>Amazon</td>
                <td>Amazon Logistics</td>
                <td>$45.90 USD</td>
                <td>
                  <button
                    type="submit"
                    class="btn btn-sm capitalize bg-sky-blue border-0 rounded-sm"
                  >
                    Button
                  </button>
                </td>
              </tr>
              <tr>
                <td>TBA0011223344</td>
                <td>Hair Dryer</td>
                <td>3lbs</td>
                <td>Amazon</td>
                <td>Amazon Logistics</td>
                <td>$45.90 USD</td>
                <td>
                  <button
                    type="submit"
                    class="btn btn-sm capitalize bg-sky-blue border-0 rounded-sm"
                  >
                    Button
                  </button>
                </td>
              </tr>
              <tr>
                <td>TBA0011223344</td>
                <td>Hair Dryer</td>
                <td>3lbs</td>
                <td>Amazon</td>
                <td>Amazon Logistics</td>
                <td>$45.90 USD</td>
                <td>
                  <button
                    type="submit"
                    class="btn btn-sm capitalize bg-sky-blue border-0 rounded-sm"
                  >
                    Button
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end mt-5">
            <div className="text-2xl font-medium">Total :$10.50 TTD</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
