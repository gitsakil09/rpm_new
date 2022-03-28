import BtnWide from "../../components/Buttons/BtnWide";
import Header from "../../components/Header";

const Calculator = () => {
  return (
    <>
      <Header />
      <div className="content-wrap mt-10">
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-3">
            <h6 className="text-sm">
              Fees are being calculated on the CIF value of your purchase (Cost
              + Insurance + Frieght)
            </h6>

            <div class="form-control w-full mt-6">
              <label class="label">
                <span class="label-text text-base font-medium">
                  Item Category
                </span>
              </label>
              <select class="select select-bordered bg-sky-300 text-white">
                <option disabled selected>
                  Pick one
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>

            <div class="form-control w-full mt-3">
              <label class="label">
                <span class="label-text text-base font-medium">
                  Total Value
                </span>
              </label>
              <input
                type="text"
                placeholder="$ USD"
                class="input input-bordered w-full"
              />
            </div>

            <div class="form-control w-fullmt-3">
              <label class="label">
                <span class="label-text text-base font-medium">Weight</span>
              </label>
              <input
                type="text"
                placeholder="Lbs"
                class="input input-bordered w-full"
              />
            </div>

            <BtnWide title="Calculate Cost" classItem="bg-sky w-full mt-6" />
            <BtnWide
              title="Clear Calculator"
              classItem="bg-sky-300 w-full mt-6"
            />
          </div>
          <div className="flex justify-center items-end">
            <div className="bg-gray-200 w-[1px] h-[80%]"></div>
          </div>
          <div className="col-span-3">
            <div className="bg-gray-100 w-[80%] p-3">
              <div className="grid grid-cols-7 gap-4">
                <div className="flex items-center">CIF</div>
                <div className="col-span-3 bg-white flex justify-between px-3 py-1 rounded-sm">
                  <div className="font-medium">USD</div>
                  <div>$0.00</div>
                </div>
                <div className="col-span-3 bg-white flex justify-between px-3 py-1 rounded-sm">
                  <div className="font-medium">USD</div>
                  <div>$0.00</div>
                </div>
              </div>
            </div>
            <h3 className="text-xl mt-4 text-black-600">
              Estimated Shipping Fees
            </h3>
            <div className="w-[80%] mt-10">
              <div class="overflow-x-auto">
                <table class="table table-compact w-full calculator-table">
                  <thead>
                    <tr>
                      <th></th>
                      <th className="text-right">USD</th>
                      <th className="text-right">ttd</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Freight</td>
                      <td className="text-right">$0.00</td>
                      <td className="text-right">$0.00</td>
                    </tr>
                    <tr>
                      <td>Fuel</td>
                      <td className="text-right">$0.00</td>
                      <td className="text-right">$0.00</td>
                    </tr>
                    <tr>
                      <td>Insurance</td>
                      <td className="text-right">$0.00</td>
                      <td className="text-right">$0.00</td>
                    </tr>
                    <tr>
                      <td>Duty</td>
                      <td className="text-right">$0.00</td>
                      <td className="text-right">$0.00</td>
                    </tr>
                    <tr>
                      <td>VAT</td>
                      <td className="text-right">$0.00</td>
                      <td className="text-right">$0.00</td>
                    </tr>
                    <tr>
                      <td>OPT</td>
                      <td className="text-right">$0.00</td>
                      <td className="text-right">$0.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-span-3 bg-gray-200 h-[1px] mt-3"></div>
            </div>

            <h4 className="mt-10">
              The total estimated shipping cost is shown below in USD and TTD
            </h4>
            <div className="flex mt-10">
              <h2 className="text-black-600 font-medium uppercase">
                $ USD 00.00
              </h2>
              <h2 className="text-black-600 font-medium uppercase ml-16">
                $ TTD 00.00
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-light bottom-0 left-0 p-10 w-full">
        <BtnWide title="Cancel" classItem="ml-52 bg-orange" />
      </div>
    </>
  );
};

export default Calculator;
