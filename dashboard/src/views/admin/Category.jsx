import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

const Category = () => {
  const [perPage, setPerPage] = useState(5);
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-7/12">
          <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
            <div className="flex justify-between items-center">
              <select
                onChange={(e) => setPerPage(parseInt(e.target.value))}
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
              <input
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-transparent border border-slate-700 rounded-md text-[#d0d2d6]"
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-[#d0d2d6] text-left">
            <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
            <tr>
              <th scope="col" className="py-3 px-4">
                No
              </th>
              <th scope="col" className="py-3 px-4">
                Image
              </th>
              <th scope="col" className="py-3 px-4">
                Name
              </th>
              <th scope="col" className="py-3 px-4">
                Action
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

        <div className="w-full lg:w-5/12">
          <div className="w-full p-4 bg-[#6a5fdf] rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Category;
