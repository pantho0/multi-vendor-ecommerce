import React from "react";
import { FaCartPlus, FaUsers } from "react-icons/fa";
import {
  MdCurrencyExchange,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";

const Payments = () => {
  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-5">
        <div className="flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-2xl font-bold">$34556</h2>
            <span className="text-sm font-bold">Total Sales</span>
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl text-[#fae8e8] shadow-lg">
            <MdCurrencyExchange />
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-[#fde2ff] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-2xl font-bold">$5000</h2>
            <span className="text-sm font-bold">Available Amount</span>
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-[#760077] flex justify-center items-center text-xl text-[#fae8e8] shadow-lg">
            <MdCurrencyExchange />
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-[#e9feaa] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-2xl font-bold">$110</h2>
            <span className="text-sm font-bold">Withdrawal Amount</span>
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-[#038000] flex justify-center items-center text-xl text-[#fae8e8] shadow-lg">
            <MdCurrencyExchange />
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-2xl font-bold">$0</h2>
            <span className="text-sm font-bold">Pending Amount</span>
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-[#0200f8] flex justify-center items-center text-xl text-[#fae8e8] shadow-lg">
            <MdCurrencyExchange />
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 pb-4">
        <div className="bg-[#6A5FDF] text-[#d0d2d6] rounded-md p-5">
          <h2 className="text-lg">Send Request</h2>
          <div className="pt-5 mb-5">
            <form>
              <div className="flex gap-3 flex-wrap">
                <input
                  min="0"
                  type="number"
                  name="amount"
                  className="px-4 py-2 md:w-[75%] focus:border-indigo-200 outline-none bg-transparent border border-slate-700 rounded-md text-[#d0d2d6]"
                />
                <button className="bg-red-500 hover:shadow-red-500/50 hover:shadow-md text-white rouded-md px-7 py-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-lg pb-4">Pending request</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
