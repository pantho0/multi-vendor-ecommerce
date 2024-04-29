import { MdCurrencyExchange } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import Chart from "react-apexcharts";
import { FaCartPlus, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import adminImg from "../../assets/images/admin.jpg";
const AdminDashboard = () => {
  const state = {
    series: [
      {
        name: "Orders",
        data: [23, 45, 67, 78, 55, 34, 56, 78, 34, 99, 59, 85],
      },
      {
        name: "Revenue",
        data: [34, 45, 33, 78, 66, 34, 56, 67, 78, 67, 46, 76],
      },
      {
        name: "Sellers",
        data: [22, 56, 33, 67, 89, 66, 45, 89, 66, 88, 55, 64],
      },
    ],
    options: {
      color: ["#181ee8", "#181ee8"],
      plotOptions: {
        radius: 30,
      },
      chart: {
        background: "transparent",
        foreColor: "#d0d2d6",
      },
      dataLables: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: ["smooth", "straigth, stepline"],
        lineCap: "butt",
        colors: "#f0f0f0",
        width: 0.5,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
      },
      responsive: [
        {
          breakpoint: 565,
          yaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            chart: {
              height: "550px",
            },
          },
        },
      ],
    },
  };

  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <div className="flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">$34556</h2>
            <span className="text-md font-medium">Total Sales</span>
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl text-[#fae8e8] shadow-lg">
            <MdCurrencyExchange />
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-[#fde2ff] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">50</h2>
            <span className="text-md font-medium">Products</span>
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-[#760077] flex justify-center items-center text-xl text-[#fae8e8] shadow-lg">
            <MdOutlineProductionQuantityLimits />
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-[#e9feaa] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">10</h2>
            <span className="text-md font-medium">Seller</span>
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-[#038000] flex justify-center items-center text-xl text-[#fae8e8] shadow-lg">
            <FaUsers />
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">54</h2>
            <span className="text-md font-medium">Orders</span>
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-[#0200f8] flex justify-center items-center text-xl text-[#fae8e8] shadow-lg">
            <FaCartPlus />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap mt-7">
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className="w-full bg-[#6a5fdf] p-4 rounded-md ">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
          <div className="w-full bg-[#6a5fdf] p-4 rounded-md text-[#d0d2d6]">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg text-[#d0d2d6] pb-3">
                Recent Seller Message
              </h2>
              <Link className="font-semibold text-sm text-[#d0d2d6]" to="/chat">
                View All
              </Link>
            </div>
            <div className="flex flex-col gap-2 pt-6 text-[#d0d2d6]">
              <ol className="relative border-1 border-slate-600 ml-4">
                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10 ">
                    <img
                      className="w-full rounded-full h-full shadow-lg"
                      src={adminImg}
                      alt=""
                    />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg border-slate-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-normal ">ADMIN</Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                        2 days ago
                      </time>
                    </div>
                    <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border-slate-800">
                      How Are you?
                    </div>
                  </div>
                </li>
                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10 ">
                    <img
                      className="w-full rounded-full h-full shadow-lg"
                      src={adminImg}
                      alt=""
                    />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg border-slate-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-normal ">ADMIN</Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                        2 days ago
                      </time>
                    </div>
                    <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border-slate-800">
                      How Are you?
                    </div>
                  </div>
                </li>
                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10 ">
                    <img
                      className="w-full rounded-full h-full shadow-lg"
                      src={adminImg}
                      alt=""
                    />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg border-slate-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-normal ">ADMIN</Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                        2 days ago
                      </time>
                    </div>
                    <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border-slate-800">
                      How Are you?
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-4 bg-[#6a5fdf] rounded-md mt-6">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg text-[#d0d2d6] pb-3">
            Recent Orders
          </h2>

          <Link to="/viewall" className="font-semibold text-sm text-[#d0d2d6]">
            View All
          </Link>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-[#d0d2d6] text-left">
            <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
            <tr>
              <th scope="col" className="py-3 px-4">
                Order ID
              </th>
              <th scope="col" className="py-3 px-4">
                Price
              </th>
              <th scope="col" className="py-3 px-4">
                Payment Status
              </th>
              <th scope="col" className="py-3 px-4">
                Order Status
              </th>
              <th scope="col" className="py-3 px-4">
                Active
              </th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                #345454
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                $454
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
               Pending
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                pending
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                view
                </td>
              </tr>
              <tr>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                #345454
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                $454
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
               Pending
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                pending
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                view
                </td>
              </tr>
              <tr>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                #345454
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                $454
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
               Pending
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                pending
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                view
                </td>
              </tr>
              <tr>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                #345454
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                $454
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
               Pending
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                pending
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                view
                </td>
              </tr>
              <tr>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                #345454
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                $454
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
               Pending
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                pending
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                view
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
