import React, { useState } from "react";
import { BsArrowBarDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

const Orders = () => {
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md ">
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

        <div className="relative mt-5 overflow-x-auto ">
          <div className="w-full tex-sm text-left text-[#d0d2d6]">
            <div className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
              <div className="flex justify-between items-center">
                <div className="py-3 w-[25%] font-bold">Order Id</div>
                <div className="py-3 w-[13%] font-bold">Price</div>
                <div className="py-3 w-[18%] font-bold">Payment Status</div>
                <div className="py-3 w-[18%] font-bold">Order Status</div>
                <div className="py-3 w-[18%] font-bold">Action</div>
                <div className="py-3 w-[8%] font-bold">
                  <BsArrowBarDown />
                </div>
              </div>
            </div>

            <div className="text-[#d0d2d6]">
              <div className="flex justify-between items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #445454
                </div>
                <div className="py-3 w-[13%] font-medium whitespace-nowrap">
                  $545
                </div>
                <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                  Pending
                </div>
                <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                  Pending
                </div>
                <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                  <Link>View All</Link>
                </div>
                <div
                  onClick={(e) => setShow(!show)}
                  className="py-3 w-[8%] font-bold"
                >
                  <BsArrowBarDown />
                </div>
              </div>

              <div
                className={
                  show
                    ? "block border-b border-slate-700 bg-[#8288ed]"
                    : "hidden"
                }
              >
                <div className="flex justify-start items-start border-b border-slate-700">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                    #54858
                  </div>
                  <div className="py-3 w-[13%] font-medium whitespace-nowrap">
                    $778
                  </div>
                  <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                    Pending
                  </div>
                  <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                    Pending
                  </div>
                </div>

                <div className="flex justify-start items-start border-b border-slate-700">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                    #54858
                  </div>
                  <div className="py-3 w-[13%] font-medium whitespace-nowrap">
                    $778
                  </div>
                  <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                    Pending
                  </div>
                  <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                    Pending
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[#d0d2d6]">
              <div className="flex justify-between items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #445454
                </div>
                <div className="py-3 w-[13%] font-medium whitespace-nowrap">
                  $545
                </div>
                <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                  Pending
                </div>
                <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                  Pending
                </div>
                <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                  <Link>View All</Link>
                </div>
                <div
                  onClick={(e) => setShow(!show)}
                  className="py-3 w-[8%] font-bold"
                >
                  <BsArrowBarDown />
                </div>
              </div>

              <div
                className={
                  show
                    ? "block border-b border-slate-700 bg-[#8288ed]"
                    : "hidden"
                }
              >
                <div className="flex justify-start items-start border-b border-slate-700">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                    #54858
                  </div>
                  <div className="py-3 w-[13%] font-medium whitespace-nowrap">
                    $778
                  </div>
                  <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                    Pending
                  </div>
                  <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                    Pending
                  </div>
                </div>

                <div className="flex justify-start items-start border-b border-slate-700">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                    #54858
                  </div>
                  <div className="py-3 w-[13%] font-medium whitespace-nowrap">
                    $778
                  </div>
                  <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                    Pending
                  </div>
                  <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                    Pending
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[#d0d2d6]">
              <div className="flex justify-between items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #445454
                </div>
                <div className="py-3 w-[13%] font-medium whitespace-nowrap">
                  $545
                </div>
                <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                  Pending
                </div>
                <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                  Pending
                </div>
                <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                  <Link>View All</Link>
                </div>
                <div
                  onClick={(e) => setShow(!show)}
                  className="py-3 w-[8%] font-bold"
                >
                  <BsArrowBarDown />
                </div>
              </div>

              <div
                className={
                  show
                    ? "block border-b border-slate-700 bg-[#8288ed]"
                    : "hidden"
                }
              >
                <div className="flex justify-start items-start border-b border-slate-700">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                    #54858
                  </div>
                  <div className="py-3 w-[13%] font-medium whitespace-nowrap">
                    $778
                  </div>
                  <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                    Pending
                  </div>
                  <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                    Pending
                  </div>
                </div>

                <div className="flex justify-start items-start border-b border-slate-700">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                    #54858
                  </div>
                  <div className="py-3 w-[13%] font-medium whitespace-nowrap">
                    $778
                  </div>
                  <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                    Pending
                  </div>
                  <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                    Pending
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[#d0d2d6]">
              <div className="flex justify-between items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #445454
                </div>
                <div className="py-3 w-[13%] font-medium whitespace-nowrap">
                  $545
                </div>
                <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                  Pending
                </div>
                <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                  Pending
                </div>
                <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                  <Link>View All</Link>
                </div>
                <div
                  onClick={(e) => setShow(!show)}
                  className="py-3 w-[8%] font-bold"
                >
                  <BsArrowBarDown />
                </div>
              </div>

              <div
                className={
                  show
                    ? "block border-b border-slate-700 bg-[#8288ed]"
                    : "hidden"
                }
              >
                <div className="flex justify-start items-start border-b border-slate-700">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                    #54858
                  </div>
                  <div className="py-3 w-[13%] font-medium whitespace-nowrap">
                    $778
                  </div>
                  <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                    Pending
                  </div>
                  <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                    Pending
                  </div>
                </div>

                <div className="flex justify-start items-start border-b border-slate-700">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                    #54858
                  </div>
                  <div className="py-3 w-[13%] font-medium whitespace-nowrap">
                    $778
                  </div>
                  <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                    Pending
                  </div>
                  <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                    Pending
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
        <Pagination
        pageNumber = {currentPage}
        setPageNumber = {setCurrentPage}
        totalItem = {50}
        perPage = {perPage}
        showItem = {3}
        />
        </div>
      </div>
    </div>
  );
};

export default Orders;
