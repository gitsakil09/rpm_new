import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Search from "../../components/Search";
import Title from "../../components/Title";

const ReadyForCollection = () => {
  return (
    <>
      <Header title="My Packages" icon={true} />
      <Nav />
      <div className="content-wrap">
        <div className="flex justify-between">
          <Title title="Ready for collection" />
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
                  <div className="text-blue-dark text-base">AWB</div>
                </th>
                <th className="bg-sky-light">
                  <div className="text-blue-dark text-base">description</div>
                </th>
                <th className="bg-sky-light">
                  <div className="text-blue-dark text-base">TRACKING NO.</div>
                </th>

                <th className="bg-sky-light">
                  <div className="text-blue-dark text-base">status</div>
                </th>

                <th className="bg-sky-light">
                  <div className="text-blue-dark text-base">VALUE USD</div>
                </th>

                <th className="bg-sky-light">
                  <div className="text-blue-dark text-base">WEIGHT</div>
                </th>
                <th className="bg-sky-light">
                  <div className="text-blue-dark text-base">SHIPPER</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="text-sky-blue">000123456780</div>
                  </div>
                </td>
                <td>Hair Dryer</td>
                <td>TBA0011223344</td>
                <td>Received at Miami</td>
                <td>$45.90 USD</td>
                <td>3lbs</td>
                <td>Amazon</td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="text-sky-blue">000123456780</div>
                  </div>
                </td>
                <td>Hair Dryer</td>
                <td>TBA0011223344</td>
                <td>Received at Miami</td>
                <td>$45.90 USD</td>
                <td>3lbs</td>
                <td>Amazon</td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="text-sky-blue">000123456780</div>
                  </div>
                </td>
                <td>Hair Dryer</td>
                <td>TBA0011223344</td>
                <td>Received at Miami</td>
                <td>$45.90 USD</td>
                <td>3lbs</td>
                <td>Amazon</td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="text-sky-blue">000123456780</div>
                  </div>
                </td>
                <td>Hair Dryer</td>
                <td>TBA0011223344</td>
                <td>Received at Miami</td>
                <td>$45.90 USD</td>
                <td>3lbs</td>
                <td>Amazon</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ReadyForCollection;
