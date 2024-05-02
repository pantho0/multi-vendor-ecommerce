import React, { useState } from "react";
import Search from "../components/Search";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import img1 from "../../assets/images/category/1.jpg";

const Orders = () => {
    const [perPage, setPerPage] = useState(5);
    const [searchValue, setSearchValue] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="px-2 lg:px-7 pt-5">
        <h1 className="text-[#000000] font-semibold text-lg mb-3">Discount Products</h1>
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md ">
        <Search setPerPage={setPerPage} setSearchValue={setSearchValue} searchValue={searchValue}/>
        <div className="relative overflow-x-auto mt-5">
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
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((d, i) => (
                    <tr key={i}>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        #446446
                      </td>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        $444
                      </td>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        Pending
                      </td>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        Pending
                      </td>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        <div className="flex justify-start items-center gap-4">
                          <Link className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50">
                            <FaEye />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="w-full flex justify-end mt-4 bottom-4 right-4">
              <Pagination
                pageNumber={currentPage}
                setPageNumber={setCurrentPage}
                totalItem={50}
                perPage={perPage}
                showItem={3}
              />
            </div>
      </div>
    </div>
  );
};

export default Orders;
